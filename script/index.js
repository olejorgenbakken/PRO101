function animate() {
    var element = document.getElementById("slogan");
    element.style.opacity = "1";
    element.style.top = "0px";
}

animate();

var login = document.getElementById("login");
var register = document.getElementById("register");

function showLogin() {
    register.style.display = "none";
    login.style.display = "block";
}

function showRegister() {
    login.style.display = "none";
    register.style.display = "block";
}