---
title: "A Alibaba te ouviu"
date: "2026-09-10"
description: "Um desenvolvedor descobriu que o AliExpress executava fingerprinting de áudio silencioso em todos os visitantes. O efeito colateral: o grafo de áudio cortava a reprodução Bluetooth."
tags: ["privacidade", "fingerprinting", "coleta de dados", "decisão", "e-commerce"]
thumbnail: "/images/articles/alibaba-te-ouviu-audio-fingerprinting/cover.webp"
---

Matt Callaghan reparou que os fones Bluetooth paravam de tocar áudio do celular toda vez que abria uma aba do AliExpress, mesmo sem vídeo ou som audível na página. Fechar a aba resolvia na hora, e foi isso que o levou a abrir o código.

Ele encontrou dois scripts, collina.js e fireyejs.js, associados ao stack antifraude da Alibaba. Os scripts montam um grafo de áudio silencioso que mede como o navegador processa o sinal e usa o resultado como impressão digital do dispositivo. O mesmo pacote coleta dados de tela e de WebGL, criptografa tudo e envia para os servidores da Alibaba. Em nenhum momento o visitante é informado sobre isso, e a medição não depende de suspeita alguma: acontece para todo mundo que abre a home, sem precisar de conta ou iniciar o processo de compra.

A Alibaba escolheu cobrir cem por cento do tráfego em vez de acionar o fingerprinting só diante de sinal de risco, como IP suspeito ou tentativa repetida de login. A cobertura total mede todo visitante antes de qualquer indício de ameaça existir, e essa amplitude vazou para fora da tela: o grafo de áudio interferia no processamento de som do aparelho a ponto de cortar a reprodução Bluetooth em qualquer visitante. Um efeito colateral audível expôs uma coleta pensada para ser silenciosa.

A coleta em si não surpreende, várias plataformas de comércio fazem algo parecido, inovam toda vez que surge uma proibição ou obstáculo. Mas isso é uma escolha, eles devem ter pesado o custo de deixar uma fraude passar, se essa era realmente a intenção, e o custo de ser descoberta.

---

Fontes: [Matt Callaghan (Laserphile)](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/aliexpress-allegedly-uses-your-browsers-audio-system-to-fingerprint-your-pc-hidden-code-runs-even-when-no-sound-is-playing) · [Cybersecurity News](https://cybersecuritynews.com/aliexpress-webaudio-device-fingerprinting/)
