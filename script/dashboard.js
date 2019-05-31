var bruker = [{
    id: 0,
    navn: "ole jørgen",
    image: "https://images.unsplash.com/photo-1556228841-7db5b6786a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
},
{
    id: 1,
    navn: "filip",
    image: "https://images.unsplash.com/photo-1556228841-7db5b6786a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
}];

var wrapper = document.getElementById("profil");
var profil = document.createElement("div");
var brukerProfilbilde = document.createElement("img");
var brukerProfilNavn = document.createElement("h2");

brukerProfilNavn.innerText = bruker[0].navn;
brukerProfilbilde.setAttribute("src", bruker[0].image);

wrapper.appendChild(profil);
profil.appendChild(brukerProfilbilde);
profil.appendChild(brukerProfilNavn);