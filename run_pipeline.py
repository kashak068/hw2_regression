"""
CRISP-DM Full End-to-End Pipeline Execution Script
==================================================
針對 Kaggle 官方全量資料集 (1,117,957 筆) 完整執行 CRISP-DM 六大階段：
- Phase 1: 商業/防災目標確認
- Phase 2: 資料理解與相關矩陣熱圖
- Phase 3: 資料準備與無洩漏標準化
- Phase 4: 多維特徵選擇 (5 大演算法) 與 模型訓練
- Phase 5: 迴歸五大假設檢定與 95% CI/PI 區間繪製
- Phase 6: 模型固化保存與生產端推論驗證
"""

import os
import sys
import time

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

import numpy as np
import pandas as pd

from src.data_loader import load_dataset, inspect_data, FEATURE_COLUMNS, TARGET_COLUMN
from src.visualizer import plot_correlation_heatmap
from src.preprocessor import DataPreprocessor
from src.feature_selection import FeatureSelectorComparator
from src.models import RegressionModelTrainer
from src.diagnostics import (
    calculate_metrics_table,
    run_regression_assumptions_tests,
    plot_actual_vs_predicted_intervals,
)
from src.inference import predict_flood_probability


def main():
    start_total = time.time()
    print("=" * 75)
    print("🌊【全量官方資料集 (1,117,957 筆) CRISP-DM 端到端全流程啟動】🌊")
    print("=" * 75)

    # -------------------------------------------------------------
    # Phase 2: Data Understanding
    # -------------------------------------------------------------
    t0 = time.time()
    print("\n" + "=" * 75)
    print("📊 Phase 2: 資料理解與檢驗 (Data Understanding)")
    print("=" * 75)
    df = load_dataset("data/train.csv")
    inspect_dict = inspect_data(df)

    print("\n繪製特徵相關係數熱力圖與重要性排行 (correlation_heatmap.png)...")
    target_corr = plot_correlation_heatmap(
        df,
        target_col=TARGET_COLUMN,
        output_path="reports/figures/correlation_heatmap.png"
    )
    print(f"Phase 2 完成，耗時: {time.time() - t0:.2f} 秒")

    # -------------------------------------------------------------
    # Phase 3: Data Preparation
    # -------------------------------------------------------------
    t0 = time.time()
    print("\n" + "=" * 75)
    print("🛠️ Phase 3: 資料準備與特徵工程 (Data Preparation)")
    print("=" * 75)
    preprocessor = DataPreprocessor(target_col=TARGET_COLUMN, test_size=0.2, random_state=42)
    prep_data = preprocessor.split_and_scale(df, scaler_save_path="models/standard_scaler.pkl")
    X_train = prep_data["X_train_scaled"]
    X_test = prep_data["X_test_scaled"]
    y_train = prep_data["y_train"]
    y_test = prep_data["y_test"]
    print(f"Phase 3 完成，耗時: {time.time() - t0:.2f} 秒")

    # -------------------------------------------------------------
    # Phase 4: Feature Selection & Modeling
    # -------------------------------------------------------------
    t0 = time.time()
    print("\n" + "=" * 75)
    print("🎯 Phase 4: 特徵選擇與模型訓練 (Modeling & Feature Selection)")
    print("=" * 75)
    comparator = FeatureSelectorComparator(
        feature_names=prep_data["feature_names"],
        k_features=15,
        random_state=42
    )
    df_comp, selected_features = comparator.run_all_and_compare(
        X_train, y_train,
        output_plot_path="reports/figures/feature_selection_comparison.png"
    )

    trainer = RegressionModelTrainer(selected_features=selected_features, random_state=42)
    model_results = trainer.train_and_predict(
        X_train, y_train, X_test, y_test, models_dir="models"
    )
    print(f"Phase 4 完成，耗時: {time.time() - t0:.2f} 秒")

    # -------------------------------------------------------------
    # Phase 5: Evaluation & Statistical Diagnostics
    # -------------------------------------------------------------
    t0 = time.time()
    print("\n" + "=" * 75)
    print("🔬 Phase 5: 模型評估與統計假設檢定 (Evaluation & Diagnostics)")
    print("=" * 75)
    metrics_table = calculate_metrics_table(
        model_results["predictions"],
        y_test,
        n_features=len(selected_features)
    )
    print("\n📈【測試集綜合評估指標】:")
    print(metrics_table.to_string())

    # 五大假設檢定 (基於精選特徵子集之訓練集)
    X_train_sub = X_train[selected_features]
    assumptions_res = run_regression_assumptions_tests(
        X_train_sub, y_train,
        output_plot_path="reports/figures/regression_5_assumptions.png"
    )

    # 繪製最佳模型 (Ridge) 的 95% CI 與 PI 區間圖
    best_preds = model_results["predictions"]["Ridge Regression"]["test_pred"]
    plot_actual_vs_predicted_intervals(
        y_test,
        best_preds,
        model_name="Ridge Regression",
        output_path="reports/figures/actual_vs_predicted_interval.png"
    )
    print(f"Phase 5 完成，耗時: {time.time() - t0:.2f} 秒")

    # -------------------------------------------------------------
    # Phase 6: Deployment & Inference Verification
    # -------------------------------------------------------------
    t0 = time.time()
    print("\n" + "=" * 75)
    print("🚀 Phase 6: 生產端推論驗證 (Deployment & Inference)")
    print("=" * 75)
    from src.inference import demo_production_inference
    demo_production_inference()
    print(f"Phase 6 完成，耗時: {time.time() - t0:.2f} 秒")

    total_time = time.time() - start_total
    print("\n" + "=" * 75)
    print(f"🎉 全部 CRISP-DM 六大階段於 1,117,957 筆全量官方資料集順利執行完成！總耗時: {total_time:.2f} 秒")
    print("=" * 75)


if __name__ == "__main__":
    main()
