"use strict";

window.addEventListener('load', () => {
  document.addEventListener('mousedown', drawFichaMessi);

})

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');


function drawBoard() {
  var tablero4 = new Image();
  tablero4.onload = function () {
    ctx.drawImage(tablero4, 100, 100);
  };
  tablero4.src = "images/4enLinea/tablero4enLinea.jpg";
}
drawBoard();

let cursorX = 0;
let cursorY = 0;

function drawFichaMessi(event) {
  getMousePos(event);
  var fichaMessi = new Image();
  fichaMessi.onload = function () {
    ctx.drawImage(fichaMessi, cursorX, cursorY);
  };
  fichaMessi.src = "images/4enLinea/fichaMessi.png";
  console.log(cursorX);
  console.log(cursorY);
}

function getMousePos(event){
  let cursorX = Math.round(event.offsetX);
  let cursorY = Math.round(event.offsetY);
  console.log(cursorX);
  console.log(cursorY);
}