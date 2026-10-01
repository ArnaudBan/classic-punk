/** Marqueurs des contenus encore à trancher : [À COMPLÉTER…], [À VÉRIFIER…], [À TRANCHER…], [OPTION…]. */
export const TODO_PATTERN = /\[(?:À COMPLÉTER|À VÉRIFIER|À TRANCHER|OPTION)[^\]]*\]/g;

/** Découpe un texte en segments, en marquant ceux qui sont des placeholders. */
export function splitTodos(text: string): { text: string; todo: boolean }[] {
  const parts: { text: string; todo: boolean }[] = [];
  let last = 0;
  for (const m of text.matchAll(TODO_PATTERN)) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index), todo: false });
    parts.push({ text: m[0], todo: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), todo: false });
  return parts;
}

/** Liste les placeholders restants dans un objet (récursivement), avec leur chemin. */
export function findTodos(value: unknown, path = ''): string[] {
  if (typeof value === 'string') return [...value.matchAll(TODO_PATTERN)].map((m) => `${path} → ${m[0]}`);
  if (Array.isArray(value)) return value.flatMap((v, i) => findTodos(v, `${path}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => findTodos(v, path ? `${path}.${k}` : k));
  }
  return [];
}

/** Avertit au build (sans le faire échouer) tant qu'il reste des placeholders. */
export function warnTodos(label: string, value: unknown): void {
  const todos = findTodos(value);
  if (todos.length === 0) return;
  console.warn(`\n⚠️  ${label} : ${todos.length} valeur(s) encore à compléter avant la mise en production :`);
  for (const t of todos) console.warn(`   - ${t}`);
}
