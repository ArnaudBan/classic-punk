// Liste les valeurs encore à compléter : commentaires TODO et marqueurs des contenus
// ([À COMPLÉTER], [À VÉRIFIER], [À TRANCHER], [OPTION]) dans le code et les textes du site.
// Usage : npm run todo
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOTS = ['src', 'public/.htaccess', 'astro.config.mjs', 'classic-punk_contenus.md'];
const EXTENSIONS = /\.(astro|ts|mjs|js|md|css|json|htaccess)$/;
const PATTERN = /TODO|\[(?:À COMPLÉTER|À VÉRIFIER|À TRANCHER|OPTION)[^\]]*\]/;
// Lignes qui décrivent les marqueurs sans en être (légende des contenus, outillage).
const IGNORED = [/^- `\[(À COMPLÉTER|À VÉRIFIER|OPTION)\]` :/, /npm run todo/];
const IGNORED_FILES = ['src/lib/todos.ts', 'src/components/TodoText.astro'];

const files = (path) =>
  statSync(path).isDirectory()
    ? readdirSync(path).flatMap((name) => files(join(path, name)))
    : EXTENSIONS.test(path)
      ? [path]
      : [];

const found = [];
for (const file of ROOTS.flatMap(files)) {
  const rel = relative(process.cwd(), file);
  if (IGNORED_FILES.includes(rel)) continue;
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (PATTERN.test(line) && !IGNORED.some((re) => re.test(line.trim()))) {
        found.push(`${rel}:${i + 1}  ${line.trim()}`);
      }
    });
}

if (found.length === 0) {
  console.log('Aucun TODO ni marqueur à compléter.');
} else {
  console.log(`${found.length} élément(s) à compléter :\n`);
  for (const f of found) console.log(`  ${f}`);
}
