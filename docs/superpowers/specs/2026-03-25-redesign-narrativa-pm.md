# Redesign de Narrativa — Reposicionamento PM

**Data:** 2026-03-25
**Objetivo:** Corrigir o posicionamento do site wildiney.com de "designer que também faz PM" para "Product Manager com vantagem competitiva de design", mantendo compatibilidade com NDA e construindo credibilidade por contexto de atuação.

---

## Contexto e Restrições

- **Objetivo do site:** Conseguir posição CLT de Product Manager em empresas tech de médio/grande porte, com construção de marca pessoal via artigos como estratégia paralela.
- **Restrição de NDA:** Maioria dos projetos coberta por NDA. Cliente atual (Banco do Brasil via NTT DATA) não pode ser nomeado — só "maior instituição financeira do Brasil".
- **Cases públicos disponíveis:** Bolsa Família, Sanrio, Indra/Minsait.
- **Abordagem escolhida:** Credibilidade por Contexto — o site deixa de ser portfólio de entregas e passa a ser registro de atuação em ambientes de alta complexidade.

---

## Abordagem: Credibilidade por Contexto

Em vez de mostrar telas e deliverables (bloqueado por NDA), cada case descreve:
1. **Contexto** — ambiente, escala, complexidade
2. **Problema** — o que precisava ser resolvido
3. **Atuação** — decisões tomadas e por quê (sem telas)
4. **Impacto** — resultado mensurável

Isso é exatamente como PMs apresentam trabalho em entrevistas. NDA-safe por definição.

---

## Design por Seção

### 1. Hero

**Localização do código:** `src/components/home/HeroSection.astro` — copy em objeto local `heroCopy` no topo do arquivo (não em `messages/`). Atualizar as entradas `pt`, `en` e `es` do objeto.

| Elemento | PT | EN | ES |
|---|---|---|---|
| Label | `Product Manager · Design Lead · 15 anos` | `Product Manager · Design Lead · 15 years` | `Product Manager · Design Lead · 15 años` |
| Headline | `Product Manager. Discovery, estratégia e entrega.` | `Product Manager. Discovery, strategy and delivery.` | `Product Manager. Discovery, estrategia y entrega.` |
| Subheadline | `Atuei na maior instituição financeira do Brasil, no redesign que impactou 14M de famílias e em projetos com conformidade regulatória do Banco Central.` | `I've worked at Brazil's largest financial institution, on the redesign that impacted 14M families, and on projects requiring Central Bank regulatory compliance.` | `Trabajé en la mayor institución financiera de Brasil, en el rediseño que impactó a 14M de familias y en proyectos con conformidad regulatoria del Banco Central.` |
| CTA primário | `Ver contextos de atuação` | `See work contexts` | `Ver contextos de actuación` |
| CTA secundário | `Conversar` | `Get in touch` | `Conversar` |

**Quick links (coluna direita) — `projects` array em `HeroSection.astro` (linhas 36–55):**

O array `projects` é independente de locale (texto em PT hardcoded). Adicionar campo `metric` a cada item e atualizar o template para renderizá-lo como terceira linha do card (abaixo do título, em `text-accent text-xs`):

```js
const projects = [
  {
    num: '01',
    category: 'Gov Tech · Regulatório',
    title: 'App Bolsa Família',
    metric: '14M de famílias · WCAG AA',
    href: `${getLocalePath(locale)}portfolio/globalweb/bolsa-familia/`,
  },
  {
    num: '02',
    category: 'E-commerce · Lançamento',
    title: 'Sanrio Brasil',
    metric: '1º e-commerce Hello Kitty no BR',
    href: `${getLocalePath(locale)}portfolio/sanrio/ecommerce/`,
  },
  {
    num: '03',
    category: 'Enterprise · Internacional',
    title: 'Indra / Minsait',
    metric: '8 anos · Times em 4 países',
    href: `${getLocalePath(locale)}portfolio/indra/`,
  },
]
```

---

### 2. About

**Headline (H2):** Hardcoded em `src/components/home/AboutSection.astro` — editar o template diretamente, não é um campo de `messages/`.
- Alterar: `<h2>PM com DNA de designer.</h2>`
- Para: `<h2>Discovery, Strategy & Delivery</h2>`

**Bio:** Mantém texto atual de `messages/pt.json` (adequado).

