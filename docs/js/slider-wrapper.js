const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.product-card').length;

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; 
    }
    updateSlider();
});

function updateSlider() {
    const slideWidth = document.querySelector('.product-card').offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
