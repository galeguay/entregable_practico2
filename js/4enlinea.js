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


//Se crea una nueva instancia de la clase Tablero
let tablero4 = new Tablero(4, "images/4enLinea/tablero4.png", 0, 0);

//Creo una nueva instancia de la clase Ficha
let fichaMessi = new Ficha("images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50, widht, height);
let fichaRonaldo = new Ficha("images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50,  widht, height);

tablero4.draw(ctx);
fichaMessi.draw(ctx);
fichaRonaldo.draw(ctx);



/**Obtiene la posicion del cursor*/
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  //console.log("x: " + x + " y: " + y);
}


let isMouseDown = false;
let fichaParaMover;

/**Cuando se clickea el mouse */
function onMouseDown(event){
  isMouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left; //coordenadas x e y dentro del canvas
  const y = event.clientY - rect.top;

  let clickFicha = fichaClickeada(x, y); 
  if(clickFicha != null){
    fichaParaMover = clickFicha;
  }
}

/**Cuando se mueve el mouse mientras se esta clickeando*/
function onMoveMouse(event){ 
  if(isMouseDown && fichaParaMover != null){
    const rect = canvas.getBoundingClientRect();
    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;
    if(fichaParaMover != null){
      fichaParaMover.setPosition(posX, posY);
      fichaParaMover.draw(ctx);
    }
    
  }
}

function onMouseUp(event){ // Mouse levantado
  isMouseDown = false;
  fichaParaMover = null;
}

function fichaClickeada(x, y){
  if(fichaMessi.isPointInside(x, y)) return fichaMessi;
  else if(fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
}


/*function drawFicha(fichaParaMover){
  clearCanvas();
  if(fichaParaMover === fichaMessi) fichaMessi.draw(ctx);
  else if (fichaParaMover === fichaRonaldo) fichaRonaldo.draw(ctx);
}
drawFicha();*/

/*function clearCanvas(){
  ctx.clearRect(0, 0, widht, height);
}*/

