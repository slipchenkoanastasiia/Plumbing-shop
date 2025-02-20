const reviewsSection = document.querySelector('.reviews-section');
const reviewCards = document.querySelectorAll('.review-card');
const observerOptions = {
    root: null,
    threshold: 0.1
};
const observerCallback = (entries, observer)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            reviewCards.forEach((card)=>card.classList.add('card-visible'));
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(reviewsSection);

//# sourceMappingURL=index.9866350b.js.map
