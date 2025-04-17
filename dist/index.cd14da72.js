const sliderTrack = document.querySelector('.slider-container'); // Коригуємо тут, бо твої слайди в контейнері .slider-container
const slides = document.querySelectorAll('.slide'); // Це всі слайди
let currentIndex = 0;
const totalSlides = slides.length; // Кількість слайдів
// Функція для оновлення слайдера
function updateSlider() {
    const slideWidth = slides[0].offsetWidth; // Отримуємо ширину одного слайду
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Переміщаємо слайдер
}
// Автоматичний перехід слайдів кожні 3 секунди
let autoSlideInterval = setInterval(()=>{
    if (currentIndex < totalSlides - 1) currentIndex++;
    else currentIndex = 0; // Якщо дійшли до останнього слайду, повертаємось на перший
    updateSlider();
}, 3000); // Перемикання кожні 3 секунди

//# sourceMappingURL=index.cd14da72.js.map
