# Redesign de Narrativa PM — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar o site wildiney.com de portfólio de designer para registro de atuação de Product Manager, corrigindo copy, estrutura e componentes conforme spec aprovado.

**Architecture:** Todas as mudanças são em componentes Astro existentes e arquivos `messages/`. Sem novos componentes, sem mudanças de roteamento. Copy do Hero e PortfolioSection é hardcoded nos componentes; copy do About está em `messages/`. Sem testes automatizados — verificação via `pnpm dev`.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS 4, i18n nativo (PT/EN/ES), FormSubmit para formulário de contato.

**Spec:** `docs/superpowers/specs/2026-03-25-redesign-narrativa-pm.md`

---

## File Map

| Arquivo | O que muda |
|---|---|
| `messages/pt.json` | Adicionar `nttdata`, campo `impact` em todas as experiências, corrigir `indra.date`, atualizar `portfolio.pageTitle` |
| `messages/en.json` | Idem com conteúdo em inglês |
| `messages/es.json` | Idem com conteúdo em espanhol |
| `src/components/home/HeroSection.astro` | Atualizar `heroCopy` (3 locales), `projects` array (+ `metric`), template (renderizar `metric`) |
| `src/components/home/AboutSection.astro` | Alterar H2 hardcoded, atualizar `experience` array (+ NTT DATA + `impact`), template (renderizar `impact`) |
| `src/components/home/PortfolioSection.astro` | Novo copy dos cards, renomear H2, corrigir "9 anos" |
| `src/components/home/ArticlesTeaser.astro` | `slice(0,3)`, renderizar `description`, remover cards "Em breve" |
| `src/components/home/ContactSection.astro` | Novo copy, formulário FormSubmit, tagline |
| `src/pages/portfolio/globalweb/bolsa-familia.astro` | `noindex={true}` |
| `src/pages/en/portfolio/globalweb/bolsa-familia.astro` | `noindex={true}` |
| `src/pages/es/portfolio/globalweb/bolsa-familia.astro` | `noindex={true}` |

---

## Task 1: Atualizar messages/ — foundation

**Files:**
- Modify: `messages/pt.json`
- Modify: `messages/en.json`
- Modify: `messages/es.json`

- [ ] **Step 1: Atualizar `messages/pt.json`**

  Em `about.experience`, substituir o bloco inteiro por:

  ```json
  "experience": {
    "title": "Experiência",
    "nttdata": {
      "position": "Senior Product Designer | Product Strategy",
      "date": "2025 – atual",
      "impact": "Design system para maior IF do Brasil — governança, escalabilidade e acessibilidade WCAG AA"
    },
    "globalweb": {
      "position": "Senior Product Designer | Product Strategy & Discovery",
      "date": "2022 – 2025",
      "impact": "Redesign Bolsa Família (14M famílias) + Open Finance Caixa (conformidade Banco Central)"
    },
    "indra": {
      "position": "Designer Sênior",
      "date": "2014 – 2022",
      "impact": "8 anos coordenando projetos internacionais; PoC junto a lideranças seniores em Madri"
    },
    "sanrio": {
      "position": "Senior Product Designer",
      "date": "2009 – 2013",
      "impact": "Primeiro e-commerce Hello Kitty no Brasil — do zero: produto, logística, analytics e integrações"
    },
    "estacio": {
      "position": "UI/UX Designer",
      "date": "2007 – 2009",
      "impact": null
    }
  }
  ```

  Atualizar `portfolio.pageTitle` de `"Portfolio"` para `"Contextos de Atuação"`.

- [ ] **Step 2: Atualizar `messages/en.json`**

  Em `about.experience`, substituir o bloco inteiro por:

  ```json
  "experience": {
    "title": "Experience",
    "nttdata": {
      "position": "Senior Product Designer | Product Strategy",
      "date": "2025 – present",
      "impact": "Design system for Brazil's largest financial institution — governance, scalability and WCAG AA"
    },
    "globalweb": {
      "position": "Senior Product Designer | Product Strategy & Discovery",
      "date": "2022 – 2025",
      "impact": "Redesign of Bolsa Família app (14M families) + Open Finance for Caixa (Central Bank compliance)"
    },
    "indra": {
      "position": "Senior Designer",
      "date": "2014 – 2022",
      "impact": "8 years leading international projects; stakeholder management with senior leadership in Madrid"
    },
    "sanrio": {
      "position": "Senior Product Designer",
      "date": "2009 – 2013",
      "impact": "First Hello Kitty e-commerce in Brazil — from scratch: product, logistics, analytics and integrations"
    },
    "estacio": {
      "position": "UI/UX Designer",
      "date": "2007 – 2009",
      "impact": null
    }
  }
  ```

  Atualizar `portfolio.pageTitle` para `"Work Contexts"`.

