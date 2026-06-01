(function () {
  "use strict";

  const selectedUtility = document.querySelector("#selectedUtility");
  const sampleCards = document.querySelectorAll(".sample-card");

  sampleCards.forEach((card) => {
    card.addEventListener("click", () => {
      const utility = card.getAttribute("data-utility") || "Unknown utility";

      sampleCards.forEach((item) => item.classList.remove("is-selected"));
      card.classList.add("is-selected");

      if (selectedUtility) {
        selectedUtility.innerHTML = `Selected class: <code>${utility}</code>`;
      }
    });
  });
})();
