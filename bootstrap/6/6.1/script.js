(function () {
  "use strict";

  const layoutDemo = document.querySelector("#layoutDemo");
  const guideButton = document.querySelector("#guideButton");
  const previewButton = document.querySelector("#previewButton");
  const startButton = document.querySelector("#startButton");
  const actionAlert = document.querySelector("#actionAlert");
  const layoutBadge = document.querySelector("#layoutBadge");
  const viewportText = document.querySelector("#viewportText");
  const navLinks = document.querySelectorAll(".nav-demo-link");

  function updateLayoutStatus() {
    const width = window.innerWidth;
    const rowLayout = width >= 768;

    if (layoutBadge) {
      layoutBadge.textContent = rowLayout ? "flex-md-row active" : "flex-column active";
      layoutBadge.className = `badge ${rowLayout ? "text-bg-primary" : "text-bg-info"} fs-6`;
    }

    if (viewportText) {
      viewportText.textContent = `Viewport width: ${width}px`;
    }
  }

  function bindGuideToggle() {
    if (!guideButton || !layoutDemo) return;

    guideButton.addEventListener("click", () => {
      const enabled = layoutDemo.classList.toggle("layout-guide");
      guideButton.setAttribute("aria-pressed", String(enabled));
      guideButton.textContent = enabled ? "Hide Flex Guides" : "Show Flex Guides";
    });
  }

  function bindNavLinks() {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });
  }

  function showActionMessage(message, type) {
    if (!actionAlert) return;

    actionAlert.textContent = message;
    actionAlert.className = `alert alert-${type} border-${type}`;
  }

  function bindActionButtons() {
    previewButton?.addEventListener("click", () => {
      const enabled = layoutDemo?.classList.toggle("preview-active") || false;
      previewButton.textContent = enabled ? "Hide Preview" : "Preview";
      previewButton.classList.toggle("btn-info", enabled);
      previewButton.classList.toggle("btn-outline-light", !enabled);
      showActionMessage(
        enabled ? "Preview mode is on. The navbar is highlighted." : "Preview mode is off.",
        enabled ? "info" : "secondary"
      );
    });

    startButton?.addEventListener("click", () => {
      document.querySelector("#features")?.scrollIntoView({ behavior: "smooth", block: "start" });
      showActionMessage("Started the demo. Resize the browser to watch the navbar switch between column and row layouts.", "success");
    });
  }

  window.addEventListener("resize", updateLayoutStatus);
  bindGuideToggle();
  bindNavLinks();
  bindActionButtons();
  updateLayoutStatus();
})();
