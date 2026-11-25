# Backlog — stout-documents-portal

Lo diferido que no bloquea nada, con su porqué y el archivo concreto.

### Plantillas de Texas

**Plataforma:** Sitio web

- [ ] El sitio viejo tenía Texas comentado y con enlaces `#`. Añadirlo a `public/forms/waivers/texas/` y a `WAIVER_STATES` de `src/data/waiver-templates.ts` cuando Stout tenga las plantillas.

### Errores en las plantillas de waiver de Stout

**Plataforma:** Sitio web

- [ ] `public/forms/waivers/oregon/conditional-final.pdf` (y posiblemente otras): imprime `<\li>` literal en los pasos 1 y 2, y siendo final dice «applies to a progress payment». Lo corrige Stout en su herramienta (Built) y se reemplaza el PDF.
- [ ] Teléfono y fax invertidos entre plantillas: el affidavit dice office (801) 294-2150 y fax 296-5085; los waivers, (801) 296-2150 phone y 294-5085 fax. Confirmar con Stout cuál es el correcto.
