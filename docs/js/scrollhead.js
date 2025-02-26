window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");

  if (!header || !footer) return;

  const footerTop = footer.getBoundingClientRect().top;
  const headerHeight = header.offsetHeight;

  if (window.scrollY > 100) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }

  if (footerTop <= headerHeight + 10) { 
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
  } else {
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
  }
});
