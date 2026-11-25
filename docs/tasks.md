# Tareas pendientes — stout-documents-portal

Solo lo que falta: lo hecho se borra, no se marca. El formato lo describe el README de `~/.claude/panel/`.

# Fase 1 — Base y stack

## Stack Astro con TypeScript estricto

**Plataforma:** Sitio web
**Prioridad:** P0
**Requiere:** nada
**Estado:** en curso

- [ ] Eliminar el sitio viejo (HTML, SCSS, Prism, imágenes duplicadas, `payments.html`), con confirmación del usuario.
- [ ] Astro con `astro/tsconfigs/strictest` y pnpm; `engines.node` como fuente única de la versión.
- [ ] Un layout único (header, footer, tema) en lugar de los headers y footers copiados en cada página.
- [ ] Cada documento (W-9, GL, WC, SA, SW, ULW) como Markdown en una content collection con esquema tipado.
- [ ] Fuera Bootstrap, AOS, FontAwesome y `node-sass`: CSS propio con variables e iconos SVG locales.

# Fase 2 — Rediseño

## Mockup del nuevo diseño

**Plataforma:** Sitio web
**Prioridad:** P0
**Requiere:** «Stack Astro con TypeScript estricto»

- [ ] Home con filtro de documentos, tarjetas con qué es, si es obligatorio y su acción directa.
- [ ] Página de detalle: resumen, pasos, correo de envío con botón de copiar y descargas.
- [ ] Logos de Stout (claro y oscuro), azul de marca, modo claro y oscuro según el sistema.
- [ ] Aprobación del usuario antes de implementarlo.

## Implementar el rediseño

**Plataforma:** Sitio web
**Prioridad:** P0
**Requiere:** «Mockup del nuevo diseño»

- [ ] Home, checklist de documentos y páginas de detalle según el mockup aprobado.
- [ ] Accesibilidad AA (contraste, foco visible, semántica), meta description y Open Graph.
- [ ] Imágenes optimizadas; PDFs de Google Drive personal movidos al repo o señalados para pasarlos a Stout.
- [ ] Corregir el breadcrumb de W-9 y los `alt` heredados de la plantilla de curso.

# Fase 3 — CI, documentación y GitHub

## CI y despliegue a Pages

**Plataforma:** Repositorio
**Prioridad:** P0
**Requiere:** «Implementar el rediseño»

- [ ] `ci.yml`: `astro check`, `prettier --check`, build y check de enlaces; acciones fijadas por SHA.
- [ ] Deploy a GitHub Pages con Actions en lugar del build legacy desde la raíz.
- [ ] `dependabot.yml` mensual para `github-actions`.

## Documentación pública

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** «Implementar el rediseño»

- [ ] README con cabecera de logo claro/oscuro, captura y diagrama, solo en inglés.
- [ ] CHANGELOG, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT y plantillas de issues y PR.
- [ ] LICENSE propietaria de Stout Building Contractors (todos los derechos reservados).

## Metadatos de GitHub

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** «Documentación pública»

- [ ] Descripción en inglés y de 6 a 10 topics.
- [ ] Ruleset de `main` contra borrado y push forzado; reporte privado de vulnerabilidades.

# Lo hace el dueño — traspaso

## Traspaso a la organización de Stout

**Plataforma:** Repositorio
**Requiere:** «Metadatos de GitHub»

- [ ] Transferir el repo a la org de Stout desde Settings → Danger Zone → Transfer.
- [ ] Actualizar la URL de Pages en el README y en la web del repo tras el traspaso.
