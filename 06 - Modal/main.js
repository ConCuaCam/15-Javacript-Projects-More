const openModal = document.querySelector(".btn");

const links = document.querySelector(".modal");

const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", function () {
  links.classList.toggle("active");
});

closeModal.addEventListener("click", function () {
    links.classList.toggle("active");
  });