const demoCard = document.querySelector("#demoCard");
const shadowButtons = document.querySelectorAll("[data-shadow]");

shadowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedShadow = button.dataset.shadow;

    demoCard.classList.remove("shadow", "shadow-lg");
    demoCard.classList.add(selectedShadow);

    shadowButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});
