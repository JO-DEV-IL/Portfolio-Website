// STICKY NAVBAR //
window.onscroll = function() {stickyNav()}

const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop

function stickyNav(){
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}



// PROGRESS BARS //

// HTML/CSS
function moveSkill1() {
  let i = 0
  if (i == 0){
    i = 1
    let elem = document.getElementById("myBar1")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 90){
        clearInterval(id)
        i = 0
      }else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// APIS
function moveSkill2() {
  let i = 0
  if (i == 0) {
    i = 1
    let elem = document.getElementById("myBar2")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 88) {
        clearInterval(id)
        i = 0;
      } else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// NODE/EXPRESS/BOOT/EJS
function moveSkill3() {
  let i = 0
  if (i == 0) {
    i = 1
    let elem = document.getElementById("myBar3")
    let width = 1
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        i = 0;
      } else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// REACT
function moveSkill4() {
  let i = 0
  if (i == 0) {
    i = 1
    let elem = document.getElementById("myBar4")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 75) {
        clearInterval(id)
        i = 0
      } else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// GOOGLE
function moveSkill5() {
  let i = 0
  if (i == 0){
    i = 1
    let elem = document.getElementById("myBar5")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 100){
        clearInterval(id)
        i = 0
      }else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// JAVASCRIPT
function moveSkill6() {
  let i = 0
  if (i == 0){
    i = 1
    let elem = document.getElementById("myBar6")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 88){
        clearInterval(id)
        i = 0
      }else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// DOCUMENTATION
function moveSkill7() {
  let i = 0
  if (i == 0){
    i = 1
    let elem = document.getElementById("myBar7")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 100){
        clearInterval(id)
        i = 0
      }else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// GIT/GITHUB
function moveSkill8() {
  let i = 0
  if (i == 0){
    i = 1
    let elem = document.getElementById("myBar8")
    let width = 1
    let id = setInterval(frame, 10)
    function frame() {
      if (width >= 80){
        clearInterval(id)
        i = 0
      }else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}

// OBSERVER FOR SKILLS SECTIONS TO RUN FUNCTIONS //
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      moveSkill1()
      moveSkill2()
      moveSkill3()
      moveSkill4()
      moveSkill5()
      moveSkill6()
      moveSkill7()
      moveSkill8()
    }
  });
});

observer.observe(document.querySelector('.why-choose-me'));

// DARK MODE OPTION //
// function darkSide() {
//   const body = document.querySelector('body')
//   body.classList.toggle("darkBody")
//   }