"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', function(){
  document.getElementById('timer').style.display = "none";
  let button = document.querySelector('#button4');
  button = document.querySelector('#button4');
  /*button = document.querySelector('#button5');
  button = document.querySelector('#button6');
  button = document.querySelector('#button7');*/
  button.addEventListener('click', () =>{
    document.querySelector('#titulo').style.display = "none";
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
  });

  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
  document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 

});

/**Obtiene color elegido por el jugador */
document.getElementById("colorMessi").addEventListener("input", function() {
  console.log(this.value);
});

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;
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
  let columna = juego.getColumna(xUpCursor, yUpCursor);
  if(columna != null && fichaParaMover != null){ //Si encuentra dropPoint y fichaParaMover
    juego.clearCanvas(fichaParaMover);
    juego.insertarFicha(fichaParaMover, columna);
  }
  fichaParaMover = null;
}
