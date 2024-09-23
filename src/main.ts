import "./style.css";

import {estadoJuego, obtenerNumeroAleatorio, obtenerNumeroCarta, 
  obtenerPuntosCarta, sumarPuntos, actualizarPuntuacion, reiniciarContadores, 
  actualizarContTotal, cambiarContador} from "./motor/motor";

import { pintarCarta, pintarPuntuacion, pintarMejorPuntuacion, pintarMensajeFinal, bloquearBoton, 
  pintarRestantes, pintarComentarios } from "./ui/ui";

import { cartaBack, obtenerUrlCarta } from "./modelo/modelo";

const comprobarPartida = () => {
  if (estadoJuego.puntosTotales === 7.5 || estadoJuego.puntosTotales > 7.5) {
    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
        bloquearBoton(botonDameCarta, true);
      }
    if (
      botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
        bloquearBoton(botonMePlanto, true);
      }
  };
  
  if (estadoJuego.puntosTotales === 7.5) {
    pintarMejorPuntuacion(7.5);
    pintarMensajeFinal("Lo has clavado! Enhorabuena!");
  }
  if (estadoJuego.puntosTotales > 7.5) {
    pintarMensajeFinal("Has perdido... Prueba otra vez!");
  }
};

const dameCarta = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);
  cambiarContador(estadoJuego, carta.toString());
  actualizarContTotal(estadoJuego)
  const urlCarta = obtenerUrlCarta(carta);
  pintarCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  estadoJuego.puntosSumados = sumarPuntos(estadoJuego, puntosCarta);
  actualizarPuntuacion(estadoJuego, estadoJuego.puntosSumados);
  pintarPuntuacion(estadoJuego.puntosTotales);
  pintarRestantes(estadoJuego.contTotal.toString());
  comprobarPartida();
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
) {
  botonReinicio.addEventListener("click", () => {
    pintarCarta(cartaBack);
    estadoJuego.puntosTotales = 0;
    actualizarPuntuacion(estadoJuego, 0);
    pintarPuntuacion(0);
    pintarMejorPuntuacion(0);
    pintarMensajeFinal("");
    pintarRestantes("40");
    reiniciarContadores(estadoJuego);

    const elementoComentarios = document.getElementById("mensajeComentarios");
    if (elementoComentarios !== null && elementoComentarios instanceof HTMLSpanElement) {
        elementoComentarios.textContent = "";  // Limpia el mensaje de comentarios
    }

    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
      bloquearBoton(botonDameCarta, false);
    }
    if (botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
      bloquearBoton(botonMePlanto, false);
    }
    if (botonQueHabriaPasado !== null && 
      botonQueHabriaPasado !== undefined && 
      botonQueHabriaPasado instanceof HTMLButtonElement) {
      bloquearBoton(botonQueHabriaPasado, true);
    }
   })
};

const botonMePlanto = document.getElementById("mePlanto");
if (
  botonMePlanto !== null &&
  botonMePlanto !== undefined &&
  botonMePlanto instanceof HTMLButtonElement
) {
  botonMePlanto.addEventListener("click", () => {
    bloquearBoton(botonMePlanto, true);
    if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement) {
      bloquearBoton(botonDameCarta, true);
    }
    if (
      botonQueHabriaPasado !== null &&
      botonQueHabriaPasado !== undefined &&
      botonQueHabriaPasado instanceof HTMLButtonElement) {
        bloquearBoton(botonQueHabriaPasado, false);
      }
   pintarMejorPuntuacion(estadoJuego.puntosTotales);
   actualizarPuntuacion(estadoJuego, 0);
   pintarPuntuacion(0);
   pintarComentarios(estadoJuego.puntosSumados);
   estadoJuego.puntosSumados = 0;
   comprobarPartida();
  })
};

const botonQueHabriaPasado = document.getElementById("queHabriaPasado");
if (
  botonQueHabriaPasado !== null &&
  botonQueHabriaPasado !== undefined &&
  botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", () => {
      const numeroAleatorio = obtenerNumeroAleatorio();
      const carta = obtenerNumeroCarta(numeroAleatorio);
      cambiarContador(estadoJuego, carta.toString());
      actualizarContTotal(estadoJuego)
      const urlCarta = obtenerUrlCarta(carta);
      pintarCarta(urlCarta);
      bloquearBoton(botonQueHabriaPasado, true);
    })
  };
