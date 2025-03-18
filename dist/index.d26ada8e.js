document.addEventListener("DOMContentLoaded", ()=>{
    const cards = document.querySelectorAll(".delivery-card");
    const contactInfo = document.querySelector(".contact-info");
    let currentIndex = 0;
    let isAnimating = false;
    window.addEventListener("wheel", (event)=>{
        if (isAnimating) return;
        const scrollDirection = event.deltaY > 0 ? "down" : "up";
        if (scrollDirection === "down" && currentIndex < cards.length) {
            isAnimating = true;
            const card = cards[currentIndex];
            card.style.transform = "translateY(-150px) scale(0.85)";
            card.style.opacity = "0";
            currentIndex++;
            if (currentIndex === cards.length) setTimeout(()=>{
                contactInfo.style.opacity = "1";
                contactInfo.style.transform = "translateY(0)";
            }, 500);
        } else if (scrollDirection === "up" && currentIndex > 0) {
            isAnimating = true;
            currentIndex--;
            const card = cards[currentIndex];
            card.style.transform = `translateY(${currentIndex * 15}px)`;
            card.style.opacity = "1";
            if (currentIndex < cards.length) {
                contactInfo.style.opacity = "0";
                contactInfo.style.transform = "translateY(20px)";
            }
        }
        setTimeout(()=>{
            isAnimating = false;
        }, 500);
    });
});

//# sourceMappingURL=product.d26ada8e.js.map
