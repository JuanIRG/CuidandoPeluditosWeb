
// MENU TOGGLE
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

let currentSlide = 1;
    const totalSlides = 2;

    function showSlide(slide) {
      for (let i = 1; i <= totalSlides; i++) {
        document.getElementById('slide' + i).classList.toggle('opacity-0', i !== slide);
      }
      currentSlide = slide;
    }

    // Cambio automático de slides cada 5 segundos
    setInterval(() => {
      let nextSlide = currentSlide + 1 > totalSlides ? 1 : currentSlide + 1;
      showSlide(nextSlide);
    }, 3000); // 