# Linear Discriminant Analysis for Wine Quality Classification

## Overview

This project implements Linear Discriminant Analysis (LDA) to classify Portuguese red wine quality based on physicochemical properties. The analysis explores the effectiveness of LDA in separating wine samples into quality categories and examines the contribution of different chemical characteristics to wine quality assessment.

## Methodology

The study applies Linear Discriminant Analysis using R to investigate wine quality classification. Key analytical techniques include:

- Data preprocessing and feature normalization (0-1 scaling)
- Multi-class quality categorization (poor, acceptable, good)
- LDA model development with default and custom prior probabilities
- Discriminant function analysis and coefficient interpretation
- Dimensionality reduction visualization (LD1 vs LD2)
- Feature importance evaluation for wine quality prediction
- Model performance assessment with train-test splitting

## Dataset

The analysis uses a Portuguese red wine quality dataset with 1,599 observations:
- **Features**: 11 physicochemical properties (acidity levels, sugar content, alcohol percentage, etc.)
- **Target variable**: Wine quality scores (3-8) recategorized into three quality levels
- **Quality categories**: Poor (3-4), Acceptable (5-6), Good (7-8)
- **Source**: Wine quality assessment based on sensory data

## Files

- `linear_discriminant_analysis.Rmd` - R Markdown source file with complete analysis
- `linear_discriminant_analysis.html` - Generated HTML report with visualizations
- `data/` - Directory containing the wine quality dataset

## Requirements

**R Packages:** `MASS`, `tidyverse`, `caret`, `ggplot2`, and `knitr`

## Usage

1. Open `linear_discriminant_analysis.Rmd` in RStudio
2. Install required packages if needed
3. Knit the document to generate the complete analysis

## Viewing the HTML Report

To view the HTML report with all visualizations and formatted output, enter the html raw URL on following page:
- [GitHub HTML Preview](https://htmlpreview.github.io)

## Key Findings

The analysis reveals insights about wine quality classification using LDA, including the relative importance of different chemical properties, the effectiveness of dimensionality reduction, and challenges in separating minority quality classes. The study demonstrates both the capabilities and limitations of LDA for multi-class classification in wine quality assessment.

## Author

**Álvaro Granados Villodre**  
Date: April 2025

This project is available for academic and educational use.