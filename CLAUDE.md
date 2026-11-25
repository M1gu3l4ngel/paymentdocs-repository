# stout-documents-portal

Portal público de documentación para subcontratistas y proveedores de Stout Building
Contractors: qué documentos pide Stout para pagar (W-9, General Liability, Workers
Compensation, Supplier Affidavit, Supplier Waiver, Unconditional Lien Waiver), cómo se
llenan y a dónde se envían. Se publica en GitHub Pages:
<https://m1gu3l4ngel.github.io/stout-documents-portal/>. Va a pasar a la organización de Stout
en GitHub.

## Excepciones a las reglas globales

- **Solo inglés.** Este repo no lleva documentos en pareja `.es.md` ni sitio en español: README,
  CHANGELOG, documentos de comunidad, `docs/` y el sitio van solo en inglés. Las únicas piezas en
  español son este `CLAUDE.md` y las listas del panel (`docs/tasks.md`, `docs/backlog.md`).
- **Licencia propietaria.** El código y el contenido son de Stout Building Contractors, todos los
  derechos reservados, aunque el repo sea público. Nada de licencias abiertas.

## Stack

| Pieza      | Qué                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- |
| Sitio      | Astro 7, estático, con `base: "/stout-documents-portal"` para GitHub Pages                  |
| Lenguaje   | TypeScript estricto (`astro/tsconfigs/strictest`); TS 6 hasta que `@astrojs/check` admita 7 |
| Estilos    | CSS propio en `src/styles/global.css`, con tokens de color claro y oscuro                   |
| Paquetes   | pnpm; Node exacto en `engines.node` de `package.json`                                       |
| Despliegue | GitHub Pages                                                                                |

## Estructura

| Ruta                              | Qué                                                                         |
| --------------------------------- | --------------------------------------------------------------------------- |
| `src/content/documents/`          | Un Markdown por documento; el esquema está en `src/content.config.ts`       |
| `src/data/waiver-templates.ts`    | Estados con plantillas de supplier waiver; los PDF están en `public/forms/` |
| `src/pages/`                      | Home, página de cada documento (`documents/[id].astro`) y 404               |
| `src/components/`, `src/layouts/` | Layout único, header, footer e iconos SVG en línea                          |
| `public/pages/`                   | Redirecciones de las URLs del sitio viejo (`pages/w9.html`…)                |

## Comandos

Desde la raíz del repo, como usuario normal:

| Comando             | Qué hace                           |
| ------------------- | ---------------------------------- |
| `pnpm install`      | Instala dependencias               |
| `pnpm dev`          | Servidor local con recarga en vivo |
| `pnpm check`        | Tipos y diagnósticos de Astro      |
| `pnpm build`        | Genera el sitio en `dist/`         |
| `pnpm preview`      | Sirve `dist/` para revisarlo       |
| `pnpm format:check` | Comprueba el formato con Prettier  |

## Convenciones

- Formato: `.prettierrc.json` y `.editorconfig` del repo (tabs, ancho 100).
- El texto de cada documento vive en un solo sitio; las páginas no repiten header ni footer.
- Sin datos personales en el sitio: el contacto es el correo de Stout (`documents@stoutllc.com`).
- Repo de solo `main`: se trabaja y se publica en `main`, sin ramas de trabajo. Cada push a `main`
  pasa el CI y despliega a Pages.
- Tareas: `docs/tasks.md` y `docs/backlog.md`, con el panel de `~/.claude/panel/`.
