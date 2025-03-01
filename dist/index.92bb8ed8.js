const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-btn');
cartIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    cartModal.style.display = 'block';
});
closeBtn.addEventListener('click', ()=>{
    cartModal.style.display = 'none';
});

//# sourceMappingURL=index.92bb8ed8.js.map
