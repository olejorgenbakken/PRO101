var user = [{
    username: "Filip",
    img: "https://images.unsplash.com/photo-1509593419605-143becfcbae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}];

var profile = document.getElementById("profile");
var usernameText = document.createElement("h3");
var userImgContainer = document.getElementById("profile-image");
var userImg = document.createElement("img");

userImgContainer.style.overflow = "hidden";
userImg.setAttribute("src", user[0].img);
usernameText.innerText = user[0].username;

userImgContainer.appendChild(userImg);
profile.appendChild(userImgContainer);
profile.appendChild(usernameText);