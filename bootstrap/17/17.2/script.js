const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const actionButtons = document.querySelectorAll("[data-action]");
const actionStatus = document.querySelector("#actionStatus");
const actionToastElement = document.querySelector("#actionToast");
const toastMessage = document.querySelector("#toastMessage");

tooltipElements.forEach((element) => {
  new bootstrap.Tooltip(element);
});

const actionToast = new bootstrap.Toast(actionToastElement);

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    actionStatus.textContent = `${action} action selected.`;
    toastMessage.textContent = `${action} button clicked.`;
    actionToast.show();

    document.querySelectorAll(".icon-btn.active").forEach((activeButton) => {
      activeButton.classList.remove("active");
    });

    if (button.classList.contains("icon-btn")) {
      button.classList.add("active");
    }
  });
});
