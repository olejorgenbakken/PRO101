var login = document.getElementById("login");
var register = document.getElementById("register");

register.style.display = "none";

function showLogin() {
    login.style.display = "block";
    register.style.display = "none";
}

function showRegister() {
    register.style.display = "block";
    login.style.display = "none";
}