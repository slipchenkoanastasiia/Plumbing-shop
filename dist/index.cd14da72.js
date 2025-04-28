// Слайдер в hero
const sliderTrack = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
let autoSlideInterval = setInterval(()=>{
    if (currentIndex < totalSlides - 1) currentIndex++;
    else currentIndex = 0;
    updateSlider();
}, 3000);

//# sourceMappingURL=index.cd14da72.js.map
