class Juego {
    constructor(canvas) {
        console.log("constructorJuego()");
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.getBoundingClientRect().height;
        this.partida;
        this.timer = document.querySelector('#timer');
        this.currentX;
        this.currentY;
        this.defaultXFichaJ1 = 70;
        this.defaultXFichaJ2 = 773;
        this.defaultYFichas = 175;
        this.cargarInterfazDeAjustesDePartida();
        //this.configurarPartida();
        //this.mouseEvents();
    }

    cargarInterfazDeAjustesDePartida(){
        console.log("cargarInterfazDeAjustesDePartida()");
        window.addEventListener('load', function(){
            document.getElementById('timer').style.display = "none";
            let button = document.querySelector('#button4');
            button = document.querySelector('#button4');
            /*button = document.querySelector('#button5');
            button = document.querySelector('#button6');
            button = document.querySelector('#button7');*/
            button.addEventListener('click', () =>{
                document.querySelector('#titulo').style.display = "none";
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
            });
            document.addEventListener('mousedown', this.onMouseDown); // Inicia arrastrada
            document.addEventListener('mouseup', this.onMouseUp); // Detiene arrastrada
            document.addEventListener('mousemove', this.onMoveMouse); // Movimiento del mouse 
        });
    }

/**Cuando se clickea el mouse*/
    onMouseDown(event){
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
    onMoveMouse(event){
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
    onMouseUp(event){
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

    cargarPartida(nombreJugador1, nombreJugador2, cantidadFichasParaGanar) {
        console.log("cargarPartida4enLinea()");
        if(nombreJugador1 == "")
            nombreJugador1 = "Jugador1";
        if(nombreJugador2 == "")
            nombreJugador1 = "Jugador2";
        let jugador1 = new Jugador(nombreJugador1, "#FFFFFF", new Ficha(this.ctx,"images/4enLinea/fichaMessi.png", "#FF0000", this.defaultXFichaJ1, this.defaultYFichas, 50, 50));
        let jugador2 = new Jugador(nombreJugador2, "#FFFFFF", new Ficha(this.ctx,"images/4enLinea/fichaRonaldo.png", "#FF0000", this.defaultXFichaJ2, this.defaultYFichas, 50, 50));
        this.partida = new Partida(this.ctx, cantidadFichasParaGanar, 5, 30, jugador1, jugador2, this.timer);
    }

    fichaClickeada(x, y) {
        console.log("fichaClickeada()");
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