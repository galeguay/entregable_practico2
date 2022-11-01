"use stric";

// let canvas = document.querySelector('#myCanvas');
// let ctx = canvas.getContext('2d');
// let canvasWidht = canvas.width;
// let canvasHeight = canvas.height;


let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', 150 + "px");
});

