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