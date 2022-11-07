class Tablero {
    constructor(ctx, cantidadFichasParaGanar, y_row0, x_column0) {
        this.ctx = ctx;
        this.y_row0 = y_row0;
        this.x_column0 = x_column0;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.imagenSrc;
        this.arrayDropPoints = new Array();
        this.arrayFichasJ1 = new Array();
        this.arrayFichasJ2 = new Array();
        this.columns = cantidadFichasParaGanar + 3;
        this.rows = cantidadFichasParaGanar + 3;
        this.imagen = new Image();
        this.imagen.onload = ()=> {
            this.draw();
        };
        this.#cargarImagen();
        this.#cargarDropPoints();
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
    }


    #cargarDropPoints(){
        let x = this.x_column0;
        let y = this.y_row0;
        for (let i = 0; i < this.cantidadFichasParaGanar + 3; i++) {
            let dropPoint = new DropPoint(this.ctx, x, y, 50, 50);
            this.arrayDropPoints.push(dropPoint);
            x = x + 54;
        }
    }

    #actualizarDropPoints(){
        let x = this.x_column0;
        let y = this.y_row0;
        for (let i = 0; i < this.arrayDropPoints.length; i++) {
            this.arrayDropPoints[i].draw();
            x = x + 54;
        }
    }

    cargarFichas(jugador1, jugador2){
        let dif = 10;
        let fichaJ1 = jugador1.ficha;
        let fichaJ2 = jugador2.ficha;
        for (let i = 0; i < ((this.cantidadFichasParaGanar + 3) * (this.cantidadFichasParaGanar + 2))/2; i++) {
            this.arrayFichasJ1.push(new Ficha(this.ctx, fichaJ1.getImagenSrc(), fichaJ1.colorBorde, fichaJ1.getX(), fichaJ1.getY()+dif, 50, 50));
            this.arrayFichasJ2.push(new Ficha(this.ctx, fichaJ2.getImagenSrc(), fichaJ2.colorBorde, fichaJ2.getX(), fichaJ2.getY()+dif, 50, 50));
            dif-=10;
        }
        this.#actualizarFichas();
    }

    #actualizarFichas(){
        for (let i = 0; i < this.arrayFichasJ1.length; i++) {
            this.arrayFichasJ1[i].draw();
            this.arrayFichasJ2[i].draw();
        }
    }

    clearCanvas(width, height){
        this.ctx.clearRect(0, 0, width, height);
        this.draw(ctx);
        this.#actualizarDropPoints();
        this.#actualizarFichas();
    }

    getFichaJ1(index){
        return this.arrayFichasJ1[index];
    }

    getFichaJ2(index){
        return this.arrayFichasJ2[index];
    }

    getColumna(xUp, yUp){
        if(this.arrayDropPoints[0].isPointInside(xUp, yUp)) return 0;
        else if(this.arrayDropPoints[1].isPointInside(xUp, yUp)) return 1;
        else if(this.arrayDropPoints[2].isPointInside(xUp, yUp)) return 2;
        else if(this.arrayDropPoints[3].isPointInside(xUp, yUp)) return 3;
        else if(this.arrayDropPoints[4].isPointInside(xUp, yUp)) return 4;
        else if(this.arrayDropPoints[5].isPointInside(xUp, yUp)) return 5;
        else if(this.arrayDropPoints[6].isPointInside(xUp, yUp)) return 6;
    }

    insertarFicha(fichaParaMover, columna, row){
        let dropPoint = this.arrayDropPoints[columna];
        let destinoY = (this.rows - row + 2) * 54 ;
        console.log(this.rows + " - " + row + " = " + destinoY);
        fichaParaMover.setPosition(dropPoint.getX(), dropPoint.getY());
        fichaParaMover.draw();
        this.animacionCaida(fichaParaMover, destinoY);
    }

    animacionCaida(ficha, destinoY){
        let y = ficha.getY();
        let anim = setInterval( ()=>{
            ficha.setPosition(ficha.getX(), y);
            this.clearCanvas();
            ficha.draw();
            y += 5;
            if(y >= destinoY)
                clearInterval(anim);
        }, 20);
    }

    disableDropPoint(columna){
        this.arrayDropPoints[columna].disable();
    }
}