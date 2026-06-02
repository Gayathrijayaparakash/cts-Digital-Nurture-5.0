const eventName = "Neon Night Market";
const eventDate = "2026-06-18";
let availableSeats = 5;

const eventInfo = document.querySelector("#eventInfo");
const seatCount = document.querySelector("#seatCount");
const registerBtn = document.querySelector("#registerBtn");

function render() {
  eventInfo.textContent = `${eventName} is happening on ${eventDate}.`;
  seatCount.textContent = availableSeats;
}

registerBtn.onclick = () => {
  if (availableSeats > 0) {
    availableSeats--;
    render();
  }
};

render();
