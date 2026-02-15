window.addEventListener("load", () => {
  const section = document.querySelector(".contact-section");
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";

  setTimeout(() => {
    section.style.transition = "all 0.9s ease";
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }, 150);
});
