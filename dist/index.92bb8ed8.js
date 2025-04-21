const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
cartIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    cartModal.style.display = 'block';
    setTimeout(()=>{
        cartModal.style.display = 'none';
    }, 2000);
});

//# sourceMappingURL=index.92bb8ed8.js.map
