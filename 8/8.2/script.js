(function () {
  "use strict";

  const form = document.querySelector("#loginForm");
  const alertBox = document.querySelector("#loginAlert");
  const password = document.querySelector("#password");
  const togglePassword = document.querySelector("#togglePassword");

  togglePassword?.addEventListener("click", () => {
    if (!password || !togglePassword) return;

    const shouldShow = password.type === "password";
    password.type = shouldShow ? "text" : "password";
    togglePassword.textContent = shouldShow ? "Hide" : "Show";
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add("was-validated");

    if (!form.checkValidity() || !alertBox) return;

    alertBox.textContent = `Login preview ready for ${form.email.value}.`;
    alertBox.classList.remove("d-none");
    alertBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  form?.addEventListener("reset", () => {
    form.classList.remove("was-validated");
    alertBox?.classList.add("d-none");
    if (password && togglePassword) {
      password.type = "password";
      togglePassword.textContent = "Show";
    }
  });
})();
