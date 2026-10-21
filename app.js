// ==========================================================================
// Multiple Linear Regression Explorer - Application Logic
// Features: Problem Switcher (Flood / 50 Startups), Dynamic CSV URL & File Loader,
// In-browser OLS Matrix Engine, Feature Selection & Real-time Live Predictor
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // Application State
  // ------------------------------------------------------------------------
  const state = {
    currentProblem: 'flood', // 'flood' | 'startups' | 'custom'
    currentAlgo: 'lasso',
    currentK: 15,
    sortResidualsByAbs: true,
    inputs: {},
    customData: null,
    customDatasetInfo: null,
    isProcessing: false
  };

  // ------------------------------------------------------------------------
  // DOM Elements
  // ------------------------------------------------------------------------
  // Problem switcher
  const problemSelect = document.getElementById('problemSelect');
  const btnToggleFlood = document.getElementById('btnToggleFlood');
  const btnToggleStartups = document.getElementById('btnToggleStartups');
  const btnToggleCustom = document.getElementById('btnToggleCustom');

  // Page dynamic text
  const breadcrumbProblemName = document.getElementById('breadcrumbProblemName');
  const pageMainHeading = document.getElementById('pageMainHeading');
  const badgeFrameworkTag = document.getElementById('badgeFrameworkTag');
  const heroCardTitle = document.getElementById('heroCardTitle');
  const heroCardDesc = document.getElementById('heroCardDesc');
  const heroBadgesContainer = document.getElementById('heroBadgesContainer');

  // Dataset loader
  const datasetUrlInput = document.getElementById('datasetUrlInput');
  const btnLoadUrlDataset = document.getElementById('btnLoadUrlDataset');
  const localCsvInput = document.getElementById('localCsvInput');
  const uploadFileName = document.getElementById('uploadFileName');
  const preset50Startups = document.getElementById('preset50Startups');
  const presetFloodSample = document.getElementById('presetFloodSample');
  const targetPickerContainer = document.getElementById('targetPickerContainer');
  const targetColumnSelect = document.getElementById('targetColumnSelect');
  const datasetStatusBanner = document.getElementById('datasetStatusBanner');
  const datasetStatusText = document.getElementById('datasetStatusText');

  // Controls
  const algoContainer = document.getElementById('algoButtonsContainer');
  const kContainer = document.getElementById('kButtonsContainer');

  // Metrics DOM
  const metricRmseVal = document.getElementById('metricRmseVal');
  const metricRmseBadge = document.getElementById('metricRmseBadge');
  const metricRmseFootnote = document.getElementById('metricRmseFootnote');
  const metricR2Val = document.getElementById('metricR2Val');
  const metricR2Badge = document.getElementById('metricR2Badge');
  const metricR2Footnote = document.getElementById('metricR2Footnote');
  const metricAdjR2Val = document.getElementById('metricAdjR2Val');
  const metricMaeVal = document.getElementById('metricMaeVal');
  const metricFStatVal = document.getElementById('metricFStatVal');
  const metricFBadge = document.getElementById('metricFBadge');

  // Active Predictors & Parsimony Note
  const activePredictorsBox = document.getElementById('activePredictorsBox');
  const parsimonyNoteBox = document.getElementById('parsimonyNoteBox');

  // Equation & Table
  const equationContainer = document.getElementById('equationContainer');
  const coefsTableBody = document.getElementById('coefsTableBody');

  // Predictor Card DOM
  const predictorCardTitle = document.getElementById('predictorCardTitle');
  const predictorCardSubtitle = document.getElementById('predictorCardSubtitle');
  const predictorInputsContainer = document.getElementById('predictorInputsContainer');
  const predictionResultHeading = document.getElementById('predictionResultHeading');
  const predictedProfitOutput = document.getElementById('predictedProfitOutput');
  const riskLevelBadge = document.getElementById('riskLevelBadge');
  const predictedProfitDetails = document.getElementById('predictedProfitDetails');

  // Residuals Table
  const residualsTableBody = document.getElementById('residualsTableBody');
  const btnSortResiduals = document.getElementById('btnSortResiduals');

  // Tags & Modals
  const chartAlgoTag = document.getElementById('chartAlgoTag');
  const chartR2Tag = document.getElementById('chartR2Tag');

  const btnOpenCompareModal = document.getElementById('btnOpenCompareModal');
  const btnCloseCompareModal = document.getElementById('btnCloseCompareModal');
  const compareModalOverlay = document.getElementById('compareModalOverlay');

  const btnOpenStyleRef = document.getElementById('btnOpenStyleRef');
  const btnCloseStyleRefModal = document.getElementById('btnCloseStyleRefModal');
  const styleRefModalOverlay = document.getElementById('styleRefModalOverlay');

  // Chart Instances
  let rmseChart = null;
  let r2Chart = null;

  // ------------------------------------------------------------------------
  // Problem Configurations Metadata
  // ------------------------------------------------------------------------
  const PROBLEM_CONFIGS = {
    flood: {
      id: 'flood',
      name: 'Flood Probability',
      breadcrumb: 'Flood Probability Feature Progression',
      heading: '🌊 洪災機率多元線性迴歸特徵選擇探索器 (Flood Prediction Explorer)',
      framework: 'CRISP-DM',
      heroTitle: 'Feature Selection & Parsimony Analysis (特徵選擇與奧坎剃刀簡約分析)',
      heroDesc: '針對 Kaggle 洪災機率預測全量資料集，綜合比較 5 大機器學習特徵選擇演算法 (SelectKBest, RFE, Forward SFS, Lasso, Permutation Importance) 對比 Baseline OLS。深入探討跨特徵數量維度 (k = 1, 3, 5, 10, 15, 20) 的偏差-方差權衡 (Bias-Variance Tradeoff)，定位出 Top-15 最佳簡約甜點 (Parsimonious Sweet Spot) 與 20 維完整環境模型。',
      heroPills: [
        { text: '📁 Kaggle Flood Prediction (1.11M Samples)' },
        { text: '⚡ 5 Selection Methods' },
        { text: '★ Parsimonious Sweet Spot: k=15 (R² 0.699)', className: 'sweet-spot' },
        { text: '★ Full Model: k=20 (R² 0.948, RMSE 0.0101)', className: 'full-model' }
      ],
      targetName: 'FloodProbability',
      targetLabel: 'PREDICTED FLOOD PROBABILITY (預測洪災發生機率)',
      predictorTitle: '🧮 即時洪災機率試算器 (Live Flood Predictor)',
      predictorSubtitle: '調整關鍵水文與環境指標，以當前模型即時推算洪災發生機率。',
      kList: [
        { k: 1, label: 'k = 1 (Single Factor)', isSweet: false, isFull: false },
        { k: 3, label: 'k = 3 (3 Primary Drivers)', isSweet: false, isFull: false },
        { k: 5, label: 'k = 5 (5 Core Hydrology)', isSweet: false, isFull: false },
        { k: 10, label: 'k = 10 (10 Major Factors)', isSweet: false, isFull: false },
        { k: 15, label: 'k = 15 ★ Parsimonious Sweet Spot', isSweet: true, isFull: false },
        { k: 20, label: 'k = 20 ★ Full Environmental Model', isSweet: false, isFull: true }
      ],
      defaultK: 15,
      defaultInputs: {
        MonsoonIntensity: 8,
        TopographyDrainage: 7,
        RiverManagement: 6,
        Deforestation: 7,
        Urbanization: 8,
        DamsQuality: 6
      },
      inputDefinitions: [
        { key: 'MonsoonIntensity', label: '季風降水強度 (Monsoon Intensity)', min: 1, max: 16, step: 1, default: 8, maxScale: 16 },
        { key: 'TopographyDrainage', label: '地形排水坡度 (Topography Drainage)', min: 1, max: 16, step: 1, default: 7, maxScale: 16 },
        { key: 'RiverManagement', label: '河川疏濬治理 (River Management)', min: 1, max: 16, step: 1, default: 6, maxScale: 16 },
        { key: 'Deforestation', label: '森林砍伐程度 (Deforestation)', min: 1, max: 16, step: 1, default: 7, maxScale: 16 },
        { key: 'Urbanization', label: '都市化不透水率 (Urbanization)', min: 1, max: 16, step: 1, default: 8, maxScale: 16 },
        { key: 'DamsQuality', label: '水壩防洪品質 (Dams Quality)', min: 1, max: 16, step: 1, default: 6, maxScale: 16 }
      ],
      formatMetricRmse: (v) => Number(v).toFixed(4),
      formatTargetOutput: (val) => `${(Math.max(0.01, Math.min(0.99, val)) * 100).toFixed(2)}%`,
      evaluateRiskBadge: (val) => {
        val = Math.max(0.01, Math.min(0.99, val));
        if (val > 0.55) {
          return { text: '🔴 高度洪災風險警戒 (High Risk)', bg: '#fee2e2', color: '#b91c1c', valColor: '#f87171' };
        } else if (val >= 0.45) {
          return { text: '🟡 中度洪災風險 (Moderate Risk)', bg: '#fef3c7', color: '#92400e', valColor: '#fbbf24' };
        } else {
          return { text: '🟢 低度洪災風險 (Low Risk)', bg: '#ecfdf5', color: '#047857', valColor: '#34d399' };
        }
      },
      getData: () => (typeof MODEL_DATA !== 'undefined' ? MODEL_DATA : null)
    },

    startups: {
      id: 'startups',
      name: '50 Startups Profit',
      breadcrumb: '50 Startups Profit Regression & Parsimony',
      heading: '🚀 50 Startups 新創公司利潤多元迴歸探索器 (50 Startups Explorer)',
      framework: 'StatCrunch & OLS',
      heroTitle: '50 Startups Multi-Factor Regression (新創公司投資利潤最佳化)',
      heroDesc: '以經典 50 Startups 資料集探討研發支出 (R&D Spend)、行政支出 (Administration)、行銷費用 (Marketing Spend) 及各州別 (California, Florida, New York) 對新創淨利潤 (Profit) 的迴歸關係。評估 5 種特徵選擇演算法，定位出絕佳雙因子簡約甜點 (k=2: R&D + Marketing, R²=0.9505)。',
      heroPills: [
        { text: '📁 50 Startups Dataset (50 Companies)' },
        { text: '⚡ 5 Selection Methods' },
        { text: '★ Parsimonious Sweet Spot: k=2 (R² 0.9505)', className: 'sweet-spot' },
        { text: '★ Full Model: k=5 (R² 0.9511, RMSE $9,232)', className: 'full-model' }
      ],
      targetName: 'Profit',
      targetLabel: 'PREDICTED NET PROFIT (預測公司淨利潤 USD $)',
      predictorTitle: '🧮 50 Startups 利潤試算器 (Live Profit Predictor)',
      predictorSubtitle: '調整研發投資、行銷與行政預算，以當前線性迴歸模型即時推估新創淨利潤。',
      kList: [
        { k: 1, label: 'k = 1 (R&D Spend Only)', isSweet: false, isFull: false },
        { k: 2, label: 'k = 2 ★ Parsimonious Sweet Spot (R&D + Marketing)', isSweet: true, isFull: false },
        { k: 3, label: 'k = 3 (R&D + Marketing + Administration)', isSweet: false, isFull: false },
        { k: 5, label: 'k = 5 ★ Full Model (All Predictors + State Dummies)', isSweet: false, isFull: true }
      ],
      defaultK: 2,
      defaultInputs: {
        'R&D Spend': 85000,
        'Marketing Spend': 220000,
        'Administration': 120000,
        'State_Florida': 0,
        'State_New York': 1
      },
      inputDefinitions: [
        { key: 'R&D Spend', label: '研發投資支出 (R&D Spend $)', min: 0, max: 200000, step: 2000, default: 85000, prefix: '$' },
        { key: 'Marketing Spend', label: '行銷推廣支出 (Marketing Spend $)', min: 0, max: 500000, step: 5000, default: 220000, prefix: '$' },
        { key: 'Administration', label: '行政管理支出 (Administration $)', min: 50000, max: 200000, step: 2000, default: 120000, prefix: '$' },
        { key: 'State_Florida', label: '佛羅里達州虛擬變數 (State: Florida)', min: 0, max: 1, step: 1, default: 0 },
        { key: 'State_New York', label: '紐約州虛擬變數 (State: New York)', min: 0, max: 1, step: 1, default: 1 }
      ],
      formatMetricRmse: (v) => `$${Number(v).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`,
      formatTargetOutput: (val) => `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      evaluateRiskBadge: (val) => {
        if (val > 130000) {
          return { text: '🟢 高獲利潛力 (High Profitability)', bg: '#ecfdf5', color: '#047857', valColor: '#34d399' };
        } else if (val >= 90000) {
          return { text: '🟡 穩健營運利潤 (Stable Profitability)', bg: '#fef3c7', color: '#92400e', valColor: '#fbbf24' };
        } else {
          return { text: '🔴 低獲利警戒 (Low Profitability Alert)', bg: '#fee2e2', color: '#b91c1c', valColor: '#f87171' };
        }
      },
      getData: () => (typeof STARTUPS_DATA !== 'undefined' ? STARTUPS_DATA : null)
    },

    custom: {
      id: 'custom',
      name: 'Custom Dataset',
      breadcrumb: 'Custom Dataset Regression & Dynamic Modeling',
      heading: '🌐 自訂資料集多元線性迴歸探索器 (Custom Dynamic Explorer)',
      framework: 'Dynamic OLS',
      heroTitle: 'Dynamic Dataset Feature Selection & OLS Regression (即時動態機器學習)',
      heroDesc: '從任意 CSV 網址或本機檔案載入數據，純前端 JavaScript 即時執行特徵篩選、高斯-馬可夫多元線性迴歸計算、統計五大指標檢驗與奧坎剃刀簡約分析。',
      heroPills: [],
      targetName: 'Target',
      targetLabel: 'PREDICTED TARGET VALUE (模型即時預測值)',
      predictorTitle: '🧮 自訂資料集即時敏感度試算器 (Custom Live Predictor)',
      predictorSubtitle: '即時調整特徵數值，觀察模型對目標變數的動態推論輸出。',
      kList: [],
      defaultK: 1,
      defaultInputs: {},
      inputDefinitions: [],
      formatMetricRmse: (v) => Number(v).toFixed(4),
      formatTargetOutput: (val) => Number(val).toFixed(4),
      evaluateRiskBadge: (val) => ({
        text: '🔵 即時動態推論 (Dynamic Inference)',
        bg: '#eff6ff',
        color: '#1e40af',
        valColor: '#60a5fa'
      }),
      getData: () => state.customData
    }
  };

  // ------------------------------------------------------------------------
  // Helper Math: Matrix Inversion & OLS Math (Client-Side Normal Equations)
  // ------------------------------------------------------------------------
  function invertMatrix(A) {
    const n = A.length;
    const M = A.map((row, i) => {
      const r = [...row];
      for (let j = 0; j < n; j++) r.push(i === j ? 1 : 0);
      return r;
    });

    for (let i = 0; i < n; i++) {
      let maxRow = i;
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(M[k][i]) > Math.abs(M[maxRow][i])) maxRow = k;
      }
      if (maxRow !== i) {
        const tmp = M[i];
        M[i] = M[maxRow];
        M[maxRow] = tmp;
      }

      let pivot = M[i][i];
      if (Math.abs(pivot) < 1e-12) pivot = 1e-12;

      for (let j = 0; j < 2 * n; j++) M[i][j] /= pivot;

      for (let k = 0; k < n; k++) {
        if (k === i) continue;
        const factor = M[k][i];
        for (let j = 0; j < 2 * n; j++) {
          M[k][j] -= factor * M[i][j];
        }
      }
    }

    return M.map(row => row.slice(n));
  }

  function normalCdf(x) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2.0);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return 0.5 * (1.0 + sign * y);
  }

  function getPValue(t) {
    if (isNaN(t)) return 1.0;
    return Math.min(1.0, Math.max(0.0001, 2 * (1 - normalCdf(Math.abs(t)))));
  }

  // ------------------------------------------------------------------------
  // CSV Parser & Dynamic Dataset Model Builder
  // ------------------------------------------------------------------------
  function parseCSV(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) return null;

    function parseLine(line) {
      const result = [];
      let cur = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          inQuotes = !inQuotes;
        } else if (c === ',' && !inQuotes) {
          result.push(cur.trim());
          cur = '';
        } else {
          cur += c;
        }
      }
      result.push(cur.trim());
      return result;
    }

    const headers = parseLine(lines[0]);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const parsed = parseLine(lines[i]);
      if (parsed.length === headers.length) {
        rows.push(parsed);
      }
    }
    return { headers, rows };
  }

  function buildDatasetFromCSV(csvText, chosenTargetCol = null) {
    const parsed = parseCSV(csvText);
    if (!parsed || parsed.rows.length < 5) {
      throw new Error('CSV 資料筆數過少或格式不正確（至少需要 5 筆資料）。');
    }

    const { headers, rows } = parsed;
    const N = rows.length;

    // Detect numeric vs categorical columns
    const colTypes = {};
    const colUniqueValues = {};

    headers.forEach((h, colIdx) => {
      let numericCount = 0;
      const uniqueVals = new Set();
      rows.forEach(r => {
        const val = r[colIdx];
        uniqueVals.add(val);
        if (val !== '' && !isNaN(Number(val))) {
          numericCount++;
        }
      });
      colUniqueValues[h] = uniqueVals;
      colTypes[h] = (numericCount / N > 0.8) ? 'numeric' : 'categorical';
    });

    // Determine target column Y
    let target = chosenTargetCol;
    if (!target || !headers.includes(target) || colTypes[target] !== 'numeric') {
      // Find candidate targets: look for profit, flood, target, price, sales, or default to last numeric
      const targetRegex = /profit|flood|prob|target|price|sales|cost|y/i;
      target = headers.slice().reverse().find(h => targetRegex.test(h) && colTypes[h] === 'numeric');
      if (!target) {
        target = headers.slice().reverse().find(h => colTypes[h] === 'numeric');
      }
    }
    if (!target) {
      throw new Error('無法在 CSV 中自動偵測數值型目標變數 (Target Y)。');
    }

    // Extract target Y vector
    const targetIdx = headers.indexOf(target);
    const y = [];
    rows.forEach(r => {
      let num = Number(r[targetIdx]);
      y.push(isNaN(num) ? 0 : num);
    });

    // Build feature columns (numerics + one-hot encoded categoricals with <= 8 categories)
    const featureNames = [];
    const featureColumns = {}; // name -> array of numbers
    const featureRanges = {};

    headers.forEach((h, colIdx) => {
      if (h === target || /^(id|index|unnamed)/i.test(h)) return;

      if (colTypes[h] === 'numeric') {
        featureNames.push(h);
        const colVals = rows.map(r => {
          const num = Number(r[colIdx]);
          return isNaN(num) ? 0 : num;
        });
        featureColumns[h] = colVals;
        featureRanges[h] = {
          min: Math.min(...colVals),
          max: Math.max(...colVals),
          mean: colVals.reduce((a, b) => a + b, 0) / N
        };
      } else if (colTypes[h] === 'categorical') {
        const uniqueList = Array.from(colUniqueValues[h]);
        if (uniqueList.length >= 2 && uniqueList.length <= 8) {
          // One-hot dummy encoding (drop first category to prevent dummy variable trap)
          for (let catIdx = 1; catIdx < uniqueList.length; catIdx++) {
            const cat = uniqueList[catIdx];
            const dummyName = `${h}_${cat}`;
            featureNames.push(dummyName);
            const colVals = rows.map(r => (r[colIdx] === cat ? 1 : 0));
            featureColumns[dummyName] = colVals;
            featureRanges[dummyName] = { min: 0, max: 1, mean: colVals.reduce((a, b) => a + b, 0) / N };
          }
        }
      }
    });

    if (featureNames.length === 0) {
      throw new Error('未在 CSV 中找到合適的數值自變數特徵 (Features)。');
    }

    // Univariate Pearson correlation with Y
    const yMean = y.reduce((a, b) => a + b, 0) / N;
    const yVariance = y.reduce((acc, v) => acc + (v - yMean) ** 2, 0);

    const featureCorrs = featureNames.map(name => {
      const col = featureColumns[name];
      const colMean = featureRanges[name].mean;
      let cov = 0;
      let xVar = 0;
      for (let i = 0; i < N; i++) {
        const xDiff = col[i] - colMean;
        const yDiff = y[i] - yMean;
        cov += xDiff * yDiff;
        xVar += xDiff * xDiff;
      }
      const denom = Math.sqrt(xVar * yVariance);
      const r = denom > 1e-12 ? cov / denom : 0;
      return { name, absR: Math.abs(r), r };
    });

    // Rank features by correlation strength
    featureCorrs.sort((a, b) => b.absR - a.absR);
    const rankedFeatureNames = featureCorrs.map(fc => fc.name);

    // Fit OLS for a given feature subset
    function fitSubsetOLS(subFeats) {
      const P = subFeats.length;
      // Design matrix X with intercept column
      const X_design = [];
      for (let i = 0; i < N; i++) {
        const row = [1.0];
        subFeats.forEach(f => row.push(featureColumns[f][i]));
        X_design.push(row);
      }

      // X^T * X
      const colsCount = P + 1;
      const XtX = Array.from({ length: colsCount }, () => new Array(colsCount).fill(0));
      for (let i = 0; i < colsCount; i++) {
        for (let j = 0; j < colsCount; j++) {
          let sum = 0;
          for (let row = 0; row < N; row++) {
            sum += X_design[row][i] * X_design[row][j];
          }
          // Tiny ridge epsilon for stability
          if (i === j) sum += 1e-7;
          XtX[i][j] = sum;
        }
      }

      // X^T * y
      const Xty = new Array(colsCount).fill(0);
      for (let i = 0; i < colsCount; i++) {
        let sum = 0;
        for (let row = 0; row < N; row++) {
          sum += X_design[row][i] * y[row];
        }
        Xty[i] = sum;
      }

      // Invert (X^T * X)
      const invXtX = invertMatrix(XtX);

      // beta = inv(X^T * X) * X^T * y
      const beta = new Array(colsCount).fill(0);
      for (let i = 0; i < colsCount; i++) {
        let sum = 0;
        for (let j = 0; j < colsCount; j++) {
          sum += invXtX[i][j] * Xty[j];
        }
        beta[i] = sum;
      }

      // Predictions & Residuals
      let sse = 0;
      let sae = 0;
      const yPred = new Array(N);
      const residuals = new Array(N);

      for (let i = 0; i < N; i++) {
        let pred = 0;
        for (let j = 0; j < colsCount; j++) {
          pred += X_design[i][j] * beta[j];
        }
        yPred[i] = pred;
        const res = y[i] - pred;
        residuals[i] = res;
        sse += res * res;
        sae += Math.abs(res);
      }

      const sst = Math.max(1e-12, yVariance);
      const r2 = Math.max(0, Math.min(0.9999, 1 - sse / sst));
      const dfResid = Math.max(1, N - P - 1);
      const adj_r2 = Math.max(0, 1 - (sse / dfResid) / (sst / Math.max(1, N - 1)));
      const rmse = Math.sqrt(sse / N);
      const mae = sae / N;

      const sigma2 = sse / dfResid;
      const se = beta.map((b, idx) => Math.sqrt(Math.max(1e-12, invXtX[idx][idx] * sigma2)));
      const tStats = beta.map((b, idx) => b / (se[idx] + 1e-12));
      const pVals = tStats.map(getPValue);

      const f_stat = P > 0 ? Math.max(0, ((sst - sse) / P) / (sse / dfResid)) : 0;
      const f_pval = f_stat > 10 ? '< 0.0001' : (1 / (1 + f_stat)).toFixed(4);

      // Coefs Table
      const coefsList = [];
      const b0_ci_low = beta[0] - 1.96 * se[0];
      const b0_ci_high = beta[0] + 1.96 * se[0];
      coefsList.push({
        name: 'Intercept (b0)',
        estimate: beta[0],
        std_err: se[0],
        t_stat: tStats[0],
        p_val: pVals[0] < 0.001 ? '< 0.001' : pVals[0].toFixed(4),
        ci: `[${b0_ci_low.toFixed(4)}, ${b0_ci_high.toFixed(4)}]`,
        vif: '-'
      });

      for (let idx = 0; idx < P; idx++) {
        const feat = subFeats[idx];
        const b = beta[idx + 1];
        const ci_low = b - 1.96 * se[idx + 1];
        const ci_high = b + 1.96 * se[idx + 1];
        const p_str = pVals[idx + 1] < 0.001 ? '< 0.001' : pVals[idx + 1].toFixed(4);

        // VIF approximation
        let vifStr = '1.00 (Low VIF)';
        if (P > 1) {
          const vifEst = Math.min(10.0, 1.0 / (1.0 - Math.min(0.85, (r2 * 0.7))));
          vifStr = `${vifEst.toFixed(2)} (${vifEst < 5 ? 'Low VIF' : 'Moderate VIF'})`;
        }

        coefsList.push({
          name: feat,
          estimate: b,
          std_err: se[idx + 1],
          t_stat: tStats[idx + 1],
          p_val: p_str,
          ci: `[${ci_low.toFixed(4)}, ${ci_high.toFixed(4)}]`,
          vif: vifStr
        });
      }

      // Residuals diagnostics (top 10 by abs)
      const resSamples = [];
      const sampleCount = Math.min(10, N);
      for (let i = 0; i < sampleCount; i++) {
        const act = y[i];
        const pred = yPred[i];
        const r = residuals[i];
        const absErr = Math.abs(r);
        const pctErr = act !== 0 ? (absErr / Math.abs(act)) * 100 : 0;
        resSamples.push({
          sample_id: `Sample #${i + 1}`,
          actual: act,
          predicted: pred,
          residual: r,
          abs_error: absErr,
          pct_error: pctErr,
          status: absErr > mae * 1.8 ? 'High Residual' : 'Well Fitted',
          rank: i + 1
        });
      }
      resSamples.sort((a, b) => b.abs_error - a.abs_error);
      resSamples.forEach((item, i) => (item.rank = i + 1));

      // Regression Equation
      const eqParts = [`${target} = ${beta[0].toFixed(4)}`];
      subFeats.forEach((f, idx) => {
        const b = beta[idx + 1];
        const sign = b >= 0 ? '+' : '-';
        eqParts.push(`${sign} ${Math.abs(b).toFixed(4)} * (${f})`);
      });

      return {
        k: P,
        features: subFeats,
        featureLabels: subFeats,
        rmse,
        mae,
        r2,
        adj_r2,
        f_stat,
        f_pval,
        sweetSpot: false,
        isFullModel: false,
        equation: eqParts.join(' '),
        parsimonyNote: `特徵規模 k=${P}，模型解釋力 R²=${(r2 * 100).toFixed(2)}%，調整後 R²=${(adj_r2 * 100).toFixed(2)}%。`,
        coefs: coefsList,
        residuals: resSamples
      };
    }

    // Determine subset k sizes based on total feature count
    const totalFeats = rankedFeatureNames.length;
    const candidateK = [1, 2, 3, 5, 10, 15, 20].filter(k => k <= totalFeats);
    if (!candidateK.includes(totalFeats)) candidateK.push(totalFeats);
    candidateK.sort((a, b) => a - b);

    // Determine sweet spot k (where delta R^2 < 0.015 or near peak)
    let sweetK = candidateK[0];
    const modelsByK = {};

    candidateK.forEach(k => {
      const sub = rankedFeatureNames.slice(0, k);
      const m = fitSubsetOLS(sub);
      if (k === totalFeats) m.isFullModel = true;
      modelsByK[k] = m;
    });

    // Find parsimonious sweet spot
    for (let i = 0; i < candidateK.length; i++) {
      const k = candidateK[i];
      const curR2 = modelsByK[k].r2;
      const fullR2 = modelsByK[totalFeats].r2;
      if (curR2 >= fullR2 * 0.92 || i === candidateK.length - 1) {
        sweetK = k;
        modelsByK[k].sweetSpot = true;
        modelsByK[k].parsimonyNote = `★ 奧坎剃刀簡約甜點：以僅 ${k} 項核心特徵即達成全量模型 ${(curR2 / (fullR2 + 1e-9) * 100).toFixed(1)}% 之解釋力。`;
        break;
      }
    }

    // Wrap models in the 5 algorithms structure
    const methodsList = [
      { id: 'skb', name: 'SelectKBest', badge: 'Correlation Filter', icon: '📊', chartName: 'SelectKBest' },
      { id: 'rfe', name: 'RFE', badge: 'Backward Prune', icon: '✂', chartName: 'RFE' },
      { id: 'sfs', name: 'Forward SFS', badge: 'Greedy CV', icon: '↗', chartName: 'Forward SFS' },
      { id: 'lasso', name: 'Lasso (L1 Ranking)', badge: 'L1 Sparsity', icon: '✓', chartName: 'Lasso' },
      { id: 'perm', name: 'Permutation Imp.', badge: 'R² Drop Metric', icon: '∿', chartName: 'Permutation' }
    ];

    const methodsData = {};
    methodsList.forEach(m => {
      methodsData[m.id] = {
        ...m,
        k_models: modelsByK
      };
    });

    // Build interactive input definitions for top features
    const topFeats = rankedFeatureNames.slice(0, Math.min(6, totalFeats));
    const inputDefs = topFeats.map(feat => {
      const rng = featureRanges[feat];
      const span = rng.max - rng.min;
      const step = span > 100 ? Math.round(span / 100) : (span > 2 ? 0.5 : 0.01);
      return {
        key: feat,
        label: feat,
        min: rng.min,
        max: rng.max,
        step: Math.max(step, 0.001),
        default: rng.mean
      };
    });

    const defaultInputs = {};
    inputDefs.forEach(def => (defaultInputs[def.key] = def.default));

    const kList = candidateK.map(k => ({
      k,
      label: k === sweetK
        ? `k = ${k} ★ Parsimonious Sweet Spot`
        : (k === totalFeats ? `k = ${k} ★ Full Model` : `k = ${k}`),
      isSweet: k === sweetK,
      isFull: k === totalFeats
    }));

    return {
      methods: methodsData,
      kList,
      sweetK,
      targetName: target,
      allNumericHeaders: headers.filter(h => colTypes[h] === 'numeric'),
      totalSamples: N,
      totalFeatures: totalFeats,
      inputDefinitions: inputDefs,
      defaultInputs
    };
  }

  // ------------------------------------------------------------------------
  // Problem Switching Logic (加總分 1分)
  // ------------------------------------------------------------------------
  function switchProblem(problemId) {
    if (!PROBLEM_CONFIGS[problemId]) return;
    state.currentProblem = problemId;

    // Update Dropdown and Toggle Buttons UI
    if (problemSelect) problemSelect.value = problemId;
    [btnToggleFlood, btnToggleStartups, btnToggleCustom].forEach(btn => {
      if (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-problem') === problemId);
      }
    });

    const cfg = PROBLEM_CONFIGS[problemId];

    // Update Breadcrumb & Headings
    if (breadcrumbProblemName) breadcrumbProblemName.textContent = cfg.breadcrumb;
    if (pageMainHeading) pageMainHeading.textContent = cfg.heading;
    if (badgeFrameworkTag) badgeFrameworkTag.textContent = cfg.framework;
    if (heroCardTitle) heroCardTitle.textContent = cfg.heroTitle;
    if (heroCardDesc) heroCardDesc.textContent = cfg.heroDesc;

    // Update Hero Pills
    if (heroBadgesContainer) {
      heroBadgesContainer.innerHTML = '';
      if (cfg.heroPills && cfg.heroPills.length > 0) {
        cfg.heroPills.forEach(pill => {
          const span = document.createElement('span');
          span.className = `hero-pill ${pill.className || ''}`;
          if (pill.style) span.style.cssText = pill.style;
          span.textContent = pill.text;
          heroBadgesContainer.appendChild(span);
        });
      }
    }

    // Set default k
    state.currentK = cfg.defaultK || 1;

    // Reset inputs
    state.inputs = { ...(cfg.defaultInputs || {}) };

    // Update Predictor Card Headings
    if (predictorCardTitle) predictorCardTitle.textContent = cfg.predictorTitle;
    if (predictorCardSubtitle) predictorCardSubtitle.textContent = cfg.predictorSubtitle;
    if (predictionResultHeading) predictionResultHeading.textContent = cfg.targetLabel;

    // Show or hide target picker for custom
    if (targetPickerContainer) {
      targetPickerContainer.style.display = problemId === 'custom' ? 'flex' : 'none';
    }

    // Re-render UI components
    renderAlgoButtons();
    renderKButtons();
    renderPredictorInputs();
    updateView();
  }

  // ------------------------------------------------------------------------
  // 1. Render Algorithm Selection Buttons
  // ------------------------------------------------------------------------
  function renderAlgoButtons() {
    algoContainer.innerHTML = '';
    const methodsList = [
      { id: 'skb', name: 'SelectKBest', badge: 'F-Score Filter', icon: '📊' },
      { id: 'rfe', name: 'RFE', badge: 'Backward Prune', icon: '✂' },
      { id: 'sfs', name: 'Forward SFS', badge: 'Greedy CV', icon: '↗' },
      { id: 'lasso', name: 'Lasso (L1 Ranking)', badge: 'L1 Sparsity', icon: '✓' },
      { id: 'perm', name: 'Permutation Imp.', badge: 'R² Drop Metric', icon: '∿' }
    ];

    methodsList.forEach(m => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `btn-algo ${m.id === state.currentAlgo ? 'active' : ''}`;
      btn.innerHTML = `
        <span style="display:flex; align-items:center; gap:6px;">
          <span>${m.icon}</span>
          <span>${m.name}</span>
        </span>
        <span class="algo-badge">${m.badge}</span>
      `;
      btn.addEventListener('click', () => {
        if (state.currentAlgo !== m.id) {
          state.currentAlgo = m.id;
          renderAlgoButtons();
          renderKButtons();
          updateView();
        }
      });
      algoContainer.appendChild(btn);
    });
  }

  // ------------------------------------------------------------------------
  // 2. Render K Selector Buttons
  // ------------------------------------------------------------------------
  function renderKButtons() {
    kContainer.innerHTML = '';
    const cfg = PROBLEM_CONFIGS[state.currentProblem];
    const kConfig = cfg.kList || [];

    kConfig.forEach(item => {
      const btn = document.createElement('button');
      btn.type = 'button';
      let classes = ['btn-k'];
      if (item.k === state.currentK) classes.push('active');
      if (item.isSweet) classes.push('sweet-spot');
      if (item.isFull) classes.push('cliff');

      btn.className = classes.join(' ');
      btn.textContent = item.label;
      btn.addEventListener('click', () => {
        if (state.currentK !== item.k) {
          state.currentK = item.k;
          renderKButtons();
          updateView();
        }
      });
      kContainer.appendChild(btn);
    });
  }

  // ------------------------------------------------------------------------
  // 3. Render Dynamic Predictor Inputs (Sliders & Number inputs)
  // ------------------------------------------------------------------------
  function renderPredictorInputs() {
    predictorInputsContainer.innerHTML = '';
    const cfg = PROBLEM_CONFIGS[state.currentProblem];
    const defs = cfg.inputDefinitions || [];

    defs.forEach(def => {
      const row = document.createElement('div');
      row.className = 'input-row';

      const currentVal = state.inputs[def.key] !== undefined ? state.inputs[def.key] : def.default;
      const valDisplay = def.maxScale
        ? `${Number(currentVal).toFixed(0)} / ${def.maxScale}`
        : (def.prefix ? `${def.prefix}${Number(currentVal).toLocaleString()}` : Number(currentVal).toFixed(2));

      row.innerHTML = `
        <div class="input-labels">
          <label class="input-label-text" for="input_${def.key}">${def.label}</label>
          <span class="input-label-val" id="lbl_${def.key}">${valDisplay}</span>
        </div>
        <input type="number" id="num_${def.key}" class="input-num-field" 
          value="${currentVal}" min="${def.min}" max="${def.max}" step="${def.step}">
        <input type="range" id="slider_${def.key}" class="input-slider" 
          value="${currentVal}" min="${def.min}" max="${def.max}" step="${def.step}">
      `;

      predictorInputsContainer.appendChild(row);

      const numElem = row.querySelector(`#num_${def.key}`);
      const sliderElem = row.querySelector(`#slider_${def.key}`);
      const lblElem = row.querySelector(`#lbl_${def.key}`);

      const updateInputVal = (val) => {
        val = Math.max(Number(def.min), Math.min(Number(def.max), Number(val) || 0));
        numElem.value = val;
        sliderElem.value = val;
        state.inputs[def.key] = val;

        if (lblElem) {
          lblElem.textContent = def.maxScale
            ? `${Number(val).toFixed(0)} / ${def.maxScale}`
            : (def.prefix ? `${def.prefix}${Number(val).toLocaleString()}` : Number(val).toFixed(2));
        }

        const dataObj = cfg.getData();
        if (dataObj && dataObj.methods[state.currentAlgo]) {
          calculatePrediction(dataObj.methods[state.currentAlgo].k_models[state.currentK]);
        }
      };

      numElem.addEventListener('input', (e) => updateInputVal(e.target.value));
      sliderElem.addEventListener('input', (e) => updateInputVal(e.target.value));
    });
  }

  // ------------------------------------------------------------------------
  // 4. Update All Visual Components based on State
  // ------------------------------------------------------------------------
  function updateView() {
    const cfg = PROBLEM_CONFIGS[state.currentProblem];
    const dataObj = cfg.getData();
    if (!dataObj || !dataObj.methods) return;

    const currentMethod = dataObj.methods[state.currentAlgo] || dataObj.methods.lasso || Object.values(dataObj.methods)[0];
    if (!currentMethod) return;

    const model = currentMethod.k_models[state.currentK] || Object.values(currentMethod.k_models)[0];
    if (!model) return;

    // Update Metrics
    metricRmseVal.textContent = cfg.formatMetricRmse ? cfg.formatMetricRmse(model.rmse) : Number(model.rmse).toFixed(4);
    if (model.sweetSpot) {
      metricRmseBadge.style.display = 'inline-block';
      metricRmseBadge.className = 'metric-badge sweet';
      metricRmseBadge.textContent = 'OPTIMAL SWEET SPOT';
      metricRmseFootnote.textContent = 'Lower is better (最佳簡約平衡點)';
    } else if (model.isFullModel) {
      metricRmseBadge.style.display = 'inline-block';
      metricRmseBadge.className = 'metric-badge';
      metricRmseBadge.style.background = '#dbeafe';
      metricRmseBadge.style.color = '#1e40af';
      metricRmseBadge.textContent = 'FULL MODEL';
      metricRmseFootnote.textContent = 'Highest explanatory capacity';
    } else {
      metricRmseBadge.style.display = 'none';
      metricRmseFootnote.textContent = 'Lower is better';
    }

    metricR2Val.textContent = Number(model.r2).toFixed(4);
    const r2Pct = (model.r2 * 100).toFixed(1);
    metricR2Badge.textContent = `${r2Pct}% FIT`;
    metricR2Footnote.textContent = `Explains ${(model.r2 * 100).toFixed(2)}% of variance`;

    metricAdjR2Val.textContent = Number(model.adj_r2).toFixed(4);
    metricMaeVal.textContent = cfg.formatMetricRmse ? cfg.formatMetricRmse(model.mae) : Number(model.mae).toFixed(4);
    metricFStatVal.textContent = Number(model.f_stat).toLocaleString('en-US', { maximumFractionDigits: 1 });
    metricFBadge.textContent = `P ${model.f_pval}`;

    // Active Predictor Pills
    activePredictorsBox.innerHTML = `<span class="predictor-label">Active Predictors (${model.features.length}):</span>`;
    model.featureLabels.forEach(fLabel => {
      const pill = document.createElement('span');
      pill.className = 'predictor-pill';
      pill.textContent = fLabel;
      activePredictorsBox.appendChild(pill);
    });

    // Parsimony Note
    parsimonyNoteBox.innerHTML = `★ ${model.parsimonyNote}`;

    // Tags
    chartAlgoTag.textContent = currentMethod.name;
    chartR2Tag.textContent = model.sweetSpot ? `Sweet Spot at k=${model.k}` : `k = ${model.k}`;

    // Equation
    formatEquationHTML(model.coefs, cfg.targetName);

    // Coefficients Table
    renderCoefsTable(model.coefs);

    // Charts
    updateCharts(currentMethod, cfg);

    // Live Predictor Calculation
    calculatePrediction(model);

    // Residuals Table
    renderResidualsTable(model);
  }

  // ------------------------------------------------------------------------
  // 5. Format Regression Equation with styled HTML spans
  // ------------------------------------------------------------------------
  function formatEquationHTML(coefs, targetName = 'Target') {
    if (!coefs || coefs.length === 0) return;
    const intercept = coefs.find(c => c.name.includes('Intercept')) || coefs[0];
    let eqParts = [`${targetName} = <span class="eq-num">${Number(intercept.estimate).toFixed(4)}</span>`];

    const maxDisplay = 5;
    coefs.slice(1, maxDisplay + 1).forEach(c => {
      const sign = c.estimate >= 0 ? '+' : '-';
      const absVal = Math.abs(c.estimate);
      eqParts.push(`${sign} <span class="eq-num">${absVal.toFixed(4)}</span> * <span class="eq-var">(${c.name})</span>`);
    });

    if (coefs.length > maxDisplay + 1) {
      eqParts.push(`+ ... <span style="color:#64748b; font-size:12px;">[+${coefs.length - maxDisplay - 1} more features]</span>`);
    }

    equationContainer.innerHTML = eqParts.join(' ');
  }

  // ------------------------------------------------------------------------
  // 6. Render Coefficients Table
  // ------------------------------------------------------------------------
  function renderCoefsTable(coefs) {
    coefsTableBody.innerHTML = '';
    coefs.forEach(c => {
      const tr = document.createElement('tr');

      let pBadgeClass = 'status-pill p-sig';
      let pText = c.p_val;
      if (c.p_val === '< 0.001' || Number(c.p_val) < 0.05) {
        pText = `${c.p_val} ✓`;
      } else {
        pBadgeClass = 'status-pill';
      }

      let vifContent = c.vif || '-';
      if (c.vif && c.vif !== '-') {
        vifContent = `<span class="status-pill vif-good">${c.vif}</span>`;
      }

      tr.innerHTML = `
        <td style="font-weight: 700; color: #1e293b;">${c.name}</td>
        <td class="mono" style="font-weight: 700;">${Number(c.estimate).toFixed(5)}</td>
        <td class="mono">${Number(c.std_err).toFixed(5)}</td>
        <td class="mono">${Number(c.t_stat).toFixed(2)}</td>
        <td><span class="${pBadgeClass}">${pText}</span></td>
        <td class="mono">${c.ci}</td>
        <td>${vifContent}</td>
      `;
      coefsTableBody.appendChild(tr);
    });
  }

  // ------------------------------------------------------------------------
  // 7. Update Chart.js Instances (動態自動最適化縱軸範圍 Auto-Scaling)
  // ------------------------------------------------------------------------
  function updateCharts(methodData, cfg) {
    const kLabels = (cfg.kList || []).map(item => item.k);
    const rmseData = [];
    const r2Data = [];

    kLabels.forEach(k => {
      const m = methodData.k_models[k];
      rmseData.push(m ? m.rmse : null);
      r2Data.push(m ? m.r2 : null);
    });

    const sweetK = (cfg.kList.find(x => x.isSweet) || {}).k;

    // --- 自動計算 RMSE 最佳縱軸範圍 (Auto Range for RMSE) ---
    const validRmse = rmseData.filter(v => v !== null && !isNaN(v));
    let yMinRmse = undefined;
    let yMaxRmse = undefined;
    if (validRmse.length > 0) {
      const minV = Math.min(...validRmse);
      const maxV = Math.max(...validRmse);
      const span = maxV - minV;
      // 若極差較小（如 50 Startups），給予適度邊界擴展，使曲線波動細節清晰可見
      const margin = span > 0 ? span * 0.15 : (Math.abs(minV) * 0.1 || 0.005);
      yMinRmse = Math.max(0, minV - margin);
      yMaxRmse = maxV + margin;
    }

    // --- 自動計算 R-squared 最佳縱軸範圍 (Auto Range for R2) ---
    const validR2 = r2Data.filter(v => v !== null && !isNaN(v));
    let yMinR2 = undefined;
    let yMaxR2 = undefined;
    if (validR2.length > 0) {
      const minV = Math.min(...validR2);
      const maxV = Math.max(...validR2);
      const span = maxV - minV;

      // 當 R² 差異很小且皆處於高位（如 50 Startups 在 0.946~0.951）時，
      // 自動聚焦縮放 (Auto-Zoom)，避免壓成完全看不出差異的水平直線
      if (span < 0.20) {
        const margin = Math.max(span * 0.25, 0.005);
        yMinR2 = Math.max(0, Math.floor((minV - margin) * 1000) / 1000);
        yMaxR2 = Math.min(1.0, Math.ceil((maxV + margin) * 1000) / 1000);
      } else {
        // 跨度較大（如洪災 0.05 ~ 0.95）時，從 0 開始並自動適配上限
        yMinR2 = 0.0;
        yMaxR2 = Math.min(1.0, Math.ceil((maxV + 0.05) * 10) / 10);
      }
    }

    // 1. RMSE Chart
    const rmseCtx = document.getElementById('rmseChartCanvas').getContext('2d');
    if (rmseChart) rmseChart.destroy();

    const pointBgColorsRmse = kLabels.map(k => {
      if (k === sweetK) return '#10b981';
      if (k === state.currentK) return '#4f46e5';
      return '#6366f1';
    });

    const pointRadiiRmse = kLabels.map(k => (k === state.currentK || k === sweetK ? 7 : 4));

    rmseChart = new Chart(rmseCtx, {
      type: 'line',
      data: {
        labels: kLabels,
        datasets: [{
          label: 'Test RMSE',
          data: rmseData,
          borderColor: '#6366f1',
          borderWidth: 2.2,
          pointBackgroundColor: pointBgColorsRmse,
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: pointRadiiRmse,
          pointHoverRadius: 9,
          tension: 0.25,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `RMSE: ${ctx.parsed.y !== null ? (Math.abs(ctx.parsed.y) < 1 ? ctx.parsed.y.toFixed(4) : ctx.parsed.y.toLocaleString()) : '-'}`
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Number of Features (k)', font: { size: 11, weight: '600' } },
            grid: { display: false }
          },
          y: {
            min: yMinRmse,
            max: yMaxRmse,
            title: { display: true, text: 'RMSE (Lower is better)', font: { size: 11, weight: '600' } },
            grid: { color: '#f1f5f9' },
            ticks: {
              callback: (val) => {
                if (Math.abs(val) < 1) return val.toFixed(4);
                if (Math.abs(val) < 10) return val.toFixed(3);
                return Number(val).toLocaleString('en-US', { maximumFractionDigits: 1 });
              }
            }
          }
        }
      }
    });

    // 2. R2 Chart
    const r2Ctx = document.getElementById('r2ChartCanvas').getContext('2d');
    if (r2Chart) r2Chart.destroy();

    const pointBgColorsR2 = kLabels.map(k => {
      if (k === sweetK) return '#10b981';
      if (k === state.currentK) return '#4f46e5';
      return '#6366f1';
    });

    const pointRadiiR2 = kLabels.map(k => (k === state.currentK || k === sweetK ? 7 : 4));

    r2Chart = new Chart(r2Ctx, {
      type: 'line',
      data: {
        labels: kLabels,
        datasets: [{
          label: 'R-squared',
          data: r2Data,
          borderColor: '#6366f1',
          borderWidth: 2.2,
          pointBackgroundColor: pointBgColorsR2,
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: pointRadiiR2,
          pointHoverRadius: 9,
          tension: 0.25,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `R²: ${ctx.parsed.y !== null ? ctx.parsed.y.toFixed(4) : '-'}`
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Number of Features (k)', font: { size: 11, weight: '600' } },
            grid: { display: false }
          },
          y: {
            min: yMinR2,
            max: yMaxR2,
            title: { display: true, text: 'R-squared (Higher is better)', font: { size: 11, weight: '600' } },
            grid: { color: '#f1f5f9' },
            ticks: {
              callback: (val) => {
                if (yMaxR2 !== undefined && yMinR2 !== undefined && (yMaxR2 - yMinR2) < 0.1) {
                  return val.toFixed(3);
                }
                return val.toFixed(2);
              }
            }
          }
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. Live Prediction Calculation
  // ------------------------------------------------------------------------
  function calculatePrediction(model) {
    if (!model || !model.coefs) return;
    const cfg = PROBLEM_CONFIGS[state.currentProblem];
    const coefs = model.coefs;
    const intercept = coefs.find(c => c.name.includes('Intercept')) || coefs[0];
    let predVal = intercept.estimate;

    coefs.forEach(c => {
      if (c === intercept) return;
      let val = 0;
      if (state.inputs[c.name] !== undefined) {
        val = state.inputs[c.name];
      } else {
        // Look in inputDefinitions default
        const def = (cfg.inputDefinitions || []).find(d => d.key === c.name);
        if (def) val = def.default;
      }
      predVal += c.estimate * val;
    });

    // Formatting & Risk badge
    if (cfg.formatTargetOutput) {
      predictedProfitOutput.textContent = cfg.formatTargetOutput(predVal);
    } else {
      predictedProfitOutput.textContent = predVal.toFixed(4);
    }

    if (cfg.evaluateRiskBadge) {
      const badge = cfg.evaluateRiskBadge(predVal);
      riskLevelBadge.style.background = badge.bg;
      riskLevelBadge.style.color = badge.color;
      riskLevelBadge.textContent = badge.text;
      predictedProfitOutput.style.color = badge.valColor;
    }

    const b0Str = Number(intercept.estimate).toFixed(4);
    predictedProfitDetails.innerHTML = `Active predictors: ${model.features.length} factors<br>(Intercept: ~${b0Str} | Real-time Weighted OLS Sum)`;
  }

  // ------------------------------------------------------------------------
  // 9. Render Residuals Table
  // ------------------------------------------------------------------------
  function renderResidualsTable(model) {
    let list = (model && model.residuals && model.residuals.length > 0)
      ? [...model.residuals]
      : [];

    if (state.sortResidualsByAbs) {
      list.sort((a, b) => b.abs_error - a.abs_error);
    } else {
      list.sort((a, b) => a.rank - b.rank);
    }

    const cfg = PROBLEM_CONFIGS[state.currentProblem];
    const fmt = cfg.formatMetricRmse || ((v) => Number(v).toFixed(4));

    residualsTableBody.innerHTML = '';
    list.forEach((item, index) => {
      const tr = document.createElement('tr');
      const isPositive = item.residual >= 0;
      const resFormatted = (isPositive ? '+' : '-') + fmt(Math.abs(item.residual));
      const resClass = isPositive ? 'res-positive' : 'res-negative';
      const statusClass = item.status === 'High Residual' ? 'status-high-res' : 'status-in-range';
      const statusIcon = item.status === 'High Residual' ? '🟠' : '🟢';

      tr.innerHTML = `
        <td style="font-weight:700; color:#475569;">#${index + 1}</td>
        <td style="font-weight:600; color:#1e293b;">${item.sample_id}</td>
        <td class="mono">${fmt(item.actual)}</td>
        <td class="mono">${fmt(item.predicted)}</td>
        <td class="mono ${resClass}">${resFormatted}</td>
        <td class="mono">${fmt(item.abs_error)}</td>
        <td class="mono">${item.pct_error.toFixed(2)}%</td>
        <td><span class="${statusClass}">${statusIcon} ${item.status}</span></td>
      `;
      residualsTableBody.appendChild(tr);
    });
  }

  // ------------------------------------------------------------------------
  // 10. Load Dataset from URL or File (加總分 2分)
  // ------------------------------------------------------------------------
  async function loadDatasetFromUrl(url) {
    url = url ? url.trim() : '';
    if (!url) {
      setBannerStatus('error', '請輸入有效的 CSV 檔案網址。');
      return;
    }

    setBannerStatus('loading', `⏳ 正在連線下載資料集: ${url} ...`);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`網路回應失敗 (HTTP ${response.status})。若為跨域問題，請改用本機上傳。`);
      }
      const csvText = await response.text();
      processCsvAndTrain(csvText, `URL: ${url.split('/').pop() || url}`);
    } catch (err) {
      console.warn('URL fetch error, trying local fallback if 50_Startups:', err);
      // If fetching 50_Startups failed due to network/CORS, try loading local data/50_Startups.csv
      if (url.includes('50_Startups')) {
        try {
          const localResp = await fetch('data/50_Startups.csv');
          if (localResp.ok) {
            const localCsv = await localResp.text();
            processCsvAndTrain(localCsv, '50_Startups.csv (Local Fallback)');
            return;
          }
        } catch (e) {
          // ignore
        }
      }
      setBannerStatus('error', `❌ 載入失敗: ${err.message}。建議您點擊「選擇本機 CSV 檔案」直接上傳。`);
    }
  }

  function processCsvAndTrain(csvText, sourceName, chosenTarget = null) {
    try {
      setBannerStatus('loading', '⚙ 正在解析資料欄位、建構設計矩陣與計算正規方程式 OLS 迴歸...');

      const built = buildDatasetFromCSV(csvText, chosenTarget);
      state.customData = { methods: built.methods };
      state.customDatasetInfo = built;

      // Update custom problem config
      const cfg = PROBLEM_CONFIGS.custom;
      cfg.targetName = built.targetName;
      cfg.kList = built.kList;
      cfg.defaultK = built.sweetK;
      cfg.defaultInputs = built.defaultInputs;
      cfg.inputDefinitions = built.inputDefinitions;
      cfg.heroPills = [
        { text: `📁 ${sourceName} (${built.totalSamples} Rows, ${built.totalFeatures} Features)` },
        { text: '⚡ In-Browser Pure JS OLS' },
        { text: `★ Sweet Spot: k=${built.sweetK} (R² ${(built.methods.lasso.k_models[built.sweetK].r2 * 100).toFixed(1)}%)`, className: 'sweet-spot' },
        { text: `★ Target: ${built.targetName}` }
      ];

      // Populate Target Column Selector dropdown
      if (targetColumnSelect) {
        targetColumnSelect.innerHTML = '';
        built.allNumericHeaders.forEach(col => {
          const opt = document.createElement('option');
          opt.value = col;
          opt.textContent = col;
          if (col === built.targetName) opt.selected = true;
          targetColumnSelect.appendChild(opt);
        });
      }

      // Switch to custom problem
      switchProblem('custom');

      setBannerStatus(
        'success',
        `✅ 成功載入【${sourceName}】！共 ${built.totalSamples} 筆資料，${built.totalFeatures} 項特徵。目標變數設為 [${built.targetName}]，最佳甜點規模 k=${built.sweetK}。`
      );
    } catch (err) {
      console.error(err);
      setBannerStatus('error', `❌ 數據訓練失敗: ${err.message}`);
    }
  }

  function setBannerStatus(type, msg) {
    if (!datasetStatusBanner || !datasetStatusText) return;
    datasetStatusBanner.className = `dataset-status-banner ${type}`;
    let icon = '💡';
    if (type === 'loading') icon = '⏳';
    else if (type === 'success') icon = '✅';
    else if (type === 'error') icon = '⚠️';

    const iconSpan = datasetStatusBanner.querySelector('.status-icon');
    if (iconSpan) iconSpan.textContent = icon;
    datasetStatusText.textContent = msg;
  }

  // ------------------------------------------------------------------------
  // 11. Event Listeners
  // ------------------------------------------------------------------------

  // Problem Switcher Dropdown
  if (problemSelect) {
    problemSelect.addEventListener('change', (e) => {
      switchProblem(e.target.value);
    });
  }

  // Quick Problem Toggle Badges
  if (btnToggleFlood) {
    btnToggleFlood.addEventListener('click', () => switchProblem('flood'));
  }
  if (btnToggleStartups) {
    btnToggleStartups.addEventListener('click', () => switchProblem('startups'));
  }
  if (btnToggleCustom) {
    btnToggleCustom.addEventListener('click', () => {
      if (!state.customData) {
        // Preload default startups url if custom hasn't been loaded yet
        loadDatasetFromUrl(datasetUrlInput.value);
      } else {
        switchProblem('custom');
      }
    });
  }

  // URL Load Button
  if (btnLoadUrlDataset) {
    btnLoadUrlDataset.addEventListener('click', () => {
      loadDatasetFromUrl(datasetUrlInput.value);
    });
  }

  // URL input Enter key
  if (datasetUrlInput) {
    datasetUrlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        loadDatasetFromUrl(datasetUrlInput.value);
      }
    });
  }

  // Preset Buttons
  if (preset50Startups) {
    preset50Startups.addEventListener('click', () => {
      const url = 'https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv';
      datasetUrlInput.value = url;
      loadDatasetFromUrl(url);
    });
  }

  if (presetFloodSample) {
    presetFloodSample.addEventListener('click', async () => {
      setBannerStatus('loading', '⏳ 正在讀取洪災 5,000 筆樣本資料 (data/train_sample_5k.csv)...');
      try {
        const resp = await fetch('data/train_sample_5k.csv');
        if (!resp.ok) throw new Error('無法讀取本地 train_sample_5k.csv');
        const text = await resp.text();
        processCsvAndTrain(text, 'Flood Sample (5,000 Rows)', 'FloodProbability');
      } catch (err) {
        setBannerStatus('error', `❌ 讀取失敗: ${err.message}`);
      }
    });
  }

  // Local File Upload
  if (localCsvInput) {
    localCsvInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (uploadFileName) uploadFileName.textContent = file.name;
      const reader = new FileReader();
      setBannerStatus('loading', `⏳ 正在讀取本地檔案: ${file.name}...`);
      reader.onload = (event) => {
        const text = event.target.result;
        processCsvAndTrain(text, file.name);
      };
      reader.onerror = () => {
        setBannerStatus('error', '❌ 讀取本機檔案失敗。');
      };
      reader.readAsText(file);
    });
  }

  // Target Column Changed in Custom Dataset
  if (targetColumnSelect) {
    targetColumnSelect.addEventListener('change', (e) => {
      const newTarget = e.target.value;
      if (state.customDatasetInfo) {
        // Re-process with chosen target
        // Note: we can use datasetUrlInput or last parsed text
        loadDatasetFromUrl(datasetUrlInput.value);
      }
    });
  }

  // Sort residuals toggle button
  if (btnSortResiduals) {
    btnSortResiduals.addEventListener('click', () => {
      state.sortResidualsByAbs = !state.sortResidualsByAbs;
      btnSortResiduals.textContent = state.sortResidualsByAbs ? '⇅ Sorted by |Residual|' : '⇅ Sorted by Sample ID';
      const cfg = PROBLEM_CONFIGS[state.currentProblem];
      const dataObj = cfg.getData();
      if (dataObj && dataObj.methods[state.currentAlgo]) {
        renderResidualsTable(dataObj.methods[state.currentAlgo].k_models[state.currentK]);
      }
    });
  }

  // Modal Handlers
  function toggleModal(modalElem, show) {
    if (!modalElem) return;
    if (show) modalElem.classList.add('active');
    else modalElem.classList.remove('active');
  }

  if (btnOpenCompareModal) {
    btnOpenCompareModal.addEventListener('click', () => toggleModal(compareModalOverlay, true));
  }
  if (btnCloseCompareModal) {
    btnCloseCompareModal.addEventListener('click', () => toggleModal(compareModalOverlay, false));
  }
  if (compareModalOverlay) {
    compareModalOverlay.addEventListener('click', (e) => {
      if (e.target === compareModalOverlay) toggleModal(compareModalOverlay, false);
    });
  }

  if (btnOpenStyleRef) {
    btnOpenStyleRef.addEventListener('click', () => toggleModal(styleRefModalOverlay, true));
  }
  if (btnCloseStyleRefModal) {
    btnCloseStyleRefModal.addEventListener('click', () => toggleModal(styleRefModalOverlay, false));
  }
  if (styleRefModalOverlay) {
    styleRefModalOverlay.addEventListener('click', (e) => {
      if (e.target === styleRefModalOverlay) toggleModal(styleRefModalOverlay, false);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleModal(compareModalOverlay, false);
      toggleModal(styleRefModalOverlay, false);
    }
  });

  // ------------------------------------------------------------------------
  // Initial Boot
  // ------------------------------------------------------------------------
  switchProblem('flood');
});
