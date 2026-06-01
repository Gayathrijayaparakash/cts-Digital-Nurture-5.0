const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const socialToastElement = document.querySelector("#socialToast");
const showToastButton = document.querySelector("#showToastBtn");

tooltipElements.forEach((element) => {
  new bootstrap.Tooltip(element);
});

const socialToast = new bootstrap.Toast(socialToastElement);

showToastButton.addEventListener("click", () => {
  socialToast.show();
});
