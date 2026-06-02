const form = document.querySelector("#registerForm");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, email, eventName } = form.elements;
  let valid = true;

  document.querySelector("#nameError").textContent = "";
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#eventError").textContent = "";
  result.textContent = "";

  if (name.value.trim().length < 2) {
    document.querySelector("#nameError").textContent = "Enter at least 2 characters.";
    valid = false;
  }
  if (!email.value.includes("@")) {
    document.querySelector("#emailError").textContent = "Enter a valid email address.";
    valid = false;
  }
  if (!eventName.value) {
    document.querySelector("#eventError").textContent = "Select an event.";
    valid = false;
  }
  if (valid) {
    result.textContent = `${name.value} registered for ${eventName.value}.`;
    form.reset();
  }
});
