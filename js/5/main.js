function CommunityEvent(name, date, category, seats) {
  this.name = name;
  this.date = date;
  this.category = category;
  this.seats = seats;
}

CommunityEvent.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

const events = [
  new CommunityEvent("Repair Cafe", "2026-06-16", "Workshop", 4),
  new CommunityEvent("Green Concert", "2026-06-20", "Music", 0)
];

const list = document.querySelector("#eventList");

events.forEach((eventItem) => {
  const card = document.createElement("article");
  card.className = "card";
  const entries = Object.entries(eventItem).map(([key, value]) => `${key}: ${value}`).join("\n");
  card.innerHTML = `<h2>${eventItem.name}</h2><p>${eventItem.checkAvailability()}</p><code>${entries}</code>`;
  list.append(card);
});
