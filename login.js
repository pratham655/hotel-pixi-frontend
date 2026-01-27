function login() {
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  fetch(("https://pixi-hotel-backend.onrender.com/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    if (result.success) {
     localStorage.setItem("adminLoggedIn", "true"); 
  window.location.href = "admin.html";
 
    } else {
      document.getElementById("msg").innerText = "Invalid login ❌";
    }
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Server error";
  });
}
