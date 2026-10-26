---
title: "O raio de dano de uma conta com agente"
date: "2026-09-19"
description: "Três pesquisadores invadiram o repositório da OpenAI em 72 horas. O raio de dano de uma conta com agente é tudo o que está conectado a ela."
tags: ["agentes de IA", "segurança", "controle de acesso", "decisão", "Codex"]
thumbnail: "/images/articles/hacktron-openai-claude-raio-de-dano/cover.webp"
---

Três pesquisadores da Hacktron AI invadiram o repositório interno da OpenAI em menos de 72 horas. A prova do acesso foi um pull request aberto na conta de um funcionário. "Somos só três caras com assinaturas do Claude e do Codex", disse o cofundador Mohan Pedhapati ao Wall Street Journal. A OpenAI corrigiu a falha cerca de 14 horas depois do relatório e pagou US$ 6.500 de recompensa.

A cadeia começou com o envio de uma imagem que explorava uma falha de memória no fórum community.openai.com, hospedado no Discourse (não confunda com o Discord). Virou execução remota de código no servidor do fórum. O login único da OpenAI, que o fórum usa para autenticar, transformou esse acesso em acesso a contas de funcionários no ChatGPT e no Codex. Uma delas tinha o GitHub da organização conectado, e um prompt nessa conta abriu o pull request no monorepo openai/openai. O Claude usado era a versão autorizada para cibersegurança, com restrições relaxadas: o Opus 4.8 falhou, o Opus 5 resolveu.

O raio de dano de uma conta com agente é tudo o que está conectado a ela. O programa de recompensa funcionou como deveria, mas a decisão de produto vem antes: se roubarem a conta, até onde o agente chega? E o login de um serviço deveria abrir a porta de outro?

---

Fontes: [Fortune](https://fortune.com/2026/09/18/open-ai-hacked-anthropic-claude-source-code-6500-reward/) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/hackers-breach-openai-using-claude-tools-gaining-access-to-employee-accounts-and-the-companys-internal-codebase-initiating-a-harmless-pull-request-as-proof-of-the-hack) · [The Register](https://www.theregister.com/security/2026/09/18/researchers-used-claude-to-hack-openai-employees-chatgpt-accounts/5297517) · [Hacktron AI](https://www.hacktron.ai/blog/hacking-openai)
