class Partida {
    constructor(ctx, cantidadFichasParaGanar, minutosDeJuego, jugador1, jugador2) {
        this.ctx = ctx;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.minutosDeJuego = minutosDeJuego;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.jugadorActual;
        this.timer = document.getElementById('timer');
        this.isPlaying = false;
        this.fichaActiva;
        this.tablero;
        this.intervalTimer;
        this.matrizLogica = new MatrizLogica(cantidadFichasParaGanar);
        this.iniciarPartida();
    }

    iniciarPartida() {
        console.log("iniciarPartida()");
        this.isPlaying = true;
        this.tablero = new Tablero(this.ctx, this.cantidadFichasParaGanar);
        this.tablero.cargarFichas(this.jugador1, this.jugador2);
        this.sortearPrimerJugador();

        //Iniciar Temporizador
        this.startTimer(this.minutosDeJuego * 60, this.timer);
        setTimeout(()=>{
            this.timer.classList.toggle('hide');
        }, 1000)
        this.#iniciarTurno();
    }

    #iniciarTurno() {
        if (this.jugadorActual == this.jugador1)
            this.fichaActiva = this.tablero.getFichaJ1(this.jugadorActual.getFichasJugadas());
        else
            this.fichaActiva = this.tablero.getFichaJ2(this.jugadorActual.getFichasJugadas());
    }


    insertarFicha(fichaParaMover, columna) {
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
            this.terminarPartida(numJugador);
        else{
            if (columnaCompleta)
                this.tablero.disableDropPoint(columna);
            this.turnoSiguiente();
        }
    }

    terminarPartida(numJugador) {
        console.log("terminarPartida()");
        this.isPlaying = false;
        this.fichaActiva = null;
        clearInterval(this.intervalTimer);
        this.timer.classList.toggle('hide');
        let textGanador1 = document.getElementById('ganador1');
        let textGanador2 = document.getElementById('ganador2');
        if (this.matrizLogica.esGanador(numJugador)) {
            if(numJugador == 1){
                textGanador1.innerHTML = "GANADOR " + this.jugadorActual.getNombre();
                textGanador2.classList.toggle('hide');
                document.getElementById('turnoJugador1').classList.toggle('hide');
                document.getElementById('terminoTiempoReglamentario').classList.toggle('hide');
            }
            else if(numJugador == 2){
                textGanador2.innerHTML = "GANADOR " + this.jugadorActual.getNombre();
                textGanador1.classList.toggle('hide');
                document.getElementById('turnoJugador2').classList.toggle('hide');
                document.getElementById('terminoTiempoReglamentario').classList.toggle('hide');
            }
        }
        if(numJugador == 0){
            textGanador1.classList.toggle('hide');
            textGanador2.classList.toggle('hide');
        }
        document.getElementById('turnoJugador1').classList.remove('hide');
        document.getElementById('turnoJugador2').classList.remove('hide');
        document.getElementById('turnoJugador1').classList.toggle('hide');
        document.getElementById('turnoJugador2').classList.toggle('hide');
        console.log("termino por tiempo");
        document.getElementById('divFin').classList.toggle('hide');
    }

    sortearPrimerJugador() {
        console.log("sortearPrimerJugador()");
        let primerJugador = Math.floor(Math.random() * 2.0) + 1;
        document.getElementById('turnoJugador1').innerHTML = "Turno de " + this.jugador1.getNombre();
        document.getElementById('turnoJugador2').innerHTML = "Turno de " + this.jugador2.getNombre();
        if (primerJugador == 1){
            this.jugadorActual = this.jugador1;
            document.getElementById('turnoJugador1').classList.toggle('hide');
        }
        else{
            this.jugadorActual = this.jugador2;
            document.getElementById('turnoJugador2').classList.toggle('hide');
        }
    }

    turnoSiguiente() {
        if (this.jugador1 == this.jugadorActual)
            this.jugadorActual = this.jugador2;
        else
            this.jugadorActual = this.jugador1;
        document.getElementById('turnoJugador1').classList.toggle('hide');
        document.getElementById('turnoJugador2').classList.toggle('hide');
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

    isPlaying(){
        return this.isPlaying;
    }

    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var t = this;
        setTimeout(function(){
            t.terminarPartida(0);
        },(duration+2)*1000);
        this.intervalTimer = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            --timer;
        }, 1000);
    }
}