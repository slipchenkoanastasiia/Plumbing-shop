const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-btn');

// Відкриваємо модалку при натисканні на іконку корзини
cartIcon.addEventListener('click', (e) => {
  e.preventDefault();  // Запобігаємо переходу
  cartModal.style.display = 'block';
});

// Закриваємо модалку при натисканні на хрестик
closeBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});
