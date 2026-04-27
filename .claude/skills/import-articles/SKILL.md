---
name: import-articles
description: Import draft articles from the monthly Obsidian vault into the wildiney.com site. Checks the current month and the previous month for pending articles, converts images to webp, generates EN and ES translations, and creates the proper content structure.
---

Import pending draft articles from the monthly Obsidian vault into the wildiney.com project.

## Step 1 — Determine which months to check

Today's date is available in the system context. From it, derive:
- **Current month folder:** `C:/Users/wildi/Repositories-win/articles/YYYY/MM` (zero-padded month)
- **Previous month folder:** same base path but one month back (if current is `01`, previous is `12` of the prior year)

List `.md` files in both folders. If a folder does not exist, skip it silently.

## Step 2 — Read each draft and extract metadata

Each draft file is an Obsidian markdown file. Its frontmatter may contain:
- `id` — becomes the article slug (e.g. `duolingo-metrica-errada`)
- `title` — article title in Portuguese
- `created_at` — writing date (NOT the publication date; do not use for `date` field)
- `tags` — translate to Portuguese for the site

The **publication date** (`date` field) comes from the filename prefix: `YYYY-MM-DD - Título.md`. Use the filename date, not `created_at`.

If `id` is missing (some drafts have no frontmatter), derive a slug from the filename: strip the date prefix (`YYYY-MM-DD - `) and slugify (lowercase, spaces to hyphens, remove accents and special chars).

Derive `YYYY` and `MM` from the filename date — these determine the destination folder path.

## Step 3 — Check which articles are already in the site

Content is organized by date: `content/articles/YYYY/MM/[slug]/`.

For each draft, check if `content/articles/[YYYY]/[MM]/[slug]/pt.md` already exists. If it does, skip the article and note it as already published.

Report to the user: which articles are new and which already exist.

## Step 4 — Handle images

For each new article:

1. Look for Obsidian image references in the body using the pattern `![[filename]]`.
2. Check if those files exist in `[month-folder]/images/`.
3. The **first image** referenced becomes `cover.webp` (thumbnail). Additional images are named `chart-02.webp`, `chart-03.webp`, etc. in order of appearance.
4. Also check if a file named `[slug].png` or `[slug].jpg` (or similar) exists in the images folder — it may be the cover even if not referenced inline.
5. Convert images to webp using FFmpeg:
   ```
   ffmpeg -y -i "input.[ext]" -c:v libwebp -quality 85 "public/images/articles/[slug]/cover.webp"
   ```
6. Create the destination directory `public/images/articles/[slug]/` before copying.
7. If no image is found for an article, create the article without a `thumbnail` field.

PDFs referenced with `![[...pdf]]` should be ignored.

## Step 5 — Build the site frontmatter

For each new article, derive the frontmatter fields:

- `title`: from draft `title` field
- `date`: from the **filename date prefix** (`YYYY-MM-DD`), not `created_at`
- `description`: write a 1–2 sentence summary in the article's language that captures the core argument. Do not copy the opening sentence verbatim. Keep it under 160 characters.
- `tags`: translate draft tags to Portuguese, use natural language (e.g. `inteligência artificial`, not `ia`). Keep 4–6 tags max.
- `thumbnail`: `/images/articles/[slug]/cover.webp` — only if an image was found and converted.

## Step 6 — Clean the article body

Strip Obsidian-specific syntax before writing to the site:

- Remove `![[...pdf]]` references entirely.
- Convert `![[image-filename]]` to proper markdown: `![alt text](/images/articles/[slug]/filename.webp)` — use the image's context to write a meaningful alt text.
- Remove the `# Title` H1 at the top if present (the site renders the title from frontmatter).
- Remove sections like `## Artigos relacionados` with `[[...]]` wikilinks — those are Obsidian-only.
- Remove `**Status:** ...` lines at the bottom.
- Keep source/font references but format them as markdown links where the URL is available.
- Preserve all paragraph breaks exactly — do not reflow or rewrite the author's sentences.

## Step 7 — Generate translations

For each new article, create three files: `pt.md`, `en.md`, `es.md`.

**pt.md**: the cleaned original draft content with the site frontmatter.

**en.md** and **es.md**: translate the title, description, tags, and body. Translation guidelines:
- Preserve the author's direct, analytical voice — short paragraphs, no hedging.
- Do not use em dashes. Use commas, colons, or periods instead.
- Avoid AI-sounding constructions: no "delve", "navigate", "foster", "leverage", "tapestry", "myriad", "pivotal", "it's worth noting".
- Technical terms (DAU, CURR, streak, leaderboard, squash and stretch, etc.) stay in the original language.
- Product/brand names stay unchanged.
- Source attribution lines should be translated naturally (e.g. "Fonte:" → "Source:" / "Fuente:").
- Inline image paths stay identical across all three files.

## Step 8 — Write files and report

Create the directory `content/articles/[YYYY]/[MM]/[slug]/` (using the YYYY and MM derived from the filename date) and write the three `.md` files.

After all articles are processed, report a summary:
- New articles created (with slug and which images were converted)
- Articles already in the site (skipped)
- Articles with missing images (published without thumbnail)
- Any articles found in the **previous month folder** that were not yet imported (highlight these as potentially forgotten)
