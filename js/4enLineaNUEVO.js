"use strict"

window.onload = () => {
    let canvas = document.querySelector('#gameCanvas');
    let ctx = canvas.getContext("2d");
    let juego = new Juego(canvas);
/*
    let fichaMessi = new Ficha(ctx,"images/4enLinea/fichaMessi.png", "#FF0000", 10, 10, 50, 50, canvas.width, canvas.height);
    let fichaRonaldo = new Ficha(ctx,"images/4enLinea/fichaRonaldo.png", "red", 150, 10, 50, 50,  canvas.width, canvas.height);
    fichaMessi.draw(ctx);
    fichaRonaldo.draw(ctx);*/
};