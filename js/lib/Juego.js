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
        this.isPlaying = false;
    }

    cargarPartida(nombreJugador1, nombreJugador2, cantidadFichasParaGanar) {
        console.log("cargarPartida4enLinea()");
        if (nombreJugador1 == null)
            nombreJugador1 = "Jugador1";
        if (nombreJugador1 == "")
            nombreJugador1 = "Jugador1";
        if (nombreJugador2 == null)
            nombreJugador2 = "Jugador2";
        if (nombreJugador2 == "")
            nombreJugador2 = "Jugador2";
        let jugador1 = new Jugador(nombreJugador1, "#FFFFFF", new Ficha(this.ctx, "images/4enLinea/fichaMessi.png", "#FF0000", this.defaultXFichaJ1, this.defaultYFichas, 50, 50));
        let jugador2 = new Jugador(nombreJugador2, "#FFFFFF", new Ficha(this.ctx, "images/4enLinea/fichaRonaldo.png", "#FF0000", this.defaultXFichaJ2, this.defaultYFichas, 50, 50));
        this.partida = new Partida(this.ctx, cantidadFichasParaGanar, 5, 30, jugador1, jugador2, this.timer);
        this.isPlaying = true;
    }

    fichaClickeada(x, y) {
        console.log("fichaClickeada()");
        this.partida.fichaClickeada();
        if (fichaMessi.isPointInside(x, y)) return fichaMessi;
        else if (fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
    }

    getFichaActiva() {
        return this.partida.getFichaActiva();
    }

    clearCanvas() {
        this.partida.clearCanvas(width, height);
    }

    getColumna(xUp, yUp) {
        return this.partida.getColumna(xUp, yUp);
    }

    insertarFicha(fichaParaMover, columna) {
        this.partida.insertarFicha(fichaParaMover, columna);
    }

    isPlaying(){
        return this.isPlaying;
    }
}