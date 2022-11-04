"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', () => {
  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
})

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');

//Se crea una nueva instancia de la clase Tablero
let tablero4 = new Tablero(4, "images/4enLinea/tablero4.png", 0, 0);
tablero4.draw(ctx);

//Se crea una nueva instancia de la clase Ficha
let fichaMessi = new Ficha("images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50);
let fichaRonaldo = new Ficha("images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50);

fichaMessi.draw(ctx);
fichaRonaldo.draw(ctx);

let isMouseDown = false;

function onMouseDown(event){ // Mouse apretado
  isMouseDown = true;
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(x, y);
  console.log(fichaClickeada(x,y));
}

function fichaClickeada(x, y){
  if(fichaMessi.isPointInside(x, y))
    return "fichaMessi";
  else if(fichaRonaldo.isPointInside(x, y)) 
    return "fichaRonaldo";
}

function onMouseUp(event){
  isMouseDown = false;
}