// Слайдер для продукції новинки
document.addEventListener('DOMContentLoaded', ()=>{
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const productCards = document.querySelectorAll('.product-card');
    const totalSlides = productCards.length;
    nextBtn.addEventListener('click', ()=>{
        if (currentIndex < totalSlides - 1) currentIndex++;
        else currentIndex = 0;
        updateSlider();
    });
    prevBtn.addEventListener('click', ()=>{
        if (currentIndex > 0) currentIndex--;
        else currentIndex = totalSlides - 1;
        updateSlider();
    });
    function updateSlider() {
        const slideWidth = productCards[0].offsetWidth;
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        sliderTrack.style.transition = 'transform 0.4s ease'; // плавність
    }
});

//# sourceMappingURL=index.e293a4c4.js.map
