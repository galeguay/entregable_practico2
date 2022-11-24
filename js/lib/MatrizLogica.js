class MatrizLogica{
    constructor(cantidadFichasParaGanar){
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.matriz;
        this.#inicializarMatriz();
        this.#printMatrizConsole();
    }


    /**Inserta numero de ficha de jugador en el ultimo casillero libre de la columna indicada por parametro */
    insertarFicha(numJugador, col){
        let casillaLibre = 0;
        let inserto = false;
        let row = 0;
        while (row < this.matriz.length && !inserto){
            if (this.matriz[row][col] != 0){
                this.matriz[casillaLibre][col] = numJugador;
                inserto = true;
            }else{
                casillaLibre = row;
                row++;
            }
        }
        if (row == this.matriz.length){
            this.matriz[casillaLibre][col] = numJugador;
            row = 0;
        }else
            row = this.matriz.length - row;
        this.#printMatrizConsole();
        return row;
    }

    /**Devuelve true si la columna no tiene espacio para agregar nuevas fichas */
    esColumnaCompleta(col){ //CHEQUEAR
        let hayCasillaLibre = true;
        let row = 0;
        while (row < this.matriz.length && hayCasillaLibre) {
            if (this.matriz[row][col] != 0)
                hayCasillaLibre = false;
            else
                row++;
        }
        if (row == 0 && !hayCasillaLibre)
            return true;
        else
            return false;
    }

    /**Devuelve true si en la matriz hay this.cantidadFichasParaGanar en linea del jugador pasado por parámetro*/
    esGanador(numJugador) {
        for (let y = 0; y < this.matriz.length; y++) {
            for (let x = 0; x < this.matriz[y].length; x++) {
                let count = 0;
                count = this.#countUp(x, y, numJugador, this.matriz);
                if (count >= this.cantidadFichasParaGanar) return true;
                count = this.#countRight(x, y, numJugador, this.matriz);
                if (count >= this.cantidadFichasParaGanar) return true;
                count = this.#countUpRight(x, y, numJugador, this.matriz);
                if (count >= this.cantidadFichasParaGanar) return true;
                count = this.#countDownRight(x, y, numJugador, this.matriz);
                if (count >= this.cantidadFichasParaGanar) return true;
            }
        }
        return false;
    }

    #countUp(x, y, numJugador, matriz) {
        let startY = (y - this.cantidadFichasParaGanar >= 0) ? y - this.cantidadFichasParaGanar + 1 : 0;
        let counter = 0;
        for (; startY <= y; startY++) {
            if (matriz[startY][x] === numJugador) {
                counter++;
            } else {
                counter = 0;
            }
        }
        return counter;
    }

    #countRight(x, y, numJugador, matriz) {
        let endX = (x + this.cantidadFichasParaGanar < this.matriz[y].length) ? x + this.cantidadFichasParaGanar - 1 : this.matriz[y].length - 1;
        let counter = 0;
        for (; x <= endX; x++) {
            if (matriz[y][x] === numJugador) {
                counter++;
            } else {
                counter = 0;
            }
        }
        return counter;
    }

    #countUpRight(x, y, numJugador, matriz) {
        let endX = (x + this.cantidadFichasParaGanar < this.matriz[y].length) ? x + this.cantidadFichasParaGanar - 1 : this.matriz[y].length - 1;
        let startY = (y - this.cantidadFichasParaGanar >= 0) ? y - this.cantidadFichasParaGanar + 1 : 0;
        let counter = 0;
        while (x <= endX && startY <= y) {
            if (matriz[y][x] === numJugador) {
                counter++;
            } else {
                counter = 0;
            }
            x++;
            y--;
        }
        return counter;
    }

    #countDownRight(x, y, numJugador, matriz) {
        let endX = (x + this.cantidadFichasParaGanar < this.matriz[y].length) ? x + this.cantidadFichasParaGanar - 1 : this.matriz[y].length - 1;
        let endY = (y + this.cantidadFichasParaGanar < this.matriz.length) ? y + this.cantidadFichasParaGanar - 1 : this.matriz.length - 1;
        let counter = 0;
        while (x <= endX && y <= endY) {
            if (matriz[y][x] === numJugador) {
                counter++;
            } else {
                counter = 0;
            }
            x++;
            y++;
        }
        return counter;
    }

    /**Imprime la matriz en consola*/
    #printMatrizConsole(){
        //console.log("Matriz inicializada: ")
        for (let i = 0; i < this.matriz.length; i++){
            let fila = "";
            for (let n = 0; n < this.matriz[i].length; n++) {
                fila = fila + this.matriz[i][n] + ", ";
            }
            //console.log(fila +"\n");
        }
    }

    /**Inicializa la matriz con el tamaño:
     * FILAS: this.cantidadFichasParaGanar + 2
     * COLUMNAS: this.cantidadFichasParaGanar + 3
     * y setea todos los valores en 0*/
    #inicializarMatriz(){
        this.matriz = new Array(this.cantidadFichasParaGanar+2);
        for (let i = 0; i < this.matriz.length; i++) {
            this.matriz[i] = new Array(this.cantidadFichasParaGanar+3);
        }
        for (let i = 0; i < this.matriz.length; i++) {
            for (let n = 0; n < this.matriz[i].length; n++) {
                this.matriz[i][n] = 0;
            }
        }
    }
}