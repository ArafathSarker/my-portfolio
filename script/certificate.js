document.addEventListener("DOMContentLoaded", () => {
  const certCards = document.querySelectorAll(".certificate-card");
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".modal .close");

  // Intersection animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  certCards.forEach(card => {
    observer.observe(card);

    // 🔹 Click event to open modal
    const img = card.querySelector("img");
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
      modalImg.classList.remove("zoomOut"); // reset animation
      modalImg.classList.add("zoomIn");
    });
  });

  // 🔹 Close modal
  closeBtn.addEventListener("click", () => {
    modalImg.classList.remove("zoomIn");
    modalImg.classList.add("zoomOut");
    setTimeout(() => modal.style.display = "none", 400);
  });

  // 🔹 Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalImg.classList.remove("zoomIn");
      modalImg.classList.add("zoomOut");
      setTimeout(() => modal.style.display = "none", 400);
    }
  });
});
