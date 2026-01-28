const backendURL = "https://pixi-hotel-backend.onrender.com";

let roomCost = 0;
let foodCost = 0;

function calculateRoomPrice() {
  const prices = {
    Single: 2000,
    Deluxe: 3500,
    Suite: 6000
  };

  const room = document.getElementById("room").value;
  roomCost = prices[room] || 0;
  document.getElementById("roomPrice").innerText = roomCost;
  updateFinalBill();
}

function calculateFoodPrice() {
  const prices = {
    Biryani: 300,
    Pasta: 220,
    Tacos: 250,
    Steak: 400,
    Noodles: 200
  };

  const food = document.getElementById("food").value;
  const qty = document.getElementById("quantity").value || 0;
  foodCost = (prices[food] || 0) * qty;

  document.getElementById("foodPrice").innerText = foodCost;
  updateFinalBill();
}

function updateFinalBill() {
  document.getElementById("finalBill").innerText = roomCost + foodCost;
}

function bookRoom() {
  fetch(`${backendURL}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      room: room.value,
      date: date.value,
      price: roomCost
    })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("roomResult").innerText = " Room Booking Confirmed!";
  });
}

function orderFood() {
  fetch(`${backendURL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      food: food.value,
      quantity: quantity.value,
      price: foodCost
    })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("foodResult").innerText =
      ` Food Order Confirmed! Total ₹${foodCost}`;
  });
}

function makePayment() {
  const mode = document.getElementById("paymentMode").value;

  if (!mode) {
    alert("Select payment mode");
    return;
  }

  fetch(`${backendURL}/pay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      total: roomCost + foodCost,
      mode: mode
    })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("paymentResult").innerText =
      ` Payment Successful via ${mode}`;
  });
}
