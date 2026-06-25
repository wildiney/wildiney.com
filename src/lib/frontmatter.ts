import { parse } from 'yaml'

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

export function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = FRONTMATTER_RE.exec(raw)
  if (!match) return { data: {}, content: raw }
  const [, yaml, content] = match
  return { data: (parse(yaml) ?? {}) as Record<string, unknown>, content }
}
