# University Faculty Salary Analysis

## Overview

This project analyzes factors influencing university faculty salaries using the Salaries dataset from the "car" package in R. The study employs multiple linear regression models to identify the most significant predictors of academic compensation.

## Methodology

The analysis systematically develops and evaluates different regression models, with particular attention to multicollinearity issues and model performance. Key techniques include:

- Exploratory data analysis with correlation matrices
- Model comparison and evaluation
- Logarithmic transformations to capture non-linear relationships
- Residual analysis for model validation
- Addressing multicollinearity issues between predictor variables
- Testing various model specifications to optimize predictive performance

## Dataset

The analysis uses data from 397 university professors with the following variables:
- Academic rank, discipline, years of service, years since PhD, gender, and salary in dollars
- **Source**: [carData Salaries dataset](https://rdrr.io/cran/carData/man/Salaries.html)

## Files

- `Gaussian_linear_model - Salary_Analysis.Rmd` - R Markdown source file with complete analysis
- `Gaussian_linear_model - Salary_Analysis.html` - Generated HTML report with visualizations

## Requirements

**R Packages:** `car`, base R statistics functions, and `knitr`

## Usage

1. Open `Gaussian_linear_model - Salary_Analysis.Rmd` in RStudio
2. Install required packages if needed
3. Knit the document to generate the complete analysis

## Viewing the HTML Report

To view the HTML report with all visualizations and formatted output, enter the html raw URL on following page:
- [GitHub HTML Preview](https://htmlpreview.github.io)

## Key Findings

The analysis concludes with a recommended model specification and thorough validation through residual analysis to verify statistical assumptions, providing insights into the primary factors affecting university faculty compensation.

## Author

**Álvaro Granados Villodre**  
Date: 2025

This project is available for academic and educational use.
