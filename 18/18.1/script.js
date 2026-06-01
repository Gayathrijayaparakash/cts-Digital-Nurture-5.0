const demoModalElement = document.querySelector("#demoModal");
const openModalWithJsButton = document.querySelector("#openModalWithJs");
const modalStatus = document.querySelector("#modalStatus");

const demoModal = new bootstrap.Modal(demoModalElement);

openModalWithJsButton.addEventListener("click", () => {
  demoModal.show();
});

demoModalElement.addEventListener("shown.bs.modal", () => {
  modalStatus.textContent = "Modal is open.";
});

demoModalElement.addEventListener("hidden.bs.modal", () => {
  modalStatus.textContent = "Modal is ready.";
});
