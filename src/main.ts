import "./style.css";

const toggles = document.querySelectorAll<HTMLButtonElement>(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.parentElement;
    if (parent) {
      parent.classList.toggle("active");
    }
  });
});
