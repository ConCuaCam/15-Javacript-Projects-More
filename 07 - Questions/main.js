const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach(function (question) {
  const btn = question.querySelector(".icon");
  btn.addEventListener("click", function () {
    accordion.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  });
});




