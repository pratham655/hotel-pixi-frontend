const BASE_URL = "https://pixi-hotel-backend.onrender.com";

// FOOD PRICE LOGIC
const prices = {
  Pizza: 250,
  Burger: 180,
  Pasta: 220,
  Biryani: 300
};

window.onload = function () {
  const food = document.getElementById("food");
  const quantity = document.getElementById("quantity");

  food.addEventListener("change", updatePrice);
  quantity.addEventListener("input", updatePrice);

  function updatePrice() {
    const item = food.value;
    const qty = Number(quantity.value) || 0;
    const total = prices[item] ? prices[item] * qty : 0;
    document.getElementById("price").innerText = total;
  }
};

// ROOM BOOKING
function bookRoom() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    room: document.getElementById("room").value,
    date: document.getElementById("date").value
  };

  fetch(`${BASE_URL}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      document.getElementById("result").innerText =
        "✅ Room Booking Confirmed!";
    })
    .catch(() => {
      document.getElementById("result").innerText =
        "❌ Room booking failed";
    });
}

// FOOD ORDER
function orderFood() {
  const food = document.getElementById("food").value;
  const qty = Number(document.getElementById("quantity").value);
  const amount = prices[food] * qty;

  fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      food,
      quantity: qty,
      amount
    })
  })
    .then(res => res.json())
    .then(() => {
      document.getElementById("foodResult").innerText =
        `✅ Food Order Confirmed! Total Bill ₹${amount}`;
    })
    .catch(() => {
      document.getElementById("foodResult").innerText =
        "❌ Food order failed";
    });
}

