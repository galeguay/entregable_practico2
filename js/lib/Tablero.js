class Tablero {
    constructor(cantidadFichasParaGanar, y_row0, x_column0) {
        this.y_row0 = y_row0;
        this.x_column0 = x_column0;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.imagenSrc;
        this.arrayDropPoints = new Array();
        this.#tableroSeleccionado();
    }

#tableroSeleccionado() {
    this.x_column0 = 262;
    this.y_row0 = 162;
    switch (this.cantidadFichasParaGanar) {
        case 4: this.x_column0;
                this.y_row0;
                this.imagenSrc = "images/4enLinea/tablero4.webp";
                break;
        case 5: this.x_column0 = this.x_column0 - 27;
                this.y_row0 = this.y_row0 - 54;
                this.imagenSrc = "images/4enLinea/tablero5.webp";
                break;
        case 6: this.x_column0 = this.x_column0 - 54;
                this.y_row0 = this.y_row0 - 108;
                this.imagenSrc = "images/4enLinea/tablero6.webp";
                break;
        case 7: this.x_column0 = this.x_column0 - 81;
                this.y_row0 = this.y_row0 - 162;
                this.imagenSrc = "images/4enLinea/tablero7.webp";
                break;
    }
}


draw(ctx){
    let imagen = new Image();
    imagen.onload = function () {
        ctx.drawImage(imagen, 0, 0, 890, 590);
        //ctx.globalCompositeOperation = "source-atop";
    };
    imagen.src = this.imagenSrc;
    let x = this.x_column0;
    let y = this.y_row0;
    console.log(x + " " + y);
    for (let i = 0; i < cantidadFichasParaGanar + 3; i++) {
        
        let dropPoint = new DropPoint("images/4enLinea/dropPointWhite.png", x, y, 50, 50);
        dropPoint.draw(ctx);
        this.arrayDropPoints.push(dropPoint);
        x = x + 54;
    }
    console.log(this.arrayDropPoints);
}
    // insertarFicha(columna){
    //     ctx.translate(x,y);

    //     actualizar matriz de logica (aregar el numerito en la matriz)
    //     si columnaCompleta()
    //         ocultar el drop point
    // }
}