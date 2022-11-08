class DropPoint{
    constructor(ctx, posX, posY, widthImg, heightImg){
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.widthImg = widthImg;
        this.heightImg = heightImg;
        this.enable = true;
        this.imagen = new Image();
        this.imagen.onload = ()=> {
            this.draw();
        };
        this.imagen.src = "images/4enLinea/dropPointWhite.png";
    }

    draw(){
        if(this.enable)
            this.ctx.drawImage(this.imagen, this.posX, this.posY, this.widthImg, this.heightImg);
    }

    isPointInside(xUpCursor, yUpCursor){
        if(this.enable){
            let _x = (this.posX + 25) - xUpCursor;
            let _y = (this.posY + 25) - yUpCursor;
            return Math.sqrt(_x * _x + _y * _y) < 25;
        }else
            return false;
    }

    getX(){
        return this.posX;
    }

    getY(){
        return this.posY;
    }

    disable(){
        this.enable = false;
    }
}