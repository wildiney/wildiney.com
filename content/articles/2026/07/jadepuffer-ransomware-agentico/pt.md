---
title: "O ransomware que ninguém pilotou"
date: "2026-07-26"
description: "Um agente de IA invadiu, escalou privilégio e sequestrou dados sozinho, sem operador humano em nenhuma etapa. O JADEPUFFER expõe o custo de adiar patches."
tags: ["segurança", "ia agêntica", "ransomware", "risco", "governança"]
thumbnail: "/images/articles/jadepuffer-ransomware-agentico/cover.webp"
---

19h34. Um agente de IA tenta logar com uma senha que acabou de criar. Falha. Trinta e um segundos depois, sem ninguém tocando no teclado, ele já tinha diagnosticado o erro, gerado um hash novo e conseguido acesso de administrador.

Aconteceu de verdade e foi documentado num relatório que a Sysdig publicou sobre o JADEPUFFER, um ransomware agêntico responsável pelo primeiro sequestro de dados conduzido do início ao fim por um modelo de linguagem, sem operador humano em nenhuma etapa da operação.

O agente invadiu um servidor Langflow explorando uma falha conhecida, vasculhou variáveis de ambiente atrás de chaves de API e credenciais de nuvem, migrou lateralmente até um banco de produção rodando Nacos e forjou um token de autenticação usando uma vulnerabilidade de 2021 que a maioria das equipes nunca corrigiu. Criptografou 1.342 itens de configuração, apagou os originais e deixou um bilhete de resgate em Bitcoin.

A vulnerabilidade do Nacos tem cinco anos. A chave padrão do serviço está pública desde 2020. Um agente leu essa documentação técnica sozinho, testou, errou, corrigiu o próprio erro em meio minuto e seguiu andando pela rede sem pausa, sem distração, sem precisar dormir.

Toda empresa correndo pra colocar agentes operando sozinhos em produção deveria ler esse relatório antes de comemorar a velocidade. Ninguém aqui foi pego de surpresa por uma falha recém descoberta: o problema nasceu antes, no dia em que alguém decidiu deixar aquele sistema do jeito que estava, sem prazo de revisão, porque funcionava. Ter um critério pra saber quando atualizar, e até quando dá pra esperar sem virar risco, é decisão de quem lidera o produto. E é exatamente esse tipo de decisão que um agente autônomo vai tomar sozinho, sem perguntar, se ninguém tiver deixado escrito antes.

---

Fontes: [Sysdig Threat Research Team](https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/jadepuffer-ransomware-used-ai-agent-to-automate-entire-attack/)
