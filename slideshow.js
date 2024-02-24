let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') {
    plusSlides(-1);
  } else if (event.code === 'ArrowRight') {
    plusSlides(1);
  }
});