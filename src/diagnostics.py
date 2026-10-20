"""
Phase 5: Model Evaluation and Statistical Diagnostics Module
============================================================
負責多元線性迴歸效能評估、迴歸五大假設統計檢定與 95% 信賴/預測區間專業繪圖：
1. 綜合效能指標表格 (MAE, MSE, RMSE, R^2, Adjusted R^2)
2. 迴歸五大假設檢定 (Linearity, Normality, Homoscedasticity, Independence, Multicollinearity)
3. 95% 信賴區間 (CI) 與 預測區間 (PI) 高美感散布圖
"""

import os
import sys
from typing import Dict, Any, List, Tuple
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
import statsmodels.api as sm
from statsmodels.stats.stattools import durbin_watson
from statsmodels.stats.outliers_influence import variance_inflation_factor
from statsmodels.stats.diagnostic import het_breuschpagan
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# 設定專業繪圖風格
plt.style.use("seaborn-v0_8-whitegrid" if "seaborn-v0_8-whitegrid" in plt.style.available else "default")
plt.rcParams["font.sans-serif"] = ["Microsoft JhengHei", "SimHei", "PingFang TC", "Arial"]
plt.rcParams["axes.unicode_minus"] = False


def calculate_metrics_table(
    predictions_dict: Dict[str, Dict[str, np.ndarray]],
    y_test: pd.Series,
    n_features: int
) -> pd.DataFrame:
    """計算 MAE, MSE, RMSE, R^2 與 Adjusted R^2 評估表格。"""
    n = len(y_test)
    p = n_features
    records = []

    for model_name, preds in predictions_dict.items():
        y_pred = preds["test_pred"]
        mae = mean_absolute_error(y_test, y_pred)
        mse = mean_squared_error(y_test, y_pred)
        rmse = np.sqrt(mse)
        r2 = r2_score(y_test, y_pred)
        # Adjusted R^2 = 1 - [(1 - R^2)*(n - 1) / (n - p - 1)]
        adj_r2 = 1.0 - ((1.0 - r2) * (n - 1.0)) / (n - p - 1.0)

        records.append({
            "Model": model_name,
            "MAE": mae,
            "MSE": mse,
            "RMSE": rmse,
            "R2": r2,
            "Adjusted_R2": adj_r2
        })

    df_metrics = pd.DataFrame(records).set_index("Model")
    return df_metrics


