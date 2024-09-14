import "./style.css";

let puntosTotales : number = 0;
let puntosSumados: number = 0;
const cartaBack : string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const obtenerNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return cartaBack;
  }
};

const pintarCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("imgCarta");
  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = urlCarta;
  }
};

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

const sumarPuntos = (puntos: number) => {
  return puntosTotales + puntos;
};

const actualizarPuntuacion = (puntosActuales: number) => {
  if (puntosActuales > puntosTotales){
    puntosTotales = puntosActuales;
  }
};

const pintarPuntuacion = (puntuacion: number) => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (
    elementoPuntuacion !== null &&
    elementoPuntuacion !== undefined &&
    elementoPuntuacion instanceof HTMLSpanElement
  ) {
    elementoPuntuacion.innerText = `${puntuacion}`;
  }
};

const comprobarPartida = () => {
  if (puntosTotales === 7.5 || puntosTotales > 7.5) {
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
  
  if (puntosTotales === 7.5) {
    pintarMejorPuntuacion(7.5);
    pintarMensajeFinal("Lo has clavado! Enhorabuena!");
  }
  if (puntosTotales > 7.5) {
    pintarMensajeFinal("Has perdido... Prueba otra vez!");
  }
};

const dameCarta = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);
  cambiarContador(carta.toString());
  actualizarContTotal()
  const urlCarta = obtenerUrlCarta(carta);
  pintarCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  pintarPuntuacion(puntosTotales);
  pintarRestantes(contTotal.toString())
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
    puntosTotales = 0;
    actualizarPuntuacion(0);
    pintarPuntuacion(0);
    pintarMejorPuntuacion(0);
    pintarMensajeFinal("");
    pintarRestantes("40");
    reiniciarContadores();

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

const pintarMejorPuntuacion = (mejorPuntuacion: number) => {
  const elementoMejorPuntuacion = document.getElementById("mejorPuntuacion")
  if (
    elementoMejorPuntuacion !== null &&
    elementoMejorPuntuacion !== undefined &&
    elementoMejorPuntuacion instanceof HTMLSpanElement
  ) {
    elementoMejorPuntuacion.innerText = `${mejorPuntuacion}`
  }
};

const pintarMensajeFinal = (mensajeFinal: string) => {
  const elementoMensajeFinal = document.getElementById("mensajeFinal")
  if (
    elementoMensajeFinal !== null &&
    elementoMensajeFinal !== undefined &&
    elementoMensajeFinal instanceof HTMLSpanElement
  ) {
    elementoMensajeFinal.innerText = `${mensajeFinal}`
  }
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
   pintarMejorPuntuacion(puntosTotales);
   actualizarPuntuacion(0);
   pintarPuntuacion(0);
   puntosSumados = 0;
   comprobarPartida();
  })
};

// Bloquea o desbloquea el botón --> bloquearBoton(BotonElegido, true/false) 
const bloquearBoton = (boton: HTMLButtonElement, elegirToF: boolean): void => {
  boton.disabled = elegirToF;
};

const pintarRestantes = (mensajeRestantes: string) => {
  const elementoMensajeRestantes = document.getElementById("restantes")
  if (
    elementoMensajeRestantes !== null &&
    elementoMensajeRestantes !== undefined &&
    elementoMensajeRestantes instanceof HTMLSpanElement
  ) {
    elementoMensajeRestantes.innerText = `${mensajeRestantes}`
  }
};

const CONTMAX: number = 4;
const CONTTOTALMAX: number = 40;
let contAs: number = 4;
let contDos: number = 4;
let contTres: number = 4;
let contCuatro: number = 4;
let contCinco: number = 4;
let contSeis: number = 4;
let contSiete: number = 4;
let contSota: number = 4;
let contCaballo: number =4;
let contRey: number = 4;
let contTotal: number = 40;

const reiniciarContadores = () => {
  contAs = contDos = contTres = contCuatro = contCinco = contSeis 
      = contSiete = contSota = contCaballo = contRey = CONTMAX;
  contTotal = CONTTOTALMAX;
}; 

const actualizarContTotal = () => {
  contTotal = contAs + contDos + contTres + contCuatro + contCinco 
          + contSeis + contSiete + contSota + contCaballo + contRey;
};

const cambiarContador = (nombreCont: string) => {
  switch(nombreCont) {
      case "1":
          contAs--;
          break;
      case "2":
          contDos--;
          break;
      case "3":
          contTres--;
          break;
      case "4":
          contCuatro--;
          break;
      case "5":
          contCinco--;
          break;
      case "6":
          contSeis--;
          break;
      case "7":
          contSiete--;
          break;
      case "10":
          contSota--;
          break;
      case "11":
          contCaballo--;
          break;
      case "12":
          contRey--;
          break;
      default:
          console.error("Ha habido un error, por favor reinicia la página");
          break;
  }
};

const consoleContadores = () => {
  console.log(contAs, contDos, contTres, contCuatro, contCinco, contSeis, contSiete, contSota, contCaballo, contRey)
};

const pintarComentarios = () => {
  const elementoComentarios = document.getElementById("mensajeComentarios")

  if (
    elementoComentarios !== null &&
    elementoComentarios !== undefined &&
    elementoComentarios instanceof HTMLSpanElement
  ){
      if (puntosSumados <= 4) {
        elementoComentarios.textContent = "Has sido muy conservador";
      }
      if (puntosSumados > 4 && puntosSumados < 6) {
        elementoComentarios.textContent = "Te ha entrado el canguelo eh?";
      }
      if (puntosSumados >= 6 && puntosSumados <= 7){
        elementoComentarios.textContent = "Casi casi..."
      }
      if (puntosSumados	=== 7.5) {
        elementoComentarios.textContent = "Lo has clavado! Enhorabuena!"
      }
  }
}

const botonQueHabriaPasado = document.getElementById("queHabriaPasado");
if (
  botonQueHabriaPasado !== null &&
  botonQueHabriaPasado !== undefined &&
  botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", () => {
      const numeroAleatorio = obtenerNumeroAleatorio();
      const carta = obtenerNumeroCarta(numeroAleatorio);
      cambiarContador(carta.toString());
      actualizarContTotal()
      const urlCarta = obtenerUrlCarta(carta);
      pintarCarta(urlCarta);
      bloquearBoton(botonQueHabriaPasado, true);
    })
  };
