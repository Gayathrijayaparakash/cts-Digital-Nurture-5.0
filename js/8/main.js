const events = [
  { name: "Neon Folk Jam", category: "Music", seats: 5 },
  { name: "Zero Waste Cooking", category: "Food", seats: 3 },
  { name: "Digital Safety Clinic", category: "Learning", seats: 6 }
];

const list = document.querySelector("#eventList");
const category = document.querySelector("#category");
const search = document.querySelector("#search");

function render() {
  const selected = category.value;
  const text = search.value.toLowerCase();
  const filtered = events.filter((eventItem) => {
    const categoryMatch = selected === "All" || eventItem.category === selected;
    const nameMatch = eventItem.name.toLowerCase().includes(text);
    return categoryMatch && nameMatch;
  });
  list.innerHTML = "";
  filtered.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h2>${eventItem.name}</h2><p>${eventItem.category}</p><p>${eventItem.seats} seats</p><button>Register</button>`;
    card.querySelector("button").onclick = () => alert(`Registered for ${eventItem.name}`);
    list.append(card);
  });
}

category.onchange = render;
search.addEventListener("keydown", () => setTimeout(render, 0));
render();