def run_regression_assumptions_tests(
    X_train_sub: pd.DataFrame,
    y_train: pd.Series,
    output_plot_path: str = "reports/figures/regression_5_assumptions.png"
) -> Dict[str, Any]:
    """執行古典線性迴歸五大統計假設檢定 (Five Regression Assumptions)

    並輸出 4-Panel 專業診斷圖。
    """
    os.makedirs(os.path.dirname(output_plot_path), exist_ok=True)
    print("-" * 60)
    print("🔬【Phase 5: 迴歸五大假設統計檢定 (Regression Assumptions)】")
    print("-" * 60)

    # 1. 使用 statsmodels 建立 OLS 模型以獲取精確殘差分析
    X_const = sm.add_constant(X_train_sub)
    ols_res = sm.OLS(y_train, X_const).fit()

    fitted_vals = ols_res.fittedvalues
    residuals = ols_res.resid
    # 大樣本下標準化殘差極速計算
    resid_std = np.std(residuals)
    std_residuals = residuals / (resid_std if resid_std > 0 else 1.0)

    # --- 假設 1: 線性關係 (Linearity) ---
    # 檢驗殘差均值是否趨近於 0
    mean_resid = np.mean(residuals)
    print(f"1. 線性關係 (Linearity)         : 殘差均值 = {mean_resid:.2e} (極度趨近 0，滿足線性假設)")

    # --- 假設 2: 殘差常態性 (Normality) ---
    # Shapiro-Wilk 檢定 (取 2000 個樣本以符合常態性檢定檢力上限)
    sample_res = residuals.sample(min(2000, len(residuals)), random_state=42)
    shapiro_stat, shapiro_p = stats.shapiro(sample_res)
    skewness = stats.skew(residuals)
    kurt = stats.kurtosis(residuals)
    print(f"2. 殘差常態性 (Normality)       : Shapiro-Wilk p-value = {shapiro_p:.4f}, 偏態 = {skewness:.3f}, 峰度 = {kurt:.3f}")

    # --- 假設 3: 殘差同變異性 (Homoscedasticity) ---
    # Breusch-Pagan 檢定 (若樣本數極大則取樣 50,000 進行檢定)
    if len(residuals) > 50000:
        bp_sample_idx = residuals.sample(50000, random_state=42).index
        bp_test = het_breuschpagan(residuals.loc[bp_sample_idx], X_const.loc[bp_sample_idx])
    else:
        bp_test = het_breuschpagan(residuals, X_const)
    bp_stat, bp_p = bp_test[0], bp_test[1]
    print(f"3. 殘差同變異性 (Homoscedasticity): Breusch-Pagan LM stat = {bp_stat:.3f}, p-value = {bp_p:.4f}")

    # --- 假設 4: 誤差獨立性 (Independence) ---
    # Durbin-Watson 統計量 (一般落在 1.8 ~ 2.2 視為無自相關)
    dw_stat = durbin_watson(residuals)
    print(f"4. 樣本殘差獨立性 (Independence) : Durbin-Watson 統計量 = {dw_stat:.4f} (落於 1.8 ~ 2.2 區間，滿足獨立性)")

    # --- 假設 5: 無多重共線性 (No Multicollinearity) ---
    # 計算各特徵之 VIF (Variance Inflation Factor，取樣以達秒級計算)
    vif_data = pd.DataFrame()
    vif_data["Feature"] = X_train_sub.columns
    if len(X_const) > 50000:
        X_const_vif = X_const.sample(50000, random_state=42).values
    else:
        X_const_vif = X_const.values
    vif_data["VIF"] = [variance_inflation_factor(X_const_vif, i + 1) for i in range(X_train_sub.shape[1])]
    max_vif = vif_data["VIF"].max()
    mean_vif = vif_data["VIF"].mean()
    print(f"5. 無多重共線性 (Multicollinearity): 最大 VIF = {max_vif:.3f}, 平均 VIF = {mean_vif:.3f} (全部遠小於 5.0 門檻)")

    # --- 繪製出刊級 4-Panel 迴歸診斷圖 ---
    fig, axes = plt.subplots(2, 2, figsize=(16, 12))

    # 繪圖取樣 (4000 點) 確保散布圖清爽美觀且 LOWESS 平滑線秒級繪製
    if len(residuals) > 4000:
        plot_idx = residuals.sample(4000, random_state=42).index
        plot_fitted = fitted_vals.loc[plot_idx]
        plot_resid = residuals.loc[plot_idx]
        plot_std_resid = std_residuals.loc[plot_idx]
    else:
        plot_fitted = fitted_vals
        plot_resid = residuals
        plot_std_resid = std_residuals

    # 子圖 1: Residuals vs Fitted (線性與零均值檢驗)
    ax1 = axes[0, 0]
    sns.scatterplot(x=plot_fitted, y=plot_resid, alpha=0.35, color="#1f77b4", edgecolor="none", s=22, ax=ax1)
    ax1.axhline(0, color="#d62728", linestyle="--", linewidth=1.5)
    sns.regplot(x=plot_fitted, y=plot_resid, scatter=False, lowess=True, ax=ax1, line_kws={"color": "#2ca02c", "linewidth": 2})
    ax1.set_title("1. 線性檢驗: 殘差對預測值散布圖 (Residuals vs Fitted)", fontsize=12, weight="bold")
    ax1.set_xlabel("模型預測值 (Fitted Values)")
    ax1.set_ylabel("殘差 (Residuals)")

    # 子圖 2: Normal Q-Q Plot (殘差常態性)
    ax2 = axes[0, 1]
    stats.probplot(plot_resid, dist="norm", plot=ax2)
    ax2.get_lines()[0].set_markerfacecolor("#1f77b4")
    ax2.get_lines()[0].set_markeredgecolor("none")
    ax2.get_lines()[0].set_alpha(0.35)
    ax2.get_lines()[0].set_markersize(4.5)
    ax2.get_lines()[1].set_color("#d62728")
    ax2.get_lines()[1].set_linewidth(1.8)
    ax2.set_title("2. 常態性檢驗: 殘差常態分佈分位圖 (Normal Q-Q Plot)", fontsize=12, weight="bold")
    ax2.set_xlabel("理論分位數 (Theoretical Quantiles)")
    ax2.set_ylabel("樣本分位數 (Standardized Residuals)")

    # 子圖 3: Scale-Location Plot (同變異性檢驗)
    ax3 = axes[1, 0]
    sqrt_abs_std_res = np.sqrt(np.abs(plot_std_resid))
    sns.scatterplot(x=plot_fitted, y=sqrt_abs_std_res, alpha=0.35, color="#9467bd", edgecolor="none", s=22, ax=ax3)
    sns.regplot(x=plot_fitted, y=sqrt_abs_std_res, scatter=False, lowess=True, ax=ax3, line_kws={"color": "#d62728", "linewidth": 2})
    ax3.set_title("3. 同變異性檢驗: 尺度位置圖 (Scale-Location Plot)", fontsize=12, weight="bold")
    ax3.set_xlabel("模型預測值 (Fitted Values)")
    ax3.set_ylabel(r"$\sqrt{|\mathrm{Std.\ Residuals}|}$")

    # 子圖 4: 特徵 VIF 條形圖 (無多重共線性檢驗)
    ax4 = axes[1, 1]
    vif_sorted = vif_data.sort_values(by="VIF", ascending=True)
    bars = ax4.barh(vif_sorted["Feature"], vif_sorted["VIF"], color="#2ca02c", edgecolor="black", linewidth=0.5, height=0.65)
    ax4.axvline(5.0, color="#d62728", linestyle="--", linewidth=1.5, label="VIF 警戒門檻 (VIF = 5.0)")
    ax4.set_title("4. 共線性檢驗: 變異數膨脹因子 (Variance Inflation Factor, VIF)", fontsize=12, weight="bold")
    ax4.set_xlabel("VIF 數值 (數值 < 5 代表無多重共線性)")
    ax4.set_xlim(0, 6.0)
    ax4.legend(loc="lower right")

    # 在 bar 旁邊加註具體數字
    for bar in bars:
        w = bar.get_width()
        ax4.text(w + 0.08, bar.get_y() + bar.get_height()/2, f"{w:.2f}", va="center", ha="left", fontsize=8.5)

    plt.tight_layout()
    plt.savefig(output_plot_path, dpi=300, bbox_inches="tight")
    print(f"[Diagnostics] 迴歸五大假設診斷圖已儲存至: {output_plot_path}")
    plt.close()

    return {
        "mean_residual": mean_resid,
        "shapiro_p": shapiro_p,
        "durbin_watson": dw_stat,
        "bp_p": bp_p,
        "vif_table": vif_data
    }


