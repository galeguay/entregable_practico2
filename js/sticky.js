"use strict"

let header2 = document.getElementById("header2");
let logo = document.querySelector(".logo");
window.onscroll = function() {myFunction()};


let sticky = header2.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header2.classList.add("sticky");
    header2.classList.add("headerChico");
    logo.classList.add("logo2");
    console.log("Sticky add");
  } else {
    header2.classList.remove("sticky");
    logo.classList.remove("logo2");
    header2.classList.remove("headerChico");
    console.log("Sticky remove");
  }
}