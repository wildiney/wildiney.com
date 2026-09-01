---
title: "466 milhões de linhas em 20 horas, nenhum patch sem revisão humana"
date: "2026-08-20"
description: "50 agentes de IA auditaram o código do governo de Alberta em 20 horas. Pelo método tradicional levaria seis anos e meio. Cada patch ainda esperou revisão humana."
tags: ["segurança de IA", "confiança", "governança", "decisão", "IA agêntica"]
thumbnail: "/images/articles/alberta-auditoria-seguranca-ia/cover.webp"
---

50 agentes de IA vasculharam 466 milhões de linhas de código do governo de Alberta, no Canadá, em 20 horas. Pelo método tradicional, a mesma revisão levaria cerca de seis anos e meio, segundo a própria equipe que tocou o projeto.

Uma IA revisando segurança pode inventar uma vulnerabilidade que não existe, ou pior, deixar passar uma que existe. É o motivo mais comum pra travar antes de deixar um agente chegar perto de produção, e é uma preocupação real. Alberta resolveu isso construindo camada em cima de camada de verificação sobre o modelo.

O processo rodou em duas etapas: um motor de regras varria cada repositório atrás de padrões conhecidos, depois um segundo agente revisava cada alerta e citava o arquivo e a linha exata, pra um humano poder checar. Um agente de ataque tentava invadir a aplicação como um invasor tentaria, outro avaliava a defesa contra um padrão internacional de segurança e escrevia o plano de correção. Quase 95 controles checados a cada rodada. Nenhum patch foi pra produção sem revisão e aprovação de um engenheiro da equipe.

O resultado veio de aceitar que a IA erra, e desenhar o processo pra que esse erro nunca chegasse sozinho até produção. Um portal de subsídio que levou cinco meses pra ser feito à mão há 25 anos foi reconstruído em quatro a cinco dias, com o mesmo tanto de revisão humana no fim da linha.

O medo de alucinação trava muita gente antes mesmo de tentar. Alberta mostrou que o tamanho do checkpoint entre o agente e a produção é o que decide se aquele erro chega a importar.

---

Fontes: [Anthropic](https://www.anthropic.com/news/alberta-government-claude-cybersecurity) · [The Logic](https://thelogic.co/briefing/alberta-government-uses-claude-to-check-its-code/)
