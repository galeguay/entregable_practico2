class Juego {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.getBoundingClientRect().height;
        this.partida;
        this.currentX;
        this.currentY;
        this.configurarPartida();
        //this.mouseEvents();
    }

    configurarPartida(){
        let jugador1 = new Jugador("Jugador1", "#FFFFFF", new Ficha(this.ctx,"images/4enLinea/fichaMessi.png", "#FF0000", 10, 500, 50, 50));
        let jugador2 = new Jugador("Jugador2", "#FFFFFF", new Ficha(this.ctx,"images/4enLinea/fichaRonaldo.png", "#FF0000", 800, 500, 50, 50));
        this.cargarPartida4enLinea(jugador1, jugador2);
    }

    cargarPartida4enLinea(jugador1, jugador2) {
        this.partida = new Partida(this.ctx, 4, 5, 30, jugador1, jugador2);
    }

    fichaClickeada(x, y) {
        this.partida.fichaClickeada();
        if (fichaMessi.isPointInside(x, y)) return fichaMessi;
        else if (fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
    }

    getFichaActiva(){
        return this.partida.getFichaActiva();
    }

    clearCanvas(){
        this.partida.clearCanvas(width, height);
    }

    getColumna(xUp, yUp){
        return this.partida.getColumna(xUp, yUp);
    }

    insertarFicha(fichaParaMover, columna){
        this.partida.insertarFicha(fichaParaMover, columna);
    }

/*
    mouseEvents(){
        window.addEventListener('load', () => {
            document.addEventListener('mousedown', onMouseDown); // Inicia arrastrada
            document.addEventListener('mouseup', onMouseUp); // Detiene arrastrada
            document.addEventListener('mousemove', onMoveMouse); // Movimiento del mouse
        });

        let fichaMessi = new Ficha(this.ctx,"images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50, this.width, this.height);
        let fichaRonaldo = new Ficha(this.ctx,"images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50,  this.width, this.height);
        //fichaMessi.draw(this.ctx);
        //fichaRonaldo.draw(this.ctx);

        let isMouseDown = false;
        let fichaParaMover;
        let difX;
        let difY;

        /**Obtiene la posicion del cursor*/
        /*function getCursorPosition(canvas, event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
        }*/

        /**Cuando se clickea el mouse*/
        /*function onMouseDown(event){
            isMouseDown = true;
            const rect = this.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left; //coordenadas x e y dentro del canvas
            const y = event.clientY - rect.top;
            let fichaParaMover = fichaClickeada(x, y);
            if(fichaParaMover != null){
                //fichaParaMover = clickFicha;
                difX = x - fichaParaMover.getPosX();
                difY = y - fichaParaMover.getPosY();
            }
        }
*/
        /**Cuando se mueve el mouse mientras se esta clickeando*/
        /*function onMoveMouse(event){
            if(isMouseDown && fichaParaMover != null){
            const rect = this.canvas.getBoundingClientRect();
            let posX = event.clientX - rect.left;
            let posY = event.clientY - rect.top;
            if(fichaParaMover != null){
                fichaParaMover.setPosition(posX - difX, posY - difY);
                this.partida.tablero().clearCanvas();
                fichaParaMover.draw(ctx);
            }
            }
        }
*/
        /**Cuando se desclickea el mouse*/
        /*function onMouseUp(event){
            isMouseDown = false;
            fichaParaMover = null;
        }
        function fichaClickeada(x, y){
            if(fichaMessi.isPointInside(x, y)) return fichaMessi;
            else if(fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
        }
    }
*/
}