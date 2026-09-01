---
title: "237 repositórios, um pacote que nunca existiu"
date: "2026-08-13"
description: "Uma IA inventou o nome de um pacote npm, e o comando de instalação se espalhou por 237 repositórios sem verificação. Isso tem nome: slopsquatting."
tags: ["segurança de IA", "cadeia de suprimentos", "alucinação", "engenharia de software", "confiança"]
thumbnail: "/images/articles/slopsquatting-hallucinacao-pacotes/cover.webp"
---

Tem um comando de instalação espalhado por 237 repositórios do GitHub, mandando um agente de IA rodar um pacote que nunca existiu. Uma IA inventou o nome, e um arquivo de instruções foi copiado e recopiado sem verificação em nenhuma etapa.

Chama-se react-codeshift, mistura de jscodeshift com react-codemod. Charlie Eriksen, pesquisador da Aikido Security, rastreou a origem até um único commit de outubro de 2025, com 47 instruções geradas por IA sem revisão humana. Espalhou por fork, virou até tradução em japonês. Eriksen registrou o nome antes que um atacante fizesse isso e viu agentes de verdade tentando instalar o pacote todo santo dia.

Isso tem nome: slopsquatting, termo de Seth Larson, da Python Software Foundation, cruzando slop, o apelido de conteúdo raso feito em massa por IA, com typosquatting, o golpe de registrar nomes parecidos com marcas conhecidas. A IA inventa um pacote plausível, alguém registra o nome de verdade com malware dentro, e o install que devia falhar passa a rodar código de outra pessoa.

Já causou dano real: unused-imports, alucinação de eslint-plugin-unused-imports, seguia com 233 downloads semanais mesmo bloqueado pelo npm. Uma pesquisa independente testou cinco modelos de ponta em quase 200 mil prompts e achou 127 nomes que todos alucinaram igual; 53 continuavam livres pra registro mesmo depois do alerta a PyPI e Socket.dev.

A taxa de alucinação caiu, isso é real, os cinco modelos testados erraram entre 4,6% e 6,1%. Mas essa taxa dispara a cada dependência que um agente escolhe sozinho, e em escala, esse percentual por decisão para de ser detalhe estatístico.

Falta, na maioria dos times, o passo entre a sugestão e o install que confere se o pacote existe de verdade e quem publicou. Esse checkpoint não foi esquecido: alguém decidiu, em algum momento, que o time não precisava dele.

---

Fontes: [Charlie Eriksen, Aikido Security](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands) · [Aleksandr Churilov (arXiv)](https://arxiv.org/pdf/2605.17062) · [Mend.io](https://www.mend.io/blog/the-hallucinated-package-attack-slopsquatting/)
