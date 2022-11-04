class Tablero{
    constructor(cantidadFichasParaGanar, imagenSrc, y_row0, x_column0){
        this.y_row0 = y_row0;
        this.x_column0 = x_column0;
        this.cantidadFichasParaGanar = cantidadFichasParaGanar;
        this.imagenSrc = imagenSrc;
    }

    draw(ctx){
        let cantidadFichasParaGanar = new Image();
        cantidadFichasParaGanar.onload = function () {
            ctx.drawImage(cantidadFichasParaGanar, 0, 0, 890, 590);
            // ctx.globalCompositeOperation = "source-atop";
            
        };
        cantidadFichasParaGanar.src = this.imagenSrc;
    }
    
    // insertarFicha(columna){
    //     ctx.translate(x,y);

    //     actualizar matriz de logica (aregar el numerito en la matriz)
    //     si columnaCompleta()
    //         ocultar el drop point
    // }
}