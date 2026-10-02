// Accessibilité dans un vrai navigateur (Chromium via Playwright), sur le site généré (dist/) :
// audit axe-core WCAG 2.2 AA, parcours complet au clavier, menu mobile, FAQ, formulaire,
// lien d'évitement et « Réduire les animations ». Cahier des charges §5.2.
import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';
import { serveDist } from './helpers/server.mjs';

const PAGES = ['/', '/gig/', '/last-round/', '/contact/', '/legal/', '/page-inexistante/'];
const VIEWPORTS = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };

let browser;
let server;

before(async () => {
  server = await serveDist(fileURLToPath(new URL('../dist/', import.meta.url)));
  browser = await chromium.launch();
});
after(async () => {
  await browser?.close();
  server?.close();
});

/** Ouvre une page dans un contexte neuf (exigé par axe-core) ; la fermer avec close(page). */
async function open(path, viewport = 'desktop', options = {}) {
  const context = await browser.newContext({ viewport: VIEWPORTS[viewport], ...options });
  const page = await context.newPage();
  await page.goto(server.url + path, { waitUntil: 'networkidle' });
  return page;
}
const close = (page) => page.context().close();

/** Élément focalisé : description, visibilité et présence d'un indicateur de focus. */
const focused = (page) =>
  page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    const style = getComputedStyle(el);
    const box = el.getBoundingClientRect();
    return {
      label: `<${el.tagName.toLowerCase()}> ${(el.getAttribute('aria-label') || el.textContent || el.getAttribute('name') || '').trim().replace(/\s+/g, ' ').slice(0, 50)}`,
      id: el.id,
      visible: box.width > 0 && box.height > 0 && style.visibility !== 'hidden',
      indicator: (style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0) || style.boxShadow !== 'none',
    };
  });

/** Parcourt la page à la touche Tab jusqu'à ce que le focus en sorte ; renvoie les éléments traversés. */
async function tabThrough(page, max = 150) {
  const stops = [];
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    const el = await focused(page);
    if (!el) break;
    stops.push(el);
  }
  return stops;
}

describe('audit axe-core (WCAG 2.2 AA)', () => {
  for (const path of PAGES) {
    for (const viewport of Object.keys(VIEWPORTS)) {
      test(`${path} (${viewport}) : aucune violation`, async () => {
        const page = await open(path, viewport);
        const { violations } = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        await close(page);
        const report = violations.map(
          (v) => `${v.id} : ${v.help} (${v.nodes.map((n) => n.target.join(' ')).join(', ')})`,
        );
        assert.deepEqual(report, []);
      });
    }
  }
});

describe('navigation au clavier', () => {
  for (const path of PAGES) {
    for (const viewport of Object.keys(VIEWPORTS)) {
      test(`${path} (${viewport}) : chaque élément atteint au Tab est visible et montre son focus`, async () => {
        const page = await open(path, viewport);
        const stops = await tabThrough(page);
        await close(page);
        assert.ok(stops.length > 3, 'trop peu d’éléments atteignables au clavier');
        assert.match(stops[0].label, /Aller au contenu/, 'le premier arrêt doit être le lien d’évitement');
        const hidden = stops.filter((s) => !s.visible).map((s) => s.label);
        assert.deepEqual(hidden, [], 'éléments invisibles atteints au clavier');
        const noFocus = stops.filter((s) => !s.indicator).map((s) => s.label);
        assert.deepEqual(noFocus, [], 'éléments sans indicateur de focus visible');
      });
    }
  }

  test('le lien d’évitement mène au contenu principal', async () => {
    const page = await open('/');
    await page.keyboard.press('Tab');
    const box = await page.locator('.skip-link').boundingBox();
    assert.ok(box && box.y >= 0, 'le lien d’évitement doit apparaître à l’écran quand il a le focus');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'main');
    await close(page);
  });

  test('menu mobile : ouverture, focus sur le premier lien, fermeture par Échap', async () => {
    const page = await open('/', 'mobile');
    const toggle = page.locator('[data-menu-toggle]');
    await toggle.focus();
    await page.keyboard.press('Enter');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    assert.match((await focused(page)).label, /Accueil/);
    const stops = await tabThrough(page, 4);
    assert.ok(
      stops.every((s) => s.visible),
      'les liens du menu ouvert sont visibles',
    );
    await page.keyboard.press('Escape');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.evaluate(() => document.activeElement?.hasAttribute('data-menu-toggle')), true);
    await close(page);
  });

  test('FAQ : les questions s’ouvrent et se ferment au clavier', async () => {
    const page = await open('/gig/');
    const item = page.locator('.cp-faq__item').nth(1);
    await item.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await item.evaluate((d) => d.open), true);
    await page.keyboard.press('Space');
    assert.equal(await item.evaluate((d) => d.open), false);
    await close(page);
  });

  test('bouton « Bientôt » : désactivé sans être masqué aux lecteurs d’écran', async () => {
    const page = await open('/gig/');
    const button = page.locator('.app-hero .cp-btn').first();
    assert.equal(await button.getAttribute('aria-disabled'), 'true');
    await button.focus();
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).pathname, '/gig/');
    await close(page);
  });

  test('formulaire de contact utilisable au clavier seul', async () => {
    const page = await open('/contact/?sujet=last-round');
    assert.equal(await page.inputValue('#f-sujet'), 'last-round', '?sujet= présélectionne le sujet');

    // Envoi à vide : focus sur le premier champ en erreur, erreurs reliées aux champs.
    await page.focus('#f-nom');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'f-nom');
    for (const id of ['f-nom', 'f-email', 'f-message']) {
      assert.equal(await page.getAttribute(`#${id}`, 'aria-invalid'), 'true', `${id} marqué invalide`);
      assert.match((await page.getAttribute(`#${id}`, 'aria-describedby')) ?? '', new RegExp(`${id}-err`));
    }

    // Saisie et envoi au clavier.
    await page.keyboard.type('Camille Martin');
    await page.keyboard.press('Tab');
    await page.keyboard.type('camille@exemple.fr');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Bonjour !');
    await page.keyboard.press('Tab');
    assert.match((await focused(page)).label, /Envoyer/);
    await page.keyboard.press('Enter');
    await page.waitForSelector('[data-contact-ready]:not([hidden])');
    assert.equal(
      await page.evaluate(() => document.activeElement?.classList.contains('cp-notice')),
      true,
      'le focus passe sur le message de confirmation',
    );
    await close(page);
  });
});

describe('Réduire les animations', () => {
  test('les transitions et le défilement doux sont coupés', async () => {
    const page = await open('/', 'desktop', { reducedMotion: 'reduce' });
    const styles = await page.evaluate(() => ({
      button: getComputedStyle(document.querySelector('.cp-btn')).transitionDuration,
      scroll: getComputedStyle(document.documentElement).scrollBehavior,
    }));
    assert.equal(styles.button, '0s');
    assert.equal(styles.scroll, 'auto');
    await close(page);
  });
});
