// Для рейтингу зірок
document.querySelectorAll('.rating').forEach(ratingBlock => {
  const stars = ratingBlock.querySelectorAll('.star');

  // Створюємо елемент лічильника і додаємо після зірок
  const ratingValue = document.createElement('span');
  ratingValue.classList.add('rating-value');
  ratingValue.textContent = '0'; // початкове значення
  ratingBlock.appendChild(ratingValue);

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const selectedRating = parseInt(star.getAttribute('data-value'));
      ratingBlock.setAttribute('data-rating', selectedRating);

      updateStars(ratingBlock, selectedRating);
      // Оновлення лічильника
      ratingValue.textContent = selectedRating;
    });

    star.addEventListener('mouseover', () => {
      const hoverValue = parseInt(star.getAttribute('data-value'));
      updateStars(ratingBlock, hoverValue);
    });

    star.addEventListener('mouseout', () => {
      const currentRating = parseInt(ratingBlock.getAttribute('data-rating'));
      updateStars(ratingBlock, currentRating);
    });
  });
});

function updateStars(ratingBlock, rating) {
  const stars = ratingBlock.querySelectorAll('.star');
  stars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('filled', value <= rating);
  });
}
