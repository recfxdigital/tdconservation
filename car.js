
  document.querySelectorAll('.fixed-carousel').forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-img');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    let currentIndex = 0;
    let autoplayInterval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextImage, 10000); // 3 seconds
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    nextBtn.addEventListener('click', () => {
      nextImage();
      stopAutoplay();
      startAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
      stopAutoplay();
      startAutoplay();
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Initialize
    showImage(currentIndex);
    startAutoplay();
  });
