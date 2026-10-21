// Flood Probability Feature Selection & Parsimony Analysis Data
const MODEL_DATA = {
  "methods": {
    "skb": {
      "id": "skb",
      "name": "SelectKBest",
      "badge": "F-Score Filter",
      "icon": "\ud83d\udcca",
      "chartName": "SelectKBest",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "Landslides"
          ],
          "featureLabels": [
            "Landslides"
          ],
          "rmse": 0.0434,
          "mae": 0.0354,
          "r2": 0.051,
          "adj_r2": 0.0505,
          "f_stat": 464.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.3217 + 0.0048 * (Landslides)",
          "parsimonyNote": "Single Factor Model: Captures fundamental monsoon intensity, but lacks hydrological watershed context.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.3216983976252046,
              "std_err": 0.0012141187141571177,
              "t_stat": 264.9645326063016,
              "p_val": "< 0.001",
              "ci": "[0.3193, 0.3241]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004811788942532671,
              "std_err": 0.00022315851551112144,
              "t_stat": 21.56220178966403,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3794,
              "residual": -0.0944,
              "abs_error": 0.0944,
              "pct_error": 33.14,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3554,
              "residual": -0.0704,
              "abs_error": 0.0704,
              "pct_error": 24.7,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3506,
              "residual": 0.0514,
              "abs_error": 0.0514,
              "pct_error": 12.78,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3361,
              "residual": -0.0511,
              "abs_error": 0.0511,
              "pct_error": 17.94,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3361,
              "residual": -0.0511,
              "abs_error": 0.0511,
              "pct_error": 17.94,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3361,
              "residual": -0.0374,
              "abs_error": 0.0374,
              "pct_error": 12.54,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3602,
              "residual": 0.0151,
              "abs_error": 0.0151,
              "pct_error": 4.02,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.365,
              "residual": -0.0145,
              "abs_error": 0.0145,
              "pct_error": 4.13,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3506,
              "residual": 0.0131,
              "abs_error": 0.0131,
              "pct_error": 3.59,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3409,
              "residual": 0.0101,
              "abs_error": 0.0101,
              "pct_error": 2.89,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "Landslides",
            "TopographyDrainage",
            "Siltation"
          ],
          "featureLabels": [
            "Landslides",
            "TopographyDrainage",
            "Siltation"
          ],
          "rmse": 0.0411,
          "mae": 0.0334,
          "r2": 0.1501,
          "adj_r2": 0.1489,
          "f_stat": 516.4,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2748 + 0.0048 * (Landslides) + 0.0047 * (TopographyDrainage) + 0.0048 * (Siltation)",
          "parsimonyNote": "3-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.27476845746166895,
              "std_err": 0.0018590662167603806,
              "t_stat": 147.79917734209707,
              "p_val": "< 0.001",
              "ci": "[0.2711, 0.2784]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004814910388315894,
              "std_err": 0.0002101296301763106,
              "t_stat": 22.914000202046292,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004749261212542705,
              "std_err": 0.00020965490045932612,
              "t_stat": 22.652755562296434,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004773818546644026,
              "std_err": 0.00021251702207440324,
              "t_stat": 22.46322906300037,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.385,
              "residual": -0.1,
              "abs_error": 0.1,
              "pct_error": 35.07,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3511,
              "residual": -0.0661,
              "abs_error": 0.0661,
              "pct_error": 23.19,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3322,
              "residual": -0.0472,
              "abs_error": 0.0472,
              "pct_error": 16.58,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3321,
              "residual": -0.0471,
              "abs_error": 0.0471,
              "pct_error": 16.52,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3655,
              "residual": 0.0364,
              "abs_error": 0.0364,
              "pct_error": 9.05,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3514,
              "residual": 0.0239,
              "abs_error": 0.0239,
              "pct_error": 6.36,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3225,
              "residual": -0.0238,
              "abs_error": 0.0238,
              "pct_error": 7.97,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3418,
              "residual": 0.0219,
              "abs_error": 0.0219,
              "pct_error": 6.02,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3417,
              "residual": 0.0094,
              "abs_error": 0.0094,
              "pct_error": 2.68,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3467,
              "residual": 0.0038,
              "abs_error": 0.0038,
              "pct_error": 1.1,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems"
          ],
          "featureLabels": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems"
          ],
          "rmse": 0.0391,
          "mae": 0.0317,
          "r2": 0.232,
          "adj_r2": 0.2301,
          "f_stat": 578.8,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2290 + 0.0048 * (Landslides) + 0.0048 * (TopographyDrainage) + 0.0048 * (Siltation) + 0.0047 * (Deforestation) + ... [1 more features]",
          "parsimonyNote": "5-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.22904530657705763,
              "std_err": 0.0022102909519522026,
              "t_stat": 103.62676749626884,
              "p_val": "< 0.001",
              "ci": "[0.2247, 0.2334]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.00478185245588966,
              "std_err": 0.0001967478474937108,
              "t_stat": 24.30447151927553,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004808101245539944,
              "std_err": 0.00019633256631970819,
              "t_stat": 24.48957570141688,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004774254220585054,
              "std_err": 0.00019898236221331221,
              "t_stat": 23.993353820309856,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004706331597088227,
              "std_err": 0.00019699335236605142,
              "t_stat": 23.890814286681923,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004559143627914487,
              "std_err": 0.00019794753099720285,
              "t_stat": 23.032081304307408,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0049]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3761,
              "residual": -0.0911,
              "abs_error": 0.0911,
              "pct_error": 31.98,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3383,
              "residual": -0.0533,
              "abs_error": 0.0533,
              "pct_error": 18.72,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3375,
              "residual": -0.0525,
              "abs_error": 0.0525,
              "pct_error": 18.43,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3236,
              "residual": -0.0386,
              "abs_error": 0.0386,
              "pct_error": 13.54,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3848,
              "residual": -0.0342,
              "abs_error": 0.0342,
              "pct_error": 9.77,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3331,
              "residual": 0.0305,
              "abs_error": 0.0305,
              "pct_error": 8.39,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3471,
              "residual": 0.0282,
              "abs_error": 0.0282,
              "pct_error": 7.51,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.323,
              "residual": -0.0243,
              "abs_error": 0.0243,
              "pct_error": 8.14,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.385,
              "residual": 0.0169,
              "abs_error": 0.0169,
              "pct_error": 4.2,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3424,
              "residual": 0.0087,
              "abs_error": 0.0087,
              "pct_error": 2.48,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "10": {
          "k": 10,
          "features": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore"
          ],
          "featureLabels": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore"
          ],
          "rmse": 0.0315,
          "mae": 0.0254,
          "r2": 0.5007,
          "adj_r2": 0.4982,
          "f_stat": 788.8,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.1229 + 0.0048 * (Landslides) + 0.0046 * (TopographyDrainage) + 0.0046 * (Siltation) + 0.0047 * (Deforestation) + ... [6 more features]",
          "parsimonyNote": "10-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.12292656609195643,
              "std_err": 0.002534193027726515,
              "t_stat": 48.507183449335265,
              "p_val": "< 0.001",
              "ci": "[0.1180, 0.1279]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004751105502566147,
              "std_err": 0.00016297046156047739,
              "t_stat": 29.153169580998206,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004550710680462461,
              "std_err": 0.00016267689066111685,
              "t_stat": 27.97392218383588,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004611700405684269,
              "std_err": 0.00016483387564277302,
              "t_stat": 27.977867945535166,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.0046542402071521015,
              "std_err": 0.00016319082046082874,
              "t_stat": 28.520232902862787,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004471009865612351,
              "std_err": 0.00016395962820262716,
              "t_stat": 27.268968066254196,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004460465949177483,
              "std_err": 0.00016237190422709432,
              "t_stat": 27.470675856206313,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004654905896598414,
              "std_err": 0.00016488707925452274,
              "t_stat": 28.230871197694125,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.00427028742449298,
              "std_err": 0.00016477756648964007,
              "t_stat": 25.915466015584485,
              "p_val": "< 0.001",
              "ci": "[0.0039, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.00449066719560284,
              "std_err": 0.0001637967240802475,
              "t_stat": 27.416098953253588,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004232110099948019,
              "std_err": 0.0001651603295056791,
              "t_stat": 25.624253188490382,
              "p_val": "< 0.001",
              "ci": "[0.0039, 0.0046]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3646,
              "residual": -0.0796,
              "abs_error": 0.0796,
              "pct_error": 27.95,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3538,
              "residual": -0.0688,
              "abs_error": 0.0688,
              "pct_error": 24.15,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3359,
              "residual": 0.0394,
              "abs_error": 0.0394,
              "pct_error": 10.5,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3218,
              "residual": -0.0368,
              "abs_error": 0.0368,
              "pct_error": 12.9,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3209,
              "residual": -0.0359,
              "abs_error": 0.0359,
              "pct_error": 12.58,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3244,
              "residual": -0.0257,
              "abs_error": 0.0257,
              "pct_error": 8.61,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3382,
              "residual": 0.0255,
              "abs_error": 0.0255,
              "pct_error": 7.01,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3817,
              "residual": 0.0202,
              "abs_error": 0.0202,
              "pct_error": 5.03,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3645,
              "residual": -0.0139,
              "abs_error": 0.0139,
              "pct_error": 3.97,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3389,
              "residual": 0.0121,
              "abs_error": 0.0121,
              "pct_error": 3.46,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "15": {
          "k": 15,
          "features": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore",
            "MonsoonIntensity",
            "DamsQuality",
            "ClimateChange",
            "PoliticalFactors",
            "IneffectiveDisasterPreparedness"
          ],
          "featureLabels": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore",
            "MonsoonIntensity",
            "DamsQuality",
            "ClimateChange",
            "PoliticalFactors",
            "IneffectiveDisasterPreparedness"
          ],
          "rmse": 0.0244,
          "mae": 0.0196,
          "r2": 0.701,
          "adj_r2": 0.6988,
          "f_stat": 1372.0,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "FloodProbability = 0.0164 + 0.0047 * (Landslides) + 0.0044 * (TopographyDrainage) + 0.0046 * (Siltation) + 0.0047 * (Deforestation) + ... [11 more features]",
          "parsimonyNote": "Occam's Razor Sweet Spot: 15 features achieve R\u00b2 0.597 with average VIF < 1.003 and zero multicollinearity.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.0163565883812416,
              "std_err": 0.0023124013743912823,
              "t_stat": 7.073420973704151,
              "p_val": "< 0.001",
              "ci": "[0.0118, 0.0209]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004655803069848304,
              "std_err": 0.00012152841927481173,
              "t_stat": 38.31040589214079,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004413781336302698,
              "std_err": 0.00012131965731155948,
              "t_stat": 36.38141941802326,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004565797881525561,
              "std_err": 0.00012290027589414052,
              "t_stat": 37.15042825012277,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004654042627778911,
              "std_err": 0.00012167584751502023,
              "t_stat": 38.24951888832658,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004500920235607346,
              "std_err": 0.00012224002448500286,
              "t_stat": 36.82034795534212,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004508757324050773,
              "std_err": 0.00012107282114533495,
              "t_stat": 37.240045134807694,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004436837425717708,
              "std_err": 0.00012298372557598242,
              "t_stat": 36.076622373718216,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004495129580495402,
              "std_err": 0.00012288873738584963,
              "t_stat": 36.57885723393401,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004482083659609093,
              "std_err": 0.0001221255995653566,
              "t_stat": 36.70060720734039,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004266678877942608,
              "std_err": 0.00012316139405046315,
              "t_stat": 34.642989476023736,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004531432184861073,
              "std_err": 0.00012270161750550858,
              "t_stat": 36.93050081151243,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.00427391221412964,
              "std_err": 0.00012213738590888135,
              "t_stat": 34.99266160255078,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.0042399955091457385,
              "std_err": 0.0001228247377530216,
              "t_stat": 34.52069661790449,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004513530265267891,
              "std_err": 0.0001225959221398583,
              "t_stat": 36.81631645234353,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.004286348724490524,
              "std_err": 0.00012340230762402447,
              "t_stat": 34.7347534014513,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0045]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3297,
              "residual": -0.0447,
              "abs_error": 0.0447,
              "pct_error": 15.7,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3401,
              "residual": -0.0414,
              "abs_error": 0.0414,
              "pct_error": 13.87,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3262,
              "residual": -0.0412,
              "abs_error": 0.0412,
              "pct_error": 14.45,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3613,
              "residual": 0.0406,
              "abs_error": 0.0406,
              "pct_error": 10.1,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3101,
              "residual": -0.0251,
              "abs_error": 0.0251,
              "pct_error": 8.81,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3411,
              "residual": 0.0226,
              "abs_error": 0.0226,
              "pct_error": 6.2,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3561,
              "residual": 0.0192,
              "abs_error": 0.0192,
              "pct_error": 5.11,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3013,
              "residual": -0.0163,
              "abs_error": 0.0163,
              "pct_error": 5.71,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3661,
              "residual": -0.0156,
              "abs_error": 0.0156,
              "pct_error": 4.45,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3595,
              "residual": -0.0084,
              "abs_error": 0.0084,
              "pct_error": 2.39,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "20": {
          "k": 20,
          "features": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore",
            "MonsoonIntensity",
            "DamsQuality",
            "ClimateChange",
            "PoliticalFactors",
            "IneffectiveDisasterPreparedness",
            "Urbanization",
            "RiverManagement",
            "Encroachments",
            "DeterioratingInfrastructure",
            "WetlandLoss"
          ],
          "featureLabels": [
            "Landslides",
            "TopographyDrainage",
            "Siltation",
            "Deforestation",
            "DrainageSystems",
            "AgriculturalPractices",
            "CoastalVulnerability",
            "InadequatePlanning",
            "Watersheds",
            "PopulationScore",
            "MonsoonIntensity",
            "DamsQuality",
            "ClimateChange",
            "PoliticalFactors",
            "IneffectiveDisasterPreparedness",
            "Urbanization",
            "RiverManagement",
            "Encroachments",
            "DeterioratingInfrastructure",
            "WetlandLoss"
          ],
          "rmse": 0.0101,
          "mae": 0.0071,
          "r2": 0.9483,
          "adj_r2": 0.9478,
          "f_stat": 7317.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "FloodProbability = -0.0966 + 0.0046 * (Landslides) + 0.0045 * (TopographyDrainage) + 0.0045 * (Siltation) + 0.0045 * (Deforestation) + ... [16 more features]",
          "parsimonyNote": "Full Environmental Model: All 20 physical factors capture the complete flood risk spectrum (R\u00b2 0.845, RMSE 0.020).",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": -0.096589872212692,
              "std_err": 0.0011630138468558054,
              "t_stat": -83.05135185949987,
              "p_val": "< 0.001",
              "ci": "[-0.0989, -0.0943]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004568178899927588,
              "std_err": 5.2309569155353276e-05,
              "t_stat": 87.32969844122847,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.0045187841254333205,
              "std_err": 5.220148978335975e-05,
              "t_stat": 86.56427516123826,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004501352160665365,
              "std_err": 5.290145850179907e-05,
              "t_stat": 85.08937727137113,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004540244560985426,
              "std_err": 5.2360925622794605e-05,
              "t_stat": 86.71054812310066,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004463905297886229,
              "std_err": 5.259858095381475e-05,
              "t_stat": 84.86740929010712,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004446731295451648,
              "std_err": 5.210245304802268e-05,
              "t_stat": 85.3459105150598,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004501998138314808,
              "std_err": 5.292457641326438e-05,
              "t_stat": 85.06441512466183,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004523317569668755,
              "std_err": 5.288051589212811e-05,
              "t_stat": 85.53845387771838,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.0044317765558796116,
              "std_err": 5.255362611503063e-05,
              "t_stat": 84.3286540528951,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.0044490957743450145,
              "std_err": 5.301512038726498e-05,
              "t_stat": 83.92126136553588,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004552705178296012,
              "std_err": 5.278919072820989e-05,
              "t_stat": 86.24313264690953,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004565469442790189,
              "std_err": 5.2586974581808675e-05,
              "t_stat": 86.81749576005299,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.00444478759273594,
              "std_err": 5.287650334561432e-05,
              "t_stat": 84.05978670116806,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004508120170525539,
              "std_err": 5.275000515477294e-05,
              "t_stat": 85.46198540262388,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.00442764722684803,
              "std_err": 5.310051056920025e-05,
              "t_stat": 83.38238520471377,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.004382468381361204,
              "std_err": 5.233779669834242e-05,
              "t_stat": 83.7342925729237,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.00448002329331058,
              "std_err": 5.283909841233894e-05,
              "t_stat": 84.78614185181496,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004483704719155642,
              "std_err": 5.2851808133912964e-05,
              "t_stat": 84.83540823797514,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004501702550315756,
              "std_err": 5.2546278030712854e-05,
              "t_stat": 85.67119725748319,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.00443480008290549,
              "std_err": 5.2480418816530006e-05,
              "t_stat": 84.50390036728594,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.254,
              "residual": 0.031,
              "abs_error": 0.031,
              "pct_error": 10.88,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2667,
              "residual": 0.0183,
              "abs_error": 0.0183,
              "pct_error": 6.42,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3073,
              "residual": -0.0086,
              "abs_error": 0.0086,
              "pct_error": 2.88,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3572,
              "residual": -0.0066,
              "abs_error": 0.0066,
              "pct_error": 1.89,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.37,
              "residual": 0.0053,
              "abs_error": 0.0053,
              "pct_error": 1.4,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2897,
              "residual": -0.0047,
              "abs_error": 0.0047,
              "pct_error": 1.65,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2814,
              "residual": 0.0036,
              "abs_error": 0.0036,
              "pct_error": 1.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3657,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.57,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3518,
              "residual": -0.0008,
              "abs_error": 0.0008,
              "pct_error": 0.22,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.4016,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.09,
              "status": "In Range",
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
      "icon": "\u2702",
      "chartName": "RFE",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "TopographyDrainage"
          ],
          "featureLabels": [
            "TopographyDrainage"
          ],
          "rmse": 0.0437,
          "mae": 0.0358,
          "r2": 0.0402,
          "adj_r2": 0.0397,
          "f_stat": 457.3,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.3221 + 0.0048 * (TopographyDrainage)",
          "parsimonyNote": "Single Factor Model: Captures fundamental monsoon intensity, but lacks hydrological watershed context.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.322052045138548,
              "std_err": 0.00120756234520433,
              "t_stat": 266.6959982791232,
              "p_val": "< 0.001",
              "ci": "[0.3197, 0.3244]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004763247841705539,
              "std_err": 0.00022275113650107618,
              "t_stat": 21.383719591852792,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0052]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3554,
              "residual": -0.0704,
              "abs_error": 0.0704,
              "pct_error": 24.7,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3411,
              "residual": -0.0561,
              "abs_error": 0.0561,
              "pct_error": 19.69,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3411,
              "residual": -0.0561,
              "abs_error": 0.0561,
              "pct_error": 19.69,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3411,
              "residual": -0.0561,
              "abs_error": 0.0561,
              "pct_error": 19.69,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3459,
              "residual": -0.0472,
              "abs_error": 0.0472,
              "pct_error": 15.8,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3554,
              "residual": 0.0465,
              "abs_error": 0.0465,
              "pct_error": 11.58,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3363,
              "residual": 0.0389,
              "abs_error": 0.0389,
              "pct_error": 10.37,
              "status": "High Residual",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3411,
              "residual": 0.0225,
              "abs_error": 0.0225,
              "pct_error": 6.19,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3316,
              "residual": 0.019,
              "abs_error": 0.019,
              "pct_error": 5.41,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3411,
              "residual": 0.01,
              "abs_error": 0.01,
              "pct_error": 2.84,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides"
          ],
          "featureLabels": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides"
          ],
          "rmse": 0.0418,
          "mae": 0.0341,
          "r2": 0.1211,
          "adj_r2": 0.1198,
          "f_stat": 524.8,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2740 + 0.0049 * (TopographyDrainage) + 0.0048 * (Deforestation) + 0.0048 * (Landslides)",
          "parsimonyNote": "3-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.27395587787115405,
              "std_err": 0.0018646605163591744,
              "t_stat": 146.91997576377284,
              "p_val": "< 0.001",
              "ci": "[0.2703, 0.2776]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004864249062645918,
              "std_err": 0.00020940337016904194,
              "t_stat": 23.229086803709166,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0053]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.0048229110338344665,
              "std_err": 0.0002100606451266904,
              "t_stat": 22.95961259628477,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004814930755302167,
              "std_err": 0.0002098514609408096,
              "t_stat": 22.94447097826143,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3705,
              "residual": -0.0855,
              "abs_error": 0.0855,
              "pct_error": 29.99,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3466,
              "residual": -0.0616,
              "abs_error": 0.0616,
              "pct_error": 21.6,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3464,
              "residual": -0.0614,
              "abs_error": 0.0614,
              "pct_error": 21.55,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3368,
              "residual": -0.0518,
              "abs_error": 0.0518,
              "pct_error": 18.17,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3897,
              "residual": -0.0392,
              "abs_error": 0.0392,
              "pct_error": 11.18,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3415,
              "residual": 0.0337,
              "abs_error": 0.0337,
              "pct_error": 8.99,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3272,
              "residual": -0.0285,
              "abs_error": 0.0285,
              "pct_error": 9.54,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3755,
              "residual": 0.0265,
              "abs_error": 0.0265,
              "pct_error": 6.58,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3416,
              "residual": 0.022,
              "abs_error": 0.022,
              "pct_error": 6.06,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3368,
              "residual": 0.0143,
              "abs_error": 0.0143,
              "pct_error": 4.07,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability"
          ],
          "featureLabels": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability"
          ],
          "rmse": 0.039,
          "mae": 0.0315,
          "r2": 0.2359,
          "adj_r2": 0.234,
          "f_stat": 576.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2288 + 0.0048 * (TopographyDrainage) + 0.0048 * (Deforestation) + 0.0048 * (Landslides) + 0.0048 * (Siltation) + ... [1 more features]",
          "parsimonyNote": "5-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.2288190912791102,
              "std_err": 0.0022188892175394647,
              "t_stat": 103.12326071548928,
              "p_val": "< 0.001",
              "ci": "[0.2245, 0.2332]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.0047870805914862185,
              "std_err": 0.00019643976956827179,
              "t_stat": 24.369202845264432,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004785541285719767,
              "std_err": 0.00019704549352454032,
              "t_stat": 24.28647922934492,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.0047679012679974694,
              "std_err": 0.00019685163359233843,
              "t_stat": 24.220785883196445,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004774771476258056,
              "std_err": 0.00019908395824909828,
              "t_stat": 23.983707769582097,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004549117969271141,
              "std_err": 0.00019915032352468316,
              "t_stat": 22.84263409046038,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0049]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.385,
              "residual": -0.1,
              "abs_error": 0.1,
              "pct_error": 35.1,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.352,
              "residual": -0.067,
              "abs_error": 0.067,
              "pct_error": 23.49,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3508,
              "residual": -0.0658,
              "abs_error": 0.0658,
              "pct_error": 23.07,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3239,
              "residual": 0.0397,
              "abs_error": 0.0397,
              "pct_error": 10.92,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3378,
              "residual": 0.0375,
              "abs_error": 0.0375,
              "pct_error": 10.0,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3194,
              "residual": -0.0344,
              "abs_error": 0.0344,
              "pct_error": 12.07,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3808,
              "residual": -0.0303,
              "abs_error": 0.0303,
              "pct_error": 8.64,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3333,
              "residual": 0.0178,
              "abs_error": 0.0178,
              "pct_error": 5.07,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3852,
              "residual": 0.0168,
              "abs_error": 0.0168,
              "pct_error": 4.17,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3046,
              "residual": -0.0059,
              "abs_error": 0.0059,
              "pct_error": 1.98,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "10": {
          "k": 10,
          "features": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity"
          ],
          "featureLabels": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity"
          ],
          "rmse": 0.0324,
          "mae": 0.026,
          "r2": 0.4708,
          "adj_r2": 0.4682,
          "f_stat": 824.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.1169 + 0.0047 * (TopographyDrainage) + 0.0048 * (Deforestation) + 0.0047 * (Landslides) + 0.0047 * (Siltation) + ... [6 more features]",
          "parsimonyNote": "10-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.1169108809961062,
              "std_err": 0.0025445076602351644,
              "t_stat": 45.946366294413615,
              "p_val": "< 0.001",
              "ci": "[0.1119, 0.1219]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.0046921111888711346,
              "std_err": 0.00016078539447425173,
              "t_stat": 29.182446603522386,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004794019131539561,
              "std_err": 0.00016133386921128544,
              "t_stat": 29.71489591724374,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004705117724825725,
              "std_err": 0.000161149054127542,
              "t_stat": 29.197302772263512,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004744879980607517,
              "std_err": 0.00016294513235740136,
              "t_stat": 29.119495083781757,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004555150508615756,
              "std_err": 0.00016304357457215939,
              "t_stat": 27.9382399494667,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004594000136510827,
              "std_err": 0.00016193071434830725,
              "t_stat": 28.370159144912403,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004588584815310359,
              "std_err": 0.00016209721972191573,
              "t_stat": 28.30760961342989,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004657287058740972,
              "std_err": 0.0001605494227438196,
              "t_stat": 29.00843228924195,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004531874498664208,
              "std_err": 0.00016255010910096271,
              "t_stat": 27.879861316176548,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004528073041330966,
              "std_err": 0.00016269473389586952,
              "t_stat": 27.83171239106667,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3572,
              "residual": -0.0722,
              "abs_error": 0.0722,
              "pct_error": 25.35,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3545,
              "residual": -0.0695,
              "abs_error": 0.0695,
              "pct_error": 24.4,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3077,
              "residual": 0.0559,
              "abs_error": 0.0559,
              "pct_error": 15.39,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3124,
              "residual": -0.0274,
              "abs_error": 0.0274,
              "pct_error": 9.63,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3123,
              "residual": -0.0273,
              "abs_error": 0.0273,
              "pct_error": 9.6,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3203,
              "residual": -0.0216,
              "abs_error": 0.0216,
              "pct_error": 7.23,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.369,
              "residual": -0.0185,
              "abs_error": 0.0185,
              "pct_error": 5.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3622,
              "residual": 0.013,
              "abs_error": 0.013,
              "pct_error": 3.47,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3912,
              "residual": 0.0107,
              "abs_error": 0.0107,
              "pct_error": 2.66,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3487,
              "residual": 0.0024,
              "abs_error": 0.0024,
              "pct_error": 0.68,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "15": {
          "k": 15,
          "features": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "InadequatePlanning",
            "WetlandLoss",
            "DamsQuality"
          ],
          "featureLabels": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "InadequatePlanning",
            "WetlandLoss",
            "DamsQuality"
          ],
          "rmse": 0.0248,
          "mae": 0.0197,
          "r2": 0.6918,
          "adj_r2": 0.6894,
          "f_stat": 1431.5,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "FloodProbability = 0.0104 + 0.0045 * (TopographyDrainage) + 0.0047 * (Deforestation) + 0.0046 * (Landslides) + 0.0046 * (Siltation) + ... [11 more features]",
          "parsimonyNote": "Occam's Razor Sweet Spot: 15 features achieve R\u00b2 0.597 with average VIF < 1.003 and zero multicollinearity.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.010410847892689895,
              "std_err": 0.0023052275460183473,
              "t_stat": 4.516190998442561,
              "p_val": "< 0.001",
              "ci": "[0.0059, 0.0149]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004459993888622183,
              "std_err": 0.00011947362811290167,
              "t_stat": 37.330362851352625,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004748978610242588,
              "std_err": 0.00011981856236411995,
              "t_stat": 39.63474871122878,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004640086447854051,
              "std_err": 0.0001196668200658639,
              "t_stat": 38.775045959274046,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004610084593036775,
              "std_err": 0.00012103414648057461,
              "t_stat": 38.089123830659396,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004665979814169434,
              "std_err": 0.00012108505473722583,
              "t_stat": 38.53472936272247,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004576935224523362,
              "std_err": 0.00012024907414107627,
              "t_stat": 38.06212444641112,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.0045134532007944424,
              "std_err": 0.00012038773688337088,
              "t_stat": 37.49097140323338,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004576061151296347,
              "std_err": 0.00011922126941088504,
              "t_stat": 38.38292591505109,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.0045732327446672185,
              "std_err": 0.00012070719865477688,
              "t_stat": 37.88699262043753,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004467984446896955,
              "std_err": 0.00012080411388004559,
              "t_stat": 36.98536666833642,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004503332854572744,
              "std_err": 0.00012024904683145905,
              "t_stat": 37.45005031835812,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.0045247950180372035,
              "std_err": 0.00012100091873616366,
              "t_stat": 37.394716216190794,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.00442286019494417,
              "std_err": 0.00012102617284312744,
              "t_stat": 36.544658820840546,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.004376327851887072,
              "std_err": 0.00012011843813232484,
              "t_stat": 36.43343952796009,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004367078080609289,
              "std_err": 0.00012029090600769251,
              "t_stat": 36.30430782797511,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3334,
              "residual": -0.0484,
              "abs_error": 0.0484,
              "pct_error": 16.98,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3289,
              "residual": -0.0439,
              "abs_error": 0.0439,
              "pct_error": 15.41,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3266,
              "residual": -0.0279,
              "abs_error": 0.0279,
              "pct_error": 9.34,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3755,
              "residual": -0.025,
              "abs_error": 0.025,
              "pct_error": 7.12,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3051,
              "residual": -0.0201,
              "abs_error": 0.0201,
              "pct_error": 7.05,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3448,
              "residual": 0.0188,
              "abs_error": 0.0188,
              "pct_error": 5.18,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2917,
              "residual": -0.0067,
              "abs_error": 0.0067,
              "pct_error": 2.35,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3685,
              "residual": 0.0067,
              "abs_error": 0.0067,
              "pct_error": 1.79,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3455,
              "residual": 0.0056,
              "abs_error": 0.0056,
              "pct_error": 1.58,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3964,
              "residual": 0.0056,
              "abs_error": 0.0056,
              "pct_error": 1.39,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "20": {
          "k": 20,
          "features": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "InadequatePlanning",
            "WetlandLoss",
            "DamsQuality",
            "IneffectiveDisasterPreparedness",
            "Encroachments",
            "PopulationScore",
            "RiverManagement",
            "Urbanization"
          ],
          "featureLabels": [
            "TopographyDrainage",
            "Deforestation",
            "Landslides",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DrainageSystems",
            "AgriculturalPractices",
            "PoliticalFactors",
            "MonsoonIntensity",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "InadequatePlanning",
            "WetlandLoss",
            "DamsQuality",
            "IneffectiveDisasterPreparedness",
            "Encroachments",
            "PopulationScore",
            "RiverManagement",
            "Urbanization"
          ],
          "rmse": 0.0101,
          "mae": 0.0071,
          "r2": 0.9483,
          "adj_r2": 0.9478,
          "f_stat": 7317.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "FloodProbability = -0.0966 + 0.0045 * (TopographyDrainage) + 0.0045 * (Deforestation) + 0.0046 * (Landslides) + 0.0045 * (Siltation) + ... [16 more features]",
          "parsimonyNote": "Full Environmental Model: All 20 physical factors capture the complete flood risk spectrum (R\u00b2 0.845, RMSE 0.020).",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": -0.09658987221269219,
              "std_err": 0.0011630138468558054,
              "t_stat": -83.05135185950004,
              "p_val": "< 0.001",
              "ci": "[-0.0989, -0.0943]",
              "vif": "-"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004518784125433357,
              "std_err": 5.2201489783359924e-05,
              "t_stat": 86.56427516123865,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.0045402445609854245,
              "std_err": 5.2360925622794524e-05,
              "t_stat": 86.71054812310076,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004568178899927559,
              "std_err": 5.230956915535313e-05,
              "t_stat": 87.32969844122816,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004501352160665393,
              "std_err": 5.29014585017991e-05,
              "t_stat": 85.0893772713716,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004501998138314797,
              "std_err": 5.292457641326441e-05,
              "t_stat": 85.0644151246616,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004431776555879624,
              "std_err": 5.255362611503068e-05,
              "t_stat": 84.32865405289525,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004463905297886235,
              "std_err": 5.259858095381475e-05,
              "t_stat": 84.86740929010723,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004446731295451681,
              "std_err": 5.2102453048022705e-05,
              "t_stat": 85.34591051506038,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004508120170525534,
              "std_err": 5.2750005154773e-05,
              "t_stat": 85.46198540262368,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.00455270517829599,
              "std_err": 5.2789190728209877e-05,
              "t_stat": 86.24313264690913,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.0045017025503157355,
              "std_err": 5.2546278030712874e-05,
              "t_stat": 85.67119725748276,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.004444787592735954,
              "std_err": 5.287650334561434e-05,
              "t_stat": 84.0597867011683,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004523317569668748,
              "std_err": 5.288051589212807e-05,
              "t_stat": 85.53845387771833,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.004434800082905491,
              "std_err": 5.248041881653009e-05,
              "t_stat": 84.50390036728582,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004565469442790182,
              "std_err": 5.258697458180873e-05,
              "t_stat": 86.81749576005276,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.00442764722684804,
              "std_err": 5.310051056920016e-05,
              "t_stat": 83.3823852047141,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004483704719155617,
              "std_err": 5.285180813391297e-05,
              "t_stat": 84.83540823797466,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004449095774345,
              "std_err": 5.3015120387265084e-05,
              "t_stat": 83.92126136553544,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004480023293310573,
              "std_err": 5.283909841233904e-05,
              "t_stat": 84.78614185181468,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.0043824683813611836,
              "std_err": 5.23377966983425e-05,
              "t_stat": 83.73429257292318,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.254,
              "residual": 0.031,
              "abs_error": 0.031,
              "pct_error": 10.88,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2667,
              "residual": 0.0183,
              "abs_error": 0.0183,
              "pct_error": 6.42,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3073,
              "residual": -0.0086,
              "abs_error": 0.0086,
              "pct_error": 2.88,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3572,
              "residual": -0.0066,
              "abs_error": 0.0066,
              "pct_error": 1.89,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.37,
              "residual": 0.0053,
              "abs_error": 0.0053,
              "pct_error": 1.4,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2897,
              "residual": -0.0047,
              "abs_error": 0.0047,
              "pct_error": 1.65,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2814,
              "residual": 0.0036,
              "abs_error": 0.0036,
              "pct_error": 1.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3657,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.57,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3518,
              "residual": -0.0008,
              "abs_error": 0.0008,
              "pct_error": 0.22,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.4016,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.09,
              "status": "In Range",
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
      "icon": "\u2197",
      "chartName": "Forward SFS",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "MonsoonIntensity"
          ],
          "featureLabels": [
            "MonsoonIntensity"
          ],
          "rmse": 0.0438,
          "mae": 0.0356,
          "r2": 0.0376,
          "adj_r2": 0.0371,
          "f_stat": 394.7,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.3235 + 0.0045 * (MonsoonIntensity)",
          "parsimonyNote": "Single Factor Model: Captures fundamental monsoon intensity, but lacks hydrological watershed context.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.32349053783277026,
              "std_err": 0.0012190064276672698,
              "t_stat": 265.37229869395543,
              "p_val": "< 0.001",
              "ci": "[0.3211, 0.3259]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004493515251710604,
              "std_err": 0.0002261903347647374,
              "t_stat": 19.866079849894337,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3549,
              "residual": -0.0699,
              "abs_error": 0.0699,
              "pct_error": 24.54,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3594,
              "residual": -0.0607,
              "abs_error": 0.0607,
              "pct_error": 20.34,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.346,
              "residual": 0.056,
              "abs_error": 0.056,
              "pct_error": 13.93,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.337,
              "residual": -0.052,
              "abs_error": 0.052,
              "pct_error": 18.24,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.337,
              "residual": -0.052,
              "abs_error": 0.052,
              "pct_error": 18.24,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3325,
              "residual": -0.0475,
              "abs_error": 0.0475,
              "pct_error": 16.66,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.337,
              "residual": 0.0383,
              "abs_error": 0.0383,
              "pct_error": 10.21,
              "status": "High Residual",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.346,
              "residual": 0.0177,
              "abs_error": 0.0177,
              "pct_error": 4.86,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.337,
              "residual": 0.0136,
              "abs_error": 0.0136,
              "pct_error": 3.87,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3549,
              "residual": -0.0039,
              "abs_error": 0.0039,
              "pct_error": 1.1,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement"
          ],
          "rmse": 0.0417,
          "mae": 0.0338,
          "r2": 0.1254,
          "adj_r2": 0.124,
          "f_stat": 451.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2784 + 0.0045 * (MonsoonIntensity) + 0.0048 * (TopographyDrainage) + 0.0044 * (RiverManagement)",
          "parsimonyNote": "3-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.27841398364492975,
              "std_err": 0.001886857059950409,
              "t_stat": 147.5543588088475,
              "p_val": "< 0.001",
              "ci": "[0.2747, 0.2821]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004497917415328612,
              "std_err": 0.00021428169816338472,
              "t_stat": 20.990674676747506,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004793455703091358,
              "std_err": 0.00021181696250632923,
              "t_stat": 22.630178652232,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004350310009594542,
              "std_err": 0.00021429767903193882,
              "t_stat": 20.300313233659306,
              "p_val": "< 0.001",
              "ci": "[0.0039, 0.0048]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3432,
              "residual": 0.0588,
              "abs_error": 0.0588,
              "pct_error": 14.62,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3429,
              "residual": -0.0579,
              "abs_error": 0.0579,
              "pct_error": 20.3,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3514,
              "residual": -0.0527,
              "abs_error": 0.0527,
              "pct_error": 17.65,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3334,
              "residual": -0.0484,
              "abs_error": 0.0484,
              "pct_error": 16.99,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3367,
              "residual": 0.0385,
              "abs_error": 0.0385,
              "pct_error": 10.27,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3145,
              "residual": 0.036,
              "abs_error": 0.036,
              "pct_error": 10.27,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3198,
              "residual": -0.0348,
              "abs_error": 0.0348,
              "pct_error": 12.2,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3109,
              "residual": -0.0259,
              "abs_error": 0.0259,
              "pct_error": 9.1,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3462,
              "residual": 0.0175,
              "abs_error": 0.0175,
              "pct_error": 4.8,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3552,
              "residual": -0.0041,
              "abs_error": 0.0041,
              "pct_error": 1.17,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality"
          ],
          "rmse": 0.0401,
          "mae": 0.0325,
          "r2": 0.1907,
          "adj_r2": 0.1887,
          "f_stat": 525.0,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2322 + 0.0045 * (MonsoonIntensity) + 0.0048 * (TopographyDrainage) + 0.0044 * (RiverManagement) + 0.0048 * (Deforestation) + ... [1 more features]",
          "parsimonyNote": "5-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.23223276937366413,
              "std_err": 0.002258912965547722,
              "t_stat": 102.80731170948603,
              "p_val": "< 0.001",
              "ci": "[0.2278, 0.2367]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004498096910668561,
              "std_err": 0.0002010950460327815,
              "t_stat": 22.368014525506037,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004842118531800528,
              "std_err": 0.00019880966167172415,
              "t_stat": 24.355549378660818,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004428502024874044,
              "std_err": 0.00020123148020207278,
              "t_stat": 22.007004174630268,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.0047828709544823055,
              "std_err": 0.00019944586907620873,
              "t_stat": 23.980797279159287,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004506447142933478,
              "std_err": 0.00020035834149025736,
              "t_stat": 22.491936744009276,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3483,
              "residual": -0.0633,
              "abs_error": 0.0633,
              "pct_error": 22.21,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3448,
              "residual": 0.0572,
              "abs_error": 0.0572,
              "pct_error": 14.23,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3471,
              "residual": -0.0484,
              "abs_error": 0.0484,
              "pct_error": 16.21,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3298,
              "residual": -0.0448,
              "abs_error": 0.0448,
              "pct_error": 15.71,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3371,
              "residual": 0.0381,
              "abs_error": 0.0381,
              "pct_error": 10.16,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3156,
              "residual": -0.0306,
              "abs_error": 0.0306,
              "pct_error": 10.74,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3112,
              "residual": -0.0262,
              "abs_error": 0.0262,
              "pct_error": 9.18,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3561,
              "residual": -0.005,
              "abs_error": 0.005,
              "pct_error": 1.43,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3604,
              "residual": 0.0033,
              "abs_error": 0.0033,
              "pct_error": 0.9,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3534,
              "residual": -0.0029,
              "abs_error": 0.0029,
              "pct_error": 0.82,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "10": {
          "k": 10,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability"
          ],
          "rmse": 0.033,
          "mae": 0.0261,
          "r2": 0.4535,
          "adj_r2": 0.4508,
          "f_stat": 756.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.1235 + 0.0046 * (MonsoonIntensity) + 0.0047 * (TopographyDrainage) + 0.0043 * (RiverManagement) + 0.0046 * (Deforestation) + ... [6 more features]",
          "parsimonyNote": "10-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.12352481248156341,
              "std_err": 0.002581408269207285,
              "t_stat": 47.851714877901195,
              "p_val": "< 0.001",
              "ci": "[0.1185, 0.1286]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004581710728140902,
              "std_err": 0.00016622547683028399,
              "t_stat": 27.563228065327333,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.00470140037413978,
              "std_err": 0.00016428748320920019,
              "t_stat": 28.61691154007829,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004328458491822986,
              "std_err": 0.00016632437024112604,
              "t_stat": 26.024198892488663,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004619888008187488,
              "std_err": 0.0001648439593383606,
              "t_stat": 28.02582531219511,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.00436934396362072,
              "std_err": 0.00016556364928528423,
              "t_stat": 26.39072032105226,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004683660999555277,
              "std_err": 0.0001665166327216818,
              "t_stat": 28.12728628366881,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004464707470283938,
              "std_err": 0.00016406717183586251,
              "t_stat": 27.21268014999709,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.00433710243169045,
              "std_err": 0.00016713969595637197,
              "t_stat": 25.948966861962894,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004605997150102857,
              "std_err": 0.00016561642352108677,
              "t_stat": 27.81123424946082,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004431134214581161,
              "std_err": 0.00016661857992813952,
              "t_stat": 26.59447833784355,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.336,
              "residual": -0.051,
              "abs_error": 0.051,
              "pct_error": 17.88,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3557,
              "residual": 0.0462,
              "abs_error": 0.0462,
              "pct_error": 11.5,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.34,
              "residual": -0.0413,
              "abs_error": 0.0413,
              "pct_error": 13.83,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3347,
              "residual": 0.0406,
              "abs_error": 0.0406,
              "pct_error": 10.81,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3183,
              "residual": -0.0333,
              "abs_error": 0.0333,
              "pct_error": 11.69,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.309,
              "residual": -0.024,
              "abs_error": 0.024,
              "pct_error": 8.44,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3089,
              "residual": -0.0239,
              "abs_error": 0.0239,
              "pct_error": 8.4,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3524,
              "residual": 0.0112,
              "abs_error": 0.0112,
              "pct_error": 3.08,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3581,
              "residual": -0.007,
              "abs_error": 0.007,
              "pct_error": 2.0,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3539,
              "residual": -0.0033,
              "abs_error": 0.0033,
              "pct_error": 0.95,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "15": {
          "k": 15,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "PoliticalFactors"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "PoliticalFactors"
          ],
          "rmse": 0.0244,
          "mae": 0.0194,
          "r2": 0.7006,
          "adj_r2": 0.6983,
          "f_stat": 1381.3,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "FloodProbability = 0.0134 + 0.0046 * (MonsoonIntensity) + 0.0047 * (TopographyDrainage) + 0.0043 * (RiverManagement) + 0.0047 * (Deforestation) + ... [11 more features]",
          "parsimonyNote": "Occam's Razor Sweet Spot: 15 features achieve R\u00b2 0.597 with average VIF < 1.003 and zero multicollinearity.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.013419639471051965,
              "std_err": 0.002325647715041763,
              "t_stat": 5.770280418765394,
              "p_val": "< 0.001",
              "ci": "[0.0089, 0.0180]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004558419311461302,
              "std_err": 0.00012239926393532849,
              "t_stat": 37.24221179851059,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.00466001374064317,
              "std_err": 0.00012094669686539025,
              "t_stat": 38.5294833295829,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004307405285530005,
              "std_err": 0.00012248934013815688,
              "t_stat": 35.16555220782186,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.00466873615080644,
              "std_err": 0.00012138244672756332,
              "t_stat": 38.46302555826032,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004408328180222796,
              "std_err": 0.00012190179233415927,
              "t_stat": 36.162948024083285,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004650107256583925,
              "std_err": 0.0001226187004936834,
              "t_stat": 37.9233121690396,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004500569824894909,
              "std_err": 0.00012079782253109939,
              "t_stat": 37.2570442959453,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.0044332096196254885,
              "std_err": 0.0001230917502959015,
              "t_stat": 36.01548933188821,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004467769753391751,
              "std_err": 0.00012194632186356934,
              "t_stat": 36.63718335342813,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004428204912968031,
              "std_err": 0.000122682254713669,
              "t_stat": 36.09490975938714,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004749158959423,
              "std_err": 0.00012122071353847515,
              "t_stat": 39.17778423169922,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004508169042286956,
              "std_err": 0.00012183606882709771,
              "t_stat": 37.00192468196486,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.0044132936034049905,
              "std_err": 0.0001217291099966024,
              "t_stat": 36.25503877854829,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.00432043254996204,
              "std_err": 0.0001228774186748289,
              "t_stat": 35.1605087131202,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004358067631614494,
              "std_err": 0.00012229149544198378,
              "t_stat": 35.63671877479004,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3573,
              "residual": 0.0446,
              "abs_error": 0.0446,
              "pct_error": 11.1,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3276,
              "residual": -0.0289,
              "abs_error": 0.0289,
              "pct_error": 9.69,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3104,
              "residual": -0.0254,
              "abs_error": 0.0254,
              "pct_error": 8.92,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.35,
              "residual": 0.0253,
              "abs_error": 0.0253,
              "pct_error": 6.73,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3088,
              "residual": -0.0238,
              "abs_error": 0.0238,
              "pct_error": 8.35,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3704,
              "residual": -0.0199,
              "abs_error": 0.0199,
              "pct_error": 5.67,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3014,
              "residual": -0.0164,
              "abs_error": 0.0164,
              "pct_error": 5.74,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3545,
              "residual": 0.0091,
              "abs_error": 0.0091,
              "pct_error": 2.51,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3459,
              "residual": 0.0051,
              "abs_error": 0.0051,
              "pct_error": 1.46,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.2846,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.13,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "20": {
          "k": 20,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "PoliticalFactors",
            "Urbanization",
            "ClimateChange",
            "Encroachments",
            "WetlandLoss",
            "InadequatePlanning"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "PoliticalFactors",
            "Urbanization",
            "ClimateChange",
            "Encroachments",
            "WetlandLoss",
            "InadequatePlanning"
          ],
          "rmse": 0.0101,
          "mae": 0.0071,
          "r2": 0.9483,
          "adj_r2": 0.9478,
          "f_stat": 7317.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "FloodProbability = -0.0966 + 0.0046 * (MonsoonIntensity) + 0.0045 * (TopographyDrainage) + 0.0045 * (RiverManagement) + 0.0045 * (Deforestation) + ... [16 more features]",
          "parsimonyNote": "Full Environmental Model: All 20 physical factors capture the complete flood risk spectrum (R\u00b2 0.845, RMSE 0.020).",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": -0.0965898722126919,
              "std_err": 0.001163013846855805,
              "t_stat": -83.05135185949982,
              "p_val": "< 0.001",
              "ci": "[-0.0989, -0.0943]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004552705178295959,
              "std_err": 5.278919072820958e-05,
              "t_stat": 86.24313264690903,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004518784125433304,
              "std_err": 5.220148978335968e-05,
              "t_stat": 86.56427516123804,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004480023293310612,
              "std_err": 5.283909841233911e-05,
              "t_stat": 84.7861418518153,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.0045402445609854115,
              "std_err": 5.2360925622794646e-05,
              "t_stat": 86.71054812310031,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004565469442790211,
              "std_err": 5.258697458180884e-05,
              "t_stat": 86.81749576005313,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004501352160665368,
              "std_err": 5.2901458501799164e-05,
              "t_stat": 85.08937727137105,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.0044467312954516456,
              "std_err": 5.210245304802281e-05,
              "t_stat": 85.34591051505954,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.004427647226848049,
              "std_err": 5.31005105692002e-05,
              "t_stat": 83.3823852047142,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.00446390529788622,
              "std_err": 5.259858095381473e-05,
              "t_stat": 84.86740929010696,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004501998138314792,
              "std_err": 5.2924576413264345e-05,
              "t_stat": 85.0644151246616,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004568178899927553,
              "std_err": 5.230956915535304e-05,
              "t_stat": 87.32969844122819,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.0044317765558795925,
              "std_err": 5.2553626115030634e-05,
              "t_stat": 84.32865405289473,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004501702550315756,
              "std_err": 5.2546278030712854e-05,
              "t_stat": 85.67119725748319,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004449095774345024,
              "std_err": 5.301512038726499e-05,
              "t_stat": 83.92126136553605,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004508120170525548,
              "std_err": 5.275000515477306e-05,
              "t_stat": 85.46198540262384,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.0043824683813612,
              "std_err": 5.233779669834243e-05,
              "t_stat": 83.73429257292361,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.0044447875927359605,
              "std_err": 5.287650334561439e-05,
              "t_stat": 84.05978670116836,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004483704719155649,
              "std_err": 5.2851808133913025e-05,
              "t_stat": 84.83540823797519,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.004434800082905516,
              "std_err": 5.2480418816530114e-05,
              "t_stat": 84.50390036728626,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004523317569668756,
              "std_err": 5.288051589212808e-05,
              "t_stat": 85.53845387771848,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.254,
              "residual": 0.031,
              "abs_error": 0.031,
              "pct_error": 10.88,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2667,
              "residual": 0.0183,
              "abs_error": 0.0183,
              "pct_error": 6.42,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3073,
              "residual": -0.0086,
              "abs_error": 0.0086,
              "pct_error": 2.88,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3572,
              "residual": -0.0066,
              "abs_error": 0.0066,
              "pct_error": 1.89,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.37,
              "residual": 0.0053,
              "abs_error": 0.0053,
              "pct_error": 1.4,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2897,
              "residual": -0.0047,
              "abs_error": 0.0047,
              "pct_error": 1.65,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2814,
              "residual": 0.0036,
              "abs_error": 0.0036,
              "pct_error": 1.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3657,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.57,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3518,
              "residual": -0.0008,
              "abs_error": 0.0008,
              "pct_error": 0.22,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.4016,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.09,
              "status": "In Range",
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
      "icon": "\u2713",
      "chartName": "Lasso (L1 Ranking)",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "Landslides"
          ],
          "featureLabels": [
            "Landslides"
          ],
          "rmse": 0.0434,
          "mae": 0.0354,
          "r2": 0.051,
          "adj_r2": 0.0505,
          "f_stat": 464.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.3217 + 0.0048 * (Landslides)",
          "parsimonyNote": "Single Factor Model: Captures fundamental monsoon intensity, but lacks hydrological watershed context.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.3216983976252046,
              "std_err": 0.0012141187141571177,
              "t_stat": 264.9645326063016,
              "p_val": "< 0.001",
              "ci": "[0.3193, 0.3241]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004811788942532671,
              "std_err": 0.00022315851551112144,
              "t_stat": 21.56220178966403,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3794,
              "residual": -0.0944,
              "abs_error": 0.0944,
              "pct_error": 33.14,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3554,
              "residual": -0.0704,
              "abs_error": 0.0704,
              "pct_error": 24.7,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3506,
              "residual": 0.0514,
              "abs_error": 0.0514,
              "pct_error": 12.78,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3361,
              "residual": -0.0511,
              "abs_error": 0.0511,
              "pct_error": 17.94,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3361,
              "residual": -0.0511,
              "abs_error": 0.0511,
              "pct_error": 17.94,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3361,
              "residual": -0.0374,
              "abs_error": 0.0374,
              "pct_error": 12.54,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3602,
              "residual": 0.0151,
              "abs_error": 0.0151,
              "pct_error": 4.02,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.365,
              "residual": -0.0145,
              "abs_error": 0.0145,
              "pct_error": 4.13,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3506,
              "residual": 0.0131,
              "abs_error": 0.0131,
              "pct_error": 3.59,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3409,
              "residual": 0.0101,
              "abs_error": 0.0101,
              "pct_error": 2.89,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity"
          ],
          "featureLabels": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity"
          ],
          "rmse": 0.0417,
          "mae": 0.0336,
          "r2": 0.1265,
          "adj_r2": 0.1252,
          "f_stat": 455.7,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2789 + 0.0047 * (Landslides) + 0.0044 * (DamsQuality) + 0.0044 * (MonsoonIntensity)",
          "parsimonyNote": "3-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.27889590729386204,
              "std_err": 0.001865802854843406,
              "t_stat": 149.47769351401777,
              "p_val": "< 0.001",
              "ci": "[0.2752, 0.2826]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.0047331249104536205,
              "std_err": 0.00021218245514147163,
              "t_stat": 22.306862776650558,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.0043939941050988585,
              "std_err": 0.0002132549742932617,
              "t_stat": 20.604415534318896,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004404542679317667,
              "std_err": 0.00021417171403239417,
              "t_stat": 20.565473359621457,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0048]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3709,
              "residual": -0.0859,
              "abs_error": 0.0859,
              "pct_error": 30.13,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3381,
              "residual": 0.0638,
              "abs_error": 0.0638,
              "pct_error": 15.88,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3473,
              "residual": -0.0623,
              "abs_error": 0.0623,
              "pct_error": 21.84,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3547,
              "residual": -0.056,
              "abs_error": 0.056,
              "pct_error": 18.75,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3371,
              "residual": -0.0521,
              "abs_error": 0.0521,
              "pct_error": 18.27,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3327,
              "residual": -0.0477,
              "abs_error": 0.0477,
              "pct_error": 16.73,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3607,
              "residual": 0.0145,
              "abs_error": 0.0145,
              "pct_error": 3.87,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3567,
              "residual": -0.0061,
              "abs_error": 0.0061,
              "pct_error": 1.75,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3689,
              "residual": -0.0052,
              "abs_error": 0.0052,
              "pct_error": 1.44,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3506,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.13,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning"
          ],
          "featureLabels": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning"
          ],
          "rmse": 0.0399,
          "mae": 0.0322,
          "r2": 0.1983,
          "adj_r2": 0.1963,
          "f_stat": 530.1,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2329 + 0.0047 * (Landslides) + 0.0044 * (DamsQuality) + 0.0045 * (MonsoonIntensity) + 0.0047 * (Deforestation) + ... [1 more features]",
          "parsimonyNote": "5-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.23293458939428371,
              "std_err": 0.002233749716013235,
              "t_stat": 104.27962798357825,
              "p_val": "< 0.001",
              "ci": "[0.2286, 0.2373]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004692557819584485,
              "std_err": 0.00019900332164894717,
              "t_stat": 23.58029896537313,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004444158098337597,
              "std_err": 0.0002000283059456575,
              "t_stat": 22.217646034281564,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004451905234153442,
              "std_err": 0.00020087010421425427,
              "t_stat": 22.163105114959777,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004678783643174645,
              "std_err": 0.00019917887955173713,
              "t_stat": 23.49036029173626,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.0046210418560699434,
              "std_err": 0.0002010866710794254,
              "t_stat": 22.98034887774695,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0050]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3666,
              "residual": -0.0816,
              "abs_error": 0.0816,
              "pct_error": 28.65,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3525,
              "residual": -0.0675,
              "abs_error": 0.0675,
              "pct_error": 23.67,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3482,
              "residual": 0.0538,
              "abs_error": 0.0538,
              "pct_error": 13.38,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.338,
              "residual": -0.053,
              "abs_error": 0.053,
              "pct_error": 18.61,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3511,
              "residual": -0.0524,
              "abs_error": 0.0524,
              "pct_error": 17.53,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3335,
              "residual": -0.0485,
              "abs_error": 0.0485,
              "pct_error": 17.03,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3901,
              "residual": -0.0395,
              "abs_error": 0.0395,
              "pct_error": 11.27,
              "status": "High Residual",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3837,
              "residual": -0.02,
              "abs_error": 0.02,
              "pct_error": 5.51,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3567,
              "residual": 0.0186,
              "abs_error": 0.0186,
              "pct_error": 4.95,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3562,
              "residual": -0.0051,
              "abs_error": 0.0051,
              "pct_error": 1.46,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "10": {
          "k": 10,
          "features": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure"
          ],
          "featureLabels": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure"
          ],
          "rmse": 0.0336,
          "mae": 0.0266,
          "r2": 0.4333,
          "adj_r2": 0.4305,
          "f_stat": 768.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.1220 + 0.0047 * (Landslides) + 0.0043 * (DamsQuality) + 0.0044 * (MonsoonIntensity) + 0.0048 * (Deforestation) + ... [6 more features]",
          "parsimonyNote": "10-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.12197356593260437,
              "std_err": 0.002578992565814758,
              "t_stat": 47.29504363424575,
              "p_val": "< 0.001",
              "ci": "[0.1169, 0.1270]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004723038965576384,
              "std_err": 0.0001640047739597714,
              "t_stat": 28.798179781857417,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004339348139394581,
              "std_err": 0.00016486790781506275,
              "t_stat": 26.32015045803915,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004449646132778718,
              "std_err": 0.00016557702414551583,
              "t_stat": 26.87357231923789,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.00476678551600821,
              "std_err": 0.00016417246825804941,
              "t_stat": 29.03523085561268,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004468839444070042,
              "std_err": 0.00016583897601284332,
              "t_stat": 26.946858642711074,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.0046045988659613665,
              "std_err": 0.00016370932873091724,
              "t_stat": 28.126673670073924,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004518418882226646,
              "std_err": 0.00016545885715933524,
              "t_stat": 27.308413461815785,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004730541619641548,
              "std_err": 0.0001658852356964574,
              "t_stat": 28.516953903587044,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004499190075130768,
              "std_err": 0.00016593517744628092,
              "t_stat": 27.114142669280085,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004315068019110441,
              "std_err": 0.0001646953511923125,
              "t_stat": 26.20030248499118,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0046]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3558,
              "residual": -0.0708,
              "abs_error": 0.0708,
              "pct_error": 24.85,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3488,
              "residual": -0.0638,
              "abs_error": 0.0638,
              "pct_error": 22.38,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3314,
              "residual": -0.0464,
              "abs_error": 0.0464,
              "pct_error": 16.28,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.369,
              "residual": 0.0329,
              "abs_error": 0.0329,
              "pct_error": 8.19,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3828,
              "residual": -0.0323,
              "abs_error": 0.0323,
              "pct_error": 9.21,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3127,
              "residual": -0.0277,
              "abs_error": 0.0277,
              "pct_error": 9.7,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3198,
              "residual": -0.0211,
              "abs_error": 0.0211,
              "pct_error": 7.07,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3627,
              "residual": 0.0126,
              "abs_error": 0.0126,
              "pct_error": 3.35,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3404,
              "residual": 0.0107,
              "abs_error": 0.0107,
              "pct_error": 3.04,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3694,
              "residual": -0.0058,
              "abs_error": 0.0058,
              "pct_error": 1.59,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "15": {
          "k": 15,
          "features": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure",
            "Encroachments",
            "RiverManagement",
            "DrainageSystems",
            "PopulationScore",
            "AgriculturalPractices"
          ],
          "featureLabels": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure",
            "Encroachments",
            "RiverManagement",
            "DrainageSystems",
            "PopulationScore",
            "AgriculturalPractices"
          ],
          "rmse": 0.0245,
          "mae": 0.0193,
          "r2": 0.6989,
          "adj_r2": 0.6966,
          "f_stat": 1366.6,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "FloodProbability = 0.0142 + 0.0048 * (Landslides) + 0.0045 * (DamsQuality) + 0.0045 * (MonsoonIntensity) + 0.0045 * (Deforestation) + ... [11 more features]",
          "parsimonyNote": "Occam's Razor Sweet Spot: 15 features achieve R\u00b2 0.597 with average VIF < 1.003 and zero multicollinearity.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.014162023059165462,
              "std_err": 0.002333163460811946,
              "t_stat": 6.069880356448342,
              "p_val": "< 0.001",
              "ci": "[0.0096, 0.0187]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004793676765728274,
              "std_err": 0.00012168004928080416,
              "t_stat": 39.39574970639422,
              "p_val": "< 0.001",
              "ci": "[0.0046, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004509925561382194,
              "std_err": 0.0001223859263664179,
              "t_stat": 36.85003411159941,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004504244659293983,
              "std_err": 0.00012285134093510263,
              "t_stat": 36.664187993465966,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004547657414212937,
              "std_err": 0.00012184702128482856,
              "t_stat": 37.32268024494724,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004434977151362118,
              "std_err": 0.00012306172300851538,
              "t_stat": 36.038640146906076,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004542638806784595,
              "std_err": 0.00012146246377306497,
              "t_stat": 37.39952793376444,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004525779808705505,
              "std_err": 0.0001227567042313957,
              "t_stat": 36.86788299704133,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004509390910026826,
              "std_err": 0.0001231091114215253,
              "t_stat": 36.629221492686135,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004519330677372537,
              "std_err": 0.0001231144669604507,
              "t_stat": 36.70836408546793,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004204618371491451,
              "std_err": 0.00012221539900956655,
              "t_stat": 34.40334365035562,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0044]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004357673268333085,
              "std_err": 0.00012299667204715995,
              "t_stat": 35.42919654494592,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004456035428042423,
              "std_err": 0.00012295848406807702,
              "t_stat": 36.24016237525587,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004426100407337005,
              "std_err": 0.0001224290299889184,
              "t_stat": 36.15237666865147,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004485768218965406,
              "std_err": 0.0001233630198819061,
              "t_stat": 36.36234118830405,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004487251988946898,
              "std_err": 0.00012127426494600503,
              "t_stat": 37.00085909359878,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3314,
              "residual": -0.0464,
              "abs_error": 0.0464,
              "pct_error": 16.27,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3277,
              "residual": -0.0427,
              "abs_error": 0.0427,
              "pct_error": 14.97,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3137,
              "residual": -0.0151,
              "abs_error": 0.0151,
              "pct_error": 5.04,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3655,
              "residual": -0.0149,
              "abs_error": 0.0149,
              "pct_error": 4.25,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3379,
              "residual": 0.0132,
              "abs_error": 0.0132,
              "pct_error": 3.75,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3763,
              "residual": -0.0127,
              "abs_error": 0.0127,
              "pct_error": 3.49,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3656,
              "residual": 0.0097,
              "abs_error": 0.0097,
              "pct_error": 2.58,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.2946,
              "residual": -0.0096,
              "abs_error": 0.0096,
              "pct_error": 3.35,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3951,
              "residual": 0.0069,
              "abs_error": 0.0069,
              "pct_error": 1.71,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2835,
              "residual": 0.0015,
              "abs_error": 0.0015,
              "pct_error": 0.52,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "20": {
          "k": 20,
          "features": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure",
            "Encroachments",
            "RiverManagement",
            "DrainageSystems",
            "PopulationScore",
            "AgriculturalPractices",
            "ClimateChange",
            "WetlandLoss",
            "Watersheds",
            "IneffectiveDisasterPreparedness",
            "Urbanization"
          ],
          "featureLabels": [
            "Landslides",
            "DamsQuality",
            "MonsoonIntensity",
            "Deforestation",
            "InadequatePlanning",
            "TopographyDrainage",
            "PoliticalFactors",
            "Siltation",
            "CoastalVulnerability",
            "DeterioratingInfrastructure",
            "Encroachments",
            "RiverManagement",
            "DrainageSystems",
            "PopulationScore",
            "AgriculturalPractices",
            "ClimateChange",
            "WetlandLoss",
            "Watersheds",
            "IneffectiveDisasterPreparedness",
            "Urbanization"
          ],
          "rmse": 0.0101,
          "mae": 0.0071,
          "r2": 0.9483,
          "adj_r2": 0.9478,
          "f_stat": 7317.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "FloodProbability = -0.0966 + 0.0046 * (Landslides) + 0.0046 * (DamsQuality) + 0.0046 * (MonsoonIntensity) + 0.0045 * (Deforestation) + ... [16 more features]",
          "parsimonyNote": "Full Environmental Model: All 20 physical factors capture the complete flood risk spectrum (R\u00b2 0.845, RMSE 0.020).",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": -0.09658987221269216,
              "std_err": 0.0011630138468558052,
              "t_stat": -83.05135185950003,
              "p_val": "< 0.001",
              "ci": "[-0.0989, -0.0943]",
              "vif": "-"
            },
            {
              "name": "Landslides",
              "estimate": 0.004568178899927576,
              "std_err": 5.230956915535325e-05,
              "t_stat": 87.32969844122829,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004565469442790194,
              "std_err": 5.258697458180878e-05,
              "t_stat": 86.8174957600529,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.00455270517829599,
              "std_err": 5.278919072820986e-05,
              "t_stat": 86.24313264690915,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.00454024456098542,
              "std_err": 5.236092562279458e-05,
              "t_stat": 86.7105481231006,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.00452331756966875,
              "std_err": 5.288051589212813e-05,
              "t_stat": 85.53845387771827,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004518784125433302,
              "std_err": 5.2201489783359605e-05,
              "t_stat": 86.56427516123814,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004508120170525548,
              "std_err": 5.275000515477303e-05,
              "t_stat": 85.46198540262388,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.0045013521606653804,
              "std_err": 5.290145850179909e-05,
              "t_stat": 85.08937727137139,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.0045019981383147955,
              "std_err": 5.292457641326433e-05,
              "t_stat": 85.06441512466168,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004501702550315744,
              "std_err": 5.2546278030712834e-05,
              "t_stat": 85.67119725748299,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.0044837047191556385,
              "std_err": 5.285180813391302e-05,
              "t_stat": 84.835408237975,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004480023293310598,
              "std_err": 5.283909841233905e-05,
              "t_stat": 84.78614185181512,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004463905297886226,
              "std_err": 5.25985809538148e-05,
              "t_stat": 84.86740929010698,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.0044490957743450014,
              "std_err": 5.3015120387264956e-05,
              "t_stat": 83.92126136553568,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004446731295451666,
              "std_err": 5.2102453048022664e-05,
              "t_stat": 85.34591051506017,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.0044447875927359605,
              "std_err": 5.2876503345614395e-05,
              "t_stat": 84.05978670116835,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.00443480008290551,
              "std_err": 5.248041881653004e-05,
              "t_stat": 84.50390036728626,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004431776555879613,
              "std_err": 5.2553626115030654e-05,
              "t_stat": 84.32865405289509,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.004427647226848063,
              "std_err": 5.3100510569200196e-05,
              "t_stat": 83.38238520471447,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.004382468381361182,
              "std_err": 5.233779669834243e-05,
              "t_stat": 83.73429257292327,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.254,
              "residual": 0.031,
              "abs_error": 0.031,
              "pct_error": 10.88,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2667,
              "residual": 0.0183,
              "abs_error": 0.0183,
              "pct_error": 6.42,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3073,
              "residual": -0.0086,
              "abs_error": 0.0086,
              "pct_error": 2.88,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3572,
              "residual": -0.0066,
              "abs_error": 0.0066,
              "pct_error": 1.89,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.37,
              "residual": 0.0053,
              "abs_error": 0.0053,
              "pct_error": 1.4,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2897,
              "residual": -0.0047,
              "abs_error": 0.0047,
              "pct_error": 1.65,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2814,
              "residual": 0.0036,
              "abs_error": 0.0036,
              "pct_error": 1.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3657,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.57,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3518,
              "residual": -0.0008,
              "abs_error": 0.0008,
              "pct_error": 0.22,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.4016,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.09,
              "status": "In Range",
              "rank": 10
            }
          ]
        }
      }
    },
    "perm": {
      "id": "perm",
      "name": "Permutation Imp.",
      "badge": "R\u00b2 Drop Metric",
      "icon": "\u223f",
      "chartName": "Permutation Imp.",
      "k_models": {
        "1": {
          "k": 1,
          "features": [
            "MonsoonIntensity"
          ],
          "featureLabels": [
            "MonsoonIntensity"
          ],
          "rmse": 0.0438,
          "mae": 0.0356,
          "r2": 0.0376,
          "adj_r2": 0.0371,
          "f_stat": 394.7,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.3235 + 0.0045 * (MonsoonIntensity)",
          "parsimonyNote": "Single Factor Model: Captures fundamental monsoon intensity, but lacks hydrological watershed context.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.32349053783277026,
              "std_err": 0.0012190064276672698,
              "t_stat": 265.37229869395543,
              "p_val": "< 0.001",
              "ci": "[0.3211, 0.3259]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004493515251710604,
              "std_err": 0.0002261903347647374,
              "t_stat": 19.866079849894337,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3549,
              "residual": -0.0699,
              "abs_error": 0.0699,
              "pct_error": 24.54,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3594,
              "residual": -0.0607,
              "abs_error": 0.0607,
              "pct_error": 20.34,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.346,
              "residual": 0.056,
              "abs_error": 0.056,
              "pct_error": 13.93,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.337,
              "residual": -0.052,
              "abs_error": 0.052,
              "pct_error": 18.24,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.337,
              "residual": -0.052,
              "abs_error": 0.052,
              "pct_error": 18.24,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3325,
              "residual": -0.0475,
              "abs_error": 0.0475,
              "pct_error": 16.66,
              "status": "High Residual",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.337,
              "residual": 0.0383,
              "abs_error": 0.0383,
              "pct_error": 10.21,
              "status": "High Residual",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.346,
              "residual": 0.0177,
              "abs_error": 0.0177,
              "pct_error": 4.86,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.337,
              "residual": 0.0136,
              "abs_error": 0.0136,
              "pct_error": 3.87,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3549,
              "residual": -0.0039,
              "abs_error": 0.0039,
              "pct_error": 1.1,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "3": {
          "k": 3,
          "features": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning"
          ],
          "rmse": 0.0415,
          "mae": 0.0337,
          "r2": 0.1339,
          "adj_r2": 0.1326,
          "f_stat": 471.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2775 + 0.0045 * (MonsoonIntensity) + 0.0047 * (Landslides) + 0.0046 * (InadequatePlanning)",
          "parsimonyNote": "3-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.2774638000771338,
              "std_err": 0.001871795196726609,
              "t_stat": 148.23405924022126,
              "p_val": "< 0.001",
              "ci": "[0.2738, 0.2811]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.0044516422762350075,
              "std_err": 0.00021361585687296978,
              "t_stat": 20.839474847048695,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004729553023557553,
              "std_err": 0.00021163403824687159,
              "t_stat": 22.347789905329492,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.00462674859624196,
              "std_err": 0.00021380565332072306,
              "t_stat": 21.639973145618942,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0050]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3741,
              "residual": -0.0891,
              "abs_error": 0.0891,
              "pct_error": 31.27,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3707,
              "residual": -0.0857,
              "abs_error": 0.0857,
              "pct_error": 30.07,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.355,
              "residual": -0.0563,
              "abs_error": 0.0563,
              "pct_error": 18.86,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3466,
              "residual": 0.0553,
              "abs_error": 0.0553,
              "pct_error": 13.76,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3281,
              "residual": -0.0431,
              "abs_error": 0.0431,
              "pct_error": 15.14,
              "status": "High Residual",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3191,
              "residual": -0.0341,
              "abs_error": 0.0341,
              "pct_error": 11.95,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3564,
              "residual": 0.0189,
              "abs_error": 0.0189,
              "pct_error": 5.02,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3697,
              "residual": -0.0061,
              "abs_error": 0.0061,
              "pct_error": 1.68,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3553,
              "residual": -0.0042,
              "abs_error": 0.0042,
              "pct_error": 1.2,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3519,
              "residual": -0.0014,
              "abs_error": 0.0014,
              "pct_error": 0.39,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "5": {
          "k": 5,
          "features": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems"
          ],
          "rmse": 0.0391,
          "mae": 0.0317,
          "r2": 0.2302,
          "adj_r2": 0.2282,
          "f_stat": 541.1,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.2321 + 0.0045 * (MonsoonIntensity) + 0.0047 * (Landslides) + 0.0045 * (InadequatePlanning) + 0.0048 * (Siltation) + ... [1 more features]",
          "parsimonyNote": "5-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.23206565074477742,
              "std_err": 0.0022276323598156116,
              "t_stat": 104.17592010738534,
              "p_val": "< 0.001",
              "ci": "[0.2277, 0.2364]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004459646816318022,
              "std_err": 0.0002003482579499696,
              "t_stat": 22.259473887872147,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004696718882977381,
              "std_err": 0.0001984916855698868,
              "t_stat": 23.66204342258818,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.0044898888427286985,
              "std_err": 0.00020056857977379368,
              "t_stat": 22.38580363780064,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.0047658464800653675,
              "std_err": 0.00020074345656520171,
              "t_stat": 23.740980461385124,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0052]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004622186046448823,
              "std_err": 0.00019965289352246945,
              "t_stat": 23.15110973299583,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0050]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3761,
              "residual": -0.0911,
              "abs_error": 0.0911,
              "pct_error": 31.97,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3508,
              "residual": -0.0658,
              "abs_error": 0.0658,
              "pct_error": 23.1,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3507,
              "residual": -0.052,
              "abs_error": 0.052,
              "pct_error": 17.4,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3568,
              "residual": 0.0451,
              "abs_error": 0.0451,
              "pct_error": 11.22,
              "status": "High Residual",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.32,
              "residual": -0.035,
              "abs_error": 0.035,
              "pct_error": 12.27,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3198,
              "residual": -0.0348,
              "abs_error": 0.0348,
              "pct_error": 12.22,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3615,
              "residual": 0.0137,
              "abs_error": 0.0137,
              "pct_error": 3.66,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3607,
              "residual": -0.0096,
              "abs_error": 0.0096,
              "pct_error": 2.74,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3605,
              "residual": 0.0031,
              "abs_error": 0.0031,
              "pct_error": 0.86,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3478,
              "residual": 0.0027,
              "abs_error": 0.0027,
              "pct_error": 0.77,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "10": {
          "k": 10,
          "features": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds"
          ],
          "rmse": 0.0318,
          "mae": 0.0254,
          "r2": 0.4914,
          "adj_r2": 0.4888,
          "f_stat": 727.9,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": false,
          "equation": "FloodProbability = 0.1260 + 0.0045 * (MonsoonIntensity) + 0.0047 * (Landslides) + 0.0044 * (InadequatePlanning) + 0.0047 * (Siltation) + ... [6 more features]",
          "parsimonyNote": "10-Feature Subset: Balanced hydrometeorological risk representation.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.1259887372404039,
              "std_err": 0.0026030094653672186,
              "t_stat": 48.401182906428694,
              "p_val": "< 0.001",
              "ci": "[0.1209, 0.1311]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004500848590367974,
              "std_err": 0.00016774147798041125,
              "t_stat": 26.832055163443716,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004749939038151748,
              "std_err": 0.00016619565168202432,
              "t_stat": 28.58040502310868,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0051]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004363533870528952,
              "std_err": 0.00016795113965928647,
              "t_stat": 25.98097208141023,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004669038968820549,
              "std_err": 0.00016811167750705166,
              "t_stat": 27.77343631363562,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004486685549514655,
              "std_err": 0.00016716858987034336,
              "t_stat": 26.83928573540368,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.0042635989474581314,
              "std_err": 0.0001679866718951046,
              "t_stat": 25.380578705198932,
              "p_val": "< 0.001",
              "ci": "[0.0039, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004630785802660269,
              "std_err": 0.00016559048472426812,
              "t_stat": 27.965289251802062,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0050]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.004412617953711863,
              "std_err": 0.00016844903926618694,
              "t_stat": 26.19556616609101,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.0041230195431421375,
              "std_err": 0.0001669061620164242,
              "t_stat": 24.702620282745563,
              "p_val": "< 0.001",
              "ci": "[0.0038, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004335806075701728,
              "std_err": 0.00016699182030402782,
              "t_stat": 25.964182364189423,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0047]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.3439,
              "residual": -0.0589,
              "abs_error": 0.0589,
              "pct_error": 20.68,
              "status": "High Residual",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3519,
              "residual": -0.0532,
              "abs_error": 0.0532,
              "pct_error": 17.83,
              "status": "High Residual",
              "rank": 2
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3373,
              "residual": 0.038,
              "abs_error": 0.038,
              "pct_error": 10.11,
              "status": "High Residual",
              "rank": 3
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.3153,
              "residual": -0.0303,
              "abs_error": 0.0303,
              "pct_error": 10.63,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.3087,
              "residual": -0.0237,
              "abs_error": 0.0237,
              "pct_error": 8.32,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.3081,
              "residual": -0.0231,
              "abs_error": 0.0231,
              "pct_error": 8.1,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3366,
              "residual": 0.014,
              "abs_error": 0.014,
              "pct_error": 3.99,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3747,
              "residual": -0.0111,
              "abs_error": 0.0111,
              "pct_error": 3.04,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3411,
              "residual": 0.01,
              "abs_error": 0.01,
              "pct_error": 2.86,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3922,
              "residual": 0.0098,
              "abs_error": 0.0098,
              "pct_error": 2.43,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "15": {
          "k": 15,
          "features": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds",
            "CoastalVulnerability",
            "Urbanization",
            "IneffectiveDisasterPreparedness",
            "RiverManagement",
            "PoliticalFactors"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds",
            "CoastalVulnerability",
            "Urbanization",
            "IneffectiveDisasterPreparedness",
            "RiverManagement",
            "PoliticalFactors"
          ],
          "rmse": 0.0234,
          "mae": 0.0187,
          "r2": 0.7253,
          "adj_r2": 0.7232,
          "f_stat": 1308.5,
          "f_pval": "< 0.0001",
          "sweetSpot": true,
          "isFullModel": false,
          "equation": "FloodProbability = 0.0136 + 0.0046 * (MonsoonIntensity) + 0.0046 * (Landslides) + 0.0045 * (InadequatePlanning) + 0.0047 * (Siltation) + ... [11 more features]",
          "parsimonyNote": "Occam's Razor Sweet Spot: 15 features achieve R\u00b2 0.597 with average VIF < 1.003 and zero multicollinearity.",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": 0.013623708233906021,
              "std_err": 0.0023877086821462896,
              "t_stat": 5.705766509865765,
              "p_val": "< 0.001",
              "ci": "[0.0089, 0.0183]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004614818197911072,
              "std_err": 0.00012479381868942666,
              "t_stat": 36.97954150594535,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004622674281200757,
              "std_err": 0.00012365119933456774,
              "t_stat": 37.384791300673214,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004537336354314966,
              "std_err": 0.00012491621698800033,
              "t_stat": 36.323036861985905,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004689507215160905,
              "std_err": 0.00012503789255236827,
              "t_stat": 37.504688534292505,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0049]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.0045301843877538946,
              "std_err": 0.00012431371356610182,
              "t_stat": 36.44154983227206,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004453052370828504,
              "std_err": 0.00012494666115920274,
              "t_stat": 35.63962677765817,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.004538639567716529,
              "std_err": 0.00012316355496012888,
              "t_stat": 36.85050800284061,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.0044837435644193395,
              "std_err": 0.00012530719290712125,
              "t_stat": 35.78201267139332,
              "p_val": "< 0.001",
              "ci": "[0.0042, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.004209967879812653,
              "std_err": 0.00012412690713446621,
              "t_stat": 33.91664206417397,
              "p_val": "< 0.001",
              "ci": "[0.0040, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004364843237952487,
              "std_err": 0.0001242161397700986,
              "t_stat": 35.1390990416464,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004524982710079386,
              "std_err": 0.00012509432338845148,
              "t_stat": 36.17256632843442,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.004333387402646033,
              "std_err": 0.00012372545549060643,
              "t_stat": 35.024218625528,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.004574759472102863,
              "std_err": 0.00012550974326684712,
              "t_stat": 36.44943693635351,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.004350563859912491,
              "std_err": 0.00012482970950372147,
              "t_stat": 34.85199058147924,
              "p_val": "< 0.001",
              "ci": "[0.0041, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.00451395486205824,
              "std_err": 0.00012470260852914352,
              "t_stat": 36.19775813272831,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0048]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.3691,
              "residual": 0.0328,
              "abs_error": 0.0328,
              "pct_error": 8.16,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3187,
              "residual": -0.0201,
              "abs_error": 0.0201,
              "pct_error": 6.72,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3327,
              "residual": 0.0178,
              "abs_error": 0.0178,
              "pct_error": 5.09,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2994,
              "residual": -0.0144,
              "abs_error": 0.0144,
              "pct_error": 5.06,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3755,
              "residual": -0.0118,
              "abs_error": 0.0118,
              "pct_error": 3.25,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2781,
              "residual": 0.0069,
              "abs_error": 0.0069,
              "pct_error": 2.42,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2918,
              "residual": -0.0068,
              "abs_error": 0.0068,
              "pct_error": 2.39,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.3773,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.55,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3514,
              "residual": -0.0003,
              "abs_error": 0.0003,
              "pct_error": 0.08,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.2853,
              "residual": -0.0003,
              "abs_error": 0.0003,
              "pct_error": 0.12,
              "status": "In Range",
              "rank": 10
            }
          ]
        },
        "20": {
          "k": 20,
          "features": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds",
            "CoastalVulnerability",
            "Urbanization",
            "IneffectiveDisasterPreparedness",
            "RiverManagement",
            "PoliticalFactors",
            "Deforestation",
            "ClimateChange",
            "TopographyDrainage",
            "WetlandLoss",
            "DamsQuality"
          ],
          "featureLabels": [
            "MonsoonIntensity",
            "Landslides",
            "InadequatePlanning",
            "Siltation",
            "DrainageSystems",
            "Encroachments",
            "AgriculturalPractices",
            "PopulationScore",
            "DeterioratingInfrastructure",
            "Watersheds",
            "CoastalVulnerability",
            "Urbanization",
            "IneffectiveDisasterPreparedness",
            "RiverManagement",
            "PoliticalFactors",
            "Deforestation",
            "ClimateChange",
            "TopographyDrainage",
            "WetlandLoss",
            "DamsQuality"
          ],
          "rmse": 0.0101,
          "mae": 0.0071,
          "r2": 0.9483,
          "adj_r2": 0.9478,
          "f_stat": 7317.6,
          "f_pval": "< 0.0001",
          "sweetSpot": false,
          "isFullModel": true,
          "equation": "FloodProbability = -0.0966 + 0.0046 * (MonsoonIntensity) + 0.0046 * (Landslides) + 0.0045 * (InadequatePlanning) + 0.0045 * (Siltation) + ... [16 more features]",
          "parsimonyNote": "Full Environmental Model: All 20 physical factors capture the complete flood risk spectrum (R\u00b2 0.845, RMSE 0.020).",
          "coefs": [
            {
              "name": "Intercept (b0)",
              "estimate": -0.09658987221269202,
              "std_err": 0.001163013846855805,
              "t_stat": -83.05135185949993,
              "p_val": "< 0.001",
              "ci": "[-0.0989, -0.0943]",
              "vif": "-"
            },
            {
              "name": "MonsoonIntensity",
              "estimate": 0.004552705178295983,
              "std_err": 5.278919072820956e-05,
              "t_stat": 86.24313264690952,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Landslides",
              "estimate": 0.004568178899927574,
              "std_err": 5.230956915535305e-05,
              "t_stat": 87.32969844122859,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "InadequatePlanning",
              "estimate": 0.004523317569668766,
              "std_err": 5.2880515892128125e-05,
              "t_stat": 85.53845387771858,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Siltation",
              "estimate": 0.004501352160665396,
              "std_err": 5.290145850179909e-05,
              "t_stat": 85.08937727137169,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DrainageSystems",
              "estimate": 0.004463905297886257,
              "std_err": 5.259858095381466e-05,
              "t_stat": 84.8674092901078,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Encroachments",
              "estimate": 0.004483704719155648,
              "std_err": 5.285180813391295e-05,
              "t_stat": 84.83540823797529,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "AgriculturalPractices",
              "estimate": 0.0044467312954516655,
              "std_err": 5.2102453048022746e-05,
              "t_stat": 85.34591051506003,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PopulationScore",
              "estimate": 0.0044490957743450075,
              "std_err": 5.301512038726504e-05,
              "t_stat": 83.92126136553567,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DeterioratingInfrastructure",
              "estimate": 0.0045017025503157615,
              "std_err": 5.254627803071279e-05,
              "t_stat": 85.67119725748339,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Watersheds",
              "estimate": 0.004431776555879624,
              "std_err": 5.255362611503063e-05,
              "t_stat": 84.32865405289533,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "CoastalVulnerability",
              "estimate": 0.004501998138314813,
              "std_err": 5.292457641326436e-05,
              "t_stat": 85.06441512466196,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Urbanization",
              "estimate": 0.0043824683813612,
              "std_err": 5.23377966983423e-05,
              "t_stat": 83.73429257292382,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "IneffectiveDisasterPreparedness",
              "estimate": 0.00442764722684804,
              "std_err": 5.3100510569200216e-05,
              "t_stat": 83.38238520471401,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "RiverManagement",
              "estimate": 0.00448002329331057,
              "std_err": 5.283909841233899e-05,
              "t_stat": 84.78614185181469,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "PoliticalFactors",
              "estimate": 0.004508120170525533,
              "std_err": 5.275000515477304e-05,
              "t_stat": 85.4619854026236,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "Deforestation",
              "estimate": 0.004540244560985442,
              "std_err": 5.236092562279464e-05,
              "t_stat": 86.7105481231009,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "ClimateChange",
              "estimate": 0.004444787592735948,
              "std_err": 5.287650334561428e-05,
              "t_stat": 84.0597867011683,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "TopographyDrainage",
              "estimate": 0.004518784125433331,
              "std_err": 5.2201489783359564e-05,
              "t_stat": 86.56427516123875,
              "p_val": "< 0.001",
              "ci": "[0.0044, 0.0046]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "WetlandLoss",
              "estimate": 0.00443480008290549,
              "std_err": 5.2480418816530094e-05,
              "t_stat": 84.5039003672858,
              "p_val": "< 0.001",
              "ci": "[0.0043, 0.0045]",
              "vif": "1.00 (Low VIF)"
            },
            {
              "name": "DamsQuality",
              "estimate": 0.004565469442790204,
              "std_err": 5.258697458180878e-05,
              "t_stat": 86.81749576005309,
              "p_val": "< 0.001",
              "ci": "[0.0045, 0.0047]",
              "vif": "1.00 (Low VIF)"
            }
          ],
          "residuals": [
            {
              "sample_id": "Grid #439",
              "actual": 0.285,
              "predicted": 0.254,
              "residual": 0.031,
              "abs_error": 0.031,
              "pct_error": 10.88,
              "status": "In Range",
              "rank": 1
            },
            {
              "sample_id": "Grid #4742",
              "actual": 0.285,
              "predicted": 0.2667,
              "residual": 0.0183,
              "abs_error": 0.0183,
              "pct_error": 6.42,
              "status": "In Range",
              "rank": 2
            },
            {
              "sample_id": "Grid #1731",
              "actual": 0.2987,
              "predicted": 0.3073,
              "residual": -0.0086,
              "abs_error": 0.0086,
              "pct_error": 2.88,
              "status": "In Range",
              "rank": 3
            },
            {
              "sample_id": "Grid #4684",
              "actual": 0.3505,
              "predicted": 0.3572,
              "residual": -0.0066,
              "abs_error": 0.0066,
              "pct_error": 1.89,
              "status": "In Range",
              "rank": 4
            },
            {
              "sample_id": "Grid #6340",
              "actual": 0.3753,
              "predicted": 0.37,
              "residual": 0.0053,
              "abs_error": 0.0053,
              "pct_error": 1.4,
              "status": "In Range",
              "rank": 5
            },
            {
              "sample_id": "Grid #5202",
              "actual": 0.285,
              "predicted": 0.2897,
              "residual": -0.0047,
              "abs_error": 0.0047,
              "pct_error": 1.65,
              "status": "In Range",
              "rank": 6
            },
            {
              "sample_id": "Grid #6252",
              "actual": 0.285,
              "predicted": 0.2814,
              "residual": 0.0036,
              "abs_error": 0.0036,
              "pct_error": 1.27,
              "status": "In Range",
              "rank": 7
            },
            {
              "sample_id": "Grid #576",
              "actual": 0.3636,
              "predicted": 0.3657,
              "residual": -0.0021,
              "abs_error": 0.0021,
              "pct_error": 0.57,
              "status": "In Range",
              "rank": 8
            },
            {
              "sample_id": "Grid #4521",
              "actual": 0.3511,
              "predicted": 0.3518,
              "residual": -0.0008,
              "abs_error": 0.0008,
              "pct_error": 0.22,
              "status": "In Range",
              "rank": 9
            },
            {
              "sample_id": "Grid #6363",
              "actual": 0.4019,
              "predicted": 0.4016,
              "residual": 0.0004,
              "abs_error": 0.0004,
              "pct_error": 0.09,
              "status": "In Range",
              "rank": 10
            }
          ]
        }
      }
    }
  }
};
