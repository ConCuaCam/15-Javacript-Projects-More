
const menuBtn = document.querySelector(".menu-btn");

const links = document.querySelector(".side-bar");

const navClose = document.querySelector(".nav-close");

menuBtn.addEventListener("click", function () {
  links.classList.toggle("active");
});

navClose.addEventListener("click", function () {
    links.classList.toggle("active");
  });