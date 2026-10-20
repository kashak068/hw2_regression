# Phase 4: Modeling & Feature Selection (模型建構與特徵選擇)

---

## 1. 階段目標與設計原則
1. **嚴防資料洩漏 (Zero Data Leakage)**：
   所有特徵評分、排名、消去與模型擬合**嚴格僅使用訓練資料 (`X_train_scaled, y_train`)** 進行計算，完全禁止測試集介入特徵工程。
2. **多維特徵選擇綜合比較 (5 大演算法)**：
   不偏信單一篩選機制，而是結合「過濾法 (Filter)」、「包裝法 (Wrapper)」、「嵌入法 (Embedded)」與「模型無關排列檢驗 (Permutation)」5 大演算法：
   - **Method 1: `SelectKBest`**（基於 F-regression 統計顯著性檢定）
   - **Method 2: `RFE`**（遞歸特徵消除 Recursive Feature Elimination，基於線性權重逐步剪枝）
   - **Method 3: `Sequential Feature Selection (SFS)`**（循序前向貪婪搜尋，3-Fold 交叉驗證）
   - **Method 4: `Lasso`**（利用 L1 罰項懲罰係數收縮，挑選非零權重特徵）
   - **Method 5: `Permutation Importance`**（排列重要性，衡量打亂各特徵後對整體 $R^2$ 泛化評分的破壞程度）
3. **共識排名評分體系 (Consensus Ranking Framework)**：
   整合 5 大演算法之序位排名，計算出綜合共識評分，嚴選出最具代表性之 **Top 15 最優特徵子集**。
4. **三大經典線性迴歸架構訓練**：
   - **多元線性迴歸 (Ordinary Least Squares, OLS)**
   - **Ridge 迴歸 (L2 Regularization, $\alpha=1.0$)**：防範潛在微弱共線性、提升係數數值穩定性
   - **Lasso 迴歸 (L1 Regularization, $\alpha=0.0001$)**：自動特徵稀疏化，抑制次要特徵權重

---

## 2. 5 大特徵選擇演算法機制比較

| 演算法名稱 | 方法類別 | 核心評估機制與數學準則 | 優勢與侷限 |
| :--- | :---: | :--- | :--- |
| **`SelectKBest`** | Filter (過濾法) | 一元 F 檢定（F-regression），衡量單特徵與目標變數之線性單變量關聯 | 計算速度極快，但未考慮特徵間的交互作用 |
| **`RFE`** | Wrapper (包裝法) | 訓練 Ridge 模型，每輪淘汰權重係數絕對值最小之特徵，直到剩下目標數目 | 考慮了多變量聯合效應，但計算需多輪疊代 |
| **`Sequential Feature Selection (SFS)`** | Wrapper (包裝法) | 前向貪婪搜尋（Forward Selection），每次挑選能讓 CV $R^2$ 提升最多之特徵 | 挑選出的特徵子集整體預測力最強，但貪婪法不走回頭路 |
| **`Lasso`** | Embedded (嵌入法) | L1 幾何菱形懲罰項 $\alpha \|\beta\|_1$，將邊際貢獻低之特徵係數直接壓縮為 0 | 模型訓練與特徵選擇一步到位，但對高度相關特徵可能隨機挑選 |
| **`Permutation Importance`** | Model-Agnostic | 隨機打亂單一特徵取值後，評估模型 $R^2$ 下降幅度 | 真實反應泛化階段該特徵對預測精度的真實破壞力 |

---

## 3. 特徵綜合評比與 Top 15 特徵子集

經 5 大演算法綜合檢驗（圖表產出於 [`reports/figures/feature_selection_comparison.png`](file:///c:/Users/User/Desktop/00/IoT_HW2/reports/figures/feature_selection_comparison.png)），精選出的 **Top 15 最優特徵子集** 如下：

| 共識排名 | 特徵名稱 (Feature) | SelectKBest (F-Score) | RFE Ranking | SFS Selected | Lasso \|coef\| | Permutation ($R^2$ drop) | 共識排名得分 |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `Landslides` | 466.8 | 1 | 是 (1) | 0.0097 | 0.0465 | **3.80** |
| **2** | `TopographyDrainage` | 443.2 | 1 | 是 (1) | 0.0095 | 0.0441 | **5.00** |
| **3** | `Deforestation` | 417.8 | 1 | 是 (1) | 0.0092 | 0.0416 | **5.00** |
| **4** | `DamsQuality` | 432.2 | 1 | 是 (1) | 0.0094 | 0.0430 | **6.80** |
| **5** | `AgriculturalPractices` | 425.9 | 1 | 是 (1) | 0.0093 | 0.0424 | **7.60** |
| **6** | `MonsoonIntensity` | 438.3 | 1 | 是 (1) | 0.0094 | 0.0436 | **7.60** |
| **7** | `InadequatePlanning` | 424.0 | 1 | 是 (1) | 0.0093 | 0.0422 | **7.60** |
| **8** | `Siltation` | 451.3 | 1 | 是 (1) | 0.0096 | 0.0449 | **7.80** |
| **9** | `CoastalVulnerability` | 444.1 | 1 | 是 (1) | 0.0095 | 0.0442 | **8.80** |
| **10** | `DrainageSystems` | 447.8 | 1 | 是 (1) | 0.0095 | 0.0446 | **9.40** |
| **11** | `PoliticalFactors` | 406.8 | 1 | 是 (1) | 0.0091 | 0.0405 | **9.40** |
| **12** | `DeterioratingInfrastructure`| 420.7 | 1 | 是 (1) | 0.0092 | 0.0419 | **9.60** |
| **13** | `Watersheds` | 406.4 | 1 | 是 (1) | 0.0091 | 0.0405 | **11.00** |
| **14** | `ClimateChange` | 422.3 | 1 | 是 (1) | 0.0093 | 0.0421 | **12.80** |
| **15** | `WetlandLoss` | 382.4 | 1 | 是 (1) | 0.0088 | 0.0381 | **13.60** |

---

## 4. 模型訓練與固化儲存

針對篩選出的 Top 15 特徵子集，分別訓練了三種不同正則化屬性的迴歸模型：
1. **`models/linear_regression.pkl`**：普通多元最小平方法 (OLS)。
2. **`models/ridge_regression.pkl`**：嶺迴歸 (L2 懲罰項)，有效抑制共線性噪聲。
3. **`models/lasso_regression.pkl`**：拉索迴歸 (L1 懲罰項)，維持權重係數平滑與特徵緊湊性。

---

## 5. 下一階段銜接 (Next Step)
準備進入 **Phase 5: Model Evaluation & Statistical Diagnostics**：
- 計算三大模型的完整指標評估表格（MAE, MSE, RMSE, $R^2$, Adjusted $R^2$）。
- 嚴格執行**迴歸五大統計假設檢定**（線性、常態性、同變異性、Durbin-Watson 獨立性、VIF 多重共線性）。
- 繪製具備 **95% 信賴區間 (CI)** 與 **預測區間 (PI)** 的真實值 vs. 預測值出刊級統計散布圖。
