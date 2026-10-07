// Comprueba que todas las fuentes enlazadas en data/*.ts responden.
// Uso: npm run comprobar
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(import.meta.dirname, "..", "data");
const urls = new Set();
for (const f of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  for (const m of readFileSync(join(dir, f), "utf8").matchAll(/url:\s*\n?\s*"(https?:\/\/[^"]+)"/g)) urls.add(m[1]);
}

const AGENTE = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";
// Estos códigos suelen ser bloqueos a robots, no enlaces rotos: hay que abrirlos a mano.
const BLOQUEO = new Set([401, 403, 406, 429]);

let rotos = 0;
let bloqueados = 0;
for (const url of urls) {
  let estado;
  try {
    const r = await fetch(url, { headers: { "user-agent": AGENTE }, redirect: "follow", signal: AbortSignal.timeout(20000) });
    estado = r.status;
  } catch (e) {
    estado = `error (${e.name})`;
  }
  if (estado === 200) continue;
  if (BLOQUEO.has(estado)) {
    bloqueados++;
    console.log(`BLOQUEA ROBOTS ${estado}  ${url}`);
  } else {
    rotos++;
    console.log(`ROTO ${estado}  ${url}`);
  }
}
console.log(`\n${urls.size} enlaces: ${urls.size - rotos - bloqueados} responden, ${bloqueados} bloquean robots, ${rotos} rotos.`);
process.exit(rotos ? 1 : 0);
