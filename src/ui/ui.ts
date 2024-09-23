export const pintarCarta = (urlCarta: string) => {
    const elementoImagen = document.getElementById("imgCarta");
    if (
        elementoImagen !== null &&
        elementoImagen !== undefined &&
        elementoImagen instanceof HTMLImageElement) {
            elementoImagen.src = urlCarta;
    }
};

export const pintarPuntuacion = (puntuacion: number) => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (
        elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoPuntuacion instanceof HTMLSpanElement) {
            elementoPuntuacion.innerText = `${puntuacion}`;
    }
};

export const pintarMejorPuntuacion = (mejorPuntuacion: number) => {
    const elementoMejorPuntuacion = document.getElementById("mejorPuntuacion")
    if (
        elementoMejorPuntuacion !== null &&
        elementoMejorPuntuacion !== undefined &&
        elementoMejorPuntuacion instanceof HTMLSpanElement) {
            elementoMejorPuntuacion.innerText = `${mejorPuntuacion}`;
    }
};

export const pintarMensajeFinal = (mensajeFinal: string) => {
    const elementoMensajeFinal = document.getElementById("mensajeFinal")
    if (
        elementoMensajeFinal !== null &&
        elementoMensajeFinal !== undefined &&
        elementoMensajeFinal instanceof HTMLSpanElement) {
            elementoMensajeFinal.innerText = `${mensajeFinal}`;
    }
};

export const bloquearBoton = (boton: HTMLButtonElement, elegirToF: boolean): void => {
    boton.disabled = elegirToF;
};

export const pintarRestantes = (mensajeRestantes: string) => {
    const elementoMensajeRestantes = document.getElementById("restantes")
    if (
        elementoMensajeRestantes !== null &&
        elementoMensajeRestantes !== undefined &&
        elementoMensajeRestantes instanceof HTMLSpanElement) {
            elementoMensajeRestantes.innerText = `${mensajeRestantes}`;
    }
};

export const pintarComentarios = (puntosSumados: number) => {
    const elementoComentarios = document.getElementById("mensajeComentarios")

    if (
        elementoComentarios !== null &&
        elementoComentarios !== undefined &&
        elementoComentarios instanceof HTMLSpanElement){
            if (puntosSumados === 0) {
                elementoComentarios.textContent = "";
            }
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
};
