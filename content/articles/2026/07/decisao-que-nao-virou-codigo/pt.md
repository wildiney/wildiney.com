---
title: "A decisão que não virou código"
date: "2026-07-29"
description: "Designers que também codam quase dobraram em um ano na Figma. Mas até em times com design system pronto, o Figma Make ainda gera código hardcoded."
tags: ["design system", "figma", "agentes de ia", "decisão"]
thumbnail: "/images/articles/decisao-que-nao-virou-codigo/cover.webp"
---

Em um ano, o percentual de designers da Figma que também escrevem código quase dobrou, foi de 21% para 41%. Do lado dos devs, 60% já participam do design, contra 44% antes. Transitar entre os dois mundos deixou de ser diferencial e virou requisito da profissão.

O CPO da empresa, Yuhki Yamashita, comentou o efeito colateral disso numa coletiva em Seul. Com agentes de IA, qualquer pessoa monta um protótipo inteiro sozinha. O resultado é que esses protótipos estão saindo muito parecidos entre si, e o código que um time produz não conversa com o resto da organização.

Faz sentido: um agente treinado nos mesmos padrões, usado por qualquer squad que peça a mesma coisa, entrega o mesmo tipo de solução. O que importa aqui é o que esse agente faz com a decisão que o time já tinha tomado antes de pedir o protótipo.

A resposta da Figma até agora foi de infraestrutura: Canvas, Code Layers, e um recurso pra ver qual agente cada time usa. Isso resolve quem faz o quê, mas não o que sobra da decisão depois que o agente termina o trabalho.

Falta nessa resposta o que fez do Figma a ferramenta preferida dos designers: a facilidade de montar um design system e replicar esse padrão pela organização inteira. Hoje, mesmo com um design system pronto no Figma Design, o Figma Make não interpreta essa estrutura direito. O código final sai hardcoded na camada de primitivos, e isso quebra a manutenção assim que a aplicação cresce. É por isso que ferramentas como Claude Code ganham espaço: nelas, a decisão de design vira código, vira padrão reutilizável, auditável, testável, em vez de virar desenho que alguém traduz depois.

Visibilidade de agente resolve rastreio, mas não toca arquitetura. Enquanto o design system continuar sendo desenho que se traduz em código depois da decisão já tomada, cada squad vai reinventar a mesma solução do zero, não importa quantos agentes estejam de olho no trabalho um do outro.

---

Fontes: [Seoul Economic Daily](https://en.sedaily.com/technology/2026/07/15/figma-says-ai-agents-fuel-app-boom-making-differentiation) · [Figma](https://www.figma.com/blog/state-of-the-designer-2026/)
