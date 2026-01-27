
console.log("script.js loaded");

window.onload = function () {

  const food = document.getElementById("food");
  const quantity = document.getElementById("quantity");
  const priceSpan = document.getElementById("price");

  if (!food || !quantity || !priceSpan) {
    console.error("Required elements not found");
    return;
  }

  const prices = {
    Pizza: 250,
    Burger: 180,
    Pasta: 220,
    Biryani: 300
  };

  food.onchange = updatePrice;
  quantity.oninput = updatePrice;

  function updatePrice() {
    const item = food.value;
    const qty = Number(quantity.value) || 0;
    priceSpan.innerText = prices[item] ? prices[item] * qty : 0;
  }
};



