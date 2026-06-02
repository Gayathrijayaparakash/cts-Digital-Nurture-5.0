let events = [
  { name: "Street Beats", category: "Music", seats: 3 },
  { name: "Baking Basics", category: "Workshop", seats: 5 },
  { name: "Sunday Futsal", category: "Sports", seats: 7 }
];

const list = document.querySelector("#eventList");
const log = document.querySelector("#log");

function createCategoryCounter(category) {
  let total = 0;
  return () => {
    total++;
    return `${category} registrations: ${total}`;
  };
}

const musicCounter = createCategoryCounter("Music");
const workshopCounter = createCategoryCounter("Workshop");
const sportsCounter = createCategoryCounter("Sports");

function addEvent(eventItem = { name: "Open Mic Lab", category: "Music", seats: 4 }) {
  events.push(eventItem);
  render(events);
}

function registerUser(eventItem) {
  if (eventItem.seats > 0) {
    eventItem.seats--;
    const counters = { Music: musicCounter, Workshop: workshopCounter, Sports: sportsCounter };
    log.textContent = counters[eventItem.category]();
    render(events);
  }
}

function filterEventsByCategory(category, callback) {
  const filtered = category === "All" ? events : events.filter((eventItem) => eventItem.category === category);
  return callback(filtered);
}

function dynamicSearch(items, searchText) {
  return items.filter((eventItem) => eventItem.name.toLowerCase().includes(searchText.toLowerCase()));
}

function render(items) {
  list.innerHTML = "";
  items.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h2>${eventItem.name}</h2><p>${eventItem.category}</p><p>${eventItem.seats} seats</p>`;
    const button = document.createElement("button");
    button.textContent = "Register";
    button.onclick = () => registerUser(eventItem);
    card.append(button);
    list.append(card);
  });
}

document.querySelector("#addBtn").onclick = () => addEvent();
document.querySelector("#category").onchange = (event) => filterEventsByCategory(event.target.value, render);
document.querySelector("#search").oninput = (event) => render(dynamicSearch(events, event.target.value));
render(events);
