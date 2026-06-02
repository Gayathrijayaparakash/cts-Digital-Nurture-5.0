const events = [
  { title: "Jazz in the Park", category: "Music" },
  { title: "Baking", category: "Workshop" },
  { title: "Choir Meetup", category: "Music" }
];

const list = document.querySelector("#eventList");

function render() {
  const musicEvents = events.filter((eventItem) => eventItem.category === "Music");
  const cards = musicEvents.map((eventItem) => `Workshop on ${eventItem.title}`);
  list.innerHTML = cards.map((title) => `<article class="card"><h2>${title}</h2><p>Category filtered with .filter() and formatted with .map().</p></article>`).join("");
}

document.querySelector("#addEvent").onclick = () => {
  events.push({ title: "Community Drums", category: "Music" });
  render();
};

render();
