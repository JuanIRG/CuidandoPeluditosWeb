
// MENU TOGGLE
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

let currentSlide = 1;
    function showSlide(slide) {
      currentSlide = slide;
      document.getElementById('slide1').classList.toggle('opacity-0', slide !== 1);
      document.getElementById('slide2').classList.toggle('opacity-0', slide !== 2);
    }