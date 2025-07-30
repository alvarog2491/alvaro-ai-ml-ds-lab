# Factor Analysis of Portuguese Wine Chemical Properties

## Overview

This project employs **factor analysis** to examine the underlying structure of chemical properties in Portuguese red wine data. The objective is to identify latent factors that explain the relationships between different wine characteristics and to reduce the dimensionality of the dataset while preserving meaningful information about wine composition.

## Methodology

The analysis focuses on six key chemical variables that represent critical aspects of wine composition:

- **Residual sugar**: the amount of sugar remaining after fermentation completion
- **Density**: wine density, primarily influenced by alcohol percentage and sugar content  
- **pH**: degree of acidity or basicity measured on a scale from 0 to 14
- **Alcohol**: percentage of alcohol content by volume
- **Citric acid**: citric acid concentration, which contributes to wine freshness and flavor complexity
- **Volatile acidity**: acetic acid concentration, which at elevated levels produces undesirable vinegar-like characteristics

The analysis uses a two-factor model to identify the fundamental dimensions that drive wine characteristics through variable representation analysis using communalities and uniquenesses.

## Dataset

The analysis uses the [Wine Quality dataset](https://archive.ics.uci.edu/dataset/186/wine+quality) from the UCI Machine Learning Repository, specifically focusing on Portuguese "Vinho Verde" red wine data.

**Dataset Details:**
- **Red wine samples**: 1,599 instances
- **Variables**: 11 physicochemical properties + quality score
- **Source**: Cortez et al. (2009) study on modeling wine preferences

**Citation:**
> Cortez, P., Cerdeira, A., Almeida, F., Matos, T., & Reis, J. (2009).  
> *Modeling wine preferences by data mining from physicochemical properties*.  
> *Decision Support Systems, 47*(4), 547–553.

## Files

- `wineAnalyisis.Rmd` - R Markdown source file with complete factor analysis
- `wineAnalyisis.html` - Generated HTML report with visualizations and results
- `winequality-red.csv` - Red wine dataset

## Requirements

**R Packages:** `tidyverse`, base R `factanal()` function

## Usage

1. Open `wineAnalyisis.Rmd` in RStudio
2. Install required packages if needed
3. Knit the document to generate the complete analysis with visualizations

## Viewing the HTML Report

To view the HTML report with all visualizations and formatted output:
- [GitHub HTML Preview](https://raw.githubusercontent.com/alvarog2491/alvaro-ai-ml-ds-lab/refs/heads/main/data-science/factor_analysis/wineAnalyisis.html?token=GHSAT0AAAAAADHHORD7MBSJHQIWDRIYVWBM2EKD3RA)

## Key Findings

The factor analysis reveals how different chemical properties cluster together and identifies fundamental dimensions that characterize wine composition. The analysis provides insights into which chemical properties share common underlying factors and their relative importance in explaining wine characteristics.

## Author

**Álvaro Granados Villodre**  
Date: May 2025

This project is available for academic and educational use.