document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burgerIcon");
  const menu = document.getElementById("menu");
  const links = document.querySelectorAll(".menu a");

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Добавляем обработчик событий для каждой ссылки в меню
  links.forEach((link) => {
    link.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  });
});
