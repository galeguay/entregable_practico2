"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', () => {
  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
  document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 

})

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;

let cantidadFichasParaGanar = 7;
let juego = new Juego(canvas);

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

/**Cuando se clickea el mouse*/
function onMouseDown(event){
  isMouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left; //coordenadas x e y dentro del canvas
  const y = event.clientY - rect.top;
  fichaActiva = juego.getFichaActiva();
  if (fichaActiva != null){
    if (fichaActiva.isPointInside(x, y)){
      fichaParaMover = fichaActiva;
      difX = x - fichaParaMover.getX();
      difY = y - fichaParaMover.getY();
    }
  }
}

/**Cuando se mueve el mouse mientras se esta clickeando*/
function onMoveMouse(event){
  if(isMouseDown && fichaParaMover != null){
    const rect = canvas.getBoundingClientRect();
    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;
    if(fichaParaMover != null){
      fichaActiva.setPosition(posX - difX, posY - difY);
      juego.clearCanvas();
      fichaActiva.draw(ctx);
    }
  }
}

/**Cuando se desclickea el mouse*/
function onMouseUp(event){
  isMouseDown = false;
  const rectt = canvas.getBoundingClientRect();
  const xUpCursor = event.clientX - rectt.left; //coordenadas x e y dentro del canvas
  const yUpCursor = event.clientY - rectt.top;
  let dropPoint = juego.checkDropPoint(xUpCursor, yUpCursor);
  if(dropPoint != null && fichaParaMover != null){ //Si encuentra dropPoint y fichaParaMover
    juego.clearCanvas(fichaParaMover);
    juego.insertarFicha(fichaParaMover, dropPoint);
    fichaParaMover = null;
  }
}
