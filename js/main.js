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
function moveJs() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar1");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function moveHtml() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar2");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function moveNode() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar3");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 25) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function moveGit() {
  let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar4");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// OBSERVER FOR SKILLS SECTIONS TO RUN FUNCTIONS //
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      moveJs()
      moveHtml()
      moveNode()
      moveGit()
    }
  });
});

observer.observe(document.querySelector('.why-choose-me'));