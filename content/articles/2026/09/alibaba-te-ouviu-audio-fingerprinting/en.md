---
title: "Alibaba Was Listening"
date: "2026-09-10"
description: "A developer discovered that AliExpress ran silent audio fingerprinting on every visitor. The side effect: the audio graph cut Bluetooth playback."
tags: ["privacy", "fingerprinting", "data collection", "decision", "e-commerce"]
thumbnail: "/images/articles/alibaba-te-ouviu-audio-fingerprinting/cover.webp"
---

Matt Callaghan noticed that his Bluetooth headphones stopped playing audio from his phone every time he opened an AliExpress tab, even with no video or audible sound on the page. Closing the tab fixed it immediately, and that is what led him to open the code.

He found two scripts, collina.js and fireyejs.js, tied to Alibaba's anti-fraud stack. The scripts build a silent audio graph that measures how the browser processes a signal and uses the result as a device fingerprint. The same package collects screen and WebGL data, encrypts everything, and sends it to Alibaba's servers. The visitor is never informed, and the measurement does not depend on any suspicion: it happens for everyone who opens the home page, without an account or any step toward a purchase.

Alibaba chose to cover one hundred percent of traffic rather than triggering fingerprinting only on a risk signal, such as a suspicious IP or repeated login attempts. Full coverage measures every visitor before any sign of a threat exists, and that breadth leaked outside the screen: the audio graph interfered with the device's sound processing enough to cut Bluetooth playback for any visitor. An audible side effect exposed a collection designed to be silent.

The collection itself is not surprising. Several commerce platforms do something similar, innovating whenever a prohibition or obstacle appears. But it is a choice. They must have weighed the cost of letting a fraud slip through, if that was genuinely the intent, against the cost of being discovered.

---

Sources: [Matt Callaghan (Laserphile)](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/cyber-security/aliexpress-allegedly-uses-your-browsers-audio-system-to-fingerprint-your-pc-hidden-code-runs-even-when-no-sound-is-playing) · [Cybersecurity News](https://cybersecuritynews.com/aliexpress-webaudio-device-fingerprinting/)