- [ ] **Step 3: Atualizar `messages/es.json`**

  Em `about.experience`, substituir o bloco inteiro por:

  ```json
  "experience": {
    "title": "Experiencia",
    "nttdata": {
      "position": "Senior Product Designer | Estrategia de Producto",
      "date": "2025 – actual",
      "impact": "Sistema de diseño para la mayor IF de Brasil — gobernanza, escalabilidad y accesibilidad WCAG AA"
    },
    "globalweb": {
      "position": "Senior Product Designer | Estrategia y Discovery",
      "date": "2022 – 2025",
      "impact": "Rediseño Bolsa Família (14M familias) + Open Finance Caixa (conformidad Banco Central)"
    },
    "indra": {
      "position": "Designer Senior",
      "date": "2014 – 2022",
      "impact": "8 años coordinando proyectos internacionales; stakeholder management con dirección en Madrid"
    },
    "sanrio": {
      "position": "Senior Product Designer",
      "date": "2009 – 2013",
      "impact": "Primer e-commerce Hello Kitty en Brasil — desde cero: producto, logística, analytics e integraciones"
    },
    "estacio": {
      "position": "UI/UX Designer",
      "date": "2007 – 2009",
      "impact": null
    }
  }
  ```

  Atualizar `portfolio.pageTitle` para `"Contextos de Actuación"`.

- [ ] **Step 4: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321 — o site deve carregar sem erros de TypeScript no terminal. Não há mudança visual ainda (os componentes ainda não foram atualizados).

- [ ] **Step 5: Commit**

  ```bash
  git add messages/pt.json messages/en.json messages/es.json
  git commit -m "feat: add nttdata experience, impact field, fix indra date, rename portfolio section"
  ```

---

## Task 2: HeroSection — copy, quick links com métrica

**Files:**
- Modify: `src/components/home/HeroSection.astro`

- [ ] **Step 1: Atualizar `heroCopy` — todas as 3 locales**

  Substituir o objeto `heroCopy` completo (linhas 8–33):

  ```ts
  const heroCopy = {
    pt: {
      label: 'Product Manager · Design Lead · 15 anos',
      headline: 'Product Manager.\nDiscovery, estratégia e entrega.',
      sub: 'Atuei na maior instituição financeira do Brasil, no redesign que impactou 14M de famílias e em projetos com conformidade regulatória do Banco Central.',
      cta1: 'Ver contextos de atuação',
      cta2: 'Conversar',
      scroll: 'Role para explorar',
    },
    en: {
      label: 'Product Manager · Design Lead · 15 years',
      headline: 'Product Manager.\nDiscovery, strategy and delivery.',
      sub: "I've worked at Brazil's largest financial institution, on the redesign that impacted 14M families, and on projects requiring Central Bank regulatory compliance.",
      cta1: 'See work contexts',
      cta2: 'Get in touch',
      scroll: 'Scroll to explore',
    },
    es: {
      label: 'Product Manager · Design Lead · 15 años',
      headline: 'Product Manager.\nDiscovery, estrategia y entrega.',
      sub: 'Trabajé en la mayor institución financiera de Brasil, en el rediseño que impactó a 14M de familias y en proyectos con conformidad regulatoria del Banco Central.',
      cta1: 'Ver contextos de actuación',
      cta2: 'Conversar',
      scroll: 'Desplázate para explorar',
    },
  }
  ```

- [ ] **Step 2: Atualizar `projects` array — adicionar `metric` e corrigir categorias**

  Substituir o array `projects` completo (linhas 36–55):

  ```ts
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

- [ ] **Step 3: Atualizar o template para renderizar `metric`**

  Localizar o bloco de renderização dos project cards no template. Adicionar uma terceira linha com `project.metric` abaixo do título, condicional (só renderiza se existir):

  ```astro
  <p class="text-xs text-muted uppercase tracking-wider mb-1">{project.category}</p>
  <p class="text-sm text-dark-text group-hover:text-accent transition-colors">{project.title}</p>
  {project.metric && <p class="text-xs text-accent mt-1">{project.metric}</p>}
  ```

- [ ] **Step 4: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321. Verificar:
  - Label acima do H1: `Product Manager · Design Lead · 15 anos`
  - H1: `Product Manager. Discovery, estratégia e entrega.`
  - Subheadline com referência à IF, 14M, Banco Central
  - Quick links: cada card com categoria, título e métrica em accent
  - Trocar locale para `/en/` e `/es/` — verificar que copy atualiza

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/home/HeroSection.astro
  git commit -m "feat: hero — PM positioning, metrics on quick links"
  ```

