# Vota informado

Balance de los gobiernos de Pedro Sánchez (2018–2026), punto por punto, de cara a las elecciones generales del 29 de noviembre de 2026. Cada punto lleva su dato, su letra pequeña y sus fuentes.

Web estática: sin base de datos, sin API y sin variables de entorno.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera todas las páginas
npm run comprobar  # comprueba que los enlaces a fuentes responden
```

Requiere Node 20 o superior.

## Publicar en Vercel

Importa el repositorio en Vercel. Detecta Next.js y no necesita configuración. Cada `git push` a `main` publica una versión nueva.

## Dónde está el contenido

Todo el contenido vive en `data/`:

| Archivo | Qué contiene |
| --- | --- |
| `data/tipos.ts` | Tipos, nombres de grupos y temas, fecha de actualización y fecha electoral |
| `data/favor.ts` | Puntos a favor (con letra pequeña y que se sostienen) |
| `data/contra.ts`, `data/otros.ts` | Puntos en contra, causas en los tribunales y decisiones a debate |
| `data/puntos.ts` | Une las listas y calcula el recuento |
| `data/impuestos.ts` | Cronología de cambios de impuestos y cotizaciones (página `/impuestos`) |
| `data/partidos.ts` | Propuestas anunciadas por PP, PSOE y Vox (página `/partidos`). Las fotos están en `public/partidos/` |
| `data/promesas.ts` | Promesas del PSOE y lo que ocurrió después (página `/promesas`) |

El recuento de la portada se calcula a partir de los datos: añadir, quitar o mover un punto lo actualiza solo.

### Añadir o corregir un punto

Cada punto es un objeto `Punto` (ver `data/tipos.ts`). Lo imprescindible:

- `grupo`: en cuál de los seis grupos va.
- `cifras` y `notas`: las cifras grandes de la tarjeta y su letra pequeña. `nota: "1"` en una cifra remite a la nota con `marca: "1"`. La marca `+` es contexto que no cuelga de ninguna cifra.
- `fuentes`: al menos una, y mejor la del organismo que produce el dato.

Reglas editoriales (las mismas que explica la página `/como-contamos`):

1. Ninguna cifra sin fuente. Si no se puede comprobar, no se publica.
2. «Ilegal» solo si lo dijo un tribunal. Las causas abiertas van en `tribunales`.
3. La letra pequeña se aplica a los puntos a favor y a los puntos en contra.
4. Las opiniones van en `defensa` y `critica`, atribuidas, nunca como dato.

Al cambiar datos, actualiza `ACTUALIZADO` en `data/tipos.ts` y revisa `VERIFICACION.md`.

## Estructura

```
app/                  páginas (portada, ficha de cada punto, método)
components/           cabecera, pie, tarjeta, recuento y listado con filtro
data/                 contenido
scripts/comprobar.mjs comprobador de enlaces
```
