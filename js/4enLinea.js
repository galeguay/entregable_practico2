"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', function(){

  document.getElementById('timer').style.display = "none";
  let button4 = document.querySelector('#button4');
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
    //let cantidadFichasParaGanar = 5;
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
    //let cantidadFichasParaGanar = 6;
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
    //let cantidadFichasParaGanar = 7;
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


