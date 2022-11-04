class Ficha {
    constructor(imagenSrc, colorBorde, posX, posY, widht, height){
        //this.imagenSrc = imagenSrc;
        this.colorBorde = colorBorde;
        this.posX = posX;
        this.posY = posY;
        this.widht = widht;
        this.height = height;
        this.imagen = new Image()
        this.imagen.src = imagenSrc;
    }

    draw(ctx){
        // clearCanvas(); //Limpia el canvas para despues 
        let imagen1 = this.imagen;
        let x = this.posX;
        let y = this.posY;
        let widht = this.widht;
        let height = this.height;
        imagen1.onload = function () {
            ctx.drawImage(imagen1, x, y, widht, height);
            ctx.globalCompositeOperation = "source-atop";
            // ctx.globalCompositeOperation = "destination-over";
        };
        // this.ctx.strokeStyle = this.colorBorde;
        // this.ctx.lineWidht = 10;
        // this.ctx.stroke();
    }

    setPosition(){ //Actualiza la posicion al mover el mouse
        this.posX = x;
        this.getPosY = y;
    }

    getPosicion(){ //Obtiene la posicion actual
        return{
            x: this.getPosX(),
            y: this.getPosY()
        }
    }

    getPosX(){ //Obtiene la pos en x
        return this.posX;
    }

    getPosY(){ //Obtiene la pos en y
        return this.posY;
    }

    /**Chequea si el puntero esta dentro de la ficha */
    isPointInside(cursorX, cursorY){
        console.log(cursorX+" "+cursorY+"\n"+this.posX+" "+this.posY);
        let _x = this.posX - cursorX;
        let _y = this.posY - cursorY;
        return Math.sqrt(_x * _x + _y * _y) < 60;
    }

}