**Timeline — adicionar campo `impact` em `messages/pt.json` e renderizá-lo em `AboutSection.astro`:**

Adicionar campo `"impact"` a cada entrada de experiência no JSON. O componente deve renderizar uma terceira linha por entrada usando esse campo.

Estrutura do JSON:
```json
"experience": [
  {
    "company": "NTT DATA Europe & Latam",
    "position": "Senior Product Designer | Product Strategy",
    "date": "2025 – atual",
    "impact": "Design system para maior IF do Brasil — governança, escalabilidade e acessibilidade WCAG AA"
  },
  {
    "company": "Globalweb Corp.",
    "position": "Senior Product Designer | Product Strategy & Discovery",
    "date": "2022 – 2025",
    "impact": "Redesign Bolsa Família (14M famílias) + Open Finance Caixa (conformidade Banco Central)"
  },
  {
    "company": "Indra / Minsait",
    "position": "Designer Sênior",
    "date": "2014 – 2022",
    "impact": "8 anos coordenando projetos internacionais; PoC junto a lideranças seniores em Madri"
  },
  {
    "company": "Sanrio Brasil",
    "position": "Senior Product Designer",
    "date": "2009 – 2013",
    "impact": "Primeiro e-commerce Hello Kitty no Brasil — do zero: produto, logística, analytics e integrações"
  },
  {
    "company": "Estácio UniRadial",
    "position": "UI/UX Designer",
    "date": "2007 – 2009",
    "impact": null
  }
]
```

**Estrutura exata do JSON (chaves nomeadas — padrão do codebase):**

O `AboutSection.astro` lê `t.about.experience.globalweb`, `.indra`, `.sanrio`, `.estacio` como chaves nomeadas. Adicionar `nttdata` e o campo `impact` a cada chave existente:

`messages/pt.json` — dentro de `about.experience`:
```json
"nttdata":   { "position": "Senior Product Designer | Product Strategy",             "date": "2025 – atual", "impact": "Design system para maior IF do Brasil — governança, escalabilidade e acessibilidade WCAG AA" },
"globalweb": { "position": "Senior Product Designer | Product Strategy & Discovery", "date": "2022 – 2025", "impact": "Redesign Bolsa Família (14M famílias) + Open Finance Caixa (conformidade Banco Central)" },
"indra":     { "position": "Designer Sênior",                                        "date": "2014 – 2022", "impact": "8 anos coordenando projetos internacionais; PoC junto a lideranças seniores em Madri" },
"sanrio":    { "position": "Senior Product Designer",                                "date": "2009 – 2013", "impact": "Primeiro e-commerce Hello Kitty no Brasil — do zero: produto, logística, analytics e integrações" },
"estacio":   { "position": "UI/UX Designer",                                         "date": "2007 – 2009", "impact": null }
```

`messages/en.json` — dentro de `about.experience`:
```json
"nttdata":   { "position": "Senior Product Designer | Product Strategy",             "date": "2025 – present", "impact": "Design system for Brazil's largest financial institution — governance, scalability and WCAG AA" },
"globalweb": { "position": "Senior Product Designer | Product Strategy & Discovery", "date": "2022 – 2025",   "impact": "Redesign of Bolsa Família app (14M families) + Open Finance for Caixa (Central Bank compliance)" },
"indra":     { "position": "Senior Designer",                                        "date": "2014 – 2022",   "impact": "8 years leading international projects; stakeholder management with senior leadership in Madrid" },
"sanrio":    { "position": "Senior Product Designer",                                "date": "2009 – 2013",   "impact": "First Hello Kitty e-commerce in Brazil — from scratch: product, logistics, analytics and integrations" },
"estacio":   { "position": "UI/UX Designer",                                         "date": "2007 – 2009",   "impact": null }
```

`messages/es.json` — dentro de `about.experience`:
```json
"nttdata":   { "position": "Senior Product Designer | Estrategia de Producto",      "date": "2025 – actual", "impact": "Sistema de diseño para la mayor IF de Brasil — gobernanza, escalabilidad y accesibilidad WCAG AA" },
"globalweb": { "position": "Senior Product Designer | Estrategia y Discovery",      "date": "2022 – 2025",   "impact": "Rediseño Bolsa Família (14M familias) + Open Finance Caixa (conformidad Banco Central)" },
"indra":     { "position": "Designer Senior",                                        "date": "2014 – 2022",   "impact": "8 años coordinando proyectos internacionales; stakeholder management con dirección en Madrid" },
"sanrio":    { "position": "Senior Product Designer",                                "date": "2009 – 2013",   "impact": "Primer e-commerce Hello Kitty en Brasil — desde cero: producto, logística, analytics e integraciones" },
"estacio":   { "position": "UI/UX Designer",                                         "date": "2007 – 2009",   "impact": null }
```

