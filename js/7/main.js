const events = [
  { name: "Community Chess", seats: 3, registered: false },
  { name: "Open Garden Tour", seats: 5, registered: false },
  { name: "Skill Swap", seats: 2, registered: false }
];

const eventList = document.querySelector("#eventList");

function renderEvents() {
  eventList.innerHTML = "";
  events.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h2");
    title.textContent = eventItem.name;
    const seats = document.createElement("p");
    seats.textContent = `${eventItem.seats} seats available`;
    const register = document.createElement("button");
    register.textContent = eventItem.registered ? "Registered" : "Register";
    register.onclick = () => {
      if (!eventItem.registered && eventItem.seats > 0) {
        eventItem.seats--;
        eventItem.registered = true;
      }
      renderEvents();
    };
    const cancel = document.createElement("button");
    cancel.className = "ghost";
    cancel.textContent = "Cancel";
    cancel.onclick = () => {
      if (eventItem.registered) {
        eventItem.seats++;
        eventItem.registered = false;
      }
      renderEvents();
    };
    card.append(title, seats, register, cancel);
    eventList.append(card);
  });
}

renderEvents();
