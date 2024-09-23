export let puntosTotales: number = 0;
export let puntosSumados: number = 0;

export const CONTMAX: number = 4;
export const CONTTOTALMAX: number = 40;
export let contAs: number = 4;
export let contDos: number = 4;
export let contTres: number = 4;
export let contCuatro: number = 4;
export let contCinco: number = 4;
export let contSeis: number = 4;
export let contSiete: number = 4;
export let contSota: number = 4;
export let contCaballo: number = 4;
export let contRey: number = 4;
export let contTotal: number = 40;

export const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
};

export const obtenerNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};
  
export const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
};

export const sumarPuntos = (puntos: number) => {
    return puntosTotales + puntos;
};

export const actualizarPuntuacion = (puntosActuales: number) => {
    if (puntosActuales > puntosTotales) {
        puntosTotales = puntosActuales;
    }
};

export const reiniciarContadores = () => {
    contAs = contDos = contTres = contCuatro = contCinco = contSeis 
        = contSiete = contSota = contCaballo = contRey = CONTMAX;
    contTotal = CONTTOTALMAX;
}; 

export const actualizarContTotal = () => {
    contTotal = contAs + contDos + contTres + contCuatro + contCinco 
        + contSeis + contSiete + contSota + contCaballo + contRey;
};

export const cambiarContador = (nombreCont: string) => {
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