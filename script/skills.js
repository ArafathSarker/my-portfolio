document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const card = entry.target;
        card.classList.add("show");
        const progress = card.querySelector(".progress-bar span");
        progress.style.width = card.getAttribute("data-skill") + "%";
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.3 });

  skillCards.forEach(card => observer.observe(card));
});
