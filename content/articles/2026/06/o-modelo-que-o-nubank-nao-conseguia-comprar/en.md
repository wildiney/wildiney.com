---
title: "The Model Nubank Could Not Buy"
date: "2026-06-23"
description: "Nubank could not buy an AI model because it did not exist. It built nuFormer on 100 billion transactions and cut credit risk by 70%."
tags: ["nubank", "ai", "foundation models", "data", "product strategy", "build vs buy"]
thumbnail: "/images/articles/o-modelo-que-o-nubank-nao-conseguia-comprar/cover.webp"
---

There is an AI model that Nubank could not buy.

Not because the price was prohibitive, but because the model simply did not exist: it would have needed to be trained on 100 billion transactions from Brazilian customers in a credit context.

So Nubank went and built its own. It is called nuFormer.

The technical detail is that most companies train a Transformer, freeze the weights, and use the result as a feature in a tabular model. It works. The Transformer learns general patterns without ever seeing the real signal the business needs.

Nubank did it differently. The gradients (and I am not speaking loosely here) flow end to end, including back into the Transformer. The model learns representations optimized to predict whether that person will pay, trained on 100 billion transactions that no vendor has.

The result showed up in the Q1 26 numbers: a 70% risk reduction for an equivalent population compared to previous generations. The loan portfolio grew 40% without delinquency keeping pace.

Plenty of companies put ChatGPT in the interface and call it AI Native. Nubank is doing something different: using data only it has, at a scale only it has, to train a model only it can train. The entry price for a competitor to replicate this starts with having those 100 billion transactions.

Most conversations about AI in product still revolve around which LLM to pick. Maybe the question to ask first is what you have that no market model will ever learn.

---

Sources: [Product Guru's](https://www.productgurus.com.br/p/o-modelo-que-o-nubank-nao-tinha-como) · [Building Nubank](https://building.nubank.com/foundation-models-ai-nubank-transformation/) · [Nu International](https://international.nubank.com.br/pt-br/companhia/nubank-detalha-estrategia-de-transformacao-com-ia-baseada-em-dados-modelos-fundacionais-e-aconselhamento-financeiro-democratizado/)
