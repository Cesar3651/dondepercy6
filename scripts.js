document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true, // Optional: enables continuous loop mode
    });
  });
  // start carrousel
  // JavaScript para hacer el carrusel automático
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('[name="carrousel"]');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000; // Cambiar cada 3 segundos
    
    function showNextSlide() {
      slides[currentSlide].checked = false;
      currentSlide = (currentSlide + 1) % totalSlides;
      slides[currentSlide].checked = true;
    }
    
    setInterval(showNextSlide, intervalTime);
  });


