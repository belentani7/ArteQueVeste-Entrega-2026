'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const root = path.resolve(__dirname, '..');
const slides = ['portada', ...Array.from({ length: 10 }, (_, i) => 'capitulo_' + (i + 1)), 'cierre'];

function artworkReferences(html) {
  const refs = [];
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\ssrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    assert.ok(src && (src[1] || src[2] || src[3]), 'every image needs a nonempty src');
    assert.match(tag, /\salt\s*=\s*(?:"[^"]*"|'[^']*')/i, 'every image needs alt text (empty is allowed for decoration)');
    refs.push({ value: src[1] || src[2] || src[3], image: true });
  }
  for (const match of html.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]+))\s*\)/gi)) {
    const value = match[1] || match[2] || match[3];
    if (/^(?:https?:|data:|#)/i.test(value)) continue;
    refs.push({ value, image: false });
  }
  return refs;
}

function verifyArtwork(file, html, imagesDir) {
  const imageDirectory = fs.lstatSync(imagesDir);
  assert.ok(imageDirectory.isDirectory() && !imageDirectory.isSymbolicLink(), 'artwork directory must be real');
  const refs = artworkReferences(html);
  assert.ok(refs.length > 0, 'slide must refer to local artwork');
  for (const { value, image } of refs) {
    if (image) assert.ok(!/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value), 'image must be local: ' + value);
    assert.ok(value.startsWith('../imagenes/'), 'unexpected artwork path: ' + value);
    const target = path.resolve(path.dirname(file), value.split(/[?#]/, 1)[0]);
    const relative = path.relative(imagesDir, target);
    assert.ok(relative && relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative), 'artwork escapes image directory: ' + value);
    const info = fs.lstatSync(target);
    assert.ok(info.isFile() && !info.isSymbolicLink(), 'artwork must be a regular file: ' + value);
  }
}

for (const name of slides) {
  test('slide ' + name + ' resolves local artwork and supports reading mode', () => {
    const file = path.join(root, 'slides_finales', name + '.html');
    const html = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(html, /\/home\/ubuntu\//, 'builder-only absolute path');
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1\.0">/);
    assert.match(html, /<title>Arte Que Veste/);
    assert.match(html, /@media \(max-width: 1279px\)/);
    assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
    verifyArtwork(file, html, path.join(root, 'imagenes'));
    if (html.includes('FRONT-UPGRADE')) {
      assert.match(html, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\) return;/);
    }
    for (const script of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => new Function(script[1]), 'inline script syntax');
    }
  });
}

test('rejects missing image even when a valid CSS artwork exists', t => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'slides-assets-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const images = path.join(tmp, 'imagenes');
  const slidesDir = path.join(tmp, 'slides_finales');
  fs.mkdirSync(images);
  fs.mkdirSync(slidesDir);
  fs.writeFileSync(path.join(images, 'valid.jpg'), 'fixture');
  const html = '<style>.hero{background:url(../imagenes/valid.jpg)}</style><img src="missing.jpg" alt="Test">';
  assert.throws(() => verifyArtwork(path.join(slidesDir, 'slide.html'), html, images), /unexpected artwork path/);
});

test('rejects image path traversal even when it resolves to an existing file', t => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'slides-assets-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const images = path.join(tmp, 'imagenes');
  const slidesDir = path.join(tmp, 'slides_finales');
  fs.mkdirSync(images);
  fs.mkdirSync(slidesDir);
  fs.writeFileSync(path.join(tmp, 'outside.jpg'), 'fixture');
  const html = '<img src="../imagenes/../outside.jpg" alt="Test">';
  assert.throws(() => verifyArtwork(path.join(slidesDir, 'slide.html'), html, images), /escapes image directory/);
});

test('rejects symlinked artwork and symlinked image directories', t => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'slides-assets-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const images = path.join(tmp, 'imagenes');
  const slidesDir = path.join(tmp, 'slides_finales');
  fs.mkdirSync(images);
  fs.mkdirSync(slidesDir);
  const outside = path.join(tmp, 'outside.jpg');
  fs.writeFileSync(outside, 'fixture');
  fs.symlinkSync(outside, path.join(images, 'linked.jpg'));
  const html = '<img src="../imagenes/linked.jpg" alt="Test">';
  assert.throws(() => verifyArtwork(path.join(slidesDir, 'slide.html'), html, images), /regular file/);
  fs.renameSync(images, path.join(tmp, 'real-images'));
  fs.symlinkSync(path.join(tmp, 'real-images'), images, 'dir');
  assert.throws(() => verifyArtwork(path.join(slidesDir, 'slide.html'), html, images), /directory must be real/);
});

test('accepts a valid local image and external CSS texture', t => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'slides-assets-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const images = path.join(tmp, 'imagenes');
  const slidesDir = path.join(tmp, 'slides_finales');
  fs.mkdirSync(images);
  fs.mkdirSync(slidesDir);
  fs.writeFileSync(path.join(images, 'valid.jpg'), 'fixture');
  const html = '<img src="../imagenes/valid.jpg" alt="Test"><style>.bg{background:url("https://example.org/paper.png")}</style>';
  assert.doesNotThrow(() => verifyArtwork(path.join(slidesDir, 'slide.html'), html, images));
});
