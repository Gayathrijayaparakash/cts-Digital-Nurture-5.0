const list = document.querySelector("#eventList");
const loading = document.querySelector("#loading");

function render(events) {
  list.innerHTML = events.map((eventItem) => `<article class="card"><h2>${eventItem.name}</h2><p>${eventItem.category}</p><p>${eventItem.location}</p></article>`).join("");
}

fetch("events.json")
  .then((response) => response.json())
  .then((events) => console.log("Loaded with .then():", events.length))
  .catch((error) => console.error("Promise fetch failed:", error));

async function loadEvents() {
  try {
    loading.style.display = "block";
    const response = await fetch("events.json");
    const events = await response.json();
    render(events);
  } catch (error) {
    list.innerHTML = `<article class="card"><h2>Could not load events</h2><p>${error.message}</p></article>`;
  } finally {
    loading.style.display = "none";
  }
}

loadEvents();
