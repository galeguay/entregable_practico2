"use strict";

window.addEventListener('load', () => {
  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
  //document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 

})

let canvas = document.querySelector('#gameCanvas');
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext('2d');




//Creo una nueva instancia de la clase Tablero
let tablero4 = new Tablero(4, "images/4enLinea/tablero4.png", 0, 0);
tablero4.draw(ctx);
//Creo una nueva instancia de la clase Ficha
let fichaMessi = new Ficha("images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50);
let fichaRonaldo = new Ficha("images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50);

fichaMessi.draw(ctx);
fichaRonaldo.draw(ctx);


// function drawFicha(fichaMessi, fichaRonaldo){
//   if(fichaMessi != null){
//     fichaMessi.draw(ctx);
//   }
//   else if(fichaRonaldo != null)
//   fichaRonaldo.draw(ctx);
// }

let isMouseDown = false;
//Distintos eventos
function onMouseDown(event){ // Mouse apretado
  isMouseDown = true;
  let x = event.layerX;
  let y = event.layerY;
  
  let clickFicha = fichaClickeada(x, y); //coordenadas x e y dentro del canvas
  console.log(x, y);
  if(clickFicha != null){
    console.log(clickFicha);
  }
  
  console.log("Se clickeo");
  //drawGame();
}

function fichaClickeada(x, y){
  if(fichaMessi.isPointInside(x, y)) return "fichaMessi";
  else if(fichaRonaldo.isPointInside(x, y)) return "fichaRonaldo";
}
function onMouseUp(event){ // Mouse levantado
  isMouseDown = false;
}

// function onMoveMouse(event){ // Movimiento del mouse
//   if(isMouseDown && fichaClickeada != null){
//     fichaClickeada.setPosition(event.layerX, event.layerY);
//   }
//   //drawTablero();

// }

// function clearCanvas(){
//   drawFicha();
// }

// function getMousePos(event){
//   let cursorX = Math.round(event.layerX);
//   let cursorY = Math.round(event.layerY);
  
// }