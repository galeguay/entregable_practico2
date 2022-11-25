"use strict";
/** @type {CanvasRenderingContext2D} */

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;
let timer = document.getElementById('timer');
let juego = new Juego(canvas);

let isMouseDown = false;
let fichaActiva;
let fichaParaMover;
let difX;
let difY;
let fichaJugadorEsperando;
let nombreJugador1;
let nombreJugador2;

window.addEventListener('load', function () {
    console.log("cargarInterfazDeAjustesDePartida()");
    timer.classList.toggle('hide');
    document.getElementById('turnoJugador1').classList.toggle('hide');
    document.getElementById('turnoJugador2').classList.toggle('hide');
    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
        toggleInterfazDeAjusteDePartida();
        toggleInterfazFinalDePartida();
        resetInterfaz();
        juego.clearAll();
    });
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.addEventListener('click', () => {
        toggleInterfazFinalDePartida();
        resetInterfaz();
        juego.clearAll();
        juego.reiniciarPartida();
    });
    let button4 = document.querySelector('#button4');
    button4.addEventListener('click', () => {
        toggleInterfazDeAjusteDePartida();
        juego.cargarPartida(nombreJugador1, nombreJugador2, 4);
    });
    let button5 = document.querySelector('#button5');
    button5.addEventListener('click', () => {
        toggleInterfazDeAjusteDePartida();
        juego.cargarPartida(nombreJugador1, nombreJugador2, 5);
    });
    let button6 = document.querySelector('#button6');
    button6.addEventListener('click', () => {
        toggleInterfazDeAjusteDePartida();
        juego.cargarPartida(nombreJugador1, nombreJugador2, 6);
    });
    let button7 = document.querySelector('#button7');
    button7.addEventListener('click', () => {
        toggleInterfazDeAjusteDePartida();
        juego.cargarPartida(nombreJugador1, nombreJugador2, 7);
    });

    document.getElementById("inputNombreJugador1").addEventListener("input", function () {
        nombreJugador1 = this.value;
    });
    document.getElementById("inputNombreJugador2").addEventListener("input", function () {
        nombreJugador2 = this.value;
    });

    document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
    document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
    document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse
});

function resetInterfaz(){
    document.getElementById('turnoJugador1').classList.remove('hide');
    document.getElementById('turnoJugador2').classList.remove('hide');
    document.getElementById('terminoTiempoReglamentario').classList.remove('hide');
    document.getElementById('ganador1').classList.remove('hide');
    document.getElementById('ganador2').classList.remove('hide');
    document.getElementById('turnoJugador1').classList.toggle('hide');
    document.getElementById('turnoJugador2').classList.toggle('hide');
}

function toggleInterfazFinalDePartida(){
    document.getElementById('divFin').classList.toggle('hide');
}

function toggleInterfazDeAjusteDePartida() {
    document.getElementById('titulo').classList.toggle('hide');
    document.getElementById('button4').classList.toggle('hide');
    document.getElementById('button5').classList.toggle('hide');
    document.getElementById('button6').classList.toggle('hide');
    document.getElementById('button7').classList.toggle('hide');
    document.getElementById('inputNombreJugador1').classList.toggle('hide');
    document.getElementById('inputNombreJugador2').classList.toggle('hide');
    document.getElementById('messi').classList.toggle('hide');
    document.getElementById('ronaldo').classList.toggle('hide');
    document.getElementById('elegirColor').classList.toggle('hide');
    document.getElementById('colorMessi').classList.toggle('hide');
    document.getElementById('colorRonaldo').classList.toggle('hide');
}

/**Obtiene color elegido por el jugador */
document.getElementById("colorMessi").addEventListener("input", function () {
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