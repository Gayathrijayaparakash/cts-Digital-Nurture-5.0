const events = [
  { name: "Code Help Desk", date: "2026-06-12", seats: 4 },
  { name: "Past Cleanup Drive", date: "2024-01-10", seats: 8 },
  { name: "Full Yoga Morning", date: "2026-07-01", seats: 0 },
  { name: "Community Film Night", date: "2026-06-24", seats: 6 }
];

const list = document.querySelector("#eventList");
const status = document.querySelector("#status");

function register(eventItem) {
  try {
    if (eventItem.seats <= 0) {
      throw new Error("No seats available.");
    }
    eventItem.seats--;
    status.textContent = `Registered for ${eventItem.name}. Seats left: ${eventItem.seats}`;
    renderEvents();
  } catch (error) {
    status.textContent = error.message;
  }
}

function renderEvents() {
  list.innerHTML = "";
  events.forEach((eventItem) => {
    const isUpcoming = new Date(eventItem.date) >= new Date();
    if (isUpcoming && eventItem.seats > 0) {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<h2>${eventItem.name}</h2><p class="muted">${eventItem.date}</p><p>${eventItem.seats} seats available</p>`;
      const button = document.createElement("button");
      button.textContent = "Register";
      button.onclick = () => register(eventItem);
      card.append(button);
      list.append(card);
    }
  });
}

renderEvents();
