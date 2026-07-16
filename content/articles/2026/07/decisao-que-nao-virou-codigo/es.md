---
title: "La decisión que nunca se volvió código"
date: "2026-07-29"
description: "Los diseñadores que también programan casi se duplicaron en un año en Figma. Pero incluso con design system listo, Figma Make sigue generando código hardcoded."
tags: ["design system", "figma", "agentes de ia", "toma de decisiones"]
thumbnail: "/images/articles/decisao-que-nao-virou-codigo/cover.webp"
---

En un año, el porcentaje de diseñadores de Figma que también escriben código casi se duplicó, pasó de 21% a 41%. Del lado de los devs, 60% ya participa en el diseño, contra 44% antes. Moverse entre los dos mundos dejó de ser un diferencial y se volvió requisito de la profesión.

El CPO de la empresa, Yuhki Yamashita, comentó el efecto colateral de esto en una rueda de prensa en Seúl. Con agentes de IA, cualquier persona arma un prototipo entero sola. El resultado es que esos prototipos están saliendo muy parecidos entre sí, y el código que un equipo produce no se comunica con el resto de la organización.

Tiene sentido: un agente entrenado en los mismos patrones, usado por cualquier squad que pida lo mismo, entrega el mismo tipo de solución. Lo que importa aquí es qué hace ese agente con la decisión que el equipo ya había tomado antes de pedir el prototipo.

La respuesta de Figma hasta ahora fue de infraestructura: Canvas, Code Layers, y una función para ver qué agente usa cada equipo. Eso resuelve quién hace qué, pero no lo que queda de la decisión después de que el agente termina el trabajo.

Falta en esa respuesta lo que hizo de Figma la herramienta preferida de los diseñadores: la facilidad de armar un design system y replicar ese patrón por toda la organización. Hoy, incluso con un design system listo en Figma Design, Figma Make no interpreta bien esa estructura. El código final sale hardcodeado en la capa de primitivos, y eso rompe el mantenimiento en cuanto la aplicación crece. Por eso herramientas como Claude Code ganan espacio: en ellas, la decisión de diseño se vuelve código, se vuelve patrón reutilizable, auditable, testeable, en vez de volverse un dibujo que alguien traduce después.

La visibilidad de agentes resuelve el rastreo, pero no toca la arquitectura. Mientras el design system siga siendo un dibujo que se traduce en código después de que la decisión ya fue tomada, cada squad va a reinventar la misma solución desde cero, sin importar cuántos agentes estén vigilando el trabajo del otro.

---

Fuentes: [Seoul Economic Daily](https://en.sedaily.com/technology/2026/07/15/figma-says-ai-agents-fuel-app-boom-making-differentiation) · [Figma](https://www.figma.com/blog/state-of-the-designer-2026/)
