# Phase 2: Data Understanding (資料理解與探索性分析)

---

## 1. 階段目標與實作重點
1. **資料載入與格式校驗**：讀取訓練集資料（`train.csv`），全面檢驗樣本量（Shape）、欄位型態（dtypes）以及缺失值分佈。
2. **統計摘要探勘 (EDA)**：觀察自變數與目標變數 `FloodProbability` 的五數摘要（Min, Q1, Median, Mean, Q3, Max）、標準差與偏態分佈。
3. **相關係數矩陣熱力圖 (Correlation Matrix Heatmap)**：
   - 計算 20 項特徵與目標變數之間的 Pearson 相關係數 $r$。
   - 繪製高質感熱力圖與相關度長條圖，解析特徵間的共線性隱患與對目標變數的預測潛力。

---

## 2. 資料集基本檢驗結果

根據 `src/data_loader.py` 對資料集的檢驗報告：

| 檢驗維度 | 統計結果 | 結論與說明 |
| :--- | :--- | :--- |
| **資料形狀 (Shape)** | 10,000 筆樣本，22 個欄位 | 包含 1 個 `id` 索引欄位、20 個環境特徵欄位、1 個連續目標欄位 |
| **缺失值數量 (Missing Values)** | **0 筆 (0.00%)** | 資料集完整無缺失值，無須額外進行插補處理 |
| **特徵資料型態** | 21 個 `int64` (包含 id 及 20 特徵)，1 個 `float64` (`FloodProbability`) | 特徵均為整數評分尺度 (1~18)，目標變數為小數連續機率 |
| **目標變數分佈特性** | 均值 $\mu \approx 0.346$、標準差 $\sigma \approx 0.045$、偏態係數 $\text{Skew} \approx 0.55$ | 呈現平滑對稱的單峰常態分佈，極度適合進行線性迴歸模型擬合 |

---

## 3. 特徵相關性分析與熱力圖解析

相關係數熱力圖已生成並儲存於：[`reports/figures/correlation_heatmap.png`](file:///c:/Users/User/Desktop/00/IoT_HW2/reports/figures/correlation_heatmap.png)

### 3.1 與目標變數 (`FloodProbability`) 相關性排行
根據 Pearson 相關係數計算，前 10 項與洪災機率高度關聯之環境特徵如下：

| 排名 | 特徵名稱 (Feature) | 相關係數 ($r$) | 領域物理意涵說明 |
| :---: | :--- | :---: | :--- |
| 1 | `Landslides` | **+0.2328** | 土石流與山崩易阻塞排水斷面並加劇泥砂堵塞，直接推升淹水機率 |
| 2 | `Siltation` | **+0.2289** | 河床淤積縮減行水斷面與排洪能量 |
| 3 | `DrainageSystems` | **+0.2279** | 側溝與雨水下水道若評分高代表排洪系統需求與超載脆弱度高 |
| 4 | `CoastalVulnerability`| **+0.2270** | 暴潮、海平面頂托導致內水無法順利外排 |
| 5 | `TopographyDrainage` | **+0.2268** | 地形坡度與微地形滯水窪地效應 |
| 6 | `MonsoonIntensity` | **+0.2251** | 季風降雨總量為產生地表逕流最直接的外在衝擊因子 |
| 7 | `RiverManagement` | **+0.2245** | 河川護岸與防洪工程的治理程度 |
| 8 | `DamsQuality` | **+0.2238** | 水庫防洪蓄洪能力與安全調度空間 |
| 9 | `ClimateChange` | **+0.2215** | 氣候極端事件加劇致災不確定性 |
| 10 | `Deforestation` | **+0.2201** | 水土保持流失與地表入滲率下降 |

### 3.2 關鍵發現 (Key Insights)
1. **特徵間的正交性 (Orthogonality)**：
   各特徵相互之間的 Pearson 相關係數普遍極低（$|r| < 0.05$），顯示各變數間獨立性極高，初步排除了嚴重共線性（Multicollinearity）干擾，極有利於線性迴歸模型的穩定估計。
2. **多因子均勻貢獻特徵 (Distributed Predictive Power)**：
   20 個特徵與 `FloodProbability` 的相關係數均落在 $0.21 \sim 0.23$ 的狹窄區間內，這表示洪災是多維物理與人為環境共同作用的綜合結果，單一特徵無法獨自決定洪災機率。因此在 Phase 4 特徵選擇時，需要兼顧全局貢獻。

---

## 4. 下一階段銜接 (Next Step)
進入 **Phase 3: Data Preparation**：
- 執行嚴格的 **Train/Test 80/20 切分**（固定 `random_state=42`）。
- 嚴防 **Data Leakage**：僅在訓練集擬合 `StandardScaler`，確保測試集評估之客觀獨立性。
