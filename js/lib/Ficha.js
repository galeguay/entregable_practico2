class Ficha {
    constructor(ctx, imagenSrc, colorBorde, posX, posY, widthImg, heightImg, width, height){
        this.ctx = ctx;
        this.colorBorde = colorBorde;
        this.posX = posX;
        this.posY = posY;
        this.widthImg = widthImg;
        this.heightImg = heightImg;
        this.width = width;
        this.height = height;
        this.imagen = new Image();
        this.imagen.onload = ()=> {
            this.draw()
        };
        this.imagen.src = imagenSrc;
    }

    draw(){
        this.ctx.drawImage(this.imagen, this.posX, this.posY, this.widthImg, this.heightImg);
    }

    /**Actualiza la posicion al mover el mouse*/
    setPosition(x, y){
        this.posX = x;
        this.posY = y;
    }

    getPosition(){ //Obtiene la posicion actual
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
        let _x = (this.posX + 25) - cursorX;
        let _y = (this.posY + 25) - cursorY;
        return Math.sqrt(_x * _x + _y * _y) < 25;
    }

}