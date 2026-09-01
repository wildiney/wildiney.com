---
title: "466 millones de líneas en 20 horas, ningún parche sin revisión humana"
date: "2026-08-20"
description: "50 agentes de IA auditaron el código del gobierno de Alberta en 20 horas. El método tradicional habría tardado seis años y medio. Cada parche esperó revisión humana."
tags: ["seguridad de IA", "confianza", "gobernanza", "decisión", "IA agéntica"]
thumbnail: "/images/articles/alberta-auditoria-seguranca-ia/cover.webp"
---

50 agentes de IA revisaron 466 millones de líneas de código del gobierno de Alberta, Canadá, en 20 horas. Con el método tradicional, la misma revisión habría tardado unos seis años y medio, según el propio equipo que ejecutó el proyecto.

Una IA revisando seguridad puede inventar una vulnerabilidad que no existe, o peor, dejar pasar una que sí existe. Es la razón más común para detenerse antes de dejar que un agente se acerque a producción, y es una preocupación real. Alberta lo resolvió construyendo capa sobre capa de verificación sobre el modelo.

El proceso funcionó en dos etapas: un motor de reglas recorría cada repositorio buscando patrones conocidos, luego un segundo agente revisaba cada alerta y citaba el archivo y la línea exacta para que un humano pudiera verificarlo. Un agente de ataque intentaba vulnerar la aplicación como lo haría un atacante real, mientras otro evaluaba la defensa contra un estándar internacional de seguridad y redactaba el plan de corrección. Casi 95 controles verificados por ronda. Ningún parche llegó a producción sin revisión y aprobación de un ingeniero del equipo.

El resultado vino de aceptar que la IA se equivoca, y de diseñar el proceso para que ese error nunca llegara solo a producción. Un portal de subsidios que tardó cinco meses en construirse a mano hace 25 años fue reconstruido en cuatro o cinco días, con la misma cantidad de revisión humana al final de la línea.

El miedo a la alucinación detiene a mucha gente antes de siquiera intentarlo. Alberta demostró que el tamaño del checkpoint entre el agente y producción es lo que decide si ese error llega a importar.

---

Fuentes: [Anthropic](https://www.anthropic.com/news/alberta-government-claude-cybersecurity) · [The Logic](https://thelogic.co/briefing/alberta-government-uses-claude-to-check-its-code/)
