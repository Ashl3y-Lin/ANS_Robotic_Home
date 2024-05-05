document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper-2');
    const slides = document.querySelectorAll('.slide-2');
    const prevBtn = document.querySelector('.prev2');
    const nextBtn = document.querySelector('.next2');
    let currentIndex = 0;

    function showSlide(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    function goToNextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
});