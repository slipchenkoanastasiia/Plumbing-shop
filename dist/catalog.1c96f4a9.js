// Для кнопок з корзиною
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.basket-btn').forEach((button)=>{
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const svg = this.querySelector('svg');
            svg.classList.add('bounce');
            setTimeout(()=>{
                svg.classList.remove('bounce');
            }, 400);
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
});

//# sourceMappingURL=catalog.1c96f4a9.js.map