**`AboutSection.astro` — atualizar o array `experience` (linhas 11–16) para incluir NTT DATA e o campo `impact`:**
```js
const experience = [
  { position: about.experience.nttdata.position,  date: about.experience.nttdata.date,  impact: about.experience.nttdata.impact },
  { position: about.experience.globalweb.position, date: about.experience.globalweb.date, impact: about.experience.globalweb.impact },
  { position: about.experience.indra.position,    date: about.experience.indra.date,    impact: about.experience.indra.impact },
  { position: about.experience.sanrio.position,   date: about.experience.sanrio.date,   impact: about.experience.sanrio.impact },
  { position: about.experience.estacio.position,  date: about.experience.estacio.date,  impact: about.experience.estacio.impact },
]
```

Atualizar o template para renderizar `exp.impact` como terceira linha (quando não nulo), em `text-xs text-accent mt-1`.

**Nota sobre Indra:** A duração correta é **8 anos** (jan/2014 – mar/2022), não 9. Corrigir `messages/pt.json` e `PortfolioSection.astro` onde aparece "9 anos".

---

### 3. Portfolio → "Contextos de Atuação"

**Localização do código:** Copy dos cards está hardcoded em `src/components/home/PortfolioSection.astro` (array `projects`, linhas 10–35) — não em `messages/`. Editar diretamente no componente.

**Mudanças necessárias:**
1. Renomear a seção: alterar H2 hardcoded na linha 40 de `PortfolioSection.astro` de `"Trabalhos selecionados."` para `"Contextos de atuação."` E atualizar `portfolio.pageTitle` em `messages/pt.json`, `messages/en.json` e `messages/es.json` para `"Contextos de Atuação"` / `"Work Contexts"` / `"Contextos de Actuación"`.
2. Atualizar copy de cada card conforme abaixo.
3. Adicionar label de contexto visível no card (categoria + tipo).

**Cases incluídos:** Bolsa Família, Sanrio, Indra/Minsait
- **NTT DATA:** aparece apenas na timeline do About, sem case
- Cada card tem link para página interna

**Copy dos cards (atualizar no componente):**

**Bolsa Família:**
- Categoria: `Gov Tech · Regulatório`
- Contexto: `Redesign de aplicativo gov com 14M de usuários ativos e exigências regulatórias federais`
- Problema: `Interface inacessível comprometia uso por populações com baixa literacia digital`
- Atuação: `Liderei discovery, definição de critérios de acessibilidade e estrutura do design system`
- Impacto: `Conformidade WCAG AA; sistema adotado como base para outros produtos da plataforma`

**Sanrio:**
- Categoria: `E-commerce · Lançamento`
- Contexto: `Expansão digital da Sanrio no Brasil com contato direto com times em SF, Japão e Europa`
- Problema: `Marca sem presença e-commerce no Brasil, sem infraestrutura digital estabelecida`
- Atuação: `Defini estratégia de produto, coordenei pesquisa, tecnologia (Magento), logística e analytics`
- Impacto: `Primeiro e-commerce Hello Kitty no Brasil; 4.500 visitantes no dia de lançamento`

**Indra:**
- Categoria: `Enterprise · Internacional`
- Contexto: `Time internacional respondendo à sede em Madri; produto, comunicação e sistemas internos`
- Problema: `Necessidade de consistência entre design, tecnologia e objetivos em contexto multicultural`
- Atuação: `Coordenei times multidisciplinares, representei área em decisões estratégicas com diretoria`
- Impacto: `8 anos de atuação; referência técnica para times em 4 países`

**noindex para Bolsa Família:** Adicionar `noindex={true}` ao `PageLayout` nos três arquivos de rota:
- `src/pages/portfolio/globalweb/bolsa-familia.astro`
- `src/pages/en/portfolio/globalweb/bolsa-familia.astro`
- `src/pages/es/portfolio/globalweb/bolsa-familia.astro`

