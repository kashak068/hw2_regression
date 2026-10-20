"""
Phase 4: Regression Models Training Module
==========================================
基於特徵選擇後的特徵子集，訓練三種線性迴歸模型：
1. 標準多元線性迴歸 (Linear Regression)
2. Ridge 迴歸 (L2 Regularization)
3. Lasso 迴歸 (L1 Regularization)
"""

import os
import sys
from typing import Dict, Any, List
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression, Ridge, Lasso
import joblib

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass


class RegressionModelTrainer:
    """迴歸模型訓練與持久化控制器"""

    def __init__(self, selected_features: List[str], random_state: int = 42):
        self.selected_features = selected_features
        self.random_state = random_state
        self.models: Dict[str, Any] = {
            "Linear Regression": LinearRegression(),
            "Ridge Regression": Ridge(alpha=1.0, random_state=self.random_state),
            "Lasso Regression": Lasso(alpha=0.0001, random_state=self.random_state, max_iter=3000),
        }
        self.fitted_models: Dict[str, Any] = {}
        self.predictions: Dict[str, Dict[str, np.ndarray]] = {}

    def train_and_predict(
        self,
        X_train: pd.DataFrame,
        y_train: pd.Series,
        X_test: pd.DataFrame,
        y_test: pd.Series,
        models_dir: str = "models"
    ) -> Dict[str, Any]:
        """使用選定的特徵子集擬合三種模型，並計算訓練集與測試集預測值。"""
        os.makedirs(models_dir, exist_ok=True)
        print("-" * 60)
        print("🤖【Phase 4: 線性迴歸系列模型訓練 (3 大架構)】")
        print("-" * 60)
        print(f"輸入特徵子集數量: {len(self.selected_features)} 個特徵 (特徵維度已降低)")

        # 僅截取選取的特徵子集
        X_train_sub = X_train[self.selected_features]
        X_test_sub = X_test[self.selected_features]

        for name, model in self.models.items():
            print(f"正在擬合模型: {name} ...")
            model.fit(X_train_sub, y_train)
            self.fitted_models[name] = model

            # 產生預測值
            y_train_pred = model.predict(X_train_sub)
            y_test_pred = model.predict(X_test_sub)

            self.predictions[name] = {
                "train_pred": y_train_pred,
                "test_pred": y_test_pred
            }

            # 儲存模型至 models/
            file_name = f"{name.lower().replace(' ', '_')}.pkl"
            save_path = os.path.join(models_dir, file_name)
            joblib.dump(model, save_path)
            print(f"   --> 模型已成功固化存檔至: {save_path}")

        print("-" * 60)
        return {
            "fitted_models": self.fitted_models,
            "predictions": self.predictions,
            "selected_features": self.selected_features
        }


if __name__ == "__main__":
    from src.preprocessor import prepare_dataset
    from src.feature_selection import FeatureSelectorComparator

    data = prepare_dataset()
    comparator = FeatureSelectorComparator(feature_names=data["feature_names"], k_features=15)
    _, selected_feats = comparator.run_all_and_compare(data["X_train_scaled"], data["y_train"])

    trainer = RegressionModelTrainer(selected_features=selected_feats)
    res = trainer.train_and_predict(
        data["X_train_scaled"], data["y_train"], data["X_test_scaled"], data["y_test"]
    )
    print("[Phase 4] 模型訓練模組執行成功！")
