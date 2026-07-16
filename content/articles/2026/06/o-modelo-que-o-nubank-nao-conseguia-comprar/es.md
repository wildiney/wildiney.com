---
title: "El modelo que Nubank no podía comprar"
date: "2026-06-23"
description: "Nubank no podía comprar un modelo de IA porque no existía. Construyó el nuFormer con 100 mil millones de transacciones y redujo el riesgo de crédito un 70%."
tags: ["nubank", "ia", "modelos fundacionales", "datos", "estrategia de producto", "build vs buy"]
thumbnail: "/images/articles/o-modelo-que-o-nubank-nao-conseguia-comprar/cover.webp"
---

Hay un modelo de IA que Nubank no podía comprar.

No porque el precio fuera prohibitivo, sino porque el modelo simplemente no existía: habría necesitado ser entrenado sobre 100 mil millones de transacciones de clientes brasileños en contexto de crédito.

Entonces Nubank fue y construyó el propio. Se llama nuFormer.

El detalle técnico es que la mayoría de las empresas entrena un Transformer, congela los pesos y usa el resultado como una feature en un modelo tabular. Funciona. El Transformer aprende patrones generales sin ver nunca la señal real que el negocio necesita.

Nubank lo hizo diferente. Los gradientes (y no hablo exactamente de memoria) fluyen de punta a punta, incluso de vuelta hacia el Transformer. El modelo aprende representaciones optimizadas para predecir si esa persona va a pagar, entrenado en 100 mil millones de transacciones que ningún proveedor tiene.

El resultado apareció en los números del 1T26: 70% de reducción de riesgo para una población equivalente comparado con generaciones anteriores. La cartera creció 40% sin que la morosidad acompañara.

Muchas empresas ponen ChatGPT en la interfaz y llaman a eso AI Native. Nubank está haciendo algo diferente: usando datos que solo él tiene, a una escala que solo él tiene, para entrenar un modelo que solo él logra entrenar. El precio de entrada para que un competidor lo replique empieza por tener esos 100 mil millones de transacciones.

La mayoría de las conversaciones sobre IA en producto todavía giran en torno a qué LLM elegir. Tal vez valga la pena preguntar antes qué tienes tú que ningún modelo de mercado va a aprender.

---

Fuentes: [Product Guru's](https://www.productgurus.com.br/p/o-modelo-que-o-nubank-nao-tinha-como) · [Building Nubank](https://building.nubank.com/foundation-models-ai-nubank-transformation/) · [Nu International](https://international.nubank.com.br/pt-br/companhia/nubank-detalha-estrategia-de-transformacao-com-ia-baseada-em-dados-modelos-fundacionais-e-aconselhamento-financeiro-democratizado/)
