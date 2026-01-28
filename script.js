const BACKEND = "https://pixi-hotel-backend.onrender.com";

// ROOM PRICES
const roomPrices = {
  Single: 1500,
  Deluxe: 2500,
  Suite: 4000
};

function updateRoomPrice() {
  const room = document.getElementById("room").value;
  document.getElementById("roomPrice").innerText = roomPrices[room] || 0;
}

function bookRoom() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    room: document.getElementById("room").value,
    date: document.getElementById("date").value,
    price: document.getElementById("roomPrice").innerText
  };

  fetch(`${BACKEND}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById("result").innerText = res.message;
  });
}


