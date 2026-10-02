// Intégration Astro : après le build, supprime de dist/_astro/ les fichiers qu'aucune page ne référence.
// Astro y copie les images originales (SVG, PNG, WebP sources) en plus des variantes optimisées
// réellement servies : inutile de les envoyer sur l'hébergement (espace limité).
// Le test « aucun lien interne cassé » (tests/site.test.mjs) garantit qu'on ne retire rien d'utilisé.
import { readdirSync, readFileSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TEXT_FILES = /\.(html|css|js|mjs|xml|json|txt|webmanifest)$/;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

/** @returns {import('astro').AstroIntegration} */
export default function pruneUnusedAssets() {
  return {
    name: 'prune-unused-assets',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = walk(root);
        const references = files
          .filter((f) => TEXT_FILES.test(f))
          .map((f) => readFileSync(f, 'utf8'))
          .join('\n');

        let count = 0;
        let bytes = 0;
        for (const file of files.filter((f) => f.startsWith(join(root, '_astro')))) {
          const name = file.slice(file.lastIndexOf('/') + 1);
          if (!references.includes(name)) {
            bytes += statSync(file).size;
            unlinkSync(file);
            count += 1;
          }
        }
        logger.info(`${count} fichier(s) non référencé(s) supprimé(s) de _astro/ (${Math.round(bytes / 1024)} ko)`);
      },
    },
  };
}
