"use strict";
/** @type {CanvasRenderingContext2D} */


/**Obtiene color elegido por el jugador */
document.getElementById("colorMessi").addEventListener("input", function() {
  console.log(this.value);
});

let cantidadFichasParaGanar = 7;
let timer = document.querySelector('#timer');
let juego = new Juego(canvas, timer);

/**Obtiene la posicion del cursor*/
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
}

let isMouseDown = false;
let fichaActiva;
let fichaParaMover;
let difX;
let difY;
let fichaJugadorEsperando;


