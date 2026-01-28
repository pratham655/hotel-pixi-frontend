const API = "https://pixi-hotel-backend.onrender.com";

let roomCost = 0;
let foodCost = 0;

// ROOM PRICE
function calculateRoomPrice() {
  const prices = {
    Single: 1500,
    Deluxe: 3000,
    Suite: 5000
  };

  const room = document.getElementById("room").value;
  roomCost = prices[room] || 0;
  document.getElementById("roomPrice").innerText = roomCost;
}

// BOOK ROOM
function bookRoom() {
  fetch(API + "/book", {
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
    result.innerText = ` Room booked! Total ₹${roomCost}`;
  });
}

// FOOD PRICE
function calculateFoodPrice() {
  const foodPrices = {
    Pizza: 250,
    Burger: 180,
    Pasta: 220,
    Biryani: 300,
    "Grilled Chicken": 300
  };

  const food = document.getElementById("food").value;
  const qty = quantity.value || 0;
  foodCost = foodPrices[food] * qty || 0;
  document.getElementById("foodPrice").innerText = foodCost;
}

// ORDER FOOD
function orderFood() {
  fetch(API + "/order", {
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
    foodResult.innerText = ` Food ordered! Total ₹${foodCost}`;
  });
}

// PAYMENT
function pay() {
  const method = paymentMethod.value;
  const total = roomCost + foodCost;

  fetch(API + "/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      method,
      total
    })
  })
  .then(res => res.json())
  .then(() => {
    payMsg.innerText = `Payment successful via ${method} | ₹${total}`;
  });
}
