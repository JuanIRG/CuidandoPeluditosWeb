
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
   
    //tab de la seccion cliente
    //tab de la seccion cliente
function mostrarGrupo(grupo) {
  const grupo1 = document.getElementById('grupo1');
  const grupo2 = document.getElementById('grupo2');
  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');

  if (grupo === 1) {
    grupo1.classList.remove('hidden');
    grupo2.classList.add('hidden');
    tab1.classList.add('opacity-70');
    tab1.classList.remove('opacity-30');
    tab2.classList.remove('opacity-70');
    tab2.classList.add('opacity-30');
  } else {
    grupo1.classList.add('hidden');
    grupo2.classList.remove('hidden');
    tab2.classList.add('opacity-70');
    tab2.classList.remove('opacity-30');
    tab1.classList.remove('opacity-70');
    tab1.classList.add('opacity-30');
  }
}

// Mobile carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileCarousel = document.getElementById('mobile-carousel');
  const dotsContainer = document.getElementById('mobile-dots');
  
  if (!mobileCarousel || !dotsContainer) return;
  
  const slides = mobileCarousel.children;
  const slideCount = slides.length;
  let currentMobileSlide = 0;
  let startX, moveX;
  
  // Create dots for each slide
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('button');
    dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-rosaFuerte', i === 0 ? 'opacity-70' : 'opacity-30');
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  }
  
  // Function to update the carousel position
  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= slideCount) index = slideCount - 1;
    
    currentMobileSlide = index;
    mobileCarousel.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle('opacity-70', i === index);
      dot.classList.toggle('opacity-30', i !== index);
    });
  }
  
  // Touch events for swipe
  mobileCarousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  mobileCarousel.addEventListener('touchmove', (e) => {
    if (!startX) return;
    
    moveX = e.touches[0].clientX;
    const diff = startX - moveX;
    
    // Prevent overscrolling
    if ((currentMobileSlide === 0 && diff < 0) || 
        (currentMobileSlide === slideCount - 1 && diff > 0)) {
      return;
    }
    
    // Calculate percentage moved
    const containerWidth = mobileCarousel.offsetWidth;
    const percentMoved = (diff / containerWidth) * 100;
    const translateValue = -(currentMobileSlide * 100 + percentMoved);
    
    // Apply transform with limits
    mobileCarousel.style.transform = `translateX(${Math.max(Math.min(translateValue, 0), -((slideCount - 1) * 100))}%)`;
  });
  
  mobileCarousel.addEventListener('touchend', (e) => {
    if (!startX || !moveX) return;
    
    const diff = startX - moveX;
    const threshold = mobileCarousel.offsetWidth * 0.2; // 20% threshold for swipe
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left
        goToSlide(currentMobileSlide + 1);
      } else {
        // Swipe right
        goToSlide(currentMobileSlide - 1);
      }
    } else {
      // Return to current slide if threshold not met
      goToSlide(currentMobileSlide);
    }
    
    startX = null;
    moveX = null;
  });
  
  // Initialize first slide
  goToSlide(0);
});