var i = 0;
let bodyDiv = document.querySelector(".divBody");
let header = document.querySelector("header");
let loadingDiv = document.querySelector(".loadingScreen");
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        bodyDiv.classList.toggle('ultrablur');
        header.classList.toggle('ultrablur');
        loadingDiv.classList.toggle('hide');
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
move();