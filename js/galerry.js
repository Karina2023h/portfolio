let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "flex" : "none";
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", showSlide(currentSlide));
