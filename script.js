const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
});
