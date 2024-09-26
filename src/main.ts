import "./style.css";

import {funcionBotonMePlanto, dameCarta, reinicio, funcQueHabriaPasado} from "./ui/ui";

const botonMePlanto = document.getElementById("mePlanto");
if (botonMePlanto !== null && 
  botonMePlanto !== undefined && 
  botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", () => {
    funcionBotonMePlanto();
  })
};

const botonDameCarta = document.getElementById("dameCarta");
if (
  botonDameCarta !== null &&
  botonDameCarta !== undefined &&
  botonDameCarta instanceof HTMLButtonElement
) {
  botonDameCarta.addEventListener("click", () => {
    dameCarta();
  });
};

const botonReinicio = document.getElementById("reinicio");
if (
  botonReinicio !== null &&
  botonReinicio !== undefined &&
  botonReinicio instanceof HTMLButtonElement
){
  botonReinicio.addEventListener("click", () => {
    reinicio();
})
};

const botonQueHabriaPasado = document.getElementById("queHabriaPasado");
if (
  botonQueHabriaPasado !== null &&
  botonQueHabriaPasado !== undefined &&
  botonQueHabriaPasado instanceof HTMLButtonElement){
    botonQueHabriaPasado.addEventListener("click", () => {
    funcQueHabriaPasado();
  })
};