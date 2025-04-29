// Для кнопок із сердечком та корзини
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.heart-btn').forEach((button)=>{
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            saveFavoriteState(this);
        });
        if (isFavorite(button)) button.classList.add('active');
    });
    document.querySelectorAll('.basket-btn').forEach((button)=>{
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.add('pulsing');
            setTimeout(()=>{
                this.classList.remove('pulsing');
            }, 600);
            showToast("\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u043A\u043E\u0448\u0438\u043A\u0430 \uD83D\uDE09");
        });
    });
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(()=>toast.remove(), 2000);
    }
    function saveFavoriteState(button) {
        const id = button.closest('.product-item')?.dataset.id;
        if (!id) return;
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (button.classList.contains('active')) {
            if (!favorites.includes(id)) favorites.push(id);
        } else favorites = favorites.filter((favId)=>favId !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    function isFavorite(button) {
        const id = button.closest('.product-item')?.dataset.id;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return id && favorites.includes(id);
    }
});

//# sourceMappingURL=catalog.18487376.js.map
