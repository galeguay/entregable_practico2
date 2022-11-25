class Tablero {
    constructor(ctx, cantidadFichasParaGanar) {
        this.ctx = ctx;
        this.x_column0 = 262;
        this.y_row0 = 162;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.imagenSrc;
        this.matrizLogica;
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
        switch (this.cantidadFichasParaGanar) {
            case 4: this.imagen.src = "images/4enLinea/tablero4.webp";
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
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 890, 590);
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
            dif+=10;
        }
        setTimeout(()=>{
            this.clearCanvas();
            this.#actualizarFichas();
        },400);
    }

    #actualizarFichas(){
        for (let i = this.arrayFichasJ1.length-1; i > -1; i--) {
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
        for (let i = 0; i < this.arrayDropPoints.length; i++) {
            if(this.arrayDropPoints[i].isPointInside(xUp, yUp)){
                return i;
            }
        }
    }

    insertarFicha(fichaParaMover, columna, row){
        let dropPoint = this.arrayDropPoints[columna];
        let destinoY = 0;
        if(this.rows == 7)
            destinoY = ((this.rows - row + 2) * 54) +2;
        else if(this.rows == 8)
            destinoY = ((this.rows - row + 1) * 54) +2;
        else if(this.rows == 9)
            destinoY = ((this.rows - row ) * 54) +2;
        else if(this.rows == 10)
            destinoY = ((this.rows - row - 1) * 54) +2;
        //console.log(this.rows + " - " + row + " = " + destinoY);
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

    getX(){ //Obtiene la pos en x
        return this.posX;
    }

    getY(){ //Obtiene la pos en y
        return this.posY;
    }
    
    disableDropPoint(columna){
        this.arrayDropPoints[columna].disable();
    }
}