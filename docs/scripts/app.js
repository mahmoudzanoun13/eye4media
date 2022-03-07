const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const link = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click', () => {
    link.classList.toggle('hamburger-active');
  });

  navLink.forEach(link => {
    link.style.animation = `fading 0.5s ease forwards 2.5s`;
  })
}

navSlide();


let slidePosition = 0;
const slides = document.getElementsByClassName('testimonials_text');
const totalSlides = slides.length;
const rightArrow = document.querySelector('.right_arrow');
const leftArrow = document.querySelector('.left_arrow');
const image = document.getElementsByClassName('body_mockup')[0];

rightArrow.addEventListener('click', () => {
  moveToNextSlide();
})

leftArrow.addEventListener('click', () => {
  moveToPrevSlide();
})

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('active');
    slide.classList.add('hidden');
  }

  slides[slidePosition].classList.add('active');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
