// Слайдер для продукції спеціальні пропозиції
const specialSliderTrack = document.querySelector('.special-slider-track');
const specialPrevBtn = document.querySelector('.special-prev');
const specialNextBtn = document.querySelector('.special-next');

let specialCurrentIndex = 0;
const specialTotalSlides = document.querySelectorAll('.special-product-card').length;

specialNextBtn.addEventListener('click', () => {
    if (specialCurrentIndex < specialTotalSlides - 1) {
        specialCurrentIndex++;
    } else {
        specialCurrentIndex = 0; 
    }
    updateSpecialSlider();
});

specialPrevBtn.addEventListener('click', () => {
    if (specialCurrentIndex > 0) {
        specialCurrentIndex--;
    } else {
        specialCurrentIndex = specialTotalSlides - 1; 
    }
    updateSpecialSlider();
});

function updateSpecialSlider() {
    const slideWidth = document.querySelector('.special-product-card').offsetWidth;
    specialSliderTrack.style.transform = `translateX(-${specialCurrentIndex * slideWidth}px)`;
}
