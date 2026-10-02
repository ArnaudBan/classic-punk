// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'design/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  // Accessibilité des templates .astro (règles jsx-a11y adaptées par eslint-plugin-astro).
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.{js,mjs}', 'scripts/**', 'tests/**'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['src/**/*.astro'],
    languageOptions: { globals: globals.browser },
  },
  {
    // Le code passé à page.evaluate() s'exécute dans le navigateur.
    files: ['tests/a11y.test.mjs'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  {
    // TypeScript vérifie déjà les identifiants (types globaux d'Astro comme ImageMetadata).
    files: ['**/*.{ts,astro}'],
    rules: { 'no-undef': 'off' },
  },
);
