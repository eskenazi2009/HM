# Luna de Miel — Nueva Zelanda 🇳🇿

Itinerario y mapa de la ruta para Auckland y Rotorua (11–14 de diciembre, 2026).

App **Vite + React**. El mapa es un asset estático servido desde `public/`.

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # genera el sitio en dist/
npm run preview   # previsualiza el build de dist/
```

## Estructura

```
index.html            entrada de Vite (monta React en #root)
src/
  main.jsx            arranque de React
  App.jsx             UI del itinerario (tarjetas de día + modal)
  data.js             datos del itinerario (días, actividades, enlaces)
  styles.css          estilos
public/
  mapa.html           mapa interactivo de la ruta (Leaflet + OpenStreetMap)
vite.config.js        config de Vite (base './')
netlify.toml          build para Netlify
```

`index.html` (itinerario) enlaza a `mapa.html` y viceversa.

## Publicar

**Netlify:** New site → Import from GitHub → este repo. El `netlify.toml` ya define:
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages:** requiere publicar la carpeta `dist` (por ejemplo con una GitHub Action). Como `vite.config.js` usa `base: './'`, el build funciona tanto en la raíz de un dominio como en un sub-path.
