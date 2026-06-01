(function () {
  "use strict";

  const alertBox = document.querySelector("#selectionAlert");
  const toggles = document.querySelectorAll(".btn-check");

  function updateSelection() {
    if (!alertBox) return;

    const selected = Array.from(toggles)
      .filter((toggle) => toggle.checked)
      .map((toggle) => toggle.value);

    alertBox.textContent = `Selected toggles: ${selected.length ? selected.join(", ") : "None"}`;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("change", updateSelection);
  });

  updateSelection();
})();
