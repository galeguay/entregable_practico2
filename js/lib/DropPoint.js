class DropPoint{
    constructor(imagenSrc, posX, posY, widhtImg, heightImg){
        this.imagenSrc = imagenSrc;
        this.posX = posX;
        this.posY = posY;
        this.widhtImg = widhtImg;
        this.heightImg = heightImg;
    }
    
    draw(ctx){
        let imagen = new Image();
        let x = this.posX;
        let y = this.posY;
        let widhtImg = this.widhtImg;
        let heightImg = this.heightImg;
        imagen.onload = function () {
            ctx.drawImage(imagen, x, y, widhtImg, heightImg);
        };
        imagen.src = this.imagenSrc;
    }
}