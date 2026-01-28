

const BASE_URL = "https://pixi-hotel-backend.onrender.com";

const prices = {
  Pizza: 250,
  Pasta: 220,
  "Grilled Chicken": 300,
  Salad: 150,
  "Fried Rice": 180,
  Noodles: 160,
  Tacos: 200,
  Burrito: 240
};

window.onload = () => {
  const food = document.getElementById("food");
  const qty = document.getElementById("quantity");

  food.onchange = updatePrice;
  qty.oninput = updatePrice;

  function updatePrice() {
    const item = food.value;
    const q = Number(qty.value) || 0;
    document.getElementById("price").innerText =
      prices[item] ? prices[item] * q : 0;
  }
};

function bookRoom() {
  fetch(`${BASE_URL}/book`, { method: "POST" })
    .then(r => r.json())
    .then(d => {
      document.getElementById("result").innerText = d.message;
    });
}

function orderFood() {
  const total = document.getElementById("price").innerText;
  fetch(`${BASE_URL}/order`, { method: "POST" })
    .then(r => r.json())
    .then(d => {
      document.getElementById("foodResult").innerText =
        `${d.message} | Total ₹${total}`;
    });
}

function payNow() {
  fetch(`${BASE_URL}/pay`, { method: "POST" })
    .then(r => r.json())
    .then(d => {
      document.getElementById("payMsg").innerText = d.message;
    });
}
