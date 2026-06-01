(function () {
  "use strict";

  const form = document.querySelector("#registrationForm");
  const successAlert = document.querySelector("#successAlert");
  const password = document.querySelector("#password");
  const passwordStrength = document.querySelector("#passwordStrength");
  const passwordHint = document.querySelector("#passwordHint");
  const togglePassword = document.querySelector("#togglePassword");

  function setPasswordStrength() {
    if (!password || !passwordStrength || !passwordHint) return;

    const value = password.value;
    let score = 0;

    if (value.length >= 8) score += 35;
    if (/[A-Z]/.test(value)) score += 20;
    if (/[0-9]/.test(value)) score += 20;
    if (/[^A-Za-z0-9]/.test(value)) score += 25;

    passwordStrength.style.width = `${Math.min(score, 100)}%`;
    passwordStrength.className = "progress-bar";

    if (score >= 75) {
      passwordStrength.classList.add("bg-success");
      passwordHint.textContent = "Strong password.";
    } else if (score >= 45) {
      passwordStrength.classList.add("bg-warning");
      passwordHint.textContent = "Good start. Add numbers, symbols, or uppercase letters.";
    } else {
      passwordStrength.classList.add("bg-danger");
      passwordHint.textContent = "Use at least 8 characters.";
    }
  }

  function showSuccessMessage() {
    if (!successAlert || !form) return;

    const firstName = form.firstName.value.trim();
    const plan = form.plan.value;

    successAlert.textContent = `Registration preview created for ${firstName || "your account"} on the ${plan} plan.`;
    successAlert.classList.remove("d-none");
    successAlert.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  togglePassword?.addEventListener("click", () => {
    if (!password || !togglePassword) return;

    const show = password.type === "password";
    password.type = show ? "text" : "password";
    togglePassword.textContent = show ? "Hide" : "Show";
  });

  password?.addEventListener("input", setPasswordStrength);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add("was-validated");

    if (form.checkValidity()) {
      showSuccessMessage();
    }
  });

  form?.addEventListener("reset", () => {
    form.classList.remove("was-validated");
    successAlert?.classList.add("d-none");
    setTimeout(setPasswordStrength, 0);
  });

  setPasswordStrength();
})();
