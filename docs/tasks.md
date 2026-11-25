# Tareas pendientes — stout-documents-portal

Solo lo que falta: lo hecho se borra, no se marca. El formato lo describe el README de `~/.claude/panel/`.

# Fase 2 — Rediseño

## Pulido del sitio

**Plataforma:** Sitio web
**Prioridad:** P1
**Requiere:** nada

- [ ] Imagen Open Graph para compartir el enlace.
- [ ] Revisión de accesibilidad: contraste AA en los dos temas, orden de foco y lector de pantalla.

# Fase 3 — Documentación y GitHub

## Documentación pública

**Plataforma:** Repositorio
**Prioridad:** P0
**Requiere:** nada
**Estado:** en curso

- [ ] README con cabecera de logo claro/oscuro, captura y diagrama, solo en inglés.
- [ ] CHANGELOG, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT y plantillas de issues y PR.
- [ ] LICENSE propietaria de Stout Building Contractors (todos los derechos reservados).

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

# Por probar

## Sitio nuevo en local

**Plataforma:** Sitio web

- [ ] Home: el hero es más bajo y las tarjetas se ven sin hacer scroll.
- [ ] Filtro de documentos: escribir «waiver» deja solo los dos waivers; algo sin coincidencias muestra el aviso.
- [ ] Botón «Copy» del correo: copia `documents@stoutllc.com`.
- [ ] Tema claro y oscuro: el botón cambia el tema y el logo, y la elección se recuerda al recargar.
- [ ] Página de cada documento: imagen de ejemplo grande y legible; clic la abre a tamaño completo.
- [ ] Supplier Waiver: la tabla por estado descarga el archivo correcto.
- [ ] [Móvil] Supplier Waiver: la tabla se convierte en tarjetas por estado.
- [ ] URLs viejas: `/stout-documents-portal/pages/w9.html` redirige a la página nueva del W-9.

# Lo hace el dueño — aprobación, renombre y traspaso

## Fusionar, renombrar y traspasar

**Plataforma:** Repositorio
**Requiere:** «Renombrar a paymentdocs-repository»

- [ ] Cambiar la fuente de Pages a «GitHub Actions» (Settings → Pages → Source) justo antes de fusionar.
- [ ] Aprobar y fusionar `redesign` en `main` con un PR.
- [ ] Renombrar el repo en GitHub (Settings → General → Repository name) y la carpeta local.
- [ ] Transferir el repo a la org de Stout desde Settings → Danger Zone → Transfer.
- [ ] Confirmar con Stout los enlaces de Google Drive: hoy viven en una cuenta personal.
