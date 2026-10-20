"""
Phase 4: Comprehensive Feature Selection Module
================================================
實作並比較 5 種特徵選擇演算法，嚴格僅在訓練集 (Training Data) 上運算以防資料洩漏：
1. SelectKBest (基於 F-regression 統計檢定分數)
2. RFE (遞歸特徵消除 Recursive Feature Elimination)
3. Sequential Feature Selection (SFS 循序前向貪婪特徵選擇)
4. Lasso (利用 L1 罰項係數收縮挑選非零重要特徵)
5. Permutation Importance (排列重要性)
"""

import os
import sys
from typing import Dict, List, Tuple, Any
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.feature_selection import (
    SelectKBest,
    f_regression,
    RFE,
    SequentialFeatureSelector,
)
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.inspection import permutation_importance

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# 設定字型
plt.style.use("seaborn-v0_8-whitegrid" if "seaborn-v0_8-whitegrid" in plt.style.available else "default")
plt.rcParams["font.sans-serif"] = ["Microsoft JhengHei", "SimHei", "PingFang TC", "Arial"]
plt.rcParams["axes.unicode_minus"] = False


class FeatureSelectorComparator:
    """5 大特徵選擇演算法比較評估器

    嚴格遵循無洩漏原則，所有排序與挑選均僅在 X_train 上進行。
    """

    def __init__(self, feature_names: List[str], k_features: int = 15, random_state: int = 42):
        self.feature_names = feature_names
        self.k_features = k_features
        self.random_state = random_state
        self.results_df: pd.DataFrame = pd.DataFrame()
        self.selected_features: List[str] = []

    def method1_select_k_best(self, X_train: pd.DataFrame, y_train: pd.Series) -> pd.Series:
        """方法 1: SelectKBest (F-regression 統計量)"""
        selector = SelectKBest(score_func=f_regression, k="all")
        selector.fit(X_train, y_train)
        scores = pd.Series(selector.scores_, index=self.feature_names, name="SelectKBest_FScore")
        return scores

    def method2_rfe(self, X_train: pd.DataFrame, y_train: pd.Series) -> pd.Series:
        """方法 2: RFE (以 Ridge 線性迴歸為基底的遞歸特徵消除)"""
        base_model = Ridge(alpha=1.0, random_state=self.random_state)
        rfe = RFE(estimator=base_model, n_features_to_select=self.k_features, step=1)
        rfe.fit(X_train, y_train)
        # ranking_: 1 為選中特徵，數值越小排名越靠前
        ranks = pd.Series(rfe.ranking_, index=self.feature_names, name="RFE_Ranking")
        return ranks

    def method3_sfs(self, X_train: pd.DataFrame, y_train: pd.Series) -> pd.Series:
        """方法 3: Sequential Feature Selector (前向貪婪搜尋 SFS)"""
        base_model = LinearRegression()
        if len(X_train) > 30000:
            sample_idx = X_train.sample(30000, random_state=self.random_state).index
            X_sub, y_sub = X_train.loc[sample_idx], y_train.loc[sample_idx]
        else:
            X_sub, y_sub = X_train, y_train
        sfs = SequentialFeatureSelector(
            estimator=base_model,
            n_features_to_select=self.k_features,
            direction="forward",
            cv=3,
            n_jobs=-1
        )
        sfs.fit(X_sub, y_sub)
        support = pd.Series(sfs.get_support().astype(int), index=self.feature_names, name="SFS_Selected")
        return support

    def method4_lasso(self, X_train: pd.DataFrame, y_train: pd.Series) -> pd.Series:
        """方法 4: Lasso L1 正規化特徵選擇 (係數絕對值越大越重要)"""
        lasso = Lasso(alpha=0.0005, random_state=self.random_state, max_iter=2000)
        lasso.fit(X_train, y_train)
        coef_abs = pd.Series(np.abs(lasso.coef_), index=self.feature_names, name="Lasso_CoefAbs")
        return coef_abs

    def method5_permutation_importance(self, X_train: pd.DataFrame, y_train: pd.Series) -> pd.Series:
        """方法 5: Permutation Importance (排列重要性)"""
        model = Ridge(alpha=1.0, random_state=self.random_state)
        model.fit(X_train, y_train)
        if len(X_train) > 50000:
            sample_idx = X_train.sample(50000, random_state=self.random_state).index
            X_sub, y_sub = X_train.loc[sample_idx], y_train.loc[sample_idx]
        else:
            X_sub, y_sub = X_train, y_train
        perm = permutation_importance(
            model, X_sub, y_sub,
            n_repeats=5,
            random_state=self.random_state,
            scoring="r2",
            n_jobs=-1
        )
        perm_scores = pd.Series(perm.importances_mean, index=self.feature_names, name="Permutation_MeanScore")
        return perm_scores

    def run_all_and_compare(
        self,
        X_train: pd.DataFrame,
        y_train: pd.Series,
        output_plot_path: str = "reports/figures/feature_selection_comparison.png"
    ) -> Tuple[pd.DataFrame, List[str]]:
        """綜合執行 5 大方法，計算標準化綜合排名，並產出高美感比較圖表。"""
        print("-" * 60)
        print("🎯【Phase 4: 多維特徵選擇綜合評比 (5 大演算法)】")
        print("-" * 60)

        print("1. 正在執行 Method 1: SelectKBest (F-Score 檢定)...")
        s1 = self.method1_select_k_best(X_train, y_train)

        print("2. 正在執行 Method 2: RFE (遞歸特徵消除)...")
        s2 = self.method2_rfe(X_train, y_train)

        print("3. 正在執行 Method 3: Sequential Feature Selection (前向貪婪 SFS)...")
        s3 = self.method3_sfs(X_train, y_train)

        print("4. 正在執行 Method 4: Lasso (L1 稀疏正規化係數)...")
        s4 = self.method4_lasso(X_train, y_train)

        print("5. 正在執行 Method 5: Permutation Importance (排列重要性)...")
        s5 = self.method5_permutation_importance(X_train, y_train)

        # 彙整評分表格
        df_comp = pd.DataFrame([s1, s2, s3, s4, s5]).T

        # 計算各方法的序位排名 (Rank 1 為最重要)
        rank_kbest = s1.rank(ascending=False)
        rank_rfe = s2.rank(ascending=True)
        rank_sfs = s3.rank(ascending=False)
        rank_lasso = s4.rank(ascending=False)
        rank_perm = s5.rank(ascending=False)

        # 綜合平均排名 (Consensus Rank Score，越小越重要)
        df_comp["Consensus_Rank"] = (rank_kbest + rank_rfe + rank_sfs + rank_lasso + rank_perm) / 5.0
        df_comp = df_comp.sort_values(by="Consensus_Rank", ascending=True)

        # 挑選出共識排名前 k 項特徵
        self.selected_features = list(df_comp.head(self.k_features).index)
        self.results_df = df_comp

        print(f"\n✅ 5 大特徵選擇綜合評估完成！已精選 Top {self.k_features} 項最佳特徵子集:")
        for idx, feat in enumerate(self.selected_features, 1):
            print(f"   [{idx:02d}] {feat:<30} (綜合共識排名: {df_comp.loc[feat, 'Consensus_Rank']:.2f})")

        # 繪製高美感特徵選擇對比圖
        self._plot_comparison(df_comp, output_plot_path)

        return df_comp, self.selected_features

    def _plot_comparison(self, df_comp: pd.DataFrame, output_path: str):
        """繪製出刊等級多演算法特徵重要性橫向熱圖與排行條形圖"""
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(18, 9), gridspec_kw={"width_ratios": [1.1, 0.9]})

        # --- 子圖 1: 5 大特徵選擇演算法重要性評分熱圖 ---
        norm_df = pd.DataFrame(index=df_comp.index)
        norm_df["SelectKBest (F)"] = df_comp["SelectKBest_FScore"] / df_comp["SelectKBest_FScore"].max()
        norm_df["RFE (1/Rank)"] = 1.0 / df_comp["RFE_Ranking"]
        norm_df["SFS (Select)"] = df_comp["SFS_Selected"]
        norm_df["Lasso (|coef|)"] = df_comp["Lasso_CoefAbs"] / df_comp["Lasso_CoefAbs"].max()
        norm_df["Permutation (R2)"] = df_comp["Permutation_MeanScore"] / df_comp["Permutation_MeanScore"].max()

        sns.heatmap(
            norm_df,
            annot=True,
            fmt=".2f",
            cmap="YlGnBu",
            linewidths=0.6,
            linecolor="#f2f2f2",
            cbar_kws={"label": "標準化相對重要性 (0~1)"},
            ax=ax1
        )
        ax1.set_title("5 大特徵選擇演算法評分熱圖 (Feature Importance Heatmap)", pad=14, weight="bold", fontsize=13)
        ax1.set_yticklabels(ax1.get_yticklabels(), fontsize=9.5)

        # --- 子圖 2: 綜合共識排名長條圖 (Consensus Rank) ---
        colors = ["#2b5c8f" if f in self.selected_features else "#a0aec0" for f in df_comp.index]
        y_pos = np.arange(len(df_comp))
        
        bars = ax2.barh(y_pos, df_comp["Consensus_Rank"], color=colors, edgecolor="black", linewidth=0.5, height=0.65)
        ax2.set_yticks(y_pos)
        ax2.set_yticklabels(df_comp.index, fontsize=9.5)
        ax2.invert_yaxis()
        ax2.set_xlabel("共識排名分數 (Consensus Rank Score, 數值越小越重要)", fontsize=11, weight="bold")
        ax2.set_title(f"特徵共識重要性排行 (深藍色為精選 Top {self.k_features} 特徵子集)", pad=14, weight="bold", fontsize=13)

        # 數值標註
        for bar in bars:
            val = bar.get_width()
            ax2.text(val + 0.2, bar.get_y() + bar.get_height() / 2, f"{val:.1f}", va="center", ha="left", fontsize=8.5)

        ax2.set_xlim(0, max(df_comp["Consensus_Rank"]) * 1.15)

        plt.savefig(output_path, dpi=300, bbox_inches="tight")
        print(f"[Feature Selector] 特徵選擇比較圖表已成功輸出至: {output_path}")
        plt.close()


if __name__ == "__main__":
    from src.preprocessor import prepare_dataset
    data = prepare_dataset()
    comparator = FeatureSelectorComparator(feature_names=data["feature_names"], k_features=15)
    df_comp, selected_feats = comparator.run_all_and_compare(data["X_train_scaled"], data["y_train"])
