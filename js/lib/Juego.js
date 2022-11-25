class Juego {
    constructor(canvas) {
        console.log("constructorJuego()");
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.getBoundingClientRect().height;
        this.partida;
        this.currentX;
        this.currentY;
        this.defaultXFichaJ1 = 70;
        this.defaultXFichaJ2 = 773;
        this.defaultYFichas = 175;
        this.datosDePartida = new Array();
    }

    cargarPartida(nombreJugador1, nombreJugador2, cantidadFichasParaGanar) {
        console.log("cargarPartida4enLinea()");
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        if (nombreJugador1 == null)
            nombreJugador1 = "Jugador 1";
        if (nombreJugador1 == "")
            nombreJugador1 = "Jugador 1";
        if (nombreJugador2 == null)
            nombreJugador2 = "Jugador 2";
        if (nombreJugador2 == "")
            nombreJugador2 = "Jugador 2";
        let jugador1 = new Jugador(nombreJugador1, "#FFFFFF", new Ficha(this.ctx, "images/4enLinea/fichaMessi.png", "#FF0000", this.defaultXFichaJ1, this.defaultYFichas, 50, 50));
        let jugador2 = new Jugador(nombreJugador2, "#FFFFFF", new Ficha(this.ctx, "images/4enLinea/fichaRonaldo.png", "#FF0000", this.defaultXFichaJ2, this.defaultYFichas, 50, 50));
        this.datosDePartida = [cantidadFichasParaGanar, 5, jugador1, jugador2];
        this.partida = new Partida(this.ctx, cantidadFichasParaGanar, 5, jugador1, jugador2);
    }

    clearAll(){
        this.ctx.clearRect(0, 0, width, height);
    }

    fichaClickeada(x, y) {
        this.partida.fichaClickeada();
        if (fichaMessi.isPointInside(x, y)) return fichaMessi;
        else if (fichaRonaldo.isPointInside(x, y)) return fichaRonaldo;
    }

    getFichaActiva() {
        if (this.partida != null)
            return this.partida.getFichaActiva();
        else
            return null;
    }

    clearCanvas() {
        this.partida.clearCanvas(width, height);
    }

    getColumna(xUp, yUp) {
        if (this.partida != null)
            return this.partida.getColumna(xUp, yUp);
        else
            return null;
    }

    insertarFicha(fichaParaMover, columna) {
        this.partida.insertarFicha(fichaParaMover, columna);
    }

    isPlaying(){
        if (this.partida != null)
            return this.partida.isPlaying;
        else
            return false;
    }

    reiniciarPartida(){
        let jugador1 = this.datosDePartida[2];
        let jugador2 = this.datosDePartida[3];
        jugador1.resetFichasJugadas();
        jugador2.resetFichasJugadas();
        this.partida = new Partida(this.ctx, this.datosDePartida[0], this.datosDePartida[1], jugador1, jugador2);
    }
}