
    const images = document.querySelectorAll('.carousel-img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    const video = document.getElementById('bg-video');
    video.addEventListener('ended', function () {
        video.pause();
        video.currentTime = video.duration; // Stay on last frame
    });
