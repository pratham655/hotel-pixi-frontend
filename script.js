const BACKEND_URL = "https://pixi-hotel-backend.onrender.com";

// PRICE TABLES (LOCKED)
const roomPrices = {
  Single: 1500,
  Deluxe: 2500,
  Suite: 4000
};

const foodPrices = {
  Pizza: 250,
  Pasta: 220,
  Biryani: 300,
  Burger: 180,
  GrilledChicken: 350
};

let roomCost = 0;
let foodCost = 0;

// ROOM PRICE
function calculateRoomPrice() {
  const room = document.getElementById("room").value;
  roomCost = roomPrices[room] || 0;
  document.getElementById("roomPrice").innerText = roomCost;
  updateFinalBill();
}

// FOOD PRICE
function calculateFoodPrice() {
  const food = document.getElementById("food").value;
  const qty = Number(document.getElementById("quantity").value || 0);
  foodCost = (foodPrices[food] || 0) * qty;
  document.getElementById("foodPrice").innerText = foodCost;
  updateFinalBill();
}

// FINAL BILL
function updateFinalBill() {
  document.getElementById("finalBill").innerText = roomCost + foodCost;
}

// BOOK ROOM
function bookRoom() {
  fetch(`${BACKEND_URL}/book`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("roomMsg").innerText = data.message;
    });
}

// ORDER FOOD
function orderFood() {
  fetch(`${BACKEND_URL}/order`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("foodMsg").innerText = data.message;
    });
}

// PAYMENT
function pay() {
  const method = document.getElementById("paymentMethod").value;
  if (!method) {
    alert("Select payment method");
    return;
  }

  fetch(`${BACKEND_URL}/pay`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("payMsg").innerText =
        `${data.message} via ${method}`;
    });
}