---

## Task 3: AboutSection — headline, NTT DATA, impact line

**Files:**
- Modify: `src/components/home/AboutSection.astro`

- [ ] **Step 1: Atualizar H2 hardcoded (linha 26)**

  Localizar:
  ```astro
  <h2 class="font-display text-3xl md:text-4xl font-black text-dark-text mb-6">PM com DNA de designer.</h2>
  ```

  Substituir por:
  ```astro
  <h2 class="font-display text-3xl md:text-4xl font-black text-dark-text mb-6">Discovery, Strategy & Delivery</h2>
  ```

- [ ] **Step 2: Atualizar o array `experience` — adicionar NTT DATA e campo `impact`**

  Substituir o array `experience` completo (linhas 11–16):

  ```ts
  const experience = [
    { position: about.experience.nttdata.position,   date: about.experience.nttdata.date,   impact: about.experience.nttdata.impact },
    { position: about.experience.globalweb.position, date: about.experience.globalweb.date, impact: about.experience.globalweb.impact },
    { position: about.experience.indra.position,     date: about.experience.indra.date,     impact: about.experience.indra.impact },
    { position: about.experience.sanrio.position,    date: about.experience.sanrio.date,    impact: about.experience.sanrio.impact },
    { position: about.experience.estacio.position,   date: about.experience.estacio.date,   impact: about.experience.estacio.impact },
  ]
  ```

- [ ] **Step 3: Atualizar template para renderizar `impact`**

  Localizar o bloco de renderização da timeline (linhas ~36–43):

  ```astro
  <div class="flex gap-4 border-l-2 border-dark-border pl-4">
    <div class="flex-1">
      <p class="text-sm text-dark-text">{exp.position}</p>
      <p class="text-xs text-muted mt-1">{exp.date}</p>
    </div>
  </div>
  ```

  Substituir por:
  ```astro
  <div class="flex gap-4 border-l-2 border-dark-border pl-4">
    <div class="flex-1">
      <p class="text-sm text-dark-text">{exp.position}</p>
      <p class="text-xs text-muted mt-1">{exp.date}</p>
      {exp.impact && <p class="text-xs text-accent mt-1">{exp.impact}</p>}
    </div>
  </div>
  ```

- [ ] **Step 4: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321#about. Verificar:
  - H2: `Discovery, Strategy & Delivery`
  - NTT DATA aparece como primeira entrada da timeline
  - Cada entrada tem 3 linhas: posição, data, impact (em accent)
  - Estácio não tem terceira linha (impact é null)
  - Datas da Indra: `2014 – 2022`

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/home/AboutSection.astro
  git commit -m "feat: about — discovery/strategy/delivery headline, NTT DATA, impact lines"
  ```

---

## Task 4: PortfolioSection — renomear e reescrever copy

**Files:**
- Modify: `src/components/home/PortfolioSection.astro`

- [ ] **Step 1: Atualizar H2 e `projects` array com novo copy**

  Localizar linha 40:
  ```astro
  <h2 class="font-display text-3xl md:text-4xl font-black text-dark-text mb-12">Trabalhos selecionados.</h2>
  ```
  Substituir por:
  ```astro
  <h2 class="font-display text-3xl md:text-4xl font-black text-dark-text mb-12">Contextos de atuação.</h2>
  ```

  **Nota sobre o formato dos cards:** O spec detalha uma estrutura Contexto/Problema/Atuação/Impacto para cada case. Nos cards da home, isso é condensado em uma única `description` seguindo o template existente — a estrutura completa é aplicada nas páginas internas de cada case study, não nos cards da seção home. Isso é intencional.

  Substituir o array `projects` completo (linhas 10–35) pelo novo copy:

  ```ts
  const projects = [
    {
      num: '01',
      title: 'App Programa Bolsa Família',
      company: 'Globalweb Corp.',
      description: 'Redesign de aplicativo gov com 14M de usuários ativos. Liderei discovery, critérios de acessibilidade e estrutura do design system. Conformidade WCAG AA entregue.',
      tags: ['Gov Tech', 'Discovery', 'Acessibilidade'],
      href: `${getLocalePath(locale)}portfolio/globalweb/bolsa-familia/`,
    },
    {
      num: '02',
      title: 'E-commerce Sanrio Brasil',
      company: 'Sanrio Co.',
      description: 'Primeiro e-commerce Hello Kitty no Brasil — do zero. Defini estratégia de produto, coordenei pesquisa, tecnologia (Magento), logística e analytics. 4.500 visitantes no dia de lançamento.',
      tags: ['E-commerce', 'Product Strategy', 'Lançamento'],
      href: `${getLocalePath(locale)}portfolio/sanrio/ecommerce/`,
    },
    {
      num: '03',
      title: 'Produto & Comunicação Corporativa',
      company: 'Indra / Minsait',
      description: 'Time internacional respondendo à sede em Madri. 8 anos coordenando projetos multidisciplinares, representando área em decisões estratégicas com diretoria.',
      tags: ['Enterprise', 'Stakeholder Management', 'Internacional'],
      href: `${getLocalePath(locale)}portfolio/indra/`,
    },
  ]
  ```

- [ ] **Step 2: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321#portfolio. Verificar:
  - Label acima: `Contextos de Atuação` (vindo de `t.portfolio.pageTitle`)
  - H2: `Contextos de atuação.`
  - Cards com novo copy — sem "9 anos", sem "designer" como framing principal
  - Tags atualizadas

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/home/PortfolioSection.astro
  git commit -m "feat: portfolio — rename to contextos de atuação, PM-framed copy"
  ```

