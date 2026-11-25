# Tareas pendientes — stout-documents-portal

Solo lo que falta: lo hecho se borra, no se marca. El formato lo describe el README de `~/.claude/panel/`.

# Fase 3 — Cierre

## Renombrar a paymentdocs-repository

**Plataforma:** Repositorio
**Prioridad:** P1
**Requiere:** nada
**Estado:** en curso

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
- [ ] Logo del header: se lee «Stout Building Contractors» en claro y «Stout» en oscuro.

## Repositorio en GitHub

**Plataforma:** Repositorio

- [ ] README en GitHub: logo y captura cambian con el tema claro y oscuro de GitHub; el diagrama se ve.
- [ ] Descripción y topics nuevos en la página del repo.
- [ ] Tras el deploy: compartir el enlace por WhatsApp o correo muestra la imagen azul de Stout.

# Lo hace el dueño — aprobación, renombre y traspaso

## Fusionar, renombrar y traspasar

**Plataforma:** Repositorio
**Requiere:** «Renombrar a paymentdocs-repository»

- [ ] Descargar de Drive la carpeta de supplier waivers por estado y pasar la ruta a Claude.
- [ ] Verificar el sitio completo y aprobarlo.
- [ ] Llevar los commits de `redesign` a `main` (fast-forward) y borrar `redesign`.
- [ ] Cambiar la fuente de Pages a «GitHub Actions» (Settings → Pages → Source) antes del push.
- [ ] Push de `main`.
- [ ] Renombrar el repo en GitHub (Settings → General → Repository name) y la carpeta local.
- [ ] Transferir el repo a la org de Stout desde Settings → Danger Zone → Transfer.
- [ ] Borrar los documentos del Google Drive personal, solo cuando el sitio nuevo esté desplegado y sin enlaces a Drive.
- [ ] Borrar la foto de cheques reales (`Ejemplo - Cheque Stout.jpeg`) de Drive y de `exported-documents`: muestra cuenta bancaria y firmas.
