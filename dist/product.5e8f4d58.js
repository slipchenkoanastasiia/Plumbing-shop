// Додавання в кошин на сторінці товару
const addToCartButton = document.querySelector('.add-to-cartg');
const cartModalNotification = document.querySelector('.cart-modal-notification');
addToCartButton.addEventListener('click', ()=>{
    cartModalNotification.style.display = 'block';
    setTimeout(()=>{
        cartModalNotification.style.display = 'none';
    }, 3000);
});

//# sourceMappingURL=product.5e8f4d58.js.map
