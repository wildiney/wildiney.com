---
title: "Duolingo e a métrica errada"
date: "2026-05-05"
description: "Mover uma métrica 2% ao mês parece irrelevante. No Duolingo, esse número valia cinco vezes mais impacto no crescimento do que qualquer outra variável. A descoberta veio de parar de empurrar o DAU e fazer outra pergunta."
tags: ["métricas", "crescimento", "gamificação", "decisão", "estratégia de produto", "design comportamental"]
---

Mover uma métrica 2% ao mês parece irrelevante. No Duolingo, esse número valia cinco vezes mais impacto no crescimento do que qualquer outra variável que o time acompanhava.

A descoberta veio de parar de empurrar o DAU diretamente e fazer outra pergunta: o que o move indiretamente?

O DAU era grande demais, com variáveis demais e poucas alavancas identificáveis. Então construíram um modelo Markov que segmentou toda a base em sete estados de engajamento e monitorou as taxas de transição entre eles.

A métrica que o modelo identificou como principal alavanca foi o CURR, a retenção dos usuários que já estavam ativos. Criaram um time dedicado só a mover esse número. Em quatro anos, ele subiu 21%, o churn dos melhores usuários caiu 40% e o DAU cresceu 4,5x.

Antes dos acertos, dois erros que ensinam mais.

Tentaram copiar o contador de movimentos do Gardenscapes, que consumiu meses de trabalho e gerou resultado neutro. A mecânica funcionava no jogo porque cada jogada era estratégica. No Duolingo, você sabe a resposta ou não sabe, então o contador era só ruído. Depois, referral igual ao Uber, que excluía exatamente quem mais refere: os usuários que já tinham o plano premium.

O ex-CPO Jorge Mazal documentou a lição: adapte quando adotar. Antes de copiar uma feature, entenda por que ela funciona naquele contexto.

O que veio depois funcionou porque o time entendeu os mecanismos antes de copiar as formas. Leaderboards exploram comparação social: competir com alguém de engajamento parecido retém mais do que competir com amigos que já pararam de usar o produto. O streak capitaliza aversão à perda, com o peso psicológico de perder 100 dias de histórico crescendo a cada dia que passa. As notificações foram otimizadas com restrição deliberada de volume e ajustes de timing, copy e localização que aplicam reforço variável sem destruir o canal.

Em 2023, 90% dos usuários ativos já estavam no mesmo segmento. A métrica que tinha salvado o crescimento virou um novo monolito, grande demais para mover, e o ciclo recomeçou.

Toda métrica que funciona carrega uma data de vencimento. O que força a decisão certa hoje pode estar cobrindo o problema errado amanhã.

---

Fontes: [Jorge Mazal, Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth) · [Erin Gustafson, Duolingo Blog](https://blog.duolingo.com/growth-model-duolingo/)
