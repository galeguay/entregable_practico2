class Ficha {
    constructor(imagenSrc, colorBorde, posX, posY, widhtImg, heightImg, widht, height){
        this.imagenSrc = imagenSrc;
        this.colorBorde = colorBorde;
        this.posX = posX;
        this.posY = posY;
        this.widhtImg = widhtImg;
        this.heightImg = heightImg;
        this.widht = widht;
        this.height = height;
    }

    draw(ctx){
        // clearCanvas(); //Limpia el canvas para despues 
        let imagen = new Image();
        let x = this.posX;
        let y = this.posY;
        let widhtImg = this.widhtImg;
        let heightImg = this.heightImg;
        imagen.onload = function () {
            ctx.drawImage(imagen, x, y, widhtImg, heightImg);
            ctx.globalCompositeOperation = "source-atop";
        };
        imagen.src = this.imagenSrc;
        // this.ctx.strokeStyle = this.colorBorde;
        // this.ctx.linewidhtImg = 10;
        // this.ctx.stroke();
        
    }

    /**Actualiza la posicion al mover el mouse*/
    setPosition(x, y){ 
        this.posX = x;
        this.posY = y;
        //this.posX = x + (this.widht/2);
        //this.posY = y + (this.height/2);
    }

    
    /**Chequea si el puntero esta dentro de la ficha*/
    isPointInside(x, y){
        let _x = this.posX - x; //La pos del circulo menos la pos del mouse
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < 50;
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

}