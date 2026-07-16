---
title: "El ransomware que nadie pilotó"
date: "2026-07-26"
description: "Un agente de IA irrumpió, escaló privilegios y secuestró datos solo, sin operador humano en ninguna etapa. JADEPUFFER expone el costo de aplazar parches."
tags: ["seguridad", "ia agéntica", "ransomware", "riesgo", "gobernanza"]
thumbnail: "/images/articles/jadepuffer-ransomware-agentico/cover.webp"
---

19:34. Un agente de IA intenta iniciar sesión con una contraseña que acaba de crear. Falla. Treinta y un segundos después, sin que nadie tocara el teclado, ya había diagnosticado el error, generado un hash nuevo y conseguido acceso de administrador.

Ocurrió de verdad y fue documentado en un informe que Sysdig publicó sobre JADEPUFFER, un ransomware agéntico responsable del primer secuestro de datos conducido de principio a fin por un modelo de lenguaje, sin operador humano en ninguna etapa de la operación.

El agente irrumpió en un servidor Langflow explotando una falla conocida, escarbó variables de entorno buscando claves de API y credenciales de nube, se movió lateralmente hasta una base de datos de producción corriendo Nacos y falsificó un token de autenticación usando una vulnerabilidad de 2021 que la mayoría de los equipos nunca corrigió. Cifró 1.342 elementos de configuración, borró los originales y dejó una nota de rescate en Bitcoin.

La vulnerabilidad de Nacos tiene cinco años. La clave predeterminada del servicio es pública desde 2020. Un agente leyó esa documentación técnica solo, probó, se equivocó, corrigió su propio error en medio minuto y siguió avanzando por la red sin pausa, sin distracción, sin necesidad de dormir.

Toda empresa corriendo para poner agentes operando solos en producción debería leer este informe antes de celebrar la velocidad. Nadie aquí fue sorprendido por una falla recién descubierta: el problema nació antes, el día en que alguien decidió dejar ese sistema tal como estaba, sin plazo de revisión, porque funcionaba. Tener un criterio para saber cuándo actualizar, y hasta cuándo se puede esperar sin que se vuelva riesgo, es decisión de quien lidera el producto. Y es exactamente ese tipo de decisión la que un agente autónomo va a tomar solo, sin preguntar, si nadie lo dejó escrito antes.

---

Fuentes: [Sysdig Threat Research Team](https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/jadepuffer-ransomware-used-ai-agent-to-automate-entire-attack/)
