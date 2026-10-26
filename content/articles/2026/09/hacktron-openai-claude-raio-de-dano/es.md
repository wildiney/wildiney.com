---
title: "El radio de daño de una cuenta con agente"
date: "2026-09-19"
description: "Tres investigadores vulneraron el repositorio de OpenAI en 72 horas. El radio de daño de una cuenta con agente es todo lo que está conectado a ella."
tags: ["agentes de IA", "seguridad", "control de acceso", "decisión", "Codex"]
thumbnail: "/images/articles/hacktron-openai-claude-raio-de-dano/cover.webp"
---

Tres investigadores de Hacktron AI vulneraron el repositorio interno de OpenAI en menos de 72 horas. La prueba del acceso fue un pull request abierto desde la cuenta de un empleado. "Somos solo tres tipos con suscripciones de Claude y Codex", dijo el cofundador Mohan Pedhapati al Wall Street Journal. OpenAI corrigió la falla unas 14 horas después del reporte y pagó una recompensa de US$ 6.500.

La cadena empezó con el envío de una imagen que explotaba una falla de memoria en el foro community.openai.com, alojado en Discourse (no confundir con Discord). Se convirtió en ejecución remota de código en el servidor del foro. El inicio de sesión único de OpenAI, que el foro usa para autenticar, transformó ese acceso en acceso a cuentas de empleados en ChatGPT y Codex. Una de ellas tenía el GitHub de la organización conectado, y un prompt en esa cuenta abrió el pull request en el monorepo openai/openai. El Claude usado era la versión autorizada para ciberseguridad, con restricciones relajadas: Opus 4.8 falló, Opus 5 lo resolvió.

El radio de daño de una cuenta con agente es todo lo que está conectado a ella. El programa de recompensas funcionó como debía, pero la decisión de producto viene antes: si roban la cuenta, ¿hasta dónde llega el agente? ¿Y el inicio de sesión de un servicio debería abrir la puerta de otro?

---

Fuentes: [Fortune](https://fortune.com/2026/09/18/open-ai-hacked-anthropic-claude-source-code-6500-reward/) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/hackers-breach-openai-using-claude-tools-gaining-access-to-employee-accounts-and-the-companys-internal-codebase-initiating-a-harmless-pull-request-as-proof-of-the-hack) · [The Register](https://www.theregister.com/security/2026/09/18/researchers-used-claude-to-hack-openai-employees-chatgpt-accounts/5297517) · [Hacktron AI](https://www.hacktron.ai/blog/hacking-openai)
