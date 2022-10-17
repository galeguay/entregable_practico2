"use strict"
let button = document.querySelector(".menuHamburguesa");
let menu = document.querySelector(".menuHamburguesa-child");
button.addEventListener("click", showHideMenu);

function showHideMenu() {
    menu.classList.toggle('hide'); // toggle the hideP class
}
