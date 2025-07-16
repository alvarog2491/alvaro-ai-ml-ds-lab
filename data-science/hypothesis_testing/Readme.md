# Hypothesis Testing Analysis

## Overview

This folder contains a statistical analysis examining the effectiveness of a digital marketing campaign for an e-commerce company. The analysis applies various hypothesis testing methods in R to evaluate whether the campaign produces statistically significant changes in key business metrics.

## Files

- `hypothesis_testing.Rmd` - R Markdown source file with complete analysis
- `hypothesis_testing.html` - Generated HTML report with visualizations

## Analysis Components

The following types of analyses were conducted in this study:

- **Z-tests (one-tailed and two-tailed)** for conversion rates, with varying significance levels (α = 0.015, 0.05, 0.0825) to illustrate the effect of statistical thresholds.
- **Two-sample Z-tests** for dwell time comparisons when normality is assumed.
- **Wilcoxon rank-sum test (Mann-Whitney U)** as a non-parametric alternative for dwell time when normality may not hold.
- **Statistical power analysis** to estimate required sample sizes and evaluate whether the available data offers sufficient power.
- **Test restrictiveness** comparisons to show the impact of using one-tailed versus two-tailed tests.

## Requirements

**R Packages:** `ggplot2` for visualizations, base R statistics functions, and `knitr` for R Markdown rendering

**Data:** The analysis uses simulated data based on e-commerce scenarios with historical conversion rate of 8%, post-campaign rate of 11%, and sample sizes of 350 visitors for conversion analysis and 45 users per group for dwell time analysis.

## Usage

Open `hypothesis_testing.Rmd` in RStudio, install required packages, and run the document to generate the complete analysis.

## Output Formats

The document generates HTML output by default.

## Viewing the HTML Report
To view the HTML report with all visualizations and formatted output:

1. Download the HTML file from the repository
2. Open locally in your web browser, or
3. Use GitHub HTML Preview: https://htmlpreview.github.io/?https://github.com/alvarog2491/alvaro-ai-ml-ds-lab/blob/main/data-science/hypothesis_testing/hypothesis_testing.html


## Author

**Álvaro Granados Villodre**  
Date: July-2025

This project is available for academic and educational use.
