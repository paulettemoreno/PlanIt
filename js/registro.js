document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if (!validateEmail(email) || password.length < 6) {
        alert("Correo inválido o contraseña demasiado corta (mínimo 6 caracteres).");
        return;
    }

    localStorage.setItem(email, password);
    alert("Registro exitoso. Ahora inicia sesión.");
    window.location.href = "login.html";
});

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
