var prosjekter = [];

//lag tavle
var tavle = [];

// lag liste
var liste = [];

// lag bruker
var bruker = [];

// lag kort
var kort = [];

// variabler for å telle antall lister og sette kortenes ID
var prosjektID = 0;
var tavleID = 0;

function lagTavleKnapp() {
    var nyTavleKnapp = document.createElement("div");
    var nyTavleKnappTekst = document.createElement("p");
    nyTavleKnapp.id = "nyListeKnapp";
    nyTavleKnappTekst.id = "nyTavleKnappX";
    nyTavleKnapp.setAttribute("onclick", " return lagTavle()");
    var wrapper = document.getElementById("lag_tavle");
    wrapper.appendChild(nyTavleKnapp);
    nyTavleKnapp.appendChild(nyTavleKnappTekst);
    nyTavleKnappTekst.innerText = "Lag tavle";
}

lagTavleKnapp();

// lager en ny liste med mulighet for å lage flere kort
function lagTavle() {

    tavle.push({
        id: tavleID,
        navn: "tavle" + tavleID,
        antallTavler: tavleID,
    });

    var wrapper = document.getElementById("lag_tavle");

    console.log(wrapper);

    var nyTavle = document.createElement("div");
    var nyTavleLagKortForm = document.createElement("form");
    var nyTavleTittel = document.createElement("input");
    var slettTavle = document.createElement("input");
    slettTavle.type = "button";
    slettTavle.innerText = "Slett tavle";

    nyTavle.className = "tavle";
    nyTavle.id = "tavle" + tavleID;
    nyTavleTittel.value = tavle[tavleID].navn;
    slettTavle.setAttribute("onclick", " return slettTavle(" + tavleID + ")");

    wrapper.appendChild(nyTavle);
    nyTavleLagKortForm.appendChild(nyTavleTittel);
    nyTavle.appendChild(slettTavle);
    nyTavle.appendChild(nyTavleLagKortForm);

    tavleID++;
}

// slett tavle
function slettTavle(tavleID) {
    var tavle = document.getElementById("tavle" + tavleID);
    tavle.remove("tavle" + tavleID);
}