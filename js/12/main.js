const form = document.querySelector("#registerForm");
const message = document.querySelector("#message");

function delay(ms = 1200) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { name, email, eventName } = form.elements;
  const payload = { name: name.value, email: email.value, eventName: eventName.value };

  message.textContent = "Sending registration...";
  await delay();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("Mock API rejected the request.");
    message.textContent = "Registration submitted successfully.";
    form.reset();
  } catch (error) {
    message.textContent = `Submission failed: ${error.message}`;
  }
});
