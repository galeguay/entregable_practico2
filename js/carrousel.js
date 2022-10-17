"use strict"
let carruseles = document.querySelectorAll(".slider-wrapper");

for (const wrapper of carruseles) {
  let childrens = wrapper.children;
  let prevButton = childrens[0];
  let nextButton = childrens[1];
  let container = childrens[2];

  nextButton.addEventListener("click", () => {
    let slideWidth = container.clientWidth;
    if (slideWidth >= 298)
      slideWidth = Math.trunc(slideWidth/298)*298;
    container.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    let slideWidth = container.clientWidth;
    if (slideWidth >= 298)
      slideWidth = Math.trunc(slideWidth/298)*298;
    container.scrollLeft -= slideWidth;
  });
}

let carruselPersonajes = document.querySelectorAll(".slider-wrapper-personajes");

for (const wrapper of carruselPersonajes) {
  let childrens = wrapper.children;
  let prevButton = childrens[0];
  let nextButton = childrens[1];
  let container = childrens[2];

  nextButton.addEventListener("click", () => {
    let slideWidth = container.clientWidth;
    if (slideWidth >= 428)
      slideWidth = Math.trunc(slideWidth/428)*428;
    container.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    let slideWidth = container.clientWidth;
    if (slideWidth >= 428)
      slideWidth = Math.trunc(slideWidth/428)*428;
    container.scrollLeft -= slideWidth;
  });
}
