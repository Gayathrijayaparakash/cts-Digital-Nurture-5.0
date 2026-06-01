(function () {
  "use strict";

  const grid = document.querySelector("#reorderGrid");
  const outlineButton = document.querySelector("#outlineButton");
  const orderBadge = document.querySelector("#orderBadge");
  const viewportText = document.querySelector("#viewportText");

  function updateOrderStatus() {
    const width = window.innerWidth;
    const reordered = width >= 768;

    if (orderBadge) {
      orderBadge.textContent = reordered ? "Medium order: B then A" : "Mobile order: A then B";
      orderBadge.className = `badge ${reordered ? "text-bg-danger" : "text-bg-info"} fs-6`;
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

  window.addEventListener("resize", updateOrderStatus);
  bindOutlineToggle();
  updateOrderStatus();
})();
