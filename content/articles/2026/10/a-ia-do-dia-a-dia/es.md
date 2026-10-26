---
title: "La IA del día a día"
date: "2026-10-23"
description: "Norman, Torvalds y Martin definen dónde queda la responsabilidad humana al usar IA. La conversación no es usarla o no, sino dónde, cuándo y cómo."
tags: ["reglas de uso de la IA", "responsabilidad humana", "agentes de IA", "criterio de aceptación", "producto"]
thumbnail: "/images/articles/a-ia-do-dia-a-dia/cover.webp"
---

Don Norman, autor de "El diseño de los objetos cotidianos", se despertó a las 3 de la mañana con la pieza que faltaba en un razonamiento sobre IA. Después de una hora de conversación con Claude, el material ya llenaba varias páginas. Como el artículo entero tomaría una semana o más, pidió un resumen de una página. Claude redactó la mayor parte y Norman revisó el texto, reescribiendo pasajes, y declaró la coautoría. Por último, avisó que normalmente no deja que la IA escriba por él, como quien ya prevé un posible daño a su propia imagen. ¿Un profesional que enseñó a generaciones tiene la obligación de probarse por haber usado una herramienta? ¿Tendría que volver a la hoja suelta y la máquina de escribir para comprobar la calidad de su trabajo?

En julio, Linus Torvalds escribió que Linux "no es uno de esos proyectos anti-IA". En el kernel de Linux se permite que la IA ayude en las contribuciones, siempre que el profesional responsable firme, al fin y al cabo una herramienta no tiene autoría legal ni debe responder por el resultado. Al menos yo todavía no vi a nadie felicitando a Excel por los resultados del semestre.

Robert C. Martin, autor de Clean Code, escribió en X, el 23 de julio, que su estrategia actual es no leer el código de los agentes. En su lugar, rodea a los agentes de restricciones como pruebas unitarias, escenarios en Gherkin y cobertura de pruebas. En otra respuesta del mismo hilo, dijo que los agentes escriben las herramientas que verifican esas restricciones y que son deterministas, es decir, corren igual cada vez.

La IA va a ocupar cada vez más espacio y, en los tres casos, autoridades de cada área definen cómo debe usarse. Cada una pone la responsabilidad del profesional en un punto distinto. Norman se quedó con el origen, que fue el razonamiento, y con la salida, que fue la reescritura y la coautoría declarada. Bajo Linus Torvalds, el kernel fijó la responsabilidad en el profesional que revisó el código generado por la IA. Martin la puso en las restricciones que exige a los agentes, y por eso puede renunciar a leer el código.

Observando estos casos, podemos decir que la conversación ya no debe ser sobre usar la IA o no, sino sobre definir dónde, cuándo y de qué forma se usará en tu proyecto.

En producto y diseño, el profesional define y el agente ejecuta. Los equipos de producto ya son dueños del encuadre del problema, que corresponde al origen de Norman, y del criterio de aceptación, que es el mismo tipo de restricción que Martin impone a los agentes. Siguiendo el ejemplo de estas autoridades, te corresponde decidir en qué procesos debe actuar tu agente, siempre asumiendo la responsabilidad por el retorno, que es la parte que merece ser exigida.

Y si llegaste hasta aquí pensando: "¡Basta! ¡La IA es una burbuja!", te digo: ¡seguro! No es cuestión de si va a estallar, sino de cuándo. Aun así, en 2000 estalló la burbuja de internet, y hoy está más presente que nunca en el diseño del día a día.

---

Fuentes: [Don Norman, Substack](https://donnorman1.substack.com/p/refinement-or-containment) · [Documentación del kernel de Linux (coding assistants)](https://docs.kernel.org/process/coding-assistants.html) · [Virtualization Review](https://virtualizationreview.com/articles/2026/07/16/linus-torvalds-says-linux-kernel-is-not-an-anti-ai-project.aspx) · [Robert C. Martin (Uncle Bob), X](https://x.com/unclebobmartin/status/2080257779395154409) · [Robert C. Martin (Uncle Bob), X, respuesta sobre herramientas deterministas](https://x.com/unclebobmartin/status/2080392677753790875)
