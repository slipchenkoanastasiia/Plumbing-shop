// Для кнопок із сердечком
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.heart-btn').forEach((button)=>{
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    document.querySelectorAll('.basket-btn').forEach((button)=>{
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

//# sourceMappingURL=catalog.96295a67.js.map
