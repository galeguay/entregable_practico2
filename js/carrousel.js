let carruseles = document.querySelectorAll(".slider-wrapper");

for (const wrapper of carruseles) {
  let childrens = wrapper.children;
  let prevButton = childrens[0];
  let nextButton = childrens[1];
  let container = childrens[2];
  console.log(childrens.length);

  nextButton.addEventListener("click", () => {
    const slideWidth = container.children[0].clientWidth;
    console.log(slideWidth);
    container.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = container.children[0].clientWidth;
    container.scrollLeft -= slideWidth;
  });
}
