class DropPoint{
    constructor(imagenSrc, posX, posY, widthImg, heightImg){
        this.imagenSrc = imagenSrc;
        this.posX = posX;
        this.posY = posY;
        this.widthImg = widthImg;
        this.heightImg = heightImg;
    }
    
    draw(ctx){
        let imagen = new Image();
        let x = this.posX;
        let y = this.posY;
        let widthImg = this.widthImg;
        let heightImg = this.heightImg;
        imagen.onload = function () {
            ctx.drawImage(imagen, x, y, widthImg, heightImg);
        };
        imagen.src = this.imagenSrc;
    }

    isDropPointInside(xUpCursor, yUpCursor){
        let _x = this.posX - xUpCursor;
        let _y = this.posY - yUpCursor;
        return Math.sqrt(_x * _x + _y * _y) < 60;
    }
}