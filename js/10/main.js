const events = [
  { name: "Ambient Night", date: "2026-06-19", category: "Music", seats: 4 },
  { name: "Bike Repair", date: "2026-06-21", category: "Workshop", seats: 8 },
  { name: "Choir Social", date: "2026-06-25", category: "Music", seats: 2 }
];

const list = document.querySelector("#eventList");

const filterEvents = (category = "All") => {
  const clonedEvents = [...events];
  return category === "All" ? clonedEvents : clonedEvents.filter(({ category: eventCategory }) => eventCategory === category);
};

const render = (items = events) => {
  list.innerHTML = items.map(({ name, date, category, seats }) => `<article class="card"><h2>${name}</h2><p>${date}</p><p>${category} - ${seats} seats</p></article>`).join("");
};

document.querySelector("#category").onchange = ({ target }) => render(filterEvents(target.value));
render();
