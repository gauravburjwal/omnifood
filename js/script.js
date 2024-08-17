// Setting current year in footer
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const navBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

navBtnEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});
