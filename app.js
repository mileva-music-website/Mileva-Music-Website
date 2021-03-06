console.log("Website made by Conor Bailey (www.conbailey.com)");

// Navigation Selectors / settings
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".logo");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const current = document.querySelector("#current");

leftArrow.addEventListener("click", leftArrowClick);
rightArrow.addEventListener("click", rightArrowClick);

function leftArrowClick(e) {
  let num = parseInt(current.src.slice(-5));
  current.classList.add("fade-in");
  console.log(num);
  if (num > 1) {
    current.src = `./images/Mileva0${num - 1}.jpg`;
  } else {
    current.src = `./images/Mileva0${7}.jpg`;
  }

  setTimeout(() => current.classList.remove("fade-in"), 500);
}

function rightArrowClick(e) {
  let num = parseInt(current.src.slice(-5));
  console.log(num);
  if (num < 7) {
    current.src = `./images/Mileva0${num + 1}.jpg`;
  } else {
    current.src = `./images/Mileva0${1}.jpg`;
  }
  current.classList.add("fade-in");

  setTimeout(() => current.classList.remove("fade-in"), 500);
}

menuToggle.addEventListener("click", menTog);
navLink.forEach(function(elem) {
  elem.addEventListener("click", menTog);
});

navLogo.addEventListener("click", menTog);

window.onscroll = function() {
  let top = window.scrollY;

  if (top < 50) {
    navigation.classList.remove("scrolled");
  } else {
    navigation.classList.add("scrolled");
  }
};

function menTog() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Smooth scroll script
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
