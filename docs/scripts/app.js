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
