---
title: "A IA do dia a dia"
date: "2026-10-23"
description: "Norman, Torvalds e Martin definem onde fica a responsabilidade humana no uso da IA. A conversa não é usar ou não, mas onde, quando e como."
tags: ["regras de uso da IA", "responsabilidade humana", "agentes de IA", "critério de aceite", "produto"]
thumbnail: "/images/articles/a-ia-do-dia-a-dia/cover.webp"
---

Don Norman, autor de "O Design do Dia a Dia", acordou às 3 da manhã com a peça que faltava em um raciocínio sobre IA. Depois de uma hora de conversa com o Claude, o material já enchia várias páginas. Como o artigo inteiro tomaria uma semana ou mais, pediu um resumo de uma página. O Claude redigiu a maior parte e Norman revisou o texto, reescrevendo trechos, e declarou a coautoria. Por fim, avisou que normalmente não deixa a IA escrever por ele, como quem já prevê um possível dano à própria imagem. Um profissional que ensinou gerações tem obrigação de se provar por ter usado uma ferramenta? Teria que voltar ao sulfite e à máquina de escrever para comprovar a qualidade do seu trabalho?

Em julho, Linus Torvalds escreveu que o Linux "não é um desses projetos anti-IA". No kernel do Linux, é permitido que a IA ajude nas contribuições, desde que o profissional responsável assine, afinal ferramenta não tem autoria legal e nem deve responder pelo resultado. Pelo menos eu ainda não vi ninguém parabenizando o Excel pelos resultados do semestre.

Robert C. Martin, autor de Clean Code, escreveu no X, em 23 de julho, que a estratégia atual dele é não ler o código dos agentes. No lugar disso, cerca os agentes de restrições como testes unitários, cenários em Gherkin e cobertura de testes. Em outra resposta no mesmo fio, disse que os agentes escrevem as ferramentas que checam essas restrições e que elas são determinísticas, ou seja, rodam do mesmo jeito toda vez.

A IA vai ocupar cada vez mais espaço e, nos três casos, autoridades em cada área definem como ela deve ser usada. Cada uma põe a responsabilidade do profissional em um ponto diferente. Norman ficou com a origem, que foi o raciocínio, e com a saída, que foi a reescrita e a coautoria declarada. Sob Linus Torvalds, o kernel fixou a responsabilidade no profissional que revisou o código gerado pela IA. Martin pôs nas restrições que ele exige dos agentes, e por isso pode abrir mão de ler o código.

Observando esses casos, podemos dizer que a conversa não deve mais ser sobre usar a IA ou não, mas sobre definir onde, quando e de que forma ela será usada no seu projeto.

Em produto e design, o profissional define e o agente executa. Times de produto já são donos do enquadramento do problema, que corresponde à origem de Norman, e do critério de aceite, que é o mesmo tipo de restrição que Martin impõe aos agentes. Seguindo o exemplo dessas autoridades, cabe a você decidir em quais processos o seu agente deve atuar, sempre assumindo a responsabilidade pelo retorno, que é a parte que merece ser cobrada.

E se você chegou até aqui pensando: "Pare com isso! A IA é uma bolha!", eu te digo: com certeza! Não é uma questão de se ela vai estourar, mas de quando. Ainda assim, em 2000 estourou a bolha da internet, e hoje ela está mais presente do que nunca no design do dia a dia.

---

Fontes: [Don Norman, Substack](https://donnorman1.substack.com/p/refinement-or-containment) · [Documentação do kernel Linux (coding assistants)](https://docs.kernel.org/process/coding-assistants.html) · [Virtualization Review](https://virtualizationreview.com/articles/2026/07/16/linus-torvalds-says-linux-kernel-is-not-an-anti-ai-project.aspx) · [Robert C. Martin (Uncle Bob), X](https://x.com/unclebobmartin/status/2080257779395154409) · [Robert C. Martin (Uncle Bob), X, resposta sobre ferramentas determinísticas](https://x.com/unclebobmartin/status/2080392677753790875)
