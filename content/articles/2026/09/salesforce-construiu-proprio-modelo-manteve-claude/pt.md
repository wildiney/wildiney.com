---
title: "A Salesforce construiu o próprio modelo e manteve o Claude"
date: "2026-09-29"
description: "A Salesforce treinou o Koa, modelo de raciocínio próprio, sobre o Nemotron e manteve o Claude. Decidir qual tarefa vai para qual modelo virou trabalho de produto."
tags: ["inteligência artificial", "LLM", "estratégia de produto", "governança de IA"]
thumbnail: "/images/articles/salesforce-construiu-proprio-modelo-manteve-claude/cover.webp"
---

A Salesforce tinha acesso direto ao Claude e ao ChatGPT dentro do próprio produto, mas construiu um modelo de raciocínio só seu, batizado de Koa, treinado em cima do Nemotron, o modelo aberto da Nvidia.

Vendedor negociando desconto e cliente irritado no suporte não precisam de um modelo treinado para resolver problema de matemática impossível, feito para impressionar benchmark e investidores. Precisam de resposta rápida, barata e sem risco de vazar dado de cliente.

O Koa roda dentro do Agentforce, a plataforma de agentes da Salesforce, e cuida do raciocínio em tarefas de vendas, marketing e suporte, como responder cliente e agendar compromisso. Antes, quando um agente precisava raciocinar em algo complexo, o pedido ia para um modelo de fronteira como Claude ou ChatGPT. Agora a Salesforce tem um modelo próprio para isso, que gasta menos token que os concorrentes.

O treino usou dado sintético: a Salesforce simulou um call center, com cliente furioso ligando, e um vendedor tentando fechar negócio. Nenhum dado real de cliente entrou.

A empresa não abandonou a Anthropic: lançou o Claudeforce na mesma semana, com o Claude seguindo como interface enquanto o dado do cliente fica preso na infraestrutura da própria Salesforce.

O ganho de token é o dado concreto, mas o padrão que fica vale refletir: decidir qual tarefa vai para qual modelo passa a ser trabalho também do time que desenha o produto, não só do time de infraestrutura.

---

Fontes: [TechCrunch](https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/)
