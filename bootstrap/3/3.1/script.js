(function () {
  "use strict";

  const breakpointBadge = document.querySelector("#breakpointBadge");
  const viewportText = document.querySelector("#viewportText");
  const viewportMeter = document.querySelector("#viewportMeter");
  const guideButton = document.querySelector("#guideButton");
  const grid = document.querySelector("#responsiveGrid");

  function getBreakpoint(width) {
    if (width >= 992) {
      return {
        label: "Desktop: 3 columns",
        className: "text-bg-success",
      };
    }

    if (width >= 768) {
      return {
        label: "Tablet: 2 per row",
        className: "text-bg-warning",
      };
    }

    return {
      label: "Mobile: stacked",
      className: "text-bg-info",
    };
  }

  function updateViewport() {
    const width = window.innerWidth;
    const breakpoint = getBreakpoint(width);

    if (breakpointBadge) {
      breakpointBadge.textContent = breakpoint.label;
      breakpointBadge.className = `badge ${breakpoint.className} fs-6`;
    }

    if (viewportText) {
      viewportText.textContent = `Viewport width: ${width}px`;
    }

    if (viewportMeter) {
      const percent = Math.min(100, Math.round((width / 1440) * 100));
      viewportMeter.style.width = `${percent}%`;
    }
  }

  function bindGuideToggle() {
    if (!guideButton || !grid) return;

    guideButton.addEventListener("click", () => {
      const enabled = grid.classList.toggle("layout-guide");
      guideButton.setAttribute("aria-pressed", String(enabled));
      guideButton.textContent = enabled ? "Hide Layout Guides" : "Show Layout Guides";
    });
  }

  window.addEventListener("resize", updateViewport);
  bindGuideToggle();
  updateViewport();
})();
