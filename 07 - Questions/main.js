const open = document.querySelector(".plus-icon");

const links = document.querySelector(".answer")

open.addEventListener("click", function () {
  links.classList.toggle("active");
});
