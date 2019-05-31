// tid og dato
function getTime(input) {
    var today = new Date();
    var date = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
    var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
    var dateTime = date + '\n ' + time;

    switch (input) {
        case "date": return date;
        case "time": return time;
        case "dateTime": return dateTime;
    }
}

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
    nyTavleKnappTekst.innerText = "+ tavleknapp";
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

// slett lister
function slettTavle(tavleID) {
    var tavle = document.getElementById("tavle" + tavleID);
    tavle.remove("tavle" + tavleID);
}

// slett kort
function slettKort(kortID) {
    var kort = document.getElementById("kort" + kortID);
    kort.parentNode.removeChild(kort);
}

// redigerer kortenes tittel og beskrivelse
function redigerListeTittel(listeID) {
    listeTittelContainer = document.getElementById("nyKortTittel" + listeID);
    liste[listeID].navn = listeTittelContainer.value;
    console.log(liste[listeID].navn);
}
function redigerTittel(kortID) {
    kortTittelContainer = document.getElementById("kort_tittel_tekst" + kortID);
    kort[kortID].navn = kortTittelContainer.value;
    console.log(kort[kortID].navn);
}

function redigerBeskrivelse(kortID) {
    kortBeskrivelseContiner = document.getElementById("kort_beskrivelse_tekst" + kortID);
    kort[kortID].beskrivelse = kortBeskrivelseContiner.value;
    console.log(kort[kortID].beskrivelse);
}