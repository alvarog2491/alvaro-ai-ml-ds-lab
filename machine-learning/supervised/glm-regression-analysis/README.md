# Generalized Linear Models for Marital Infidelity Analysis

## Overview

This project analyzes patterns of marital infidelity using Generalized Linear Models (GLMs). The study applies logistic regression to model the likelihood of extramarital behavior and Poisson regression to assess factors associated with the frequency of such behavior.

## Dataset

The analysis uses a behavioral dataset containing observations on marital relationships with variables including:

- **naffairs**: Number of extramarital affairs within the last year
- **kids**: Presence of children (binary indicator)
- **Marital satisfaction levels**: Multiple categorical variables representing happiness levels
- **Religious attitudes**: Variables capturing different levels of religiosity
- **Marriage duration**: Categorical variables representing different time periods

## Methods

### Logistic Regression
- Binary classification modeling (faithful vs. unfaithful)
- Stepwise model selection using AIC criteria
- Analysis of probability predictors

### Poisson Regression  
- Count data modeling for frequency of affairs
- Comparison with logistic model findings
- Interaction effects analysis

### Advanced Modeling
- Polynomial relationship exploration
- Interaction effect between marriage duration and children
- Confidence interval estimation for predictions

## Key Findings

1. **Happiness matters most**: People who reported being unhappy in their marriages were significantly more likely to have affairs. The logistic model showed unhappiness as one of the strongest predictors.

2. **Religious beliefs act as a protective factor**: Those with anti-religious attitudes had higher infidelity rates, while people with strong religious convictions showed lower rates across both models.

3. **Marriage has a "sweet spot"**: Surprisingly, infidelity rates decrease over time but hit a minimum around 13 years of marriage, then potentially increase again in very long marriages.

4. **Kids complicate things**: Having children doesn't simply increase or decrease infidelity - it depends on how long you've been married. In newer marriages, kids might slightly increase risk, but in longer marriages they seem protective.

5. **The models aren't perfect**: While the patterns are clear, the residual analysis showed the data doesn't perfectly fit normal assumptions, so individual predictions should be taken with caution.

## Files

- `logistic-poisson-regression.Rmd`: Main analysis R Markdown file
- `logistic-poisson-regression.html`: Generated HTML report
- `README.md`: Project documentation

## Usage

Open the R Markdown file in RStudio and knit to generate the full analysis report with visualizations and statistical results.

## Requirements

- R packages: dplyr, ggplot2, fBasics, moments
- Data source: Online CSV from UPC repository

## Author

Álvaro Granados Villodre  
May 2025