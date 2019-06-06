var profile = {
    userName: "Filip",
    img: "/assets/img/000000.png"
}

var profileName = document.getElementById("profileText");
var profileImg = document.getElementById("profileImg");
profileImg.setAttribute("src", profile.img);
profileName.innerHTML = profile.userName;