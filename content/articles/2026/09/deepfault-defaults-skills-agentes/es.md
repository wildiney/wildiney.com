---
title: "El default que nadie ve"
date: "2026-09-25"
description: "Nielsen llama deepfault al default guardado fuera de la vista de quien usa el agente. Una skill pesa tanto como una pantalla y merece la misma evaluación."
tags: ["agentes de IA", "defaults", "skills", "gobernanza", "decisión"]
thumbnail: "/images/articles/deepfault-defaults-skills-agentes/cover.webp"
---

En 2011, Jared Spool relató un estudio con varios cientos de archivos de configuración de Word: menos del 5% de los usuarios había cambiado algún ajuste. En el mismo artículo que cita el estudio, Jakob Nielsen cuenta que escribe sus propios textos con una skill en la que registró decenas de decisiones (estilo de título, formato de número, palabra prohibida).

Nielsen llama "deepfault" al default que queda guardado fuera de la vista de quien usa el agente. Un pedido para reservar un pasaje o refactorizar un código puede dejar cientos de puntos abiertos, y el agente completa cada uno por su cuenta, en una sola ejecución. Las decisiones grabadas en una skill hace meses todavía pueden valer para la salida de hoy. Nielsen vincula la revisión de ese archivo al cambio del modelo detrás del agente o al cambio de la tarea que ejecuta.

Un default de pantalla pasa por crítica de diseño y prueba de usabilidad antes de salir al aire, una revisión hecha por otra persona, un proceso que corre solo. La skill depende de que el propio autor recuerde reabrir el archivo cuando cambia el modelo o la tarea. Cambiar una skill pesa tanto sobre el resultado como cambiar una pantalla, y merece el mismo tipo de evaluación: comparación de la salida antes y después del cambio, como ya se hace con las variaciones de interfaz.

¿Pero cómo hago eso? Anota para investigar después: promptfoo, LangSmith y Braintrust ejecutan la skill contra un conjunto fijo de casos reales, ponen la salida antigua al lado de la nueva y aplican una nota automática. Ninguna nació exactamente para este propósito, pero ayudan a resolver el problema: saber si el cambio de texto mejoró o empeoró el resultado antes del deploy. Hay quien prefiere evaluar a mano, por feeling, pero el feeling cambia con el día: la misma salida puede recibir una nota distinta un lunes por la mañana y un viernes por la tarde.

---

Fuentes: [Jakob Nielsen (Substack)](https://jakobnielsenphd.substack.com/p/defaults) · [Promptfoo](https://www.promptfoo.dev/docs/intro/) · [LangSmith](https://docs.langchain.com/langsmith/evaluation-concepts) · [Braintrust](https://www.braintrust.dev/docs/evaluate)
