class DropPoint{
    constructor(ctx, posX, posY, widthImg, heightImg){
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.widthImg = widthImg;
        this.heightImg = heightImg;
        this.imagen = new Image();
        this.imagen.onload = ()=> {
            this.draw();
        };
        this.imagen.src = "images/4enLinea/dropPointWhite.png";
    }

    draw(){
        let x = this.posX;
        let y = this.posY;
        let widthImg = this.widthImg;
        let heightImg = this.heightImg;
        this.ctx.drawImage(this.imagen, x, y, widthImg, heightImg);
    }
}