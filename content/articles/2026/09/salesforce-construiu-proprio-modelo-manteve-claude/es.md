---
title: "Salesforce construyó su propio modelo y mantuvo a Claude"
date: "2026-09-29"
description: "Salesforce entrenó Koa, un modelo de razonamiento propio, sobre Nemotron y mantuvo a Claude. Decidir qué tarea va a qué modelo pasó a ser trabajo de producto."
tags: ["inteligencia artificial", "LLM", "estrategia de producto", "gobernanza de IA"]
thumbnail: "/images/articles/salesforce-construiu-proprio-modelo-manteve-claude/cover.webp"
---

Salesforce tenía acceso directo a Claude y ChatGPT dentro de su propio producto, pero construyó un modelo de razonamiento propio, bautizado Koa, entrenado sobre Nemotron, el modelo abierto de Nvidia.

Un vendedor negociando un descuento y un cliente molesto en soporte no necesitan un modelo entrenado para resolver problemas de matemática imposibles, hecho para impresionar a benchmarks e inversores. Necesitan una respuesta rápida, barata y sin riesgo de filtrar datos del cliente.

Koa corre dentro de Agentforce, la plataforma de agentes de Salesforce, y se ocupa del razonamiento en tareas de ventas, marketing y soporte, como responder a un cliente y agendar un compromiso. Antes, cuando un agente necesitaba razonar sobre algo complejo, la solicitud iba a un modelo de frontera como Claude o ChatGPT. Ahora Salesforce tiene un modelo propio para eso, que gasta menos tokens que los competidores.

El entrenamiento usó datos sintéticos: Salesforce simuló un call center, con un cliente furioso llamando y un vendedor intentando cerrar un negocio. No entró ningún dato real de clientes.

La empresa no abandonó a Anthropic: lanzó Claudeforce la misma semana, con Claude siguiendo como interfaz mientras el dato del cliente queda preso en la infraestructura de la propia Salesforce.

El ahorro de tokens es el dato concreto, pero el patrón que queda merece reflexión: decidir qué tarea va a qué modelo pasa a ser también trabajo del equipo que diseña el producto, no solo del equipo de infraestructura.

---

Fuentes: [TechCrunch](https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/)
