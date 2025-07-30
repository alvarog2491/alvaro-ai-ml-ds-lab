# LLM Evaluation Framework for Smartphone Review Analysis

## Overview

This project evaluates different large language models (LLMs) from Hugging Face across multiple NLP tasks using smartphone review data. The goal is to understand model capabilities and limitations in real-world text analysis scenarios.

## Methodology

The analysis tests pre-trained models on four NLP tasks:

### 1. Sentiment Analysis
- **Model**: [DistilBERT-base-uncased-finetuned-sst-2-english](https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english)
- **Metrics**: Accuracy, F1-score

### 2. Translation (English → Spanish)
- **Model**: [Helsinki-NLP/opus-mt-tc-big-en-es](https://huggingface.co/Helsinki-NLP/opus-mt-tc-big-en-es)
- **Metrics**: BLEU score

### 3. Question Answering
- **Model**: [deepset/minilm-uncased-squad2](https://huggingface.co/deepset/minilm-uncased-squad2)
- **Task**: Extractive QA from review content

### 4. Summarization
- **Model**: [cnicu/t5-small-booksum](https://huggingface.co/cnicu/t5-small-booksum)
- **Task**: Abstractive summarization of reviews

## Dataset

Contains 80+ mobile phone customer reviews with binary sentiment labels (positive/negative). The dataset was specifically created to include challenging cases for model evaluation.

## Files

```
├── data/
│   ├── phone_reviews.csv          # 80+ smartphone reviews with sentiment labels
│   └── translation_references.txt # Reference translations for BLEU evaluation
├── notebook/
│   └── notebook.ipynb             # Main analysis notebook
├── requirements.txt               # Python dependencies
└── README.md                      # This file
```

## Requirements

**Python Packages:** `transformers`, `torch`, `pandas`, `numpy`, `scikit-learn`, `jupyter`

## Usage

1. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the notebook:
```bash
jupyter notebook notebook/notebook.ipynb
```

## Key Findings

The analysis provides comprehensive evaluation metrics for each NLP task, demonstrating the strengths and limitations of different pre-trained models in processing real-world review data.

## Author

**Álvaro Granados Villodre**  
Date: 2025

This project is available for academic and educational use.