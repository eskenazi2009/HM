# Luna de Miel — Nueva Zelanda 🇳🇿

Itinerario y mapa de la ruta para Auckland y Rotorua (11–14 de diciembre, 2026).

Sitio estático — solo HTML, sin build ni dependencias.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Página principal: itinerario día por día. Toca una actividad para ver el detalle y el enlace de **Reserva**. |
| `mapa.html`  | Mapa interactivo de la ruta (Leaflet + OpenStreetMap) con las paradas de cada día. |

`index.html` enlaza a `mapa.html` y viceversa.

## Publicar

No requiere comando de build. La carpeta raíz **es** el sitio.

**Netlify:** New site → Import from GitHub → este repo →
- Build command: *(vacío)*
- Publish directory: `/` (raíz)

**GitHub Pages:** Settings → Pages → Deploy from branch → `main` / `root`.
