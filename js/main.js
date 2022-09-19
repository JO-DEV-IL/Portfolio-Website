// STICKY NAVBAR //
window.onscroll = function() {stickyNav()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// PROGRESS BARS //
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem1 = document.getElementById("myBar1");
    let elem2 = document.getElementById("myBar2");
    let elem3 = document.getElementById("myBar3");
    let elem4 = document.getElementById("myBar4");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem1.style.width = width + "%";
        elem2.style.width = width + "%";
        elem3.style.width = width + "%";
        elem4.style.width = width + "%";
      }
    }
  }
}