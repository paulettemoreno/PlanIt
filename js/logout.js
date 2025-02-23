document.getElementById("logoutBtn").addEventListener("click", function() {
    sessionStorage.removeItem("userEmail");
    window.location.href = "paginas/login.html";
});
