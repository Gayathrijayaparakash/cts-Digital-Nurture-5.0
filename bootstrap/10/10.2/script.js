(function () {
  "use strict";

  const activeStatus = document.querySelector("#activeStatus");
  const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

  tabButtons.forEach((button) => {
    button.addEventListener("shown.bs.tab", (event) => {
      if (!activeStatus) return;

      activeStatus.textContent = `Active tab: ${event.target.textContent.trim()}`;
    });
  });
})();
