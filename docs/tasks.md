# Tareas pendientes — paymentdocs-repository

Solo lo que falta: lo hecho se borra, no se marca. El formato lo describe el README de `~/.claude/panel/`.

# Por probar

## Sitio nuevo en local

**Plataforma:** Sitio web

- [ ] Home: el hero es más bajo y las tarjetas se ven sin hacer scroll.
- [ ] Filtro de documentos: escribir «waiver» deja solo los dos waivers; algo sin coincidencias muestra el aviso.
- [ ] Botón «Copy» del correo: copia `documents@stoutllc.com`.
- [ ] Tema claro y oscuro: el botón cambia el tema y el logo, y la elección se recuerda al recargar.
- [ ] Página de cada documento: imagen de ejemplo grande y legible; clic la abre a tamaño completo.
- [ ] Supplier Waiver: la tabla por estado descarga el PDF correcto.
- [ ] [Móvil] Supplier Waiver: la tabla se convierte en tarjetas por estado.
- [ ] Rutas viejas: `/paymentdocs-repository/pages/w9.html` redirige a la página nueva del W-9.
- [ ] Logo del header: se lee «Stout Building Contractors» en claro y «Stout» en oscuro.

## Repositorio en GitHub

**Plataforma:** Repositorio

- [ ] README en GitHub: logo y captura cambian con el tema claro y oscuro de GitHub; el diagrama se ve.
- [ ] Descripción y topics nuevos en la página del repo.
- [ ] Tras el deploy: compartir el enlace por WhatsApp o correo muestra la imagen azul de Stout.

# Lo hace el dueño — rama, Pages, traspaso y Drive

## Carpeta, traspaso y Drive

**Plataforma:** Repositorio
**Requiere:** nada

- [ ] Push de la regla de Dependabot y cerrar el PR #1 (TypeScript 7 y `@types/node` 26) si Dependabot no lo cierra solo.
- [ ] Renombrar la carpeta local a `paymentdocs-repository`, con la sesión de Claude cerrada.
- [ ] Transferir el repo a la org de Stout desde Settings → Danger Zone → Transfer; después, cambiar `site` en `astro.config.mjs` y las URLs del README.
- [ ] Decidir si la URL vieja (`…/stout-documents-portal/`) necesita un repo pequeño de redirección hacia la URL final.
- [ ] Borrar los documentos del Google Drive personal cuando el sitio nuevo esté desplegado.
- [ ] Borrar la foto de cheques reales (`Ejemplo - Cheque Stout.jpeg`) de Drive y de `exported-documents`: muestra cuenta bancaria y firmas.
