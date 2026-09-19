---
title: "Alibaba te escuchó"
date: "2026-09-10"
description: "Un desarrollador descubrió que AliExpress ejecutaba fingerprinting de audio silencioso en todos los visitantes. El efecto colateral: el grafo de audio cortaba la reproducción Bluetooth."
tags: ["privacidad", "fingerprinting", "recopilación de datos", "decisión", "comercio electrónico"]
thumbnail: "/images/articles/alibaba-te-ouviu-audio-fingerprinting/cover.webp"
---

Matt Callaghan notó que sus auriculares Bluetooth dejaban de reproducir audio del teléfono cada vez que abría una pestaña de AliExpress, incluso sin video ni sonido audible en la página (sonido audible parece redundante, pero ese es el gran detalle de toda la historia). Cerrar la pestaña lo solucionaba de inmediato, y eso fue lo que lo llevó a abrir el código.

Encontró dos scripts, collina.js y fireyejs.js, asociados al stack antifraude de Alibaba. Los scripts construyen un grafo de audio silencioso que mide cómo el navegador procesa la señal y usa el resultado como huella digital del dispositivo. El mismo paquete recopila datos de pantalla y WebGL, cifra todo y lo envía a los servidores de Alibaba. En ningún momento se informa al visitante, y la medición no depende de ninguna sospecha: ocurre para todos los que abren la página de inicio, sin necesidad de cuenta ni de iniciar el proceso de compra.

Alibaba eligió cubrir el cien por ciento del tráfico en lugar de activar el fingerprinting solo ante una señal de riesgo, como una IP sospechosa o intentos repetidos de inicio de sesión. La cobertura total mide a cada visitante antes de que exista cualquier indicio de amenaza, y esa amplitud se filtró fuera de la pantalla: el grafo de audio interfería en el procesamiento de sonido del dispositivo hasta cortar la reproducción Bluetooth en cualquier visitante. Un efecto colateral audible expuso una recopilación diseñada para ser silenciosa.

La recopilación en sí no sorprende: varias plataformas de comercio hacen algo parecido, innovan cada vez que surge una prohibición u obstáculo. Pero es una elección. Deben haber sopesado el costo de dejar pasar un fraude, si esa era realmente la intención, frente al costo de ser descubiertos.

---

Fuentes: [Matt Callaghan (Laserphile)](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/aliexpress-allegedly-uses-your-browsers-audio-system-to-fingerprint-your-pc-hidden-code-runs-even-when-no-sound-is-playing) · [Cybersecurity News](https://cybersecuritynews.com/aliexpress-webaudio-device-fingerprinting/)
