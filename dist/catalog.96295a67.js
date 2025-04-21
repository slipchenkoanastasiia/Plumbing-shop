document.addEventListener('DOMContentLoaded', ()=>{
    // Обробник для кнопок із сердечком
    document.querySelectorAll('.heart-btn').forEach((button)=>{
        button.addEventListener('click', function() {
            this.classList.toggle('active'); // Додає або видаляє клас 'active' при натисканні
        });
    });
    // Обробник для кнопок із корзиною
    document.querySelectorAll('.basket-btn').forEach((button)=>{
        button.addEventListener('click', function() {
            this.classList.toggle('active'); // Додає або видаляє клас 'active' при натисканні
        });
    });
});

//# sourceMappingURL=catalog.96295a67.js.map
