"""
Phase 6: Deployment and Production Inference Module
===================================================
負責最佳模型固化封存、標準化轉換器整合與新樣本即時推論示範：
1. 自動載入持久化權重 (models/best_flood_model.pkl 與 models/standard_scaler.pkl)
2. 封裝生產級推論類別 FloodPredictor 與快捷函式 predict_flood_probability()
3. 模擬三種不同地理與環境情境的新樣本進行洪災機率推論與防災處置建議
"""

import os
import sys
from typing import Dict, Any, List, Union
import numpy as np
import pandas as pd
import joblib

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass


class FloodPredictor:
    """生產級洪災機率即時推論器 (Inference Engine)"""

    def __init__(
        self,
        model_path: str = "models/best_flood_model.pkl",
        scaler_path: str = "models/standard_scaler.pkl"
    ):
        self.model_path = model_path
        self.scaler_path = scaler_path
        self.model = None
        self.scaler = None
        self._load_artifacts()

    def _load_artifacts(self):
        """載入已封存之模型與特徵縮放轉換器"""
        if not os.path.exists(self.model_path):
            # 若最佳模型尚未命名為 best_flood_model.pkl，嘗試使用 ridge_regression.pkl
            alt_path = "models/ridge_regression.pkl"
            if os.path.exists(alt_path):
                self.model_path = alt_path
            else:
                raise FileNotFoundError(f"[Deployment] 找不到模型權重檔: {self.model_path}")

        if not os.path.exists(self.scaler_path):
            raise FileNotFoundError(f"[Deployment] 找不到標準化轉換器: {self.scaler_path}")

        self.model = joblib.load(self.model_path)
        self.scaler = joblib.load(self.scaler_path)
        print(f"[Deployment] 成功加載模型: {self.model_path}")
        print(f"[Deployment] 成功加載特徵縮放轉換器: {self.scaler_path}")

    def predict(
        self, input_data: Union[pd.DataFrame, Dict[str, Any], List[Dict[str, Any]]]
    ) -> pd.DataFrame:
        """接收新樣本輸入，執行格式校驗、標準化並輸出預測機率與風險警報層級。"""
        # 轉換輸入為 DataFrame
        if isinstance(input_data, dict):
            df_in = pd.DataFrame([input_data])
        elif isinstance(input_data, list):
            df_in = pd.DataFrame(input_data)
        elif isinstance(input_data, pd.DataFrame):
            df_in = input_data.copy()
        else:
            raise ValueError("[Deployment] 輸入格式必須為 DataFrame, dict, 或 list of dicts。")

        # 檢驗與補齊特徵
        expected_features = list(self.scaler.feature_names_in_)
        for col in expected_features:
            if col not in df_in.columns:
                print(f"[Deployment 警告] 輸入樣本缺少特徵 '{col}'，自動採用中位數基準值 (5.0) 補齊。")
                df_in[col] = 5.0

        # 特徵對齊與排序
        X_raw = df_in[expected_features]

        # 執行標準化投影
        X_scaled_arr = self.scaler.transform(X_raw)
        X_scaled_df = pd.DataFrame(X_scaled_arr, columns=expected_features)

        # 截取模型訓練時所使用的特徵子集 (若模型有使用特徵選擇)
        if hasattr(self.model, "feature_names_in_"):
            model_features = list(self.model.feature_names_in_)
            X_model_in = X_scaled_df[model_features]
        else:
            X_model_in = X_scaled_df

        # 執行迴歸推論
        preds = self.model.predict(X_model_in)
        # 確保機率值嚴格落在 [0.0, 1.0] 的合理物理邊界內
        preds_clipped = np.clip(preds, 0.0, 1.0)

        # 組織輸出報表
        df_out = df_in.copy()
        df_out["Predicted_FloodProbability"] = np.round(preds_clipped, 4)

        # 分配防災風險警報層級
        def assign_alert_level(prob):
            if prob >= 0.55:
                return "🔴 紅色警戒 (極高風險：立即啟動抽水防汛與預防性疏散)"
            elif prob >= 0.42:
                return "🟡 黃色警戒 (中度風險：巡檢下水道閘門與加強預警)"
            else:
                return "🟢 綠色正常 (低風險：維持例行防汛監測)"

        df_out["Risk_Level"] = df_out["Predicted_FloodProbability"].apply(assign_alert_level)
        return df_out


