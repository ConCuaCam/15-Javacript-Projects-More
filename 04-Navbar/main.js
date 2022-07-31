

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-menu");

navToggle.addEventListener("click", function () {
  links.classList.toggle("nav-center");
});
