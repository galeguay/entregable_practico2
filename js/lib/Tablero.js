class Tablero {
    constructor(ctx, cantidadFichasParaGanar, y_row0, x_column0) {
        this.ctx = ctx;
        this.y_row0 = y_row0;
        this.x_column0 = x_column0;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.imagenSrc;
        this.arrayDropPoints = new Array();
        this.imagen = new Image();
        this.imagen.onload = ()=> {
            this.draw();
        };
        this.#cargarImagen();
        this.#cargarDropPoints();
        this.aux;
    }

    #cargarImagen() {
        this.x_column0 = 262;
        this.y_row0 = 162;
        switch (this.cantidadFichasParaGanar) {
            case 4: this.x_column0;
                    this.y_row0;
                    this.imagen.src = "images/4enLinea/tablero4.webp";
                    break;
            case 5: this.x_column0 = this.x_column0 - 27;
                    this.y_row0 = this.y_row0 - 54;
                    this.imagen.src = "images/4enLinea/tablero5.webp";
                    break;
            case 6: this.x_column0 = this.x_column0 - 54;
                    this.y_row0 = this.y_row0 - 108;
                    this.imagen.src = "images/4enLinea/tablero6.webp";
                    break;
            case 7: this.x_column0 = this.x_column0 - 81;
                    this.y_row0 = this.y_row0 - 162;
                    this.imagen.src = "images/4enLinea/tablero7.webp";
                    break;
        }
    }

    draw(){
        this.ctx.drawImage(this.imagen, 0, 0, 890, 590);
        this.#actualizarDropPoints();
    }


    #cargarDropPoints(){
        let x = this.x_column0;
        let y = this.y_row0;
        for (let i = 0; i < this.cantidadFichasParaGanar + 3; i++) {
            let dropPoint = new DropPoint(this.ctx, x, y, 50, 50);
            this.arrayDropPoints.push(dropPoint);
            x = x + 54;
        }
        //console.log(this.arrayDropPoints);
    }
    #actualizarDropPoints(){
        let x = this.x_column0;
        let y = this.y_row0;
        for (let i = 0; i < this.arrayDropPoints.length; i++) {
            //let dropPoint = new DropPoint(this.ctx, x, y, 50, 50);
            this.arrayDropPoints[i].draw();
            x = x + 54;
        }
        //console.log(this.arrayDropPoints);
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, width, height);
        tablero.draw(ctx);
    }

    checkDropPoint(xUp, yUp){
    if(this.arrayDropPoints[0].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[0];
    else if(this.arrayDropPoints[1].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[1];
    else if(this.arrayDropPoints[2].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[2];
    else if(this.arrayDropPoints[3].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[3];
    else if(this.arrayDropPoints[4].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[4];
    else if(this.arrayDropPoints[5].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[5];
    else if(this.arrayDropPoints[6].isDropPointInside(xUp, yUp)) return this.arrayDropPoints[6];
    }


    insertarFichaTablero(ctx, fichaParaMover, columna, yUpCursor, fichaJugadorEsperando){
        ctx.save();
        fichaJugadorEsperando.draw(ctx);
        //El translate de Y es a la casilla vacia
        ctx.translate(0,100);
        fichaParaMover.draw(ctx);
        
        //fichaParaMover.insertarFicha(jugador, columna); // actualizar matriz de logica (aregar el numerito en la matriz)
        // if(esColumnaCompleta(columna)){ // si columnaCompleta()
        //     this.clearCanvas(); //ANDA?? Oculto el droppoint
        // }
        ctx.restore();
        console.log("Inserto ficha y el siguiente es:");
        console.log(fichaJugadorEsperando);
        return fichaJugadorEsperando; //Return del jugador siguiente
    }
    

    animacionFicha(fichaParaMover, posY){
        if (posY < 327){
            fichaParaMover.draw(ctx);
            posY++;
        } 
    }
}