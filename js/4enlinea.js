"use strict";
/** @type {CanvasRenderingContext2D} */

window.addEventListener('load', () => {
  document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
  document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
  document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse 

})

let canvas = document.querySelector('#gameCanvas');
let ctx = canvas.getContext('2d');
let widht = canvas.getBoundingClientRect().width;
let height = canvas.getBoundingClientRect().height;


let cantidadFichasParaGanar = 7;
//Se crea una nueva instancia de la clase Tablero
let tablero = new Tablero(cantidadFichasParaGanar, 0, 0);
tablero.draw(ctx);

//Se crean nuevas instancias de la clase Ficha
let fichaMessi = new Ficha("images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50, widht, height);
let fichaRonaldo = new Ficha("images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50,  widht, height);
fichaMessi.draw(ctx);
fichaRonaldo.draw(ctx);



/**Obtiene la posicion del cursor*/
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
}


let isMouseDown = false;
let fichaParaMover;
let difX;
let difY;

/**Cuando se clickea el mouse*/
function onMouseDown(event){
  isMouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left; //coordenadas x e y dentro del canvas
  const y = event.clientY - rect.top;
  console.log(x+" "+ y);
  let clickFicha = fichaClickeada(x, y);
  if(fichaClickeada(x, y) != null){
    fichaParaMover = clickFicha;
    difX = x - fichaParaMover.getPosX();
    difY = y - fichaParaMover.getPosY();
  }
}
/**Cuando se mueve el mouse mientras se esta clickeando*/
function onMoveMouse(event){ 
  if(isMouseDown && fichaParaMover != null){
    const rect = canvas.getBoundingClientRect();
    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;
    if(fichaParaMover != null){
      fichaParaMover.setPosition(posX - difX, posY - difY);
      fichaParaMover.draw(ctx);
      //clearCanvas(fichaParaMover);
    }
  }
}
/**Cuando se desclickea el mouse*/
function onMouseUp(event){
  isMouseDown = false;
  fichaParaMover = null;
}
function fichaClickeada(x, y){
  if(fichaMessi.isPointInside(x, y)) return fichaMessi;
  else if(fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
}


// function clearCanvas(fichaParaDibujar){
//   ctx.clearRect(0, 0, widht, height);
//   tablero.draw(ctx);
// }

