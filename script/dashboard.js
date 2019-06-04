var bruker = [{
    id: 0,
    fornavn: "ole jørgen",
    etternavn: "bakken",
    image: "http://orig01.deviantart.net/f380/f/2015/220/1/b/profile_picture_by_aesthetic_pengu-d94vo11.jpg"
},
{
    id: 1,
    navn: "filip",
    image: "http://orig01.deviantart.net/f380/f/2015/220/1/b/profile_picture_by_aesthetic_pengu-d94vo11.jpg"
}
];

var wrapper = document.getElementById("nav");
var profil = document.createElement("div");
var profilbilde = document.createElement("img");
var brukernavn = document.createElement("input");
brukernavn.value = bruker[0].fornavn;

profil.id = "profil-" + bruker[0].id;
profil.className = "profil";
brukernavn.type = "textarea";

brukernavn.innerText = bruker[0].fornavn;
profilbilde.setAttribute("src", bruker[0].image);

wrapper.appendChild(profil);
profil.appendChild(profilbilde);
profil.appendChild(brukernavn);

brukernavn.addEventListener("click", changeUsername());
profilbilde.addEventListener("click", changeProfilepic());

function changeProfilepic() {
console.log("hei");
}

function changeUsername() {

console.log("endre brukernavn");
}