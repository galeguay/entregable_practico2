class Partida{
    constructor(ctx, cantidadFichasParaGanar, tiempoDeJuego, tiempoDeTurno, jugador1, jugador2){
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

    iniciarPartida(){
        //Cargar canvas de la partida
        console.log("iniciandoPartida");
        this.tablero = new Tablero(this.ctx, this.cantidadFichasParaGanar, 0, 0);
        this.tablero.cargarFichas(this.jugador1, this.jugador2);
        this.fichaPrimerJugador();
        //this.tablero.draw();
        //timer.draw(ctx);
        //Sortear primer jugador
        //Iniciar Temporizador
        //Iniciar turno primer jugador
        //iniciarTurno();
    }

    #iniciarTurno(){
        //Establecer temporizador
        setTimeout(finishMatch(null),1000*60*tiempoDeJuego);
        //Habilitar ficha al jugadorActual
        //cuando suelte la ficha en un dropPoint
        //tablero
    }

    terminarPartida(jugadorActual){
        if (!jugadorActual){
            if (this.matrizLogica.esGanador(jugadorActual)){
                //dibujar pantalla ganador
            }else{
                //mostrar motivo por el cual finalizó la partida
            }
            //mostrar botones de reinicio rapido o volver a menu
        }
    }

    fichaPrimerJugador(){
        let primerJugador = Math.floor (Math.random() * 2.0) + 1;
        if (primerJugador == 1){
            this.jugadorActual = this.jugador1;
            this.fichaActiva = this.tablero.getFichaJ1(0);
        }else{
            this.jugadorActual = this.jugador2;
            this.fichaActiva = this.tablero.getFichaJ2(0);
        }
        console.log(this.jugadorActual.getNombre());
        return this.jugadorActual.getFicha();
    }

    tablero(){
        return this.tablero;
    }

    getFichaActiva(){
        return this.fichaActiva;
    }

    clearCanvas(width, height){
        this.tablero.clearCanvas(width, height);
    }

    checkDropPoint(xUp, yUp){
        return this.tablero.checkDropPoint(xUp, yUp);
    }

    insertarFicha(fichaParaMover, dropPoint){
        this.tablero.insertarFicha(fichaParaMover, dropPoint);
        this.iniciarTurno();
    }

}