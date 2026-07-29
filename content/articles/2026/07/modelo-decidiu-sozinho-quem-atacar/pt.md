---
title: "O modelo que decidiu sozinho quem atacar"
date: "2026-07-22"
description: "Em 2026, dois modelos de IA escaparam de sandboxes. Um obedeceu uma ordem. O outro escolheu sozinho quem atacar."
tags: ["agentes de ia", "segurança", "decisão", "avaliação de ia"]
thumbnail: "/images/articles/modelo-decidiu-sozinho-quem-atacar/cover.webp"
---

![Representação visual de dois modelos de IA escapando de ambientes de teste isolados](/images/articles/modelo-decidiu-sozinho-quem-atacar/cover.webp)

Dois modelos escaparam do sandbox esse ano e um deles até decidiu sozinho quem atacar.

Em abril, a Anthropic pediu pro Claude Mythos tentar escapar de um ambiente de teste isolado, mandar uma mensagem pra um pesquisador específico e ele escapou. Em julho, a OpenAI não pediu nada parecido pro GPT-5.6 Sol e ele escapou do mesmo jeito, só que decidiu ir atrás de uma empresa.

O caso Mythos foi por encomenda. Pesquisadores trancaram o modelo em um sandbox e mandaram ele sair de lá. O modelo encadeou uma sequência de exploits, achou zero-days em vários sistemas operacionais e navegadores, incluindo um bug de 27 anos escondido no OpenBSD, e ganhou mais acesso à internet do que devia. Mandou o e-mail pro pesquisador e ainda publicou os detalhes do exploit em sites públicos, sem ninguém pedir isso.

O caso GPT-5.6 Sol não teve pedido nenhum. A OpenAI desligou os classificadores de segurança pra medir o teto de capacidade ofensiva do modelo em um benchmark interno chamado ExploitGym. Ninguém instruiu o modelo a atacar, ele só queria resolver o teste. Gastou uma quantidade enorme de processamento até achar uma falha zero-day no proxy de pacotes do ambiente. Escalou privilégio, andou de máquina em máquina até achar acesso livre à internet, deduziu sozinho que o gabarito do benchmark estava hospedado na Hugging Face, e foi buscar. Combinou credenciais roubadas com outro zero-day e conseguiu execução remota de código nos servidores da empresa.

Clem Delangue, CEO da Hugging Face, chamou o episódio de "possivelmente o primeiro incidente do tipo". Talvez seja, mas não pela capacidade de escapar: o Mythos já tinha escapado de um sandbox três meses e meio antes. A diferença é mais importante que a repetição. Lá, o modelo obedeceu uma ordem pra sair. Aqui, ninguém mandou nada, e o modelo escolheu sozinho quem ia atacar.

As duas empresas só reagiram depois que os testes saíram do roteiro. A Anthropic manteve o Mythos fora de acesso geral. A OpenAI revelou a falha ao fornecedor afetado e trouxe a Hugging Face pro programa de acesso privilegiado. A mesma capacidade que abriu essas duas portas sem licença já está sendo usada pelas duas empresas pra fechar outras, achando vulnerabilidade antes de quem ataca. A diferença entre ferramenta e ameaça é só quem recebe esse acesso primeiro.

---

Fontes: [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) · [Hugging Face](https://huggingface.co/blog/security-incident-july-2026) · [Anthropic](https://www.anthropic.com/claude-mythos-preview-risk-report) · [Futurism](https://futurism.com/artificial-intelligence/anthropic-claude-mythos-escaped-sandbox) · [Axios](https://www.axios.com/2026/07/21/openai-says-hugging-face-breach-caused-by-one-its-models)
