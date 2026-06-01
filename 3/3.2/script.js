(function () {
  "use strict";

  const layoutDemo = document.querySelector("#layoutDemo");
  const outlineButton = document.querySelector("#outlineButton");
  const breakpointBadge = document.querySelector("#breakpointBadge");
  const viewportText = document.querySelector("#viewportText");

  function getBreakpoint(width) {
    if (width >= 1200) return { label: "XL: wide desktop", className: "text-bg-success" };
    if (width >= 992) return { label: "LG: desktop", className: "text-bg-success" };
    if (width >= 768) return { label: "MD: tablet", className: "text-bg-warning" };
    if (width >= 576) return { label: "SM: large phone", className: "text-bg-info" };
    return { label: "XS: mobile", className: "text-bg-info" };
  }

  function updateViewportLabel() {
    const width = window.innerWidth;
    const breakpoint = getBreakpoint(width);

    if (breakpointBadge) {
      breakpointBadge.textContent = breakpoint.label;
      breakpointBadge.className = `badge ${breakpoint.className} fs-6`;
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
      outlineButton.textContent = enabled ? "Hide Grid Outlines" : "Show Grid Outlines";
    });
  }

  window.addEventListener("resize", updateViewportLabel);
  bindOutlineToggle();
  updateViewportLabel();
})();
