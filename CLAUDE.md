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

| Pieza | Qué |
|---|---|
| Sitio | Estático, HTML y SCSS compilado con `node-sass` (en migración a Astro) |
| Lenguaje | TypeScript estricto (`astro/tsconfigs/strictest`) tras la migración |
| Paquetes | pnpm |
| Despliegue | GitHub Pages |

## Convenciones

- Formato: `.prettierrc.json` y `.editorconfig` del repo (tabs, ancho 100).
- El texto de cada documento vive en un solo sitio; las páginas no repiten header ni footer.
- Sin datos personales en el sitio: el contacto es el correo de Stout (`documents@stoutllc.com`).
- Trabajo en la rama `redesign`; `main` es lo que sirve Pages.
- Tareas: `docs/tasks.md` y `docs/backlog.md`, con el panel de `~/.claude/panel/`.
