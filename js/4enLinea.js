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
//Se crea una nueva instancia de la clase Tablero
/*let tablero = new Tablero(ctx, cantidadFichasParaGanar, 0, 0);
tablero.draw(ctx);
tablero.cargarFichas();*/

//Se crean nuevas instancias de la clase Ficha
/*let fichaMessi = new Ficha(ctx,"images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50, width, height);
let fichaRonaldo = new Ficha(ctx,"images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50,  width, height);
fichaMessi.draw(ctx);
fichaRonaldo.draw(ctx)*/

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
      console.log("cambia");
      fichaActiva.setPosition(posX - difX, posY - difY);
      juego.clearCanvas();
      fichaActiva.draw(ctx);
    }
  }
}
/**Cuando se desclickea el mouse*/
function onMouseUp(event){
  isMouseDown = false;
  fichaParaMover = null;
}
