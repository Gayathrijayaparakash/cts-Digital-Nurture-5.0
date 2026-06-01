(function () {
  "use strict";

  const layoutDemo = document.querySelector("#layoutDemo");
  const guideButton = document.querySelector("#guideButton");
  const statusBadge = document.querySelector("#statusBadge");

  function bindGuideToggle() {
    if (!layoutDemo || !guideButton || !statusBadge) return;

    guideButton.addEventListener("click", () => {
      const enabled = layoutDemo.classList.toggle("layout-guide");
      guideButton.setAttribute("aria-pressed", String(enabled));
      guideButton.textContent = enabled ? "Hide Flex Guides" : "Show Flex Guides";
      statusBadge.textContent = enabled ? "Guides visible" : "Flex active";
      statusBadge.className = `badge ${enabled ? "text-bg-warning" : "text-bg-info"} fs-6`;
    });
  }

  bindGuideToggle();
})();
