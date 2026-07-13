# Luna de Miel — Nueva Zelanda 🇳🇿

Itinerario y mapa de la ruta para Auckland y Rotorua (11–14 de diciembre, 2026).

App **Vite + React**. El mapa es un asset estático servido desde `public/`.
Se despliega solo en **GitHub Pages** con GitHub Actions en cada push a `main`.

## Desarrollo

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # genera el sitio en dist/
npm run preview   # previsualiza el build de dist/
```

## Estructura

```
index.html                    entrada de Vite (monta React en #root)
src/
  main.jsx                    arranque de React
  App.jsx                     UI del itinerario (tarjetas de día + modal)
  data.js                     datos del itinerario (días, actividades, enlaces)
  styles.css                  estilos
public/
  mapa.html                   mapa interactivo de la ruta (Leaflet + OpenStreetMap)
vite.config.js                config de Vite (base './')
.github/workflows/deploy.yml  build + deploy automático a GitHub Pages
```

`index.html` (itinerario) enlaza a `mapa.html` y viceversa.

## Despliegue (GitHub Pages)

Una sola vez: en el repo → **Settings → Pages → Source → GitHub Actions**.

A partir de ahí, cada push a `main` compila y publica automáticamente en:

```
https://eskenazi2009.github.io/HM/
```
