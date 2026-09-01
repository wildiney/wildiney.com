---
title: "237 repositorios, un paquete que nunca existió"
date: "2026-08-13"
description: "Una IA inventó el nombre de un paquete npm y el comando de instalación se propagó por 237 repositorios sin ninguna verificación. Esto tiene nombre: slopsquatting."
tags: ["seguridad de IA", "cadena de suministro", "alucinación", "ingeniería de software", "confianza"]
thumbnail: "/images/articles/slopsquatting-hallucinacao-pacotes/cover.webp"
---

Hay un comando de instalación distribuido en 237 repositorios de GitHub que le ordena a un agente de IA ejecutar un paquete que nunca existió. Una IA inventó el nombre, y el archivo de instrucciones fue copiado y recopiado sin verificación en ninguna etapa.

Se llama react-codeshift, una combinación de jscodeshift con react-codemod. Charlie Eriksen, investigador de Aikido Security, rastreó el origen hasta un único commit de octubre de 2025, con 47 instrucciones generadas por IA sin revisión humana. Se propagó por forks y hasta fue traducido al japonés. Eriksen registró el nombre antes de que un atacante lo hiciera y observó agentes reales intentando instalar el paquete todos los días.

Esto tiene nombre: slopsquatting, término acuñado por Seth Larson, de la Python Software Foundation, que combina slop (el apodo del contenido superficial producido en masa por IA) con typosquatting (el ataque de registrar nombres similares a marcas conocidas). La IA inventa un nombre de paquete plausible, alguien registra ese nombre de verdad con malware adentro, y el install que debería fallar ejecuta código de otra persona.

Ya causó daño real: unused-imports, una alucinación de eslint-plugin-unused-imports, seguía acumulando 233 descargas semanales incluso después de ser bloqueado por npm. Un estudio independiente probó cinco modelos de vanguardia en casi 200.000 prompts y encontró 127 nombres que todos alucinaron de la misma manera; 53 seguían disponibles para registro incluso después de alertar a PyPI y Socket.dev.

La tasa de alucinación ha bajado, y eso es real: los cinco modelos probados erraron entre el 4,6% y el 6,1%. Pero esa tasa se multiplica con cada dependencia que un agente elige por su cuenta, y a escala, ese porcentaje por decisión deja de ser un detalle estadístico.

A la mayoría de los equipos les falta el paso entre la sugerencia y el install que verifica si el paquete realmente existe y quién lo publicó. Ese checkpoint no fue olvidado: alguien decidió en algún momento que el equipo no lo necesitaba.

---

Fuentes: [Charlie Eriksen, Aikido Security](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands) · [Aleksandr Churilov (arXiv)](https://arxiv.org/pdf/2605.17062) · [Mend.io](https://www.mend.io/blog/the-hallucinated-package-attack-slopsquatting/)
