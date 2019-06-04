var prosjekter = [];

//lag tavle
var tavle = [];
var tavleID = 0;

function lagTavleKnapp() {
    var wrapper = document.getElementById("lag_tavle");
    var nyTavleKnapp = document.createElement("div");
    var nyTavleKnappTekst = document.createElement("p");
    
    nyTavleKnapp.setAttribute("onclick", " return lagTavle()");
    nyTavleKnapp.id = "nyTavleKnapp";
    nyTavleKnappTekst.id = "nyTavleKnappX";
   
    wrapper.appendChild(nyTavleKnapp);
    nyTavleKnapp.appendChild(nyTavleKnappTekst);
    
    nyTavleKnappTekst.innerText = "Lag tavle";
}

lagTavleKnapp();

// lager en ny tavle
function lagTavle() {

    tavle.push({
        id: tavleID,
        navn: "tavle" + tavleID,
        antallTavler: tavleID,
    });

    var wrapper = document.getElementById("tavler");

    var nyTavle = document.createElement("div");
    var nyTavleTittel = document.createElement("input");
    var slettTavle = document.createElement("button");
    slettTavle.textContent = "Slett tavle";

    nyTavle.className = "tavle";
    nyTavle.id = "tavle" + tavleID;
    nyTavleTittel.setAttribute("value", "Ny tavle");
    console.log(nyTavleTittel.value);
    nyTavleTittel.type = "text";
    slettTavle.setAttribute("onclick", " return slettTavle(" + tavleID + ")");

    wrapper.appendChild(nyTavle);
    nyTavle.appendChild(nyTavleTittel);
    nyTavle.appendChild(slettTavle);

    tavleID++;
}

// slett tavle
function slettTavle(tavleID) {
    var tavle = document.getElementById("tavle" + tavleID);
    tavle.remove("tavle" + tavleID);
}