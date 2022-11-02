"use strict";

window.addEventListener('load', () => {
  document.addEventListener('mousedown', startDragged); // Inicia arrastrada
  document.addEventListener('mouseup', stopDragged); // Detiene arrastrada
  document.addEventListener('mousemove', moveMouse); // Movimiento del mouse 

})

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let drag = false;

function drawBoard() {
  let tablero4 = new Image();
  tablero4.onload = function () {
    ctx.drawImage(tablero4, 100, 100);
  };
  tablero4.src = 'images/4enLinea/tablero4enLinea.jpg';
}
drawBoard();


function startDragged(event){ // Inicia arrastrada
  drag = true;
  
  let cursorX = Math.round(event.offsetX);
  let cursorY = Math.round(event.offsetY);
  //getMousePos(event);
  console.log("Inicia arrastrada");
  console.log(cursorX);
  console.log(cursorY);
}

function stopDragged(event){ // Detiene arrastrada
  drag = false;
  //getMousePos(event);
  let cursorX = Math.round(event.offsetX);
  let cursorY = Math.round(event.offsetY);

  console.log("Detiene arrastrada");
  console.log(cursorX);
  console.log(cursorY);
}

function moveMouse(event){ // Movimiento del mouse
  

}




let cursorX = 0;
let cursorY = 0;

function drawFichaMessi() {
  let fichaMessi = new Image();
  fichaMessi.onload = function () {
    ctx.drawImage(fichaMessi, 0, 0);
  };
  fichaMessi.src = 'images/4enLinea/fichaMessi.png';
}
drawFichaMessi();

function getMousePos(event){
  let cursorX = Math.round(event.offsetX);
  let cursorY = Math.round(event.offsetY);
}




