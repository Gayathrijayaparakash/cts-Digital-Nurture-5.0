const form = document.querySelector("#debugForm");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Step 1: submit event captured");

  const { name, email } = form.elements;
  const payload = { name: name.value.trim(), email: email.value.trim(), eventName: "Debug Clinic" };
  console.log("Step 2: payload prepared", payload);

  try {
    console.log("Step 3: sending fetch request");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    console.log("Step 4: network response", response.status);
    result.textContent = "Check Console and Network tab for the request payload.";
  } catch (error) {
    console.error("Fetch failed", error);
    result.textContent = "Fetch failed. Inspect the console error and Network tab.";
  }
});
