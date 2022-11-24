class Jugador{
    constructor(nombre, color, ficha){
        this.nombre = nombre;
        this.color = color;
        this.ficha = ficha;
        this.fichasJugadas = 0;
    }

    getNombre(){
        return this.nombre;
    }

    getColor(){
        return this.color;
    }

    getColor(){
        return this.ficha;
    }

    getFicha(){
        return this.ficha;
    }

    getFichasJugadas(){
        return this.fichasJugadas;
    }

    jugoFicha(){
        this.fichasJugadas++;
    }

    resetFichasJugadas(){
        this.fichasJugadas = 0;
    }
}