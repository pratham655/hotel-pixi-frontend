
// ---------------- ROOM BOOKING ----------------
function bookRoom() {
  const bookingData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    room: document.getElementById("room").value,
    date: document.getElementById("date").value,
    status: "Confirmed"
  };

  if (!bookingData.name || !bookingData.email || !bookingData.room || !bookingData.date) {
    document.getElementById("result").innerText =
      "Please fill all booking details";
    return;
  }

  fetch("https://pixi-hotel-backend.onrender.com/order")
 {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookingData)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText = data.message;
  })
  .catch(() => {
    document.getElementById("result").innerText = "Booking failed";
  });
}


// ---------------- FOOD ORDER WITH BILL ----------------
function orderFood() {
  const food = document.getElementById("food").value;
  const quantity = Number(document.getElementById("quantity").value);

  const prices = {
    "Fried Rice": 180,
    "Noodles": 160,
    "Pizza": 250,
    "Pasta": 200,
    "Tacos": 220,
    "Burrito": 240,
    "Grilled Chicken": 300,
    "Salad": 150
  };

  if (!food || !quantity) {
    document.getElementById("foodResult").innerText =
      "Please select food and quantity";
    return;
  }

  const totalAmount = prices[food] * quantity;

  const orderData = {
    food: food,
    quantity: quantity,
    amount: totalAmount,
    status: "Confirmed"
  };

  fetch(fetch("https://pixi-hotel-backend.onrender.com/book")
 {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("foodResult").innerText =
      `Order Confirmed  Total Bill: ₹${totalAmount}`;
  })
  .catch(() => {
    document.getElementById("foodResult").innerText = "Order failed";
  });
}
