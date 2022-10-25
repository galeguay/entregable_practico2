"use strict"
let buttonPerfil = document.querySelector(".menuPerfil");
let menuPerfil = document.querySelector(".menuPerfil-child");
buttonPerfil.addEventListener("click", showHideMenu2);

function showHideMenu2() {
    menuPerfil.classList.toggle('hide'); // toggle the hideP class
}