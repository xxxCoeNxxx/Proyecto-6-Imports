
export interface EstadoJuego {
    puntosTotales: number;
    puntosSumados: number;
    contAs: number;
    contDos: number;
    contTres: number;
    contCuatro: number;
    contCinco: number;
    contSeis: number;
    contSiete: number;
    contSota: number;
    contCaballo: number;
    contRey: number;
    contTotal: number;
};

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

export const sumarPuntos = (estado: EstadoJuego, puntos: number) => {
    return estado.puntosTotales + puntos;
};

export const actualizarPuntuacion = (estado: EstadoJuego, puntosActuales: number) => {
    if (puntosActuales > estado.puntosTotales) {
    estado.puntosTotales = puntosActuales;
    }
};


export const actualizarContTotal = (estado: EstadoJuego) => {
    estado.contTotal = estado.contAs + estado.contDos + estado.contTres + estado.contCuatro + estado.contCinco 
    + estado.contSeis + estado.contSiete + estado.contSota + estado.contCaballo + estado.contRey;
};

// BORRAR SI DA FALLOS EN testing
export const CONTMAX: number = 4;
export const CONTTOTALMAX: number = 40;

export let estadoJuego: EstadoJuego = {
    puntosTotales: 0,
    puntosSumados: 0,
    contAs: CONTMAX,
    contDos: CONTMAX,
    contTres: CONTMAX,
    contCuatro: CONTMAX,
    contCinco: CONTMAX,
    contSeis: CONTMAX,
    contSiete: CONTMAX,
    contSota: CONTMAX,
    contCaballo: CONTMAX,
    contRey: CONTMAX,
    contTotal: CONTTOTALMAX
};

export const reiniciarContadores = (estado: EstadoJuego) => {
    estado.contAs = estado.contDos = estado.contTres = estado.contCuatro = estado.contCinco = estado.contSeis 
    = estado.contSiete = estado.contSota = estado.contCaballo = estado.contRey = CONTMAX;
    estado.contTotal = CONTTOTALMAX;
}; 

export const cambiarContador = (estado: EstadoJuego, nombreCont: string) => {
    switch(nombreCont) {
        case "1":
            estado.contAs--;
            break;
        case "2":
            estado.contDos--;
            break;
        case "3":
            estado.contTres--;
            break;
        case "4":
            estado.contCuatro--;
            break;
        case "5":
            estado.contCinco--;
            break;
        case "6":
            estado.contSeis--;
            break;
        case "7":
            estado.contSiete--;
            break;
        case "10":
            estado.contSota--;
            break;
        case "11":
            estado.contCaballo--;
            break;
        case "12":
            estado.contRey--;
            break;
        default:
            console.error("Ha habido un error, por favor reinicia la página");
            break;
    }
};