---

### 4. Artigos → "Perspectivas"

**Localização do código:** `src/components/home/ArticlesTeaser.astro`

| Elemento | Decisão |
|---|---|
| Nome da seção | `Perspectivas` (já está no código — manter) |
| Posição | Após "Contextos de Atuação" (manter posição atual) |
| Quantidade | Alterar `slice(0, 2)` para `slice(0, 3)` |
| Primeiro parágrafo | Usar campo `description` do frontmatter de cada artigo como excerpt — não extrair do body |
| Fallback | Se sem artigos, seção não renderiza — remover cards "Em breve" |

**Implementação do excerpt:** O campo `description` do frontmatter já existe e é retornado por `getArticles()`. Renderizá-lo abaixo do título de cada card (atualmente não é exibido nos cards do teaser).

---

### 5. Contato

**Localização do código:** `src/components/home/ContactSection.astro` — copy hardcoded no template.

| Elemento | Conteúdo |
|---|---|
| Headline | `Vamos conversar.` |
| Copy | `Aberto a posições de Product Manager e Design Lead em empresas que levam produto a sério.` |
| Tagline | `"Boas perguntas constroem bons produtos."` — ao final da seção (adicionar novo bloco) |

**Formulário inline com FormSubmit:**

Substituir o botão/link atual por um formulário HTML com os seguintes campos e campos ocultos:

```html
<form action="https://formsubmit.co/SEU_EMAIL_AQUI" method="POST">
  <!-- Anti-spam: honeypot -->
  <input type="text" name="_honey" style="display:none">
  <!-- Desabilitar captcha -->
  <input type="hidden" name="_captcha" value="false">
  <!-- Redirecionar após envio -->
  <input type="hidden" name="_next" value="https://wildiney.com">

  <input type="text" name="name" placeholder="Nome" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" placeholder="Mensagem" required></textarea>
  <button type="submit">Enviar mensagem</button>
</form>
```

**Substituir `SEU_EMAIL_AQUI`** pelo email real antes do deploy.

**Atenção — ativação do FormSubmit:** Na primeira submissão do formulário, o FormSubmit envia um email de confirmação para o endereço cadastrado. É necessário clicar no link de ativação antes que as submissões sejam entregues. Testar ativação antes do lançamento.

**Localização da tagline:** `ContactSection.astro` não tem bloco de links sociais (esses ficam no `Footer.astro`). Adicionar a tagline como último elemento da seção, antes do fechamento do `<section>`.

---

## Fixes Técnicos

| Item | Arquivo(s) | Ação |
|---|---|---|
| Headline About repetido | `AboutSection.astro` | Alterar H2 hardcoded |
| NTT DATA na timeline | `messages/pt.json`, `en.json`, `es.json` + `AboutSection.astro` | Adicionar entrada + campo `impact` |
| Campo `impact` na timeline | `messages/pt.json`, `en.json`, `es.json` + `AboutSection.astro` | Adicionar campo e renderizar |
| Indra "9 anos" → "8 anos" | `messages/pt.json`, `PortfolioSection.astro` | Corrigir número |
| Bolsa Família noindex | 3 arquivos de rota | `noindex={true}` no PageLayout |
| Contato — FormSubmit | `ContactSection.astro` | Substituir link por formulário |
| Artigos slice | `ArticlesTeaser.astro` | `slice(0, 2)` → `slice(0, 3)` |
| Artigos excerpt | `ArticlesTeaser.astro` | Renderizar campo `description` nos cards |
| Artigos "Em breve" | `ArticlesTeaser.astro` | Remover cards placeholder |
| Tagline no contato | `ContactSection.astro` | Adicionar bloco com a frase |
| Section rename | `PortfolioSection.astro` + 3 arquivos `messages/` | H2 + chave `portfolio.pageTitle` |

---

## O que NÃO muda

- Paleta de cores e tokens de design
- Tipografia (Fraunces + Inter + JetBrains Mono)
- Dark mode como padrão
- Estrutura de i18n (PT default, EN, ES)
- Componentes UI existentes (Button, Tag, Section)
- Header e Footer (estrutura)
- Locale switcher visível no header

---

## Fora de escopo

- Redesign visual (cores, tipografia, layout)
- Novos componentes de UI
- Cases da NTT DATA
- Reescrita das páginas internas de case study (fase posterior)
