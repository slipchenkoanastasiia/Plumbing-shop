// Для кнопок з корзиною
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.basket-btn').forEach(button => {
      button.addEventListener('click', function (event) {
        event.stopPropagation(); 
  
        const svg = this.querySelector('svg');
        svg.classList.add('bounce');
  
        setTimeout(() => {
          svg.classList.remove('bounce');
        }, 400); 
  
        showToast('Товар додано до кошика 😉');
      });
    });
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    }
  });
  