def predict_flood_probability(
    new_sample: Union[pd.DataFrame, Dict[str, Any]]
) -> pd.DataFrame:
    """快捷推論函式介面"""
    predictor = FloodPredictor()
    return predictor.predict(new_sample)


def demo_production_inference():
    """模擬生產環境中接收三個典型區域樣本進行即時推論示範"""
    print("=" * 70)
    print("🚀【Phase 6: 生產環境模型部署與新樣本推論展示】")
    print("=" * 70)

    # 確保 models/best_flood_model.pkl 存在
    if not os.path.exists("models/best_flood_model.pkl") and os.path.exists("models/ridge_regression.pkl"):
        ridge_model = joblib.load("models/ridge_regression.pkl")
        joblib.dump(ridge_model, "models/best_flood_model.pkl")
        print("[Deployment] 已將最佳 Ridge 迴歸模型正式封存為: models/best_flood_model.pkl")

    predictor = FloodPredictor()

    # 構建三個具備鮮明地理特性的新觀測區域
    sample_regions = [
        {
            "Region_Name": "甲區: 濱海低窪舊市區 (Coastal Old Urban Basin)",
            "MonsoonIntensity": 14,
            "TopographyDrainage": 2,
            "RiverManagement": 3,
            "Deforestation": 12,
            "Urbanization": 15,
            "ClimateChange": 11,
            "DamsQuality": 4,
            "Siltation": 13,
            "AgriculturalPractices": 5,
            "Encroachments": 14,
            "IneffectiveDisasterPreparedness": 13,
            "DrainageSystems": 3,
            "CoastalVulnerability": 15,
            "Landslides": 9,
            "Watersheds": 4,
            "DeterioratingInfrastructure": 14,
            "PopulationScore": 13,
            "WetlandLoss": 12,
            "InadequatePlanning": 15,
            "PoliticalFactors": 5
        },
        {
            "Region_Name": "乙區: 標準丘陵農業鄉鎮 (Rural Agro-Hilly Township)",
            "MonsoonIntensity": 6,
            "TopographyDrainage": 6,
            "RiverManagement": 5,
            "Deforestation": 5,
            "Urbanization": 4,
            "ClimateChange": 5,
            "DamsQuality": 5,
            "Siltation": 5,
            "AgriculturalPractices": 7,
            "Encroachments": 4,
            "IneffectiveDisasterPreparedness": 5,
            "DrainageSystems": 5,
            "CoastalVulnerability": 4,
            "Landslides": 6,
            "Watersheds": 6,
            "DeterioratingInfrastructure": 5,
            "PopulationScore": 4,
            "WetlandLoss": 4,
            "InadequatePlanning": 4,
            "PoliticalFactors": 5
        },
        {
            "Region_Name": "丙區: 高台生態示範新城 (Eco-Smart Highland City)",
            "MonsoonIntensity": 3,
            "TopographyDrainage": 14,
            "RiverManagement": 13,
            "Deforestation": 2,
            "Urbanization": 4,
            "ClimateChange": 3,
            "DamsQuality": 13,
            "Siltation": 2,
            "AgriculturalPractices": 11,
            "Encroachments": 1,
            "IneffectiveDisasterPreparedness": 2,
            "DrainageSystems": 14,
            "CoastalVulnerability": 1,
            "Landslides": 2,
            "Watersheds": 14,
            "DeterioratingInfrastructure": 2,
            "PopulationScore": 3,
            "WetlandLoss": 2,
            "InadequatePlanning": 1,
            "PoliticalFactors": 13
        }
    ]

    results = predictor.predict(sample_regions)

    print("\n📋【新區域樣本推論評估結果】:\n")
    for _, row in results.iterrows():
        print(f"地區名稱: {row['Region_Name']}")
        print(f"  --> 預測洪災機率: {row['Predicted_FloodProbability']:.4f}")
        print(f"  --> 防汛應變決策: {row['Risk_Level']}")
        print("-" * 65)

    return results


if __name__ == "__main__":
    demo_production_inference()