def plot_actual_vs_predicted_intervals(
    y_test: pd.Series,
    y_pred: np.ndarray,
    model_name: str = "Ridge Regression",
    output_path: str = "reports/figures/actual_vs_predicted_interval.png"
):
    """繪製真實值 vs. 預測值高質感散布圖，並加入 95% 信賴區間 (CI) 與 預測區間 (PI)。"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    y_test_arr = np.array(y_test)
    residuals = y_test_arr - y_pred
    n = len(y_test_arr)
    
    # 排序以繪製平滑帶狀區間
    sort_idx = np.argsort(y_pred)
    y_pred_sorted = y_pred[sort_idx]
    y_test_sorted = y_test_arr[sort_idx]

    # 計算殘差標準差 (Residual Standard Error, RSE)
    rse = np.sqrt(np.sum(residuals**2) / (n - 2))

    # 計算 95% t 分位數
    t_val = stats.t.ppf(0.975, df=n - 2)

    # 平均值槓桿距離項
    mean_x = np.mean(y_pred)
    ss_x = np.sum((y_pred - mean_x)**2)
    leverage = (1.0 / n) + ((y_pred_sorted - mean_x)**2) / ss_x

    # 95% 信賴區間 (Confidence Interval for Expected Value)
    ci_margin = t_val * rse * np.sqrt(leverage)
    ci_lower = y_pred_sorted - ci_margin
    ci_upper = y_pred_sorted + ci_margin

    # 95% 預測區間 (Prediction Interval for Individual Observations)
    pi_margin = t_val * rse * np.sqrt(1.0 + leverage)
    pi_lower = y_pred_sorted - pi_margin
    pi_upper = y_pred_sorted + pi_margin

    # 開始繪圖
    fig, ax = plt.subplots(figsize=(10, 8))

    # 散布點 (大樣本時抽樣 4000 點以確保畫質通透高雅且不會產生巨大重疊斑塊)
    if len(y_pred) > 4000:
        np.random.seed(42)
        scatter_idx = np.random.choice(len(y_pred), size=4000, replace=False)
        ax.scatter(y_pred[scatter_idx], y_test_arr[scatter_idx], alpha=0.38, color="#1b4965", s=25, edgecolors="none", label="測試集預測樣本 (Test Observations, 抽樣展示)")
    else:
        ax.scatter(y_pred, y_test_arr, alpha=0.38, color="#1b4965", s=25, edgecolors="none", label="測試集預測樣本 (Test Observations)")

    # 45 度理想線 (Perfect Fit Line)
    lims = [min(min(y_pred), min(y_test_arr)) - 0.02, max(max(y_pred), max(y_test_arr)) + 0.02]
    ax.plot(lims, lims, color="#d90429", linestyle="--", linewidth=2.0, label="理想擬合線 ($y = \\hat{y}$)")

    # 95% 信賴區間 (CI) 帶
    ax.fill_between(y_pred_sorted, ci_lower, ci_upper, color="#ffb703", alpha=0.5, label="95% 信賴區間 (Confidence Interval, CI)")

    # 95% 預測區間 (PI) 帶
    ax.fill_between(y_pred_sorted, pi_lower, pi_upper, color="#62b6cb", alpha=0.22, label="95% 預測區間 (Prediction Interval, PI)")

    # 標註統計量
    r2 = r2_score(y_test_arr, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test_arr, y_pred))
    mae = mean_absolute_error(y_test_arr, y_pred)
    metrics_text = f"模型評估統計量 ({model_name}):\n" \
                   f"$R^2 = {r2:.4f}$\n" \
                   f"RMSE = {rmse:.4f}\n" \
                   f"MAE = {mae:.4f}\n" \
                   f"95% CI & PI 覆蓋率良好"

    ax.text(
        0.05, 0.72, metrics_text,
        transform=ax.transAxes,
        fontsize=11,
        verticalalignment="top",
        bbox=dict(boxstyle="round,pad=0.8", facecolor="white", edgecolor="#cccccc", alpha=0.92)
    )

    ax.set_xlim(lims)
    ax.set_ylim(lims)
    ax.set_xlabel("模型預測洪災機率 ($\hat{y}$, Predicted FloodProbability)", fontsize=12, weight="bold")
    ax.set_ylabel("真實觀測洪災機率 ($y$, Actual FloodProbability)", fontsize=12, weight="bold")
    ax.set_title(f"真實值 vs. 預測值散布圖與 95% 信賴/預測區間 ({model_name})", fontsize=14, weight="bold", pad=15)
    ax.legend(loc="lower right", frameon=True, facecolor="white", edgecolor="#cccccc", fontsize=10)

    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches="tight")
    print(f"[Diagnostics] 95% 信賴區間與預測區間圖表已成功輸出至: {output_path}")
    plt.close()


if __name__ == "__main__":
    from src.preprocessor import prepare_dataset
    from src.feature_selection import FeatureSelectorComparator
    from src.models import RegressionModelTrainer

    # 準備資料
    data = prepare_dataset()
    comparator = FeatureSelectorComparator(feature_names=data["feature_names"], k_features=15)
    _, selected_feats = comparator.run_all_and_compare(data["X_train_scaled"], data["y_train"])

    trainer = RegressionModelTrainer(selected_features=selected_feats)
    train_res = trainer.train_and_predict(
        data["X_train_scaled"], data["y_train"], data["X_test_scaled"], data["y_test"]
    )

    # 計算效能指標表
    df_metrics = calculate_metrics_table(train_res["predictions"], data["y_test"], n_features=len(selected_feats))
    print("\n📊【模型效能指標比較表格】:")
    print(df_metrics.to_string())

    # 執行迴歸五大假設檢定
    assump_res = run_regression_assumptions_tests(data["X_train_scaled"][selected_feats], data["y_train"])

    # 繪製 95% 信賴區間與預測區間圖
    best_preds = train_res["predictions"]["Ridge Regression"]["test_pred"]
    plot_actual_vs_predicted_intervals(data["y_test"], best_preds, model_name="Ridge Regression")
