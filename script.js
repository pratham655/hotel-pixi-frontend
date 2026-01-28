const roomPrices = {
  Single: 1500,
  Deluxe: 2500,
  Suite: 4000
};

const foodPrices = {
  Pizza: 250,
  Burger: 180,
  Pasta: 220,
  Biryani: 300,
  "Grilled Chicken": 350
};

let finalFoodPrice = 0;

// ROOM PRICE
function calculateRoomPrice() {
  const room = document.getElementById("room").value;
  document.getElementById("roomPrice").innerText = roomPrices[room] || 0;
}

// BOOK ROOM
function bookRoom() {
  document.getElementById("result").innerText = "✅ Room Booking Confirmed!";
}

// FOOD PRICE
function calculateFoodPrice() {
  const food = document.getElementById("food").value;
  const qty = document.getElementById("quantity").value || 0;

  finalFoodPrice = (foodPrices[food] || 0) * qty;
  document.getElementById("foodPrice").innerText = finalFoodPrice;
}

// ORDER FOOD
function orderFood() {
  document.getElementById("foodResult").innerText =
    `✅ Food Ordered | Total ₹${finalFoodPrice}`;
}

// PAYMENT
function pay() {
  const method = document.getElementById("paymentMethod").value;
  if (!method) {
    alert("Select payment method");
    return;
  }
  document.getElementById("payResult").innerText =
    `✅ Payment Successful via ${method}`;
}

