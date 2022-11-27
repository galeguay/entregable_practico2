"use strict"

let open = document.querySelector(".hamburger"); //open
let inner = document.querySelector(".hamburger-inner");
let hide = document.querySelector("#contenido");
let a = document.querySelector(".contenidoDerecho");

window.addEventListener('load', function () {
    open.classList.toggle('.open');
    //let inner = document.querySelector(".hamburger-inner"); //hide
    //inner.classList.toggle('hide');
    console.log("NO OPEN");
})


open.addEventListener('click', function() {
    open.classList.toggle("open");
    hide.classList.toggle('hide');
    console.log("OPEN");
    // showHideMenu();
});



//ANDA HASTA LAS 3 LINEAS Y LA X CUANDO HACES CLICK
/*let open = document.querySelector(".hamburger"); //open
let inner = document.querySelector(".hamburger-inner"); //hide

window.addEventListener('load', function () {
    let open = document.querySelector(".hamburger"); //open
    open.classList.toggle('.open');
    //let inner = document.querySelector(".hamburger-inner"); //hide
    //inner.classList.toggle('hide');
    console.log("NO OPEN");
})


open.addEventListener('click', function() {
    let open = document.querySelector(".hamburger"); //open
    open.classList.toggle("open");
    let inner = document.querySelector(".hamburger-inner"); //hide
    //inner.classList.toggle('hide');
    console.log("OPEN");
    // showHideMenu();
});*/

