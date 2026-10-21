const STARTUPS_DATA = {
  "methods": {
    "skb": {
      "id": "skb",
      "name": "SelectKBest",
      "badge": "F-Score Filter",
      "icon": "📊",
      "chartName": "SelectKBest",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "featureLabels": [
            "R&D Spend"
          ],
          "rmse": 9226.1,
          "mae": 6910.98,
          "r2": 0.9465,
          "adj_r2": 0.9454,
          "f_stat": 849.79,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 49032.90 + 0.8543 * (R&D Spend)",
          "parsimonyNote": "單因子 R&D Spend 即具備極高預測力 (R²=0.9465)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 49032.89914125208,
              "std_err": 2537.8969493237864,
              "t_stat": 19.320287671379525,
              "p_val": "< 0.001",
              "ci": "[44058.62, 54007.18]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.854291370938809,
              "std_err": 0.029305591498200383,
              "t_stat": 29.151138988684764,
              "p_val": "< 0.001",
              "ci": "[0.80, 0.91]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 180116.66,
              "residual": 10933.73,
              "abs_error": 10933.73,
              "pct_error": 5.72,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 172369.0,
              "residual": 10532.99,
              "abs_error": 10532.99,
              "pct_error": 5.76,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 164033.73,
              "residual": -7911.22,
              "abs_error": 7911.22,
              "pct_error": 5.07,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 161694.2,
              "residual": -4703.08,
              "abs_error": 4703.08,
              "pct_error": 3.0,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154396.82,
              "residual": -4636.86,
              "abs_error": 4636.86,
              "pct_error": 3.1,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160345.47,
              "residual": -4592.87,
              "abs_error": 4592.87,
              "pct_error": 2.95,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 170433.97,
              "residual": -4246.03,
              "abs_error": 4246.03,
              "pct_error": 2.55,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 187938.71,
              "residual": 3853.35,
              "abs_error": 3853.35,
              "pct_error": 2.01,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 190289.29,
              "residual": 1972.54,
              "abs_error": 1972.54,
              "pct_error": 1.03,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152011.33,
              "residual": 200.44,
              "abs_error": 200.44,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "2": {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8881.89,
          "mae": 6499.32,
          "r2": 0.9505,
          "adj_r2": 0.9483,
          "f_stat": 450.77,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "Profit = 46975.86 + 0.7966 * (R&D Spend) + 0.0299 * (Marketing Spend)",
          "parsimonyNote": "R&D Spend + Marketing Spend 形成絕佳雙因子簡約甜點 (R²=0.9505)，行政支出與地理位置統計顯著性不足 (p>0.10)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 46975.86422071992,
              "std_err": 2689.932924576535,
              "t_stat": 17.463582006646178,
              "p_val": "< 0.001",
              "ci": "[41703.60, 52248.13]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.7965840440559884,
              "std_err": 0.04134757792399576,
              "t_stat": 19.26555517957997,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.88]",
              "vif": "2.10 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.029907875205785306,
              "std_err": 0.015520012301255314,
              "t_stat": 1.9270522872871174,
              "p_val": "0.0600",
              "ci": "[-0.00, 0.06]",
              "vif": "2.10 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 181405.38,
              "residual": 9645.01,
              "abs_error": 9645.01,
              "pct_error": 5.05,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173441.31,
              "residual": 9460.68,
              "abs_error": 9460.68,
              "pct_error": 5.17,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 162879.31,
              "residual": -5888.19,
              "abs_error": 5888.19,
              "pct_error": 3.75,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 171127.62,
              "residual": -4939.68,
              "abs_error": 4939.68,
              "pct_error": 2.97,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160455.74,
              "residual": -4703.14,
              "abs_error": 4703.14,
              "pct_error": 3.02,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154343.81,
              "residual": -4583.85,
              "abs_error": 4583.85,
              "pct_error": 3.06,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189774.66,
              "residual": 2017.4,
              "abs_error": 2017.4,
              "pct_error": 1.05,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158028.13,
              "residual": -1905.62,
              "abs_error": 1905.62,
              "pct_error": 1.22,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192800.46,
              "residual": -538.63,
              "abs_error": 538.63,
              "pct_error": 0.28,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152317.8,
              "residual": -106.03,
              "abs_error": 106.03,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8855.34,
          "mae": 6471.45,
          "r2": 0.9507,
          "adj_r2": 0.9475,
          "f_stat": 295.98,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 50122.19 + 0.8057 * (R&D Spend) + 0.0272 * (Marketing Spend) - 0.0268 * (Administration)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50122.19298986531,
              "std_err": 6572.352621532413,
              "t_stat": 7.626217866895095,
              "p_val": "< 0.001",
              "ci": "[37240.38, 63004.00]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8057150499157427,
              "std_err": 0.04514726972851756,
              "t_stat": 17.846373761755107,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.89]",
              "vif": "2.47 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.02722806480081874,
              "std_err": 0.016451234517995114,
              "t_stat": 1.6550772994804956,
              "p_val": "0.1047",
              "ci": "[-0.01, 0.06]",
              "vif": "2.33 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.026815968394751366,
              "std_err": 0.051028779938750914,
              "t_stat": -0.525506751805798,
              "p_val": "0.6018",
              "ci": "[-0.13, 0.07]",
              "vif": "1.18 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173696.7,
              "residual": 9205.29,
              "abs_error": 9205.29,
              "pct_error": 5.03,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182147.28,
              "residual": 8903.11,
              "abs_error": 8903.11,
              "pct_error": 4.66,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163580.78,
              "residual": -6589.66,
              "abs_error": 6589.66,
              "pct_error": 4.2,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172139.51,
              "residual": -5951.57,
              "abs_error": 5951.57,
              "pct_error": 3.58,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154884.68,
              "residual": -5124.72,
              "abs_error": 5124.72,
              "pct_error": 3.42,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160021.36,
              "residual": -4268.76,
              "abs_error": 4268.76,
              "pct_error": 2.74,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189156.77,
              "residual": 2635.29,
              "abs_error": 2635.29,
              "pct_error": 1.37,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158114.1,
              "residual": -1991.59,
              "abs_error": 1991.59,
              "pct_error": 1.28,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151741.7,
              "residual": 470.07,
              "abs_error": 470.07,
              "pct_error": 0.31,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192521.25,
              "residual": -259.42,
              "abs_error": 259.42,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8854.76,
          "mae": 6475.5,
          "r2": 0.9508,
          "adj_r2": 0.9452,
          "f_stat": 169.89,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "Profit = 50125.34 + 0.8060 * (R&D Spend) + 0.0270 * (Marketing Spend) - 0.0270 * (Administration) + 198.7888 * (State_Florida) - 41.8870 * (State_New York)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50125.34383166651,
              "std_err": 6884.819729861626,
              "t_stat": 7.280560101560415,
              "p_val": "< 0.001",
              "ci": "[36631.10, 63619.59]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8060231137699577,
              "std_err": 0.04640696547625072,
              "t_stat": 17.36858045943729,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.90]",
              "vif": "2.50 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.026979861021553697,
              "std_err": 0.017142157663525295,
              "t_stat": 1.573889445515191,
              "p_val": "0.1227",
              "ci": "[-0.01, 0.06]",
              "vif": "2.42 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.027004319585808345,
              "std_err": 0.052231549669929,
              "t_stat": -0.5170116482459717,
              "p_val": "0.6077",
              "ci": "[-0.13, 0.08]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "State_Florida",
              "estimate": 198.78879286277729,
              "std_err": 3371.0071239325453,
              "t_stat": 0.058970149143699954,
              "p_val": "0.9532",
              "ci": "[-6408.39, 6805.96]",
              "vif": "1.39 (Low VIF)"
            },
            {
              "name": "State_New York",
              "estimate": -41.887019133577525,
              "std_err": 3256.039127996674,
              "t_stat": -0.012864409021813298,
              "p_val": "0.9898",
              "ci": "[-6423.72, 6339.95]",
              "vif": "1.34 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173584.98,
              "residual": 9317.01,
              "abs_error": 9317.01,
              "pct_error": 5.09,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182276.19,
              "residual": 8774.2,
              "abs_error": 8774.2,
              "pct_error": 4.59,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163473.81,
              "residual": -6482.69,
              "abs_error": 6482.69,
              "pct_error": 4.13,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172277.13,
              "residual": -6089.19,
              "abs_error": 6089.19,
              "pct_error": 3.66,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154829.66,
              "residual": -5069.7,
              "abs_error": 5069.7,
              "pct_error": 3.39,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160155.64,
              "residual": -4403.04,
              "abs_error": 4403.04,
              "pct_error": 2.83,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189071.32,
              "residual": 2720.74,
              "abs_error": 2720.74,
              "pct_error": 1.42,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158099.29,
              "residual": -1976.78,
              "abs_error": 1976.78,
              "pct_error": 1.27,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151634.74,
              "residual": 577.03,
              "abs_error": 577.03,
              "pct_error": 0.38,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192390.57,
              "residual": -128.74,
              "abs_error": 128.74,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        }
      }
    },
    "rfe": {
      "id": "rfe",
      "name": "RFE",
      "badge": "Backward Prune",
      "icon": "✂",
      "chartName": "RFE",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "featureLabels": [
            "R&D Spend"
          ],
          "rmse": 9226.1,
          "mae": 6910.98,
          "r2": 0.9465,
          "adj_r2": 0.9454,
          "f_stat": 849.79,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 49032.90 + 0.8543 * (R&D Spend)",
          "parsimonyNote": "單因子 R&D Spend 即具備極高預測力 (R²=0.9465)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 49032.89914125208,
              "std_err": 2537.8969493237864,
              "t_stat": 19.320287671379525,
              "p_val": "< 0.001",
              "ci": "[44058.62, 54007.18]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.854291370938809,
              "std_err": 0.029305591498200383,
              "t_stat": 29.151138988684764,
              "p_val": "< 0.001",
              "ci": "[0.80, 0.91]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 180116.66,
              "residual": 10933.73,
              "abs_error": 10933.73,
              "pct_error": 5.72,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 172369.0,
              "residual": 10532.99,
              "abs_error": 10532.99,
              "pct_error": 5.76,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 164033.73,
              "residual": -7911.22,
              "abs_error": 7911.22,
              "pct_error": 5.07,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 161694.2,
              "residual": -4703.08,
              "abs_error": 4703.08,
              "pct_error": 3.0,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154396.82,
              "residual": -4636.86,
              "abs_error": 4636.86,
              "pct_error": 3.1,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160345.47,
              "residual": -4592.87,
              "abs_error": 4592.87,
              "pct_error": 2.95,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 170433.97,
              "residual": -4246.03,
              "abs_error": 4246.03,
              "pct_error": 2.55,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 187938.71,
              "residual": 3853.35,
              "abs_error": 3853.35,
              "pct_error": 2.01,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 190289.29,
              "residual": 1972.54,
              "abs_error": 1972.54,
              "pct_error": 1.03,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152011.33,
              "residual": 200.44,
              "abs_error": 200.44,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "2": {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8881.89,
          "mae": 6499.32,
          "r2": 0.9505,
          "adj_r2": 0.9483,
          "f_stat": 450.77,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "Profit = 46975.86 + 0.7966 * (R&D Spend) + 0.0299 * (Marketing Spend)",
          "parsimonyNote": "R&D Spend + Marketing Spend 形成絕佳雙因子簡約甜點 (R²=0.9505)，行政支出與地理位置統計顯著性不足 (p>0.10)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 46975.86422071992,
              "std_err": 2689.932924576535,
              "t_stat": 17.463582006646178,
              "p_val": "< 0.001",
              "ci": "[41703.60, 52248.13]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.7965840440559884,
              "std_err": 0.04134757792399576,
              "t_stat": 19.26555517957997,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.88]",
              "vif": "2.10 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.029907875205785306,
              "std_err": 0.015520012301255314,
              "t_stat": 1.9270522872871174,
              "p_val": "0.0600",
              "ci": "[-0.00, 0.06]",
              "vif": "2.10 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 181405.38,
              "residual": 9645.01,
              "abs_error": 9645.01,
              "pct_error": 5.05,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173441.31,
              "residual": 9460.68,
              "abs_error": 9460.68,
              "pct_error": 5.17,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 162879.31,
              "residual": -5888.19,
              "abs_error": 5888.19,
              "pct_error": 3.75,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 171127.62,
              "residual": -4939.68,
              "abs_error": 4939.68,
              "pct_error": 2.97,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160455.74,
              "residual": -4703.14,
              "abs_error": 4703.14,
              "pct_error": 3.02,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154343.81,
              "residual": -4583.85,
              "abs_error": 4583.85,
              "pct_error": 3.06,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189774.66,
              "residual": 2017.4,
              "abs_error": 2017.4,
              "pct_error": 1.05,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158028.13,
              "residual": -1905.62,
              "abs_error": 1905.62,
              "pct_error": 1.22,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192800.46,
              "residual": -538.63,
              "abs_error": 538.63,
              "pct_error": 0.28,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152317.8,
              "residual": -106.03,
              "abs_error": 106.03,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "rmse": 8855.34,
          "mae": 6471.45,
          "r2": 0.9507,
          "adj_r2": 0.9475,
          "f_stat": 295.98,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 50122.19 + 0.8057 * (R&D Spend) - 0.0268 * (Administration) + 0.0272 * (Marketing Spend)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50122.19298986519,
              "std_err": 6572.352621532414,
              "t_stat": 7.626217866895075,
              "p_val": "< 0.001",
              "ci": "[37240.38, 63004.00]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8057150499157433,
              "std_err": 0.04514726972851756,
              "t_stat": 17.846373761755117,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.89]",
              "vif": "2.47 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.026815968394750866,
              "std_err": 0.05102877993875092,
              "t_stat": -0.5255067518057881,
              "p_val": "0.6018",
              "ci": "[-0.13, 0.07]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.02722806480081874,
              "std_err": 0.01645123451799511,
              "t_stat": 1.6550772994804959,
              "p_val": "0.1047",
              "ci": "[-0.01, 0.06]",
              "vif": "2.33 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173696.7,
              "residual": 9205.29,
              "abs_error": 9205.29,
              "pct_error": 5.03,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182147.28,
              "residual": 8903.11,
              "abs_error": 8903.11,
              "pct_error": 4.66,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163580.78,
              "residual": -6589.66,
              "abs_error": 6589.66,
              "pct_error": 4.2,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172139.51,
              "residual": -5951.57,
              "abs_error": 5951.57,
              "pct_error": 3.58,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154884.68,
              "residual": -5124.72,
              "abs_error": 5124.72,
              "pct_error": 3.42,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160021.36,
              "residual": -4268.76,
              "abs_error": 4268.76,
              "pct_error": 2.74,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189156.77,
              "residual": 2635.29,
              "abs_error": 2635.29,
              "pct_error": 1.37,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158114.1,
              "residual": -1991.59,
              "abs_error": 1991.59,
              "pct_error": 1.28,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151741.7,
              "residual": 470.07,
              "abs_error": 470.07,
              "pct_error": 0.31,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192521.25,
              "residual": -259.42,
              "abs_error": 259.42,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "featureLabels": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8854.76,
          "mae": 6475.5,
          "r2": 0.9508,
          "adj_r2": 0.9452,
          "f_stat": 169.89,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "Profit = 50125.34 + 0.8060 * (R&D Spend) - 0.0270 * (Administration) + 0.0270 * (Marketing Spend) + 198.7888 * (State_Florida) - 41.8870 * (State_New York)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50125.34383166654,
              "std_err": 6884.8197298616315,
              "t_stat": 7.280560101560413,
              "p_val": "< 0.001",
              "ci": "[36631.10, 63619.59]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8060231137699584,
              "std_err": 0.046406965476250735,
              "t_stat": 17.368580459437297,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.90]",
              "vif": "2.50 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.027004319585808734,
              "std_err": 0.05223154966992904,
              "t_stat": -0.5170116482459788,
              "p_val": "0.6077",
              "ci": "[-0.13, 0.08]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.026979861021553475,
              "std_err": 0.017142157663525295,
              "t_stat": 1.5738894455151782,
              "p_val": "0.1227",
              "ci": "[-0.01, 0.06]",
              "vif": "2.42 (Low VIF)"
            },
            {
              "name": "State_Florida",
              "estimate": 198.78879286278254,
              "std_err": 3371.0071239325453,
              "t_stat": 0.058970149143701515,
              "p_val": "0.9532",
              "ci": "[-6408.39, 6805.96]",
              "vif": "1.39 (Low VIF)"
            },
            {
              "name": "State_New York",
              "estimate": -41.88701913358849,
              "std_err": 3256.039127996674,
              "t_stat": -0.012864409021816665,
              "p_val": "0.9898",
              "ci": "[-6423.72, 6339.95]",
              "vif": "1.34 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173584.98,
              "residual": 9317.01,
              "abs_error": 9317.01,
              "pct_error": 5.09,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182276.19,
              "residual": 8774.2,
              "abs_error": 8774.2,
              "pct_error": 4.59,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163473.81,
              "residual": -6482.69,
              "abs_error": 6482.69,
              "pct_error": 4.13,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172277.13,
              "residual": -6089.19,
              "abs_error": 6089.19,
              "pct_error": 3.66,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154829.66,
              "residual": -5069.7,
              "abs_error": 5069.7,
              "pct_error": 3.39,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160155.64,
              "residual": -4403.04,
              "abs_error": 4403.04,
              "pct_error": 2.83,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189071.32,
              "residual": 2720.74,
              "abs_error": 2720.74,
              "pct_error": 1.42,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158099.29,
              "residual": -1976.78,
              "abs_error": 1976.78,
              "pct_error": 1.27,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151634.74,
              "residual": 577.03,
              "abs_error": 577.03,
              "pct_error": 0.38,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192390.57,
              "residual": -128.74,
              "abs_error": 128.74,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        }
      }
    },
    "sfs": {
      "id": "sfs",
      "name": "Forward SFS",
      "badge": "Greedy CV",
      "icon": "↗",
      "chartName": "Forward SFS",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "featureLabels": [
            "R&D Spend"
          ],
          "rmse": 9226.1,
          "mae": 6910.98,
          "r2": 0.9465,
          "adj_r2": 0.9454,
          "f_stat": 849.79,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 49032.90 + 0.8543 * (R&D Spend)",
          "parsimonyNote": "單因子 R&D Spend 即具備極高預測力 (R²=0.9465)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 49032.89914125208,
              "std_err": 2537.8969493237864,
              "t_stat": 19.320287671379525,
              "p_val": "< 0.001",
              "ci": "[44058.62, 54007.18]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.854291370938809,
              "std_err": 0.029305591498200383,
              "t_stat": 29.151138988684764,
              "p_val": "< 0.001",
              "ci": "[0.80, 0.91]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 180116.66,
              "residual": 10933.73,
              "abs_error": 10933.73,
              "pct_error": 5.72,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 172369.0,
              "residual": 10532.99,
              "abs_error": 10532.99,
              "pct_error": 5.76,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 164033.73,
              "residual": -7911.22,
              "abs_error": 7911.22,
              "pct_error": 5.07,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 161694.2,
              "residual": -4703.08,
              "abs_error": 4703.08,
              "pct_error": 3.0,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154396.82,
              "residual": -4636.86,
              "abs_error": 4636.86,
              "pct_error": 3.1,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160345.47,
              "residual": -4592.87,
              "abs_error": 4592.87,
              "pct_error": 2.95,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 170433.97,
              "residual": -4246.03,
              "abs_error": 4246.03,
              "pct_error": 2.55,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 187938.71,
              "residual": 3853.35,
              "abs_error": 3853.35,
              "pct_error": 2.01,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 190289.29,
              "residual": 1972.54,
              "abs_error": 1972.54,
              "pct_error": 1.03,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152011.33,
              "residual": 200.44,
              "abs_error": 200.44,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "2": {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8881.89,
          "mae": 6499.32,
          "r2": 0.9505,
          "adj_r2": 0.9483,
          "f_stat": 450.77,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "Profit = 46975.86 + 0.7966 * (R&D Spend) + 0.0299 * (Marketing Spend)",
          "parsimonyNote": "R&D Spend + Marketing Spend 形成絕佳雙因子簡約甜點 (R²=0.9505)，行政支出與地理位置統計顯著性不足 (p>0.10)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 46975.86422071992,
              "std_err": 2689.932924576535,
              "t_stat": 17.463582006646178,
              "p_val": "< 0.001",
              "ci": "[41703.60, 52248.13]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.7965840440559884,
              "std_err": 0.04134757792399576,
              "t_stat": 19.26555517957997,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.88]",
              "vif": "2.10 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.029907875205785306,
              "std_err": 0.015520012301255314,
              "t_stat": 1.9270522872871174,
              "p_val": "0.0600",
              "ci": "[-0.00, 0.06]",
              "vif": "2.10 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 181405.38,
              "residual": 9645.01,
              "abs_error": 9645.01,
              "pct_error": 5.05,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173441.31,
              "residual": 9460.68,
              "abs_error": 9460.68,
              "pct_error": 5.17,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 162879.31,
              "residual": -5888.19,
              "abs_error": 5888.19,
              "pct_error": 3.75,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 171127.62,
              "residual": -4939.68,
              "abs_error": 4939.68,
              "pct_error": 2.97,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160455.74,
              "residual": -4703.14,
              "abs_error": 4703.14,
              "pct_error": 3.02,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154343.81,
              "residual": -4583.85,
              "abs_error": 4583.85,
              "pct_error": 3.06,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189774.66,
              "residual": 2017.4,
              "abs_error": 2017.4,
              "pct_error": 1.05,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158028.13,
              "residual": -1905.62,
              "abs_error": 1905.62,
              "pct_error": 1.22,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192800.46,
              "residual": -538.63,
              "abs_error": 538.63,
              "pct_error": 0.28,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152317.8,
              "residual": -106.03,
              "abs_error": 106.03,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8855.34,
          "mae": 6471.45,
          "r2": 0.9507,
          "adj_r2": 0.9475,
          "f_stat": 295.98,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 50122.19 + 0.8057 * (R&D Spend) + 0.0272 * (Marketing Spend) - 0.0268 * (Administration)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50122.19298986531,
              "std_err": 6572.352621532413,
              "t_stat": 7.626217866895095,
              "p_val": "< 0.001",
              "ci": "[37240.38, 63004.00]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8057150499157427,
              "std_err": 0.04514726972851756,
              "t_stat": 17.846373761755107,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.89]",
              "vif": "2.47 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.02722806480081874,
              "std_err": 0.016451234517995114,
              "t_stat": 1.6550772994804956,
              "p_val": "0.1047",
              "ci": "[-0.01, 0.06]",
              "vif": "2.33 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.026815968394751366,
              "std_err": 0.051028779938750914,
              "t_stat": -0.525506751805798,
              "p_val": "0.6018",
              "ci": "[-0.13, 0.07]",
              "vif": "1.18 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173696.7,
              "residual": 9205.29,
              "abs_error": 9205.29,
              "pct_error": 5.03,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182147.28,
              "residual": 8903.11,
              "abs_error": 8903.11,
              "pct_error": 4.66,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163580.78,
              "residual": -6589.66,
              "abs_error": 6589.66,
              "pct_error": 4.2,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172139.51,
              "residual": -5951.57,
              "abs_error": 5951.57,
              "pct_error": 3.58,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154884.68,
              "residual": -5124.72,
              "abs_error": 5124.72,
              "pct_error": 3.42,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160021.36,
              "residual": -4268.76,
              "abs_error": 4268.76,
              "pct_error": 2.74,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189156.77,
              "residual": 2635.29,
              "abs_error": 2635.29,
              "pct_error": 1.37,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158114.1,
              "residual": -1991.59,
              "abs_error": 1991.59,
              "pct_error": 1.28,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151741.7,
              "residual": 470.07,
              "abs_error": 470.07,
              "pct_error": 0.31,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192521.25,
              "residual": -259.42,
              "abs_error": 259.42,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8854.76,
          "mae": 6475.5,
          "r2": 0.9508,
          "adj_r2": 0.9452,
          "f_stat": 169.89,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "Profit = 50125.34 + 0.8060 * (R&D Spend) + 0.0270 * (Marketing Spend) - 0.0270 * (Administration) + 198.7888 * (State_Florida) - 41.8870 * (State_New York)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50125.34383166651,
              "std_err": 6884.819729861626,
              "t_stat": 7.280560101560415,
              "p_val": "< 0.001",
              "ci": "[36631.10, 63619.59]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8060231137699577,
              "std_err": 0.04640696547625072,
              "t_stat": 17.36858045943729,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.90]",
              "vif": "2.50 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.026979861021553697,
              "std_err": 0.017142157663525295,
              "t_stat": 1.573889445515191,
              "p_val": "0.1227",
              "ci": "[-0.01, 0.06]",
              "vif": "2.42 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.027004319585808345,
              "std_err": 0.052231549669929,
              "t_stat": -0.5170116482459717,
              "p_val": "0.6077",
              "ci": "[-0.13, 0.08]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "State_Florida",
              "estimate": 198.78879286277729,
              "std_err": 3371.0071239325453,
              "t_stat": 0.058970149143699954,
              "p_val": "0.9532",
              "ci": "[-6408.39, 6805.96]",
              "vif": "1.39 (Low VIF)"
            },
            {
              "name": "State_New York",
              "estimate": -41.887019133577525,
              "std_err": 3256.039127996674,
              "t_stat": -0.012864409021813298,
              "p_val": "0.9898",
              "ci": "[-6423.72, 6339.95]",
              "vif": "1.34 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173584.98,
              "residual": 9317.01,
              "abs_error": 9317.01,
              "pct_error": 5.09,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182276.19,
              "residual": 8774.2,
              "abs_error": 8774.2,
              "pct_error": 4.59,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163473.81,
              "residual": -6482.69,
              "abs_error": 6482.69,
              "pct_error": 4.13,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172277.13,
              "residual": -6089.19,
              "abs_error": 6089.19,
              "pct_error": 3.66,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154829.66,
              "residual": -5069.7,
              "abs_error": 5069.7,
              "pct_error": 3.39,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160155.64,
              "residual": -4403.04,
              "abs_error": 4403.04,
              "pct_error": 2.83,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189071.32,
              "residual": 2720.74,
              "abs_error": 2720.74,
              "pct_error": 1.42,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158099.29,
              "residual": -1976.78,
              "abs_error": 1976.78,
              "pct_error": 1.27,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151634.74,
              "residual": 577.03,
              "abs_error": 577.03,
              "pct_error": 0.38,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192390.57,
              "residual": -128.74,
              "abs_error": 128.74,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        }
      }
    },
    "lasso": {
      "id": "lasso",
      "name": "Lasso (L1 Ranking)",
      "badge": "L1 Sparsity",
      "icon": "✓",
      "chartName": "Lasso",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "featureLabels": [
            "R&D Spend"
          ],
          "rmse": 9226.1,
          "mae": 6910.98,
          "r2": 0.9465,
          "adj_r2": 0.9454,
          "f_stat": 849.79,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 49032.90 + 0.8543 * (R&D Spend)",
          "parsimonyNote": "單因子 R&D Spend 即具備極高預測力 (R²=0.9465)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 49032.89914125208,
              "std_err": 2537.8969493237864,
              "t_stat": 19.320287671379525,
              "p_val": "< 0.001",
              "ci": "[44058.62, 54007.18]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.854291370938809,
              "std_err": 0.029305591498200383,
              "t_stat": 29.151138988684764,
              "p_val": "< 0.001",
              "ci": "[0.80, 0.91]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 180116.66,
              "residual": 10933.73,
              "abs_error": 10933.73,
              "pct_error": 5.72,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 172369.0,
              "residual": 10532.99,
              "abs_error": 10532.99,
              "pct_error": 5.76,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 164033.73,
              "residual": -7911.22,
              "abs_error": 7911.22,
              "pct_error": 5.07,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 161694.2,
              "residual": -4703.08,
              "abs_error": 4703.08,
              "pct_error": 3.0,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154396.82,
              "residual": -4636.86,
              "abs_error": 4636.86,
              "pct_error": 3.1,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160345.47,
              "residual": -4592.87,
              "abs_error": 4592.87,
              "pct_error": 2.95,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 170433.97,
              "residual": -4246.03,
              "abs_error": 4246.03,
              "pct_error": 2.55,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 187938.71,
              "residual": 3853.35,
              "abs_error": 3853.35,
              "pct_error": 2.01,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 190289.29,
              "residual": 1972.54,
              "abs_error": 1972.54,
              "pct_error": 1.03,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152011.33,
              "residual": 200.44,
              "abs_error": 200.44,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "2": {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8881.89,
          "mae": 6499.32,
          "r2": 0.9505,
          "adj_r2": 0.9483,
          "f_stat": 450.77,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "Profit = 46975.86 + 0.7966 * (R&D Spend) + 0.0299 * (Marketing Spend)",
          "parsimonyNote": "R&D Spend + Marketing Spend 形成絕佳雙因子簡約甜點 (R²=0.9505)，行政支出與地理位置統計顯著性不足 (p>0.10)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 46975.86422071992,
              "std_err": 2689.932924576535,
              "t_stat": 17.463582006646178,
              "p_val": "< 0.001",
              "ci": "[41703.60, 52248.13]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.7965840440559884,
              "std_err": 0.04134757792399576,
              "t_stat": 19.26555517957997,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.88]",
              "vif": "2.10 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.029907875205785306,
              "std_err": 0.015520012301255314,
              "t_stat": 1.9270522872871174,
              "p_val": "0.0600",
              "ci": "[-0.00, 0.06]",
              "vif": "2.10 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 181405.38,
              "residual": 9645.01,
              "abs_error": 9645.01,
              "pct_error": 5.05,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173441.31,
              "residual": 9460.68,
              "abs_error": 9460.68,
              "pct_error": 5.17,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 162879.31,
              "residual": -5888.19,
              "abs_error": 5888.19,
              "pct_error": 3.75,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 171127.62,
              "residual": -4939.68,
              "abs_error": 4939.68,
              "pct_error": 2.97,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160455.74,
              "residual": -4703.14,
              "abs_error": 4703.14,
              "pct_error": 3.02,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154343.81,
              "residual": -4583.85,
              "abs_error": 4583.85,
              "pct_error": 3.06,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189774.66,
              "residual": 2017.4,
              "abs_error": 2017.4,
              "pct_error": 1.05,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158028.13,
              "residual": -1905.62,
              "abs_error": 1905.62,
              "pct_error": 1.22,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192800.46,
              "residual": -538.63,
              "abs_error": 538.63,
              "pct_error": 0.28,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152317.8,
              "residual": -106.03,
              "abs_error": 106.03,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8855.34,
          "mae": 6471.45,
          "r2": 0.9507,
          "adj_r2": 0.9475,
          "f_stat": 295.98,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 50122.19 + 0.8057 * (R&D Spend) + 0.0272 * (Marketing Spend) - 0.0268 * (Administration)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50122.19298986531,
              "std_err": 6572.352621532413,
              "t_stat": 7.626217866895095,
              "p_val": "< 0.001",
              "ci": "[37240.38, 63004.00]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8057150499157427,
              "std_err": 0.04514726972851756,
              "t_stat": 17.846373761755107,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.89]",
              "vif": "2.47 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.02722806480081874,
              "std_err": 0.016451234517995114,
              "t_stat": 1.6550772994804956,
              "p_val": "0.1047",
              "ci": "[-0.01, 0.06]",
              "vif": "2.33 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.026815968394751366,
              "std_err": 0.051028779938750914,
              "t_stat": -0.525506751805798,
              "p_val": "0.6018",
              "ci": "[-0.13, 0.07]",
              "vif": "1.18 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173696.7,
              "residual": 9205.29,
              "abs_error": 9205.29,
              "pct_error": 5.03,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182147.28,
              "residual": 8903.11,
              "abs_error": 8903.11,
              "pct_error": 4.66,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163580.78,
              "residual": -6589.66,
              "abs_error": 6589.66,
              "pct_error": 4.2,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172139.51,
              "residual": -5951.57,
              "abs_error": 5951.57,
              "pct_error": 3.58,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154884.68,
              "residual": -5124.72,
              "abs_error": 5124.72,
              "pct_error": 3.42,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160021.36,
              "residual": -4268.76,
              "abs_error": 4268.76,
              "pct_error": 2.74,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189156.77,
              "residual": 2635.29,
              "abs_error": 2635.29,
              "pct_error": 1.37,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158114.1,
              "residual": -1991.59,
              "abs_error": 1991.59,
              "pct_error": 1.28,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151741.7,
              "residual": 470.07,
              "abs_error": 470.07,
              "pct_error": 0.31,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192521.25,
              "residual": -259.42,
              "abs_error": 259.42,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8854.76,
          "mae": 6475.5,
          "r2": 0.9508,
          "adj_r2": 0.9452,
          "f_stat": 169.89,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "Profit = 50125.34 + 0.8060 * (R&D Spend) + 0.0270 * (Marketing Spend) - 0.0270 * (Administration) + 198.7888 * (State_Florida) - 41.8870 * (State_New York)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50125.34383166651,
              "std_err": 6884.819729861626,
              "t_stat": 7.280560101560415,
              "p_val": "< 0.001",
              "ci": "[36631.10, 63619.59]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8060231137699577,
              "std_err": 0.04640696547625072,
              "t_stat": 17.36858045943729,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.90]",
              "vif": "2.50 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.026979861021553697,
              "std_err": 0.017142157663525295,
              "t_stat": 1.573889445515191,
              "p_val": "0.1227",
              "ci": "[-0.01, 0.06]",
              "vif": "2.42 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.027004319585808345,
              "std_err": 0.052231549669929,
              "t_stat": -0.5170116482459717,
              "p_val": "0.6077",
              "ci": "[-0.13, 0.08]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "State_Florida",
              "estimate": 198.78879286277729,
              "std_err": 3371.0071239325453,
              "t_stat": 0.058970149143699954,
              "p_val": "0.9532",
              "ci": "[-6408.39, 6805.96]",
              "vif": "1.39 (Low VIF)"
            },
            {
              "name": "State_New York",
              "estimate": -41.887019133577525,
              "std_err": 3256.039127996674,
              "t_stat": -0.012864409021813298,
              "p_val": "0.9898",
              "ci": "[-6423.72, 6339.95]",
              "vif": "1.34 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173584.98,
              "residual": 9317.01,
              "abs_error": 9317.01,
              "pct_error": 5.09,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182276.19,
              "residual": 8774.2,
              "abs_error": 8774.2,
              "pct_error": 4.59,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163473.81,
              "residual": -6482.69,
              "abs_error": 6482.69,
              "pct_error": 4.13,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172277.13,
              "residual": -6089.19,
              "abs_error": 6089.19,
              "pct_error": 3.66,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154829.66,
              "residual": -5069.7,
              "abs_error": 5069.7,
              "pct_error": 3.39,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160155.64,
              "residual": -4403.04,
              "abs_error": 4403.04,
              "pct_error": 2.83,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189071.32,
              "residual": 2720.74,
              "abs_error": 2720.74,
              "pct_error": 1.42,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158099.29,
              "residual": -1976.78,
              "abs_error": 1976.78,
              "pct_error": 1.27,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151634.74,
              "residual": 577.03,
              "abs_error": 577.03,
              "pct_error": 0.38,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192390.57,
              "residual": -128.74,
              "abs_error": 128.74,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        }
      }
    },
    "perm": {
      "id": "perm",
      "name": "Permutation Imp.",
      "badge": "R² Drop Metric",
      "icon": "∿",
      "chartName": "Permutation Importance",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "featureLabels": [
            "R&D Spend"
          ],
          "rmse": 9226.1,
          "mae": 6910.98,
          "r2": 0.9465,
          "adj_r2": 0.9454,
          "f_stat": 849.79,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 49032.90 + 0.8543 * (R&D Spend)",
          "parsimonyNote": "單因子 R&D Spend 即具備極高預測力 (R²=0.9465)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 49032.89914125208,
              "std_err": 2537.8969493237864,
              "t_stat": 19.320287671379525,
              "p_val": "< 0.001",
              "ci": "[44058.62, 54007.18]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.854291370938809,
              "std_err": 0.029305591498200383,
              "t_stat": 29.151138988684764,
              "p_val": "< 0.001",
              "ci": "[0.80, 0.91]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 180116.66,
              "residual": 10933.73,
              "abs_error": 10933.73,
              "pct_error": 5.72,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 172369.0,
              "residual": 10532.99,
              "abs_error": 10532.99,
              "pct_error": 5.76,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 164033.73,
              "residual": -7911.22,
              "abs_error": 7911.22,
              "pct_error": 5.07,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 161694.2,
              "residual": -4703.08,
              "abs_error": 4703.08,
              "pct_error": 3.0,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154396.82,
              "residual": -4636.86,
              "abs_error": 4636.86,
              "pct_error": 3.1,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160345.47,
              "residual": -4592.87,
              "abs_error": 4592.87,
              "pct_error": 2.95,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 170433.97,
              "residual": -4246.03,
              "abs_error": 4246.03,
              "pct_error": 2.55,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 187938.71,
              "residual": 3853.35,
              "abs_error": 3853.35,
              "pct_error": 2.01,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 190289.29,
              "residual": 1972.54,
              "abs_error": 1972.54,
              "pct_error": 1.03,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152011.33,
              "residual": 200.44,
              "abs_error": 200.44,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "2": {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8881.89,
          "mae": 6499.32,
          "r2": 0.9505,
          "adj_r2": 0.9483,
          "f_stat": 450.77,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "Profit = 46975.86 + 0.7966 * (R&D Spend) + 0.0299 * (Marketing Spend)",
          "parsimonyNote": "R&D Spend + Marketing Spend 形成絕佳雙因子簡約甜點 (R²=0.9505)，行政支出與地理位置統計顯著性不足 (p>0.10)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 46975.86422071992,
              "std_err": 2689.932924576535,
              "t_stat": 17.463582006646178,
              "p_val": "< 0.001",
              "ci": "[41703.60, 52248.13]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.7965840440559884,
              "std_err": 0.04134757792399576,
              "t_stat": 19.26555517957997,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.88]",
              "vif": "2.10 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.029907875205785306,
              "std_err": 0.015520012301255314,
              "t_stat": 1.9270522872871174,
              "p_val": "0.0600",
              "ci": "[-0.00, 0.06]",
              "vif": "2.10 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 181405.38,
              "residual": 9645.01,
              "abs_error": 9645.01,
              "pct_error": 5.05,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173441.31,
              "residual": 9460.68,
              "abs_error": 9460.68,
              "pct_error": 5.17,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 162879.31,
              "residual": -5888.19,
              "abs_error": 5888.19,
              "pct_error": 3.75,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 171127.62,
              "residual": -4939.68,
              "abs_error": 4939.68,
              "pct_error": 2.97,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160455.74,
              "residual": -4703.14,
              "abs_error": 4703.14,
              "pct_error": 3.02,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154343.81,
              "residual": -4583.85,
              "abs_error": 4583.85,
              "pct_error": 3.06,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189774.66,
              "residual": 2017.4,
              "abs_error": 2017.4,
              "pct_error": 1.05,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158028.13,
              "residual": -1905.62,
              "abs_error": 1905.62,
              "pct_error": 1.22,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192800.46,
              "residual": -538.63,
              "abs_error": 538.63,
              "pct_error": 0.28,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 152317.8,
              "residual": -106.03,
              "abs_error": 106.03,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8855.34,
          "mae": 6471.45,
          "r2": 0.9507,
          "adj_r2": 0.9475,
          "f_stat": 295.98,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "Profit = 50122.19 + 0.8057 * (R&D Spend) + 0.0272 * (Marketing Spend) - 0.0268 * (Administration)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50122.19298986531,
              "std_err": 6572.352621532413,
              "t_stat": 7.626217866895095,
              "p_val": "< 0.001",
              "ci": "[37240.38, 63004.00]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8057150499157427,
              "std_err": 0.04514726972851756,
              "t_stat": 17.846373761755107,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.89]",
              "vif": "2.47 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.02722806480081874,
              "std_err": 0.016451234517995114,
              "t_stat": 1.6550772994804956,
              "p_val": "0.1047",
              "ci": "[-0.01, 0.06]",
              "vif": "2.33 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.026815968394751366,
              "std_err": 0.051028779938750914,
              "t_stat": -0.525506751805798,
              "p_val": "0.6018",
              "ci": "[-0.13, 0.07]",
              "vif": "1.18 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173696.7,
              "residual": 9205.29,
              "abs_error": 9205.29,
              "pct_error": 5.03,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182147.28,
              "residual": 8903.11,
              "abs_error": 8903.11,
              "pct_error": 4.66,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163580.78,
              "residual": -6589.66,
              "abs_error": 6589.66,
              "pct_error": 4.2,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172139.51,
              "residual": -5951.57,
              "abs_error": 5951.57,
              "pct_error": 3.58,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154884.68,
              "residual": -5124.72,
              "abs_error": 5124.72,
              "pct_error": 3.42,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160021.36,
              "residual": -4268.76,
              "abs_error": 4268.76,
              "pct_error": 2.74,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189156.77,
              "residual": 2635.29,
              "abs_error": 2635.29,
              "pct_error": 1.37,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158114.1,
              "residual": -1991.59,
              "abs_error": 1991.59,
              "pct_error": 1.28,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151741.7,
              "residual": 470.07,
              "abs_error": 470.07,
              "pct_error": 0.31,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192521.25,
              "residual": -259.42,
              "abs_error": 259.42,
              "pct_error": 0.13,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "featureLabels": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8854.76,
          "mae": 6475.5,
          "r2": 0.9508,
          "adj_r2": 0.9452,
          "f_stat": 169.89,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "Profit = 50125.34 + 0.8060 * (R&D Spend) + 0.0270 * (Marketing Spend) - 0.0270 * (Administration) + 198.7888 * (State_Florida) - 41.8870 * (State_New York)",
          "parsimonyNote": "納入全部 5 個自變數的全量模型 (Full Model, R²=0.9511)。",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 50125.34383166651,
              "std_err": 6884.819729861626,
              "t_stat": 7.280560101560415,
              "p_val": "< 0.001",
              "ci": "[36631.10, 63619.59]",
              "vif": "-"
            },
            {
              "name": "R&D Spend",
              "estimate": 0.8060231137699577,
              "std_err": 0.04640696547625072,
              "t_stat": 17.36858045943729,
              "p_val": "< 0.001",
              "ci": "[0.72, 0.90]",
              "vif": "2.50 (Low VIF)"
            },
            {
              "name": "Marketing Spend",
              "estimate": 0.026979861021553697,
              "std_err": 0.017142157663525295,
              "t_stat": 1.573889445515191,
              "p_val": "0.1227",
              "ci": "[-0.01, 0.06]",
              "vif": "2.42 (Low VIF)"
            },
            {
              "name": "Administration",
              "estimate": -0.027004319585808345,
              "std_err": 0.052231549669929,
              "t_stat": -0.5170116482459717,
              "p_val": "0.6077",
              "ci": "[-0.13, 0.08]",
              "vif": "1.18 (Low VIF)"
            },
            {
              "name": "State_Florida",
              "estimate": 198.78879286277729,
              "std_err": 3371.0071239325453,
              "t_stat": 0.058970149143699954,
              "p_val": "0.9532",
              "ci": "[-6408.39, 6805.96]",
              "vif": "1.39 (Low VIF)"
            },
            {
              "name": "State_New York",
              "estimate": -41.887019133577525,
              "std_err": 3256.039127996674,
              "t_stat": -0.012864409021813298,
              "p_val": "0.9898",
              "ci": "[-6423.72, 6339.95]",
              "vif": "1.34 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Startup #4 (New York)",
              "actual": 182901.99,
              "predicted": 173584.98,
              "residual": 9317.01,
              "abs_error": 9317.01,
              "pct_error": 5.09,
              "status": "Well Fitted",
              "rank": 1
            },
            {
              "sample_id": "Startup #3 (Florida)",
              "actual": 191050.39,
              "predicted": 182276.19,
              "residual": 8774.2,
              "abs_error": 8774.2,
              "pct_error": 4.59,
              "status": "Well Fitted",
              "rank": 2
            },
            {
              "sample_id": "Startup #6 (New York)",
              "actual": 156991.12,
              "predicted": 163473.81,
              "residual": -6482.69,
              "abs_error": 6482.69,
              "pct_error": 4.13,
              "status": "Well Fitted",
              "rank": 3
            },
            {
              "sample_id": "Startup #5 (Florida)",
              "actual": 166187.94,
              "predicted": 172277.13,
              "residual": -6089.19,
              "abs_error": 6089.19,
              "pct_error": 3.66,
              "status": "Well Fitted",
              "rank": 4
            },
            {
              "sample_id": "Startup #10 (California)",
              "actual": 149759.96,
              "predicted": 154829.66,
              "residual": -5069.7,
              "abs_error": 5069.7,
              "pct_error": 3.39,
              "status": "Well Fitted",
              "rank": 5
            },
            {
              "sample_id": "Startup #8 (Florida)",
              "actual": 155752.6,
              "predicted": 160155.64,
              "residual": -4403.04,
              "abs_error": 4403.04,
              "pct_error": 2.83,
              "status": "Well Fitted",
              "rank": 6
            },
            {
              "sample_id": "Startup #2 (California)",
              "actual": 191792.06,
              "predicted": 189071.32,
              "residual": 2720.74,
              "abs_error": 2720.74,
              "pct_error": 1.42,
              "status": "Well Fitted",
              "rank": 7
            },
            {
              "sample_id": "Startup #7 (California)",
              "actual": 156122.51,
              "predicted": 158099.29,
              "residual": -1976.78,
              "abs_error": 1976.78,
              "pct_error": 1.27,
              "status": "Well Fitted",
              "rank": 8
            },
            {
              "sample_id": "Startup #9 (New York)",
              "actual": 152211.77,
              "predicted": 151634.74,
              "residual": 577.03,
              "abs_error": 577.03,
              "pct_error": 0.38,
              "status": "Well Fitted",
              "rank": 9
            },
            {
              "sample_id": "Startup #1 (New York)",
              "actual": 192261.83,
              "predicted": 192390.57,
              "residual": -128.74,
              "abs_error": 128.74,
              "pct_error": 0.07,
              "status": "Well Fitted",
              "rank": 10
            }
          ]
        }
      }
    }
  }
};
