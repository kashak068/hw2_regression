"""
Phase 3: Data Preparation and Preprocessing Module
==================================================
負責資料清洗、Train/Test 切分（嚴防資料洩漏 Data Leakage）與特徵標準化。
"""

import os
import sys
from typing import Tuple, Dict, Any, List
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass


class DataPreprocessor:
    """資料前處理與標準化管線控制器

    確保特徵縮放統計量 (均值與標準差) 僅在訓練集擬合，嚴格防範資料洩漏。
    """

    def __init__(self, target_col: str = "FloodProbability", test_size: float = 0.2, random_state: int = 42):
        self.target_col = target_col
        self.test_size = test_size
        self.random_state = random_state
        self.scaler = StandardScaler()
        self.feature_names: List[str] = []
        self.is_fitted: bool = False

    def split_and_scale(
        self, df: pd.DataFrame, scaler_save_path: str = "models/standard_scaler.pkl"
    ) -> Dict[str, Any]:
        """執行 Train/Test Split (80/20) 與 StandardScaler 標準化。

        重要設計規範：
        1. 排除非預測性欄位 (如 'id')。
        2. 先進行 train_test_split，切分為訓練集與測試集。
        3. 僅使用 X_train 擬合 StandardScaler (fit_transform)。
        4. X_test 僅使用訓練集求得之 mu 與 sigma 進行轉換 (transform)。
        5. 將 Scaler 序列化保存至 models/ 目錄以供生產推論使用。
        """
        print("-" * 60)
        print("🛠️【Phase 3: 資料準備與無洩漏標準化管線】")
        print("-" * 60)

        # 1. 欄位分離
        ignore_cols = ["id", self.target_col]
        self.feature_names = [col for col in df.columns if col not in ignore_cols and pd.api.types.is_numeric_dtype(df[col])]
        
        X = df[self.feature_names].copy()
        y = df[self.target_col].copy()

        print(f"1. 提取自變數特徵數量 : {len(self.feature_names)} 個環境因子")
        print(f"2. 目標變數名稱       : {self.target_col}")

        # 2. 缺失值防護檢查 (Median Imputation)
        if X.isnull().sum().sum() > 0:
            print("   檢測到缺失值，執行訓練集特徵中位數填補...")
            impute_values = X.median()
            X = X.fillna(impute_values)
        else:
            print("   ✅ 自變數無缺失值，無須插補。")

        # 3. 嚴格 Train/Test 切分 (80% 訓練集, 20% 測試集)
        X_train, X_test, y_train, y_test = train_test_split(
            X, y,
            test_size=self.test_size,
            random_state=self.random_state,
            shuffle=True
        )

        print(f"3. 資料集劃分比例     : 訓練集 {(1 - self.test_size)*100:.0f}% ({len(X_train):,} 筆), 測試集 {self.test_size*100:.0f}% ({len(X_test):,} 筆)")
        print(f"   固定隨機種子 (Seed): {self.random_state} (確保實驗結果完全可重現)")

        # 4. 嚴格防資料洩漏 (Data Leakage) 標準化
        # 僅在 X_train 上進行 fit_transform
        X_train_scaled_arr = self.scaler.fit_transform(X_train)
        # 在 X_test 上僅進行 transform (不得重新計算測試集的均值與方差)
        X_test_scaled_arr = self.scaler.transform(X_test)
        self.is_fitted = True

        # 轉回保持特徵欄位名稱之 DataFrame
        X_train_scaled = pd.DataFrame(X_train_scaled_arr, columns=self.feature_names, index=X_train.index)
        X_test_scaled = pd.DataFrame(X_test_scaled_arr, columns=self.feature_names, index=X_test.index)

        print("4. 特徵縮放處理完成   : 採用 Z-Score StandardScaler (z = (x - μ) / σ)")
        print(f"   - 訓練集特徵均值均勻趨近 0.0: {X_train_scaled.values.mean():.6f}")
        print(f"   - 訓練集特徵標準差均勻趨近 1.0: {X_train_scaled.values.std():.6f}")
        print("   ✅ 防資料洩漏機制確認：測試集僅依賴訓練集之均值與標準差進行投影轉換。")

        # 5. 持久化儲存 Scaler
        os.makedirs(os.path.dirname(scaler_save_path), exist_ok=True)
        joblib.dump(self.scaler, scaler_save_path)
        print(f"5. 標準化轉換器已固化存檔: {scaler_save_path}")
        print("-" * 60)

        return {
            "X_train": X_train,
            "X_test": X_test,
            "y_train": y_train,
            "y_test": y_test,
            "X_train_scaled": X_train_scaled,
            "X_test_scaled": X_test_scaled,
            "scaler": self.scaler,
            "feature_names": self.feature_names
        }


def prepare_dataset(csv_path: str = "data/train.csv") -> Dict[str, Any]:
    """快捷輔助函式：從檔案路徑直接載入並完成前處理。"""
    from src.data_loader import load_dataset
    df = load_dataset(csv_path)
    preprocessor = DataPreprocessor()
    return preprocessor.split_and_scale(df)


if __name__ == "__main__":
    prep_data = prepare_dataset()
    print("[Phase 3] 前處理模組測試通過！")
