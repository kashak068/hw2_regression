# Phase 3: Data Preparation (資料準備與無洩漏標準化)

---

## 1. 階段目標與實作重點
1. **嚴防資料洩漏 (Zero Data Leakage)**：在執行任何資料縮放、特徵工程或特徵選擇前，先將原始資料切分為訓練集與測試集，嚴禁將測試集資訊洩漏至訓練過程。
2. **Train/Test 80/20 切分**：
   - 訓練集：8,000 筆樣本（80%）
   - 測試集：2,000 筆樣本（20%）
   - 固定隨機狀態種子：`random_state=42`，確保全專案所有實驗結果百分之百可重現。
3. **特徵標準化 (Z-Score Standardization)**：
   - 使用 `sklearn.preprocessing.StandardScaler` 對 20 項連續特徵進行尺度縮放：
     $$z = \frac{x - \mu}{\sigma}$$
   - **關鍵原則**：僅在 `X_train` 計算均值 $\mu$ 與標準差 $\sigma$（`fit_transform`），`X_test` 嚴格僅使用訓練集的參數進行轉換（`transform`）。
4. **轉換器持久化儲存**：
   - 將訓練好的 `StandardScaler` 使用 `joblib` 序列化儲存至 `models/standard_scaler.pkl`，以備在 Phase 6 部署階段提供給新輸入樣本進行相同的尺度轉換。

---

## 2. 資料集劃分與尺度轉換統計

根據 [src/preprocessor.py](file:///c:/Users/User/Desktop/00/IoT_HW2/src/preprocessor.py) 的執行檢驗：

| 資料集區塊 | 樣本數量 (N) | 特徵數量 (P) | 處理方式 | 均值 ($\mu$) | 標準差 ($\sigma$) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **訓練集 (Train)** | 8,000 筆 (80%) | 20 | `fit_transform` | $\approx 0.000000$ | $\approx 1.000000$ |
| **測試集 (Test)**  | 2,000 筆 (20%) | 20 | 僅 `transform` | 依訓練集參數投影 | 依訓練集參數投影 |
| **目標變數 ($y$)** | 10,000 筆 | 1 (`FloodProbability`) | 維持原始真實物理機率尺度 $[0, 1]$，以利殘差與可解釋性分析 | - | - |

---

## 3. 為什麼必須先切分再標準化？(Data Leakage 防護機理)

若在 Train/Test Split 之前對全量資料集進行 `StandardScaler.fit_transform()`：
1. 測試集的數值會參與計算全域的均值 $\mu_{global}$ 與標準差 $\sigma_{global}$。
2. 導致模型訓練階段「間接偷看」了未見過測試集的統計分佈，產生過度樂觀的評估偏差（Optimistic Evaluation Bias）。
3. 本專案嚴格落實業界生產級的先切分、後轉換管線，確保 Phase 5 的模型泛化評估指標（MAE, RMSE, $R^2$）具備最高的科學可信度。

---

## 4. 下一階段銜接 (Next Step)
準備進入 **Phase 4: Modeling & Feature Selection**：
- 嚴格限定**僅在訓練集 (`X_train_scaled, y_train`)** 上執行 5 大特徵選擇演算法：
  1. `SelectKBest` (統計分數)
  2. `RFE` (遞歸特徵消除)
  3. `Sequential Feature Selection` (SFS)
  4. `Lasso` (L1 稀疏性係數)
  5. `Permutation Importance` (排列重要性)
- 使用篩選後的特徵子集訓練標準多元線性迴歸 (Linear Regression)、Ridge (L2) 與 Lasso (L1)。
