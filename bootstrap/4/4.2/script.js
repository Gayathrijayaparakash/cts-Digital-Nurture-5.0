(function () {
  "use strict";

  const grid = document.querySelector("#fourColumnGrid");
  const outlineButton = document.querySelector("#outlineButton");
  const layoutBadge = document.querySelector("#layoutBadge");
  const viewportText = document.querySelector("#viewportText");

  function updateLayoutStatus() {
    const width = window.innerWidth;
    const isFourColumns = width >= 576;

    if (layoutBadge) {
      layoutBadge.textContent = isFourColumns ? "Four equal columns" : "Stacked columns";
      layoutBadge.className = `badge ${isFourColumns ? "text-bg-success" : "text-bg-info"} fs-6`;
    }

    if (viewportText) {
      viewportText.textContent = `Viewport width: ${width}px`;
    }
  }

  function bindOutlineToggle() {
    if (!grid || !outlineButton) return;

    outlineButton.addEventListener("click", () => {
      const enabled = grid.classList.toggle("layout-outline");
      outlineButton.setAttribute("aria-pressed", String(enabled));
      outlineButton.textContent = enabled ? "Hide Column Outlines" : "Show Column Outlines";
    });
  }

  window.addEventListener("resize", updateLayoutStatus);
  bindOutlineToggle();
  updateLayoutStatus();
})();
