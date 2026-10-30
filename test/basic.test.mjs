// Tests básicos del paquete "Arte Que Veste — Entrega 2026".
// El repo es un paquete de entrega mayormente estático (HTML/PDF/imágenes),
// así que se valida la integridad estructural: coherencia entre
// slide_state.json y las páginas HTML reales, JSONs válidos y presencia
// de los archivos de protocolo. Corre con: node --test test/
import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

/** Lista los .html de un directorio del paquete. */
const htmlFiles = (dir) =>
  readdirSync(join(root, dir))
    .filter((f) => f.endsWith(".html"))
    .sort()

/**
 * Coherencia de un slide_state.json: cada slide declarado debe tener su
 * página HTML real y los pageNum deben ser únicos.
 */
function assertStateMatchesSlides(dir) {
  const state = JSON.parse(readFileSync(join(root, dir, "slide_state.json"), "utf-8"))
  assert.ok(Array.isArray(state.slides) && state.slides.length > 0, `${dir}/slide_state.json debe listar diapositivas`)
  const ids = state.slides.map((s) => s.id)
  assert.equal(new Set(ids).size, ids.length, `${dir}: ids de diapositiva duplicados`)
  const pageNums = state.slides.map((s) => s.pageNum)
  assert.equal(new Set(pageNums).size, pageNums.length, `${dir}: pageNum duplicados`)
  for (const id of ids) {
    assert.ok(existsSync(join(root, dir, `${id}.html`)), `${dir}: falta la página del slide "${id}"`)
  }
  return state
}

test("los archivos de protocolo existen (README, LICENSE, .gitignore)", () => {
  for (const f of ["README.md", "LICENSE", ".gitignore"]) {
    assert.ok(existsSync(join(root, f)), `falta ${f}`)
  }
})

test("slides_finales: slide_state.json coherente con las páginas HTML", () => {
  const state = assertStateMatchesSlides("slides_finales")
  assert.equal(state.slides.length, 12, "la presentación final tiene 12 diapositivas")
  assert.equal(state.project_info?.total_slides, state.slides.length, "project_info.total_slides no coincide")
  assert.equal(htmlFiles("slides_finales").length, state.slides.length, "número de HTML difiere del estado")
})

test("slides_iniciales: slide_state.json coherente con las páginas HTML", () => {
  const state = assertStateMatchesSlides("slides_iniciales")
  assert.equal(state.slides.length, 12, "la presentación inicial tiene 12 diapositivas")
})

test("cada página HTML del paquete es un documento no vacío y cerrado", () => {
  for (const dir of ["slides_finales", "slides_iniciales"]) {
    for (const file of htmlFiles(dir)) {
      const html = readFileSync(join(root, dir, file), "utf-8")
      assert.ok(html.trim().length > 0, `${dir}/${file} está vacío`)
      assert.ok(/<!DOCTYPE html>/i.test(html), `${dir}/${file} sin <!DOCTYPE html>`)
      assert.ok(html.includes("</html>"), `${dir}/${file} sin cierre </html>`)
      assert.ok(/<html[^>]*lang=/i.test(html), `${dir}/${file} sin atributo lang`)
    }
  }
})

test("la capa mágica existe: magic/plugin.js apunta a un HTML presente", () => {
  const plugin = readFileSync(join(root, "magic", "plugin.js"), "utf-8")
  const target = plugin.match(/const target = "([^"]+)"/)?.[1]
  assert.ok(target, "magic/plugin.js no declara su HTML objetivo")
  assert.ok(existsSync(join(root, target)), `no existe ${target} (referenciado por magic/plugin.js)`)
})

test("fuentes/Manual_MD_PDF/main.verify.json es un informe JSON válido", () => {
  const verify = JSON.parse(readFileSync(join(root, "fuentes", "Manual_MD_PDF", "main.verify.json"), "utf-8"))
  assert.equal(verify.schema_version, 1)
  assert.ok(Array.isArray(verify.checks), "el informe debe tener una lista de checks")
})
