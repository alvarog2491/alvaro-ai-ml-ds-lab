# Probability and Statistics Notes

## Overview

This notebook covers core concepts in probability theory and descriptive statistics. It's structured as a practical reference combining mathematical foundations with computational examples, focusing on applications in data analysis and statistical reasoning.

## Content

The notebook covers three main areas:

### Descriptive Statistics
- Central tendency: mean, median, mode with practical considerations
- Impact of outliers: direct comparison showing how extreme values affect different measures
- Outlier detection using the IQR method
- Case study with patient data (age, weight, height measurements)

### Probability Theory
- Sample spaces and basic probability calculations
- Conditional probability with urn examples
- Event independence demonstrated through coin flips
- Applications to real-world scenarios

### Bayes' Theorem
- Medical diagnosis case study showing counterintuitive results
- Impact of base rates on diagnostic accuracy
- Concrete example: rare disease testing with 95% accurate test

## Data

Uses synthetic datasets created for demonstration:

**Patient dataset**: 101 records with age, weight, and height data including 11 extreme outliers (impossible values like 200-year-old patients, 500kg weights) to dramatically demonstrate their impact on central tendency measures.

**Probability examples**: Classical problems (colored balls in urns, coin flips) and realistic medical testing scenarios.

## Files

- `notebook.ipynb` - Complete analysis with theory and code
- `README.md` - This documentation

## Setup

Required Python packages:
```bash
pip install pandas numpy scipy jupyter
```

Run with:
```bash
jupyter notebook notebook.ipynb
```

## Key Results

The medical diagnosis example reveals why a positive test for a rare disease (0.1% prevalence) with 95% accuracy still only indicates a 4.5% probability of actually having the disease. This demonstrates the critical importance of base rates in probabilistic reasoning.

The outlier analysis uses extreme values (impossible ages like 200 years, weights up to 500kg) to dramatically show how outliers can shift means by 30-50% while medians remain virtually unchanged. This demonstrates why median is preferred for skewed data and highlights the importance of data validation when working with unverified or uncleaned datasets.

## Author

**Álvaro Granados Villodre**  
August 2025
