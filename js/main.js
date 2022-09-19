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

const i = 0;
function move() {
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    const width = 1;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}