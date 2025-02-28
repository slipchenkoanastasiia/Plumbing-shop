const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', function() {
  const query = searchInput.value.trim();

  if (query) {
    console.log(`Шукаємо за запитом: ${query}`);
  } else {
    console.log("Поле пошуку порожнє");
  }
});
