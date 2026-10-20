"""
High Aesthetic Visualizer Module
================================
提供出刊等級、高美感之專業資料科學圖表繪製器。
支援相關係數矩陣熱力圖、特徵重要性長條圖、迴歸五大假設診斷圖與信賴區間圖。
"""

import os
import sys
from typing import List, Optional
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass


# 設置全域字型與現代美學風格
plt.style.use("seaborn-v0_8-whitegrid" if "seaborn-v0_8-whitegrid" in plt.style.available else "default")
plt.rcParams.update({
    "font.sans-serif": ["Microsoft JhengHei", "PingFang TC", "DejaVu Sans", "Arial"],
    "axes.unicode_minus": False,
    "figure.titlesize": 16,
    "axes.titlesize": 13,
    "axes.labelsize": 11,
    "xtick.labelsize": 9.5,
    "ytick.labelsize": 9.5,
    "figure.dpi": 300
})


def plot_correlation_heatmap(
    df: pd.DataFrame,
    target_col: str = "FloodProbability",
    output_path: str = "reports/figures/correlation_heatmap.png",
    show_plot: bool = False
) -> pd.Series:
    """繪製高質感特徵相關係數矩陣熱力圖 (Correlation Matrix Heatmap)

    與目標變數相關性排行長條圖。
    """
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # 排除非數值或識別欄位 (如 id)
    numeric_cols = [c for c in df.columns if c != "id" and pd.api.types.is_numeric_dtype(df[c])]
    corr_matrix = df[numeric_cols].corr(method="pearson")

    # 取得與目標變數的相關係數並排序
    target_corr = corr_matrix[target_col].drop(target_col).sort_values(ascending=False)

    # 建立雙子圖畫布 (左側熱力圖，右側與目標變數關聯條形圖)
    fig = plt.figure(figsize=(18, 9))
    gs = fig.add_gridspec(1, 2, width_ratios=[1.3, 0.7], wspace=0.25)

    # --- 左側子圖：特徵間相關係數熱力圖 (下三角遮罩) ---
    ax_heat = fig.add_subplot(gs[0])
    mask = np.triu(np.ones_like(corr_matrix, dtype=bool))
    
    # 採用高質感的冷暖發散調色盤
    cmap = sns.diverging_palette(220, 20, as_cmap=True)
    
    sns.heatmap(
        corr_matrix,
        mask=mask,
        cmap=cmap,
        vmax=0.6,
        vmin=-0.1,
        center=0,
        square=True,
        linewidths=0.7,
        linecolor="#f0f2f5",
        cbar_kws={"shrink": 0.75, "label": "Pearson Correlation Coefficient (r)"},
        annot=True,
        fmt=".2f",
        annot_kws={"size": 7.5, "weight": "medium"},
        ax=ax_heat
    )
    ax_heat.set_title("特徵相關係數矩陣 (Correlation Matrix Heatmap)", pad=16, weight="bold", fontsize=14)
    ax_heat.set_xticklabels(ax_heat.get_xticklabels(), rotation=45, ha="right")

    # --- 右側子圖：各特徵與 FloodProbability 線性相關程度長條圖 ---
    ax_bar = fig.add_subplot(gs[1])
    colors = sns.color_palette("mako", len(target_corr))
    
    y_pos = np.arange(len(target_corr))
    bars = ax_bar.barh(y_pos, target_corr.values, color=colors, edgecolor="black", linewidth=0.5, height=0.68)
    
    ax_bar.set_yticks(y_pos)
    ax_bar.set_yticklabels(target_corr.index, fontsize=10)
    ax_bar.invert_yaxis()  # 最高相關度在最頂部
    ax_bar.set_xlabel("Pearson 相關係數 (與 FloodProbability)", fontsize=11, weight="bold")
    ax_bar.set_title("各環境因子對洪災機率之關聯度排行", pad=16, weight="bold", fontsize=14)
    ax_bar.axvline(0, color="gray", linestyle="--", linewidth=0.8, alpha=0.7)

    # 標註具體數值在長條圖邊緣
    for bar in bars:
        width = bar.get_width()
        ax_bar.text(
            width + 0.005,
            bar.get_y() + bar.get_height() / 2,
            f"{width:.3f}",
            va="center",
            ha="left",
            fontsize=8.5,
            color="#222"
        )
    
    ax_bar.set_xlim(0, max(target_corr.values) * 1.25)

    # 儲存高解析度圖檔
    plt.savefig(output_path, dpi=300, bbox_inches="tight")
    print(f"[Visualizer] 相關係數熱力圖已成功儲存至: {output_path}")

    if show_plot:
        plt.show()
    plt.close()

    print("\n--- 特徵與目標變數 FloodProbability 相關性前 5 名 ---")
    for rank, (feature, val) in enumerate(target_corr.head(5).items(), 1):
        print(f"  Top {rank}: {feature:<30} (r = {val:.4f})")

    return target_corr


if __name__ == "__main__":
    from src.data_loader import load_dataset
    df = load_dataset()
    plot_correlation_heatmap(df)
