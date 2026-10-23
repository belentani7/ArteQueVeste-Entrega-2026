'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const slides = ['portada', ...Array.from({ length: 10 }, (_, i) => 'capitulo_' + (i + 1)), 'cierre'];
for (const name of slides) {
  test('slide ' + name + ' resolves local artwork and supports reading mode', () => {
    const file = path.join(root, 'slides_finales', name + '.html');
    const html = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(html, /\/home\/ubuntu\//, 'builder-only absolute path');
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1\.0">/);
    assert.match(html, /<title>Arte Que Veste/);
    assert.match(html, /@media \(max-width: 1279px\)/);
    assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
    const images = [...html.matchAll(/\.\.\/imagenes\/([\w.-]+)/g)].map(m => m[1]);
    assert.ok(images.length > 0, 'slide must refer to local artwork');
    for (const image of images) {
      assert.ok(fs.statSync(path.join(root, 'imagenes', image)).isFile(), image + ' must exist');
    }
    if (html.includes('FRONT-UPGRADE')) {
      assert.match(html, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\) return;/);
    }
    for (const script of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => new Function(script[1]), 'inline script syntax');
    }
  });
}
