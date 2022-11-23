"use strict";
/** @type {CanvasRenderingContext2D} */

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;
let timer = document.querySelector('#timer');
let juego = new Juego(canvas, timer);

let isMouseDown = false;
let fichaActiva;
let fichaParaMover;
let difX;
let difY;
let fichaJugadorEsperando;

window.addEventListener('load', function () {
    document.getElementById('timer').style.display = "none";
    let button = document.querySelector('#button4');
    button = document.querySelector('#button4');

    console.log("cargarInterfazDeAjustesDePartida()");
    document.getElementById('timer').style.display = "none";
    let button4 = document.querySelector('#button4');
    button4.addEventListener('click', () => {
        ocultarInterfazDeAjusteDePartida(4);
    });
    let button5 = document.querySelector('#button5');
    button5.addEventListener('click', () => {
        ocultarInterfazDeAjusteDePartida(5);
    });
    let button6 = document.querySelector('#button6');
    button6.addEventListener('click', () => {
        ocultarInterfazDeAjusteDePartida(6);
    });
    let button7 = document.querySelector('#button7');
    button7.addEventListener('click', () => {
        ocultarInterfazDeAjusteDePartida(7);
    });
    document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
    document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
    document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 
});


function ocultarInterfazDeAjusteDePartida(cantidadFichasParaGanar) {
    document.getElementById('titulo').style.display = "none";
    document.getElementById('button4').style.display = "none";
    document.getElementById('button5').style.display = "none";
    document.getElementById('button6').style.display = "none";
    document.getElementById('button7').style.display = "none";
    document.getElementById('nombreJugador1').style.display = "none";
    document.getElementById('nombreJugador2').style.display = "none";
    document.getElementById('elegirFicha').style.display = "none";
    document.getElementById('messi').style.display = "none";
    document.getElementById('ronaldo').style.display = "none";
    document.getElementById('elegirColor').style.display = "none";
    document.getElementById('colorMessi').style.display = "none";
    document.getElementById('colorRonaldo').style.display = "none";
    document.getElementById('timer').style.display = "flex";
    let nombreJugador1;
    document.getElementById("nombreJugador1").addEventListener("input", function () {
        nombreJugador1 = this.value;
    });
    let nombreJugador2;
    document.getElementById("nombreJugador2").addEventListener("input", function () {
        nombreJugador2 = this.value;
    });
    juego.cargarPartida(nombreJugador1, nombreJugador2, cantidadFichasParaGanar);
}

/**Obtiene color elegido por el jugador */
document.getElementById("colorMessi").addEventListener("input", function () {
    console.log(this.value);
});

/**Obtiene la posicion del cursor*/
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
}


/**Cuando se clickea el mouse*/
function onMouseDown(event) {
    if (juego.isPlaying) {
        isMouseDown = true;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left; //coordenadas x e y dentro del canvas
        const y = event.clientY - rect.top;
        fichaActiva = juego.getFichaActiva();
        if (fichaActiva != null) {
            if (fichaActiva.isPointInside(x, y)) {
                fichaParaMover = fichaActiva;
                difX = x - fichaParaMover.getX();
                difY = y - fichaParaMover.getY();
            }
        }
    }
}

/**Cuando se mueve el mouse mientras se esta clickeando*/
function onMoveMouse(event) {
    if (juego.isPlaying) {
        if (isMouseDown && fichaParaMover != null) {
            const rect = canvas.getBoundingClientRect();
            let posX = event.clientX - rect.left;
            let posY = event.clientY - rect.top;
            if (fichaParaMover != null) {
                fichaActiva.setPosition(posX - difX, posY - difY);
                juego.clearCanvas();
                fichaActiva.draw(ctx);
            }
        }
    }
}

/**Cuando se desclickea el mouse*/
function onMouseUp(event) {
    if (juego.isPlaying) {
        isMouseDown = false;
        const rectt = canvas.getBoundingClientRect();
        const xUpCursor = event.clientX - rectt.left; //coordenadas x e y dentro del canvas
        const yUpCursor = event.clientY - rectt.top;
        let columna = juego.getColumna(xUpCursor, yUpCursor);
        if (columna != null && fichaParaMover != null) { //Si encuentra dropPoint y fichaParaMover
            juego.clearCanvas(fichaParaMover);
            juego.insertarFicha(fichaParaMover, columna);
        }
        fichaParaMover = null;
    }
}