class Partida {
    constructor(ctx, cantidadFichasParaGanar, tiempoDeJuego, tiempoDeTurno, jugador1, jugador2) {
        this.ctx = ctx;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.tiempoDeJuego = tiempoDeJuego;
        this.tiempoDeTurno = tiempoDeTurno;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.jugadorActual;
        this.fichaActiva;
        this.tablero;
        this.matrizLogica = new MatrizLogica(cantidadFichasParaGanar);
        this.iniciarPartida();
    }

    iniciarPartida() {
        console.log("iniciarPartida()");
        this.tablero = new Tablero(this.ctx, this.cantidadFichasParaGanar, 0, 0);
        this.tablero.cargarFichas(this.jugador1, this.jugador2);
        this.sortearPrimerJugador();
        //Iniciar Temporizador
        //timer.draw(ctx);
        //setTimeout(finishMatch(null), 1000 * 60 * this.tiempoDeJuego);
        this.#iniciarTurno();
    }

    #iniciarTurno() {
        console.log("iniciarTurno()");
        if (this.jugadorActual == this.jugador1)
            this.fichaActiva = this.tablero.getFichaJ1(this.jugadorActual.getFichasJugadas());
        else
            this.fichaActiva = this.tablero.getFichaJ2(this.jugadorActual.getFichasJugadas());
        //Establecer temporizador?
        //setTimeout(finishMatch(null), 1000 * this.tiempoDeTurno);
        //Habilitar ficha al jugadorActual
        //cuando suelte la ficha en un dropPoint
    }

    terminarPartida(jugadorActual) {
        console.log("terminarPartida()");
        if (!jugadorActual) {
            if (this.matrizLogica.esGanador(jugadorActual)) {
                //dibujar pantalla ganador
            } else {
                //mostrar motivo por el cual finalizó la partida
            }
            //mostrar botones de reinicio rapido o volver a menu
        }
    }

    sortearPrimerJugador() {
        console.log("sortearPrimerJugador()");
        let primerJugador = Math.floor(Math.random() * 2.0) + 1;
        if (primerJugador == 1)
            this.jugadorActual = this.jugador1;
        else
            this.jugadorActual = this.jugador2;
    }

    turnoSiguiente() {
        console.log("turnosiguiente()");
        if (this.jugador1 == this.jugadorActual)
            this.jugadorActual = this.jugador2;
        else
            this.jugadorActual = this.jugador1;
        this.#iniciarTurno();
    }

    clearCanvas(width, height) {
        this.tablero.clearCanvas(width, height);
    }

    checkDropPoint(xUp, yUp) {
        return this.tablero.checkDropPoint(xUp, yUp);
    }

    insertarFicha(fichaParaMover, dropPoint) {
        console.log("insertarFicha()");
        this.tablero.insertarFicha(fichaParaMover, dropPoint);
        this.jugadorActual.jugoFicha();
        this.turnoSiguiente();
    }

    tablero() {
        return this.tablero;
    }

    getFichaActiva() {
        return this.fichaActiva;
    }

}