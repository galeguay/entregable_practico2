class Partida {
    constructor(ctx, cantidadFichasParaGanar, minutosDeJuego, segundosDeTurno, jugador1, jugador2, timer) {
        this.ctx = ctx;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.minutosDeJuego = minutosDeJuego;
        this.segundosDeTurno = segundosDeTurno;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.jugadorActual;
        this.timer = timer;
        this.fichaActiva;
        this.tablero;
        this.matrizLogica = new MatrizLogica(cantidadFichasParaGanar);
        this.iniciarPartida();
    }

    iniciarPartida() {
        console.log("partida.iniciarPartida()");
        this.tablero = new Tablero(this.ctx, this.cantidadFichasParaGanar);
        this.tablero.cargarFichas(this.jugador1, this.jugador2);
        this.sortearPrimerJugador();
        //Iniciar Temporizador
        this.startTimer(this.minutosDeJuego * 60, this.timer);
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


    insertarFicha(fichaParaMover, columna) {
        console.log("insertarFicha()");
        let numJugador = 0;
        if (this.jugadorActual == this.jugador1)
            numJugador = 1;
        else
            numJugador = 2;
        let row = this.matrizLogica.insertarFicha(numJugador, columna);
        let columnaCompleta = this.matrizLogica.esColumnaCompleta(columna);
        this.tablero.insertarFicha(fichaParaMover, columna, row);
        this.jugadorActual.jugoFicha();
        if (this.matrizLogica.esGanador(numJugador))
            this.terminarPartida(this.jugadorActual);
        else{
            if (columnaCompleta)
                this.tablero.disableDropPoint(columna);
            this.turnoSiguiente();
        }
    }

    terminarPartida(jugadorActual) {
        console.log("terminarPartida()");
        if (jugadorActual) {
            console.log("Gano jugador");
            if (this.matrizLogica.esGanador(jugadorActual)) {
                /*if(this.jugador1) */document.getElementById('ganador1').style.display = "block";
                //else if(this.jugador2) document.getElementById('ganador2').style.display = "block";
            } else {
                //Se termino el tiempo
                //document.getElementById('terminoTiempoReglamentario').style.display = "block";
                //mostrar motivo por el cual finalizó la partida
            }
            //mostrar botones de reinicio rapido o volver a menu
            console.log("Botones");
            document.getElementById('reiniciar').style.display = "block";
            document.getElementById('menu').style.display = "block";
        }
    }
    /*
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
    }*/

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

    getColumna(xUp, yUp) {
        return this.tablero.getColumna(xUp, yUp);
    }

    tablero() {
        return this.tablero;
    }

    getFichaActiva() {
        return this.fichaActiva;
    }

    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
                this.terminarPartida();
            }
        }, 1000);
    }
}