"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', function(){

  document.getElementById('timer').style.display = "none";
  let button4 = document.querySelector('#button4');
  button4 = document.querySelector('#button4');
 /*button = document.querySelector('#button5');
  button = document.querySelector('#button6');
  button = document.querySelector('#button7');*/
  button4.addEventListener('click', () =>{
    //let cantidadFichasParaGanar = 4;
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
    //let juego = new Juego(canvas, timer);
  })
  button5.addEventListener('click', () =>{
    let cantidadFichasParaGanar = 5;
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
    //let juego = new Juego(canvas, timer);
  })
  button6.addEventListener('click', () =>{
    let cantidadFichasParaGanar = 6;
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
    //let juego = new Juego(canvas, timer);
  })
  button7.addEventListener('click', () =>{
    let cantidadFichasParaGanar = 7;
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
    //let juego = new Juego(canvas, timer);
  });
  
  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
  document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 
  
});

/**Obtiene color elegido por el jugador */
document.getElementById("colorMessi").addEventListener("input", function() {
  colorMessi = this.value;

});

document.getElementById("colorRonaldo").addEventListener("input", function() {
  colorRonaldo = this.value;

});

document.getElementById("nombreJugador1").addEventListener("input", function() {
  let nombreJugador1 = this.value;
  nombreJugador1.configurarPartida(nombreJugador1); //Se lo tengo que pasar al configurar partida (juego)
});

document.getElementById("nombreJugador2").addEventListener("input", function() {
  let nombreJugador2 = this.value;
  nombreJugador2.configurarPartida(nombreJugador2); //Se lo tengo que pasar al configurar partida (juego)
});


let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;
//let cantidadFichasParaGanar = 7;
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
