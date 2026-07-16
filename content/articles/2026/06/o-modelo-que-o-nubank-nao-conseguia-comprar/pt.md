---
title: "O modelo que o Nubank não conseguia comprar"
date: "2026-06-23"
description: "O Nubank não conseguia comprar um modelo de IA porque ele não existia. Construiu o nuFormer com 100 bilhões de transações e cortou risco de crédito em 70%."
tags: ["nubank", "ia", "modelos fundacionais", "dados", "estratégia de produto", "build vs buy"]
thumbnail: "/images/articles/o-modelo-que-o-nubank-nao-conseguia-comprar/cover.webp"
---

Tem um modelo de IA que o Nubank não conseguia comprar.

Não porque o preço era proibitivo, mas porque o modelo simplesmente não existia: precisaria ter sido treinado sobre 100 bilhões de transações de clientes brasileiros em contexto de crédito.

Então o Nubank foi lá e construiu o próprio. Chama-se nuFormer.

O detalhe técnico é que a maioria das empresas treina um Transformer, congela os pesos e usa o resultado como uma feature num modelo tabular. Funciona. O Transformer aprende padrões gerais sem nunca ver o sinal real que o negócio precisa.

O Nubank fez diferente. Os gradientes (e não é exatamente de cor que estou falando) fluem de ponta a ponta, inclusive de volta para o Transformer. O modelo aprende representações otimizadas para prever se aquela pessoa vai pagar, treinado em 100 bilhões de transações que nenhum fornecedor tem.

O resultado apareceu nos números do 1T26: 70% de redução de risco para uma população equivalente comparado com as gerações anteriores. A carteira cresceu 40% sem que a inadimplência acompanhasse.

Muita empresa coloca ChatGPT na interface e chama isso de AI Native. O Nubank está fazendo algo diferente: usando dados que só ele tem, em escala que só ele tem, para treinar um modelo que só ele consegue treinar. O preço de entrada para um concorrente replicar começa em ter aqueles 100 bilhões de transações.

A maioria das conversas sobre IA em produto ainda gira em torno de qual LLM escolher. Talvez valha perguntar antes o que você tem que nenhum modelo de mercado vai aprender.

---

Fontes: [Product Guru's](https://www.productgurus.com.br/p/o-modelo-que-o-nubank-nao-tinha-como) · [Building Nubank](https://building.nubank.com/foundation-models-ai-nubank-transformation/) · [Nu International](https://international.nubank.com.br/pt-br/companhia/nubank-detalha-estrategia-de-transformacao-com-ia-baseada-em-dados-modelos-fundacionais-e-aconselhamento-financeiro-democratizado/)