---

## Task 5: ArticlesTeaser — 3 artigos, excerpt, sem placeholder

**Files:**
- Modify: `src/components/home/ArticlesTeaser.astro`

- [ ] **Step 1: Atualizar slice e remover cards "Em breve"**

  Linha 9: alterar `slice(0, 2)` → `slice(0, 3)`.

  Substituir o bloco inteiro do `{articles.length > 0 ? ... : ...}`:

  ```astro
  {articles.length > 0 && articles.map(article => (
    <a
      href={`${getLocalePath(locale)}articles/${article.slug}/`}
      class="group border border-dark-border p-5 hover:border-accent transition-colors"
    >
      <h3 class="text-sm font-semibold text-dark-text group-hover:text-accent transition-colors mb-2">
        {article.title}
      </h3>
      {article.description && (
        <p class="text-xs text-muted leading-relaxed">{article.description}</p>
      )}
    </a>
  ))}
  ```

  A remoção do bloco `else` elimina os cards "Em breve". Se não há artigos, a seção renderiza normalmente mas sem cards.

- [ ] **Step 2: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321#articles. Verificar:
  - Se há artigos: cards com título + excerpt (description)
  - Se não há artigos: seção visível mas sem cards (só o lado esquerdo com o título e CTA)
  - Sem cards "Em breve"

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/home/ArticlesTeaser.astro
  git commit -m "feat: articles — show 3 with excerpt, remove em breve placeholders"
  ```

---

## Task 6: ContactSection — FormSubmit, novo copy, tagline

**Files:**
- Modify: `src/components/home/ContactSection.astro`

- [ ] **Step 1: Reescrever o componente completo**

  Substituir o conteúdo completo de `ContactSection.astro` por:

  ```astro
  ---
  import { type Locale } from '../../i18n/index'

  interface Props { locale: Locale }
  const { locale } = Astro.props

  const copy = {
    pt: {
      label: 'Contato',
      headline: 'Vamos conversar.',
      sub: 'Aberto a posições de Product Manager e Design Lead em empresas que levam produto a sério.',
      namePlaceholder: 'Nome',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Mensagem',
      submit: 'Enviar mensagem',
      tagline: 'Boas perguntas constroem bons produtos.',
    },
    en: {
      label: 'Contact',
      headline: "Let's talk.",
      sub: 'Open to Product Manager and Design Lead positions at companies that take product seriously.',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      submit: 'Send message',
      tagline: 'Good questions build good products.',
    },
    es: {
      label: 'Contacto',
      headline: 'Hablemos.',
      sub: 'Abierto a posiciones de Product Manager y Design Lead en empresas que se toman el producto en serio.',
      namePlaceholder: 'Nombre',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Mensaje',
      submit: 'Enviar mensaje',
      tagline: 'Las buenas preguntas construyen buenos productos.',
    },
  }
  const c = copy[locale]
  ---

  <section id="contact" class="bg-dark border-t border-dark-border py-24 px-6 md:px-12 lg:px-24">
    <div class="max-w-5xl mx-auto">
      <p class="text-xs text-accent uppercase tracking-widest mb-4">{c.label}</p>
      <h2 class="font-display text-4xl md:text-5xl font-black text-dark-text mb-6">{c.headline}</h2>
      <p class="text-muted text-lg leading-relaxed max-w-lg mb-10">{c.sub}</p>

      <form
        action="https://formsubmit.co/SEU_EMAIL_AQUI"
        method="POST"
        class="flex flex-col gap-4 max-w-lg"
      >
        <!-- Anti-spam honeypot -->
        <input type="text" name="_honey" style="display:none">
        <!-- Desabilitar captcha do FormSubmit -->
        <input type="hidden" name="_captcha" value="false">
        <!-- Redirecionar para home após envio -->
        <input type="hidden" name="_next" value="https://wildiney.com">

        <input
          type="text"
          name="name"
          placeholder={c.namePlaceholder}
          required
          class="bg-dark-surface border border-dark-border text-dark-text placeholder-muted px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder={c.emailPlaceholder}
          required
          class="bg-dark-surface border border-dark-border text-dark-text placeholder-muted px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
        />
        <textarea
          name="message"
          placeholder={c.messagePlaceholder}
          required
          rows="5"
          class="bg-dark-surface border border-dark-border text-dark-text placeholder-muted px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        ></textarea>
        <button
          type="submit"
          class="bg-accent text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-accent-dark transition-colors self-start"
        >
          {c.submit}
        </button>
      </form>

      <p class="text-muted text-sm italic mt-16">
        "{c.tagline}"
      </p>
    </div>
  </section>
  ```

- [ ] **Step 2: Substituir `SEU_EMAIL_AQUI` pelo email real**

  No `action` do form, substituir `SEU_EMAIL_AQUI` pelo endereço de email onde as mensagens devem chegar. O FormSubmit enviará um email de ativação na primeira submissão — é necessário clicar no link antes que os envios sejam entregues.

- [ ] **Step 3: Verificar**

  ```bash
  pnpm dev
  ```

  Abrir http://localhost:4321#contact. Verificar:
  - Copy atualizado: "Aberto a posições de PM e Design Lead..."
  - Formulário com 3 campos + botão
  - Tagline `"Boas perguntas constroem bons produtos."` no final
  - Sem link para forms.gle/placeholder

- [ ] **Step 4: Commit**

  ```bash
  git add src/components/home/ContactSection.astro
  git commit -m "feat: contact — FormSubmit form, updated copy, tagline"
  ```

---

## Task 7: Bolsa Família noindex — 3 rotas

**Files:**
- Modify: `src/pages/portfolio/globalweb/bolsa-familia.astro`
- Modify: `src/pages/en/portfolio/globalweb/bolsa-familia.astro`
- Modify: `src/pages/es/portfolio/globalweb/bolsa-familia.astro`

- [ ] **Step 1: Adicionar `noindex` nos 3 arquivos**

  Em cada arquivo, localizar a linha `<PageLayout title={...} locale={locale}>` e adicionar `noindex={true}`:

  **`src/pages/portfolio/globalweb/bolsa-familia.astro`** (linha 13):
  ```astro
  <PageLayout title={`${cs.title} — Wildiney Di Masi`} locale={locale} noindex={true}>
  ```

  Repetir o mesmo em:
  - `src/pages/en/portfolio/globalweb/bolsa-familia.astro`
  - `src/pages/es/portfolio/globalweb/bolsa-familia.astro`

- [ ] **Step 2: Verificar**

  ```bash
  pnpm build
  ```

  Abrir `dist/portfolio/globalweb/bolsa-familia/index.html` no editor e buscar por `noindex`. Esperado: `<meta name="robots" content="noindex">` presente no `<head>`.

- [ ] **Step 3: Commit**

  ```bash
  git add src/pages/portfolio/globalweb/bolsa-familia.astro \
          src/pages/en/portfolio/globalweb/bolsa-familia.astro \
          src/pages/es/portfolio/globalweb/bolsa-familia.astro
  git commit -m "feat: noindex on bolsa-familia pages (wrong audience via organic search)"
  ```

---

## Verificação Final

- [ ] **Smoke test completo**

  ```bash
  pnpm dev
  ```

  Percorrer a home em PT, EN e ES:
  - Hero: label, headline, subheadline, quick links com métrica
  - About: headline "Discovery, Strategy & Delivery", NTT DATA na timeline, impact lines
  - Portfolio: "Contextos de Atuação", copy PM-framed
  - Articles: cards com excerpt, sem "Em breve"
  - Contact: formulário, copy novo, tagline

- [ ] **Build de produção sem erros**

  ```bash
  pnpm build
  ```

  Esperado: build completo sem erros TypeScript ou de build.

- [ ] **Commit final (se pendente)**

  ```bash
  git status
  ```

  Se houver arquivos não commitados, commitar antes de encerrar.
