// Для основної фільтрації товарів 
function toggleDropdown(selectType) {
    const selectedDropdown = document.getElementById(`${selectType}-dropdown`);
    const selectedWrapper = document.querySelector(`#${selectType}-dropdown`).parentElement;
    const arrowIcon = selectedWrapper.querySelector('.arrow-icon');
    const allDropdowns = document.querySelectorAll('.custom-dropdown');
    const allWrappers = document.querySelectorAll('.custom-select-wrapper');
    allDropdowns.forEach((dropdown)=>{
        if (dropdown !== selectedDropdown) dropdown.style.display = 'none';
    });
    allWrappers.forEach((wrapper)=>{
        if (wrapper !== selectedWrapper) wrapper.classList.remove('open');
    });
    selectedDropdown.style.display = selectedDropdown.style.display === 'block' ? 'none' : 'block';
    selectedWrapper.classList.toggle('open');
}
document.querySelectorAll('.custom-dropdown li').forEach((item)=>{
    item.addEventListener('click', function() {
        const selectedOption = this.textContent;
        const selectedWrapper = this.closest('.custom-select-wrapper');
        const selectedSpan = selectedWrapper.querySelector('[id^="selected-"]'); // Автоматично знайдемо відповідний span
        const selectedDropdown = selectedWrapper.querySelector('.custom-dropdown');
        selectedSpan.textContent = selectedOption;
        selectedDropdown.style.display = 'none';
        selectedWrapper.classList.remove('open');
    });
});

//# sourceMappingURL=catalog.0c40964a.js.map
