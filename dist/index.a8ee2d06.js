// Скрольний header
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    const button = document.querySelector(".fixed-vertical-button");
    if (!header || !footer) return;
    window.addEventListener("scroll", function() {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (window.scrollY > 100) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
        if (footerTop <= windowHeight) {
            header.classList.add("hidden");
            if (button) button.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
            if (button) button.classList.remove("hidden");
        }
    });
});

//# sourceMappingURL=index.a8ee2d06.js.map
