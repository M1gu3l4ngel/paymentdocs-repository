# Tareas pendientes — stout-documents-portal

Solo lo que falta: lo hecho se borra, no se marca. El formato lo describe el README de `~/.claude/panel/`.

# Fase 2 — Rediseño

## Revisión del diseño en local

**Plataforma:** Sitio web
**Prioridad:** P0
**Requiere:** nada
**Estado:** en curso

- [ ] El usuario revisa el sitio con `pnpm dev` y aprueba o pide cambios de diseño.
- [ ] Ajustes de diseño que salgan de la revisión.

## Pulido del sitio

**Plataforma:** Sitio web
**Prioridad:** P1
**Requiere:** «Revisión del diseño en local»

- [ ] Imagen Open Graph para compartir el enlace.
- [ ] Revisión de accesibilidad: contraste AA en los dos temas, orden de foco y lector de pantalla.

# Fase 3 — CI, documentación y GitHub

## CI y despliegue a Pages

**Plataforma:** Repositorio
**Prioridad:** P0
**Requiere:** «Revisión del diseño en local»

- [ ] `ci.yml`: `pnpm check`, `pnpm format:check`, build y check de enlaces; acciones fijadas por SHA.
- [ ] Workflow de deploy a GitHub Pages con Actions, y cambiar la fuente de Pages de «branch» a «GitHub Actions» antes de fusionar a `main` (si no, Pages sirve la raíz sin `index.html`).
- [ ] `dependabot.yml` mensual para `github-actions` y `npm`.

## Documentación pública

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** «Revisión del diseño en local»

- [ ] README con cabecera de logo claro/oscuro, captura y diagrama, solo en inglés.
- [ ] CHANGELOG, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT y plantillas de issues y PR.
- [ ] LICENSE propietaria de Stout Building Contractors (todos los derechos reservados).
- [ ] Check de documentos de comunidad adaptado a un repo solo en inglés.

## Metadatos de GitHub

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** «Documentación pública»

- [ ] Descripción en inglés y de 6 a 10 topics.
- [ ] Ruleset de `main` contra borrado y push forzado; reporte privado de vulnerabilidades.

## Renombrar a paymentdocs-repository

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** «Metadatos de GitHub»

- [ ] Cambiar `base` de Astro, `CLAUDE.md`, README y la web del repo a `/paymentdocs-repository/`.
- [ ] Redirección desde la URL vieja de Pages (GitHub no la redirige al renombrar).

# Lo hace el dueño — aprobación, renombre y traspaso

## Fusionar, renombrar y traspasar

**Plataforma:** Repositorio
**Requiere:** «Renombrar a paymentdocs-repository»

- [ ] Aprobar y fusionar `redesign` en `main` con un PR.
- [ ] Renombrar el repo en GitHub (Settings → General → Repository name) y la carpeta local.
- [ ] Transferir el repo a la org de Stout desde Settings → Danger Zone → Transfer.
- [ ] Confirmar con Stout los enlaces de Google Drive: hoy viven en una cuenta personal.
