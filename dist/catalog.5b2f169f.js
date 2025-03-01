const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
searchIcon.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) console.log(`\u{428}\u{443}\u{43A}\u{430}\u{454}\u{43C}\u{43E} \u{437}\u{430} \u{437}\u{430}\u{43F}\u{438}\u{442}\u{43E}\u{43C}: ${query}`);
    else console.log("\u041F\u043E\u043B\u0435 \u043F\u043E\u0448\u0443\u043A\u0443 \u043F\u043E\u0440\u043E\u0436\u043D\u0454");
});

//# sourceMappingURL=catalog.5b2f169f.js.map
