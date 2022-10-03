import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = process.env.REACT_APP_TOKEN;

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
