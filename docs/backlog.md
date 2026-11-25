# Backlog — stout-documents-portal

Lo diferido que no bloquea nada, con su porqué y el archivo concreto.

### Plantillas de waiver duplicadas en Oregon

**Plataforma:** Sitio web

- [ ] `src/data/waiver-templates.ts`: los _Conditional final_ y _Unconditional final_ de Oregon apuntan a los mismos archivos de Drive que los de Oklahoma. Ya era así en el sitio viejo; confirmar con Stout cuáles son los de Oregon.

### Plantillas de Texas

**Plataforma:** Sitio web

- [ ] El sitio viejo tenía Texas comentado y con enlaces `#`. Añadirlo a `src/data/waiver-templates.ts` cuando Stout tenga las plantillas.

### Archivos en Google Drive personal

**Plataforma:** Sitio web

- [ ] El supplier affidavit ya vive en `public/forms/`. Faltan los 40 supplier waivers de `src/data/waiver-templates.ts`, que siguen en el Google Drive personal: pasarlos a `public/forms/waivers/<estado>/` cuando el usuario los descargue.
