(function () {
  "use strict";

  const centerStage = document.querySelector("#centerStage");
  const toggleButton = document.querySelector("#toggleCenterButton");
  const stateBadge = document.querySelector("#stateBadge");

  function setCentered(enabled) {
    if (!centerStage || !toggleButton || !stateBadge) return;

    centerStage.classList.toggle("justify-content-center", enabled);
    centerStage.classList.toggle("align-items-center", enabled);
    centerStage.classList.toggle("justify-content-start", !enabled);
    centerStage.classList.toggle("align-items-start", !enabled);

    toggleButton.setAttribute("aria-pressed", String(enabled));
    toggleButton.textContent = enabled ? "Turn Centering Off" : "Turn Centering On";
    stateBadge.textContent = enabled ? "Centered" : "Not centered";
    stateBadge.className = `badge ${enabled ? "text-bg-info" : "text-bg-warning"} fs-6`;
  }

  function bindToggle() {
    if (!toggleButton || !centerStage) return;

    toggleButton.addEventListener("click", () => {
      const isCentered = centerStage.classList.contains("justify-content-center");
      setCentered(!isCentered);
    });
  }

  bindToggle();
  setCentered(true);
})();
