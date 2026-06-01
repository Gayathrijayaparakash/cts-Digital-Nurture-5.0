(function () {
  "use strict";

  const layoutDemo = document.querySelector("#layoutDemo");
  const outlineButton = document.querySelector("#outlineButton");
  const layoutBadge = document.querySelector("#layoutBadge");
  const viewportText = document.querySelector("#viewportText");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  function updateViewportStatus() {
    const width = window.innerWidth;
    const isTwoColumn = width >= 768;

    if (layoutBadge) {
      layoutBadge.textContent = isTwoColumn ? "Two columns: col-md-3 + col-md-9" : "Stacked: col-12";
      layoutBadge.className = `badge ${isTwoColumn ? "text-bg-success" : "text-bg-info"} fs-6`;
    }

    if (viewportText) {
      viewportText.textContent = `Viewport width: ${width}px`;
    }
  }

  function bindOutlineToggle() {
    if (!outlineButton || !layoutDemo) return;

    outlineButton.addEventListener("click", () => {
      const enabled = layoutDemo.classList.toggle("layout-outline");
      outlineButton.setAttribute("aria-pressed", String(enabled));
      outlineButton.textContent = enabled ? "Hide Layout Outline" : "Show Layout Outline";
    });
  }

  function bindSidebarLinks() {
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        sidebarLinks.forEach((item) => item.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });
  }

  window.addEventListener("resize", updateViewportStatus);
  bindOutlineToggle();
  bindSidebarLinks();
  updateViewportStatus();
})();
