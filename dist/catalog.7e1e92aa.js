// Для фільтру цін
function updatePrice() {
    let minPrice = parseInt(document.getElementById('minPrice').value, 10) || 0;
    let maxPrice = parseInt(document.getElementById('maxPrice').value, 10);
    if (isNaN(maxPrice)) maxPrice = Infinity;
    if (maxPrice !== Infinity && minPrice > maxPrice) minPrice = maxPrice;
    document.getElementById('minPrice').value = minPrice;
    document.getElementById('maxPrice').value = maxPrice === Infinity ? '' : maxPrice;
}
function setPrice(min, max) {
    document.getElementById('minPrice').value = min;
    document.getElementById('maxPrice').value = max === Infinity ? '' : max;
    updatePrice();
}
function changePrice(id, step) {
    const input = document.getElementById(id);
    let price = parseInt(input.value, 10) || 0;
    price += step;
    if (id === 'minPrice' && price > parseInt(document.getElementById('maxPrice').value, 10)) price = parseInt(document.getElementById('maxPrice').value, 10);
    if (id === 'maxPrice' && price < parseInt(document.getElementById('minPrice').value, 10)) price = parseInt(document.getElementById('minPrice').value, 10);
    input.value = price;
    updatePrice();
}

//# sourceMappingURL=catalog.7e1e92aa.js.map
