class Partida{
    constructor(ctx, cantidadFichasParaGanar, tiempoDeJuego, tiempoDeTurno, jugador1, jugador2){
        this.ctx = ctx;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.tiempoDeJuego = tiempoDeJuego;
        this.tiempoDeTurno = tiempoDeTurno;
        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
        this.jugadorActual;
        this.matrizLogica = new MatrizLogica(cantidadFichasParaGanar);
    }

    iniciarPartida(){
        //Cargar canvas de la partida
        tablero.draw(ctx);
        timer.draw(ctx);

        //Sortear primer jugador
        let primerJugador = Math.floor (Math.random() * 2.0) + 1;
        if (primerJugador == 1)
            jugadorActual = this.jugador1;
        else
            jugadorActual = this.jugador2;

        //Iniciar Temporizador

        //Iniciar turno primer jugador
        iniciarTurno()
    }

    #iniciarTurno(){
        //Establecer temporizador
        setInterval(finishMatch(null),1000*60*tiempoDeJuego);
        //Habilitar ficha al jugadorActual
        //cuando suelte la ficha en un dropPoint
        tablero
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

}