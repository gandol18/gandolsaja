let slides = document.querySelectorAll('.slideshow img');
let current = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
setInterval(nextSlide, 5000);
showSlide(current);
