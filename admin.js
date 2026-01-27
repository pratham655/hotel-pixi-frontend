// Load room bookings
fetch("http://localhost:5000/bookings")
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("bookingTable");
    data.forEach(b => {
      const row = table.insertRow();
      row.insertCell(0).innerText = b.name;
      row.insertCell(1).innerText = b.room;
      row.insertCell(2).innerText = b.date;
    });
  });

// Load food orders
fetch("http://localhost:5000/orders")
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("orderTable");
    data.forEach(o => {
      const row = table.insertRow();
      row.insertCell(0).innerText = o.food;
      row.insertCell(1).innerText = o.quantity;
    });
  });
