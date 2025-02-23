document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let storedPassword = localStorage.getItem(email);

    if (!storedPassword || storedPassword !== password) {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    sessionStorage.setItem("userEmail", email);
    window.location.href = "events.html";
});

