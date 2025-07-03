# LLM Evaluation Framework for Smartphone Review Analysis

A learning project to evaluate different large language models (LLMs) from Hugging Face across multiple NLP tasks using smartphone review data.

## Overview

This notebook tests pre-trained models on four NLP tasks: sentiment analysis, translation, question answering, and summarization. The goal is to understand model capabilities and limitations in real-world text analysis scenarios.

## Tasks Evaluated

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

## Repository Structure

```
├── data/
│   ├── phone_reviews.csv          # 80+ smartphone reviews with sentiment labels
│   └── translation_references.txt # Reference translations for BLEU evaluation
├── notebook.ipynb                 # Main analysis notebook
└── README.md                      # This file
```

## Usage

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the notebook:
```bash
jupyter notebook notebook.ipynb
```

## Dataset

Contains 80+ mobile phone customer reviews with binary sentiment labels (positive/negative). The dataset was specifically created to include some challenging cases for model evaluation.