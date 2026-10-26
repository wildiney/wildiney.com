---
title: "O default que ninguém vê"
date: "2026-09-25"
description: "Nielsen chama de deepfault o default guardado fora da vista de quem usa o agente. Uma skill pesa tanto quanto uma tela e merece o mesmo tipo de avaliação."
tags: ["agentes de IA", "defaults", "skills", "governança", "decisão"]
thumbnail: "/images/articles/deepfault-defaults-skills-agentes/cover.webp"
---

Em 2011, Jared Spool relatou um estudo com várias centenas de arquivos de configuração do Word: menos de 5% dos usuários tinham mudado algum ajuste. No mesmo artigo em que cita o estudo, Jakob Nielsen conta que escreve os próprios textos com uma skill em que registrou dezenas de decisões (estilo de título, formato de número, palavra banida).

Nielsen chama de "deepfault" o default que fica guardado fora da vista de quem usa o agente. Um pedido para reservar uma passagem ou refatorar um código pode deixar centenas de pontos em aberto, e o agente preenche cada um sozinho, em uma execução só. As decisões gravadas em uma skill meses atrás ainda podem valer para a saída de hoje. Nielsen liga a revisão desse arquivo à troca de modelo por trás do agente ou à mudança da tarefa que ele executa.

Um default de tela passa por crítica de design e teste de usabilidade antes de ir ao ar, revisão feita por outra pessoa, um processo que roda sozinho. A skill depende do próprio autor lembrar de reabrir o arquivo quando o modelo ou a tarefa muda. Mudar uma skill pesa tanto sobre o resultado quanto mudar uma tela, e merece o mesmo tipo de avaliação: comparação de saída antes e depois da mudança, do jeito que já se faz com variação de interface.

Mas como eu faço isso? Anota aí para pesquisar depois: promptfoo, LangSmith e Braintrust rodam a skill contra um conjunto fixo de casos reais, colocam a saída antiga ao lado da nova e aplicam nota automática. Nenhuma delas nasceu exatamente para esse propósito, mas ajudam a resolver o problema: saber se a mudança de texto melhorou ou piorou o resultado antes do deploy. Tem quem prefira avaliar na mão, pelo feeling, mas o feeling muda com o dia: a mesma saída pode ganhar nota diferente em uma segunda de manhã e em uma sexta à tarde.

---

Fontes: [Jakob Nielsen (Substack)](https://jakobnielsenphd.substack.com/p/defaults) · [Promptfoo](https://www.promptfoo.dev/docs/intro/) · [LangSmith](https://docs.langchain.com/langsmith/evaluation-concepts) · [Braintrust](https://www.braintrust.dev/docs/evaluate)
