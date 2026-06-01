(function () {
  "use strict";

  const alertBox = document.querySelector("#buttonAlert");
  const buttons = document.querySelectorAll("button[data-class]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!alertBox) return;

      const className = button.getAttribute("data-class") || "btn";
      alertBox.innerHTML = `Clicked button class: <code>${className}</code>`;
      alertBox.classList.remove("d-none");
    });
  });
})();
