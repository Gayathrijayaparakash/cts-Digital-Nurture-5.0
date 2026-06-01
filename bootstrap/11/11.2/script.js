(function () {
  "use strict";

  const layoutDemo = document.querySelector("#layoutDemo");
  const guideButton = document.querySelector("#guideButton");

  guideButton?.addEventListener("click", () => {
    const enabled = layoutDemo?.classList.toggle("layout-guide") || false;
    guideButton.setAttribute("aria-pressed", String(enabled));
    guideButton.textContent = enabled ? "Hide Layout Guide" : "Show Layout Guide";
  });
})();
