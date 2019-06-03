
    var nyttKort = document.createElement("div");
    var nyttKortHeader = document.createElement("div");
    var nyttKortHeaderTekst = document.createElement("h2");
    var nyttKortBeskrivelse = document.createElement("div");
    var nyttKortBeskrivelseTekst = document.createElement("p");
    var nyttKortFooter = document.createElement("div");
    var nyttKortLagd = document.createElement("div");
    var nyttKortLagdTekst = document.createElement("h3");
    var nyttKortBrukere = document.createElement("div");
    var nyttKortTidsfrist = document.createElement("div");
    var nyttKortTidsfristTekst = document.createElement("h3");

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

//lag tavle
var tavle = [];

// lag liste
var liste = [];

// lag bruker
var bruker = [];

// lag kort
var kort = [];

// Lager en wrapper med listene, og en knapp, knappen og headeren er tenkt at skal bort fra funksjonen
// og inn i HTMLen.
function lagListeKnapp() {
    var nyListeKnapp = document.createElement("div");
    var nyListeKnappTekst = document.createElement("p");
    nyListeKnapp.id = "nyListeKnapp";
    nyListeKnappTekst.id = "nyListeKnappX";
    nyListeKnapp.setAttribute("onclick", " return lagListe()");
    var wrapper = document.getElementById("lag_liste");
    wrapper.appendChild(nyListeKnapp);
    nyListeKnapp.appendChild(nyListeKnappTekst);
    nyListeKnappTekst.innerText = "+";
}

lagListeKnapp();

// variabler for å telle antall lister og sette kortenes ID
var listeID = 0;
var kortID = 0;

// lager en ny liste med mulighet for å lage flere kort
function lagListe() {
    liste.push({
        id: listeID,
        navn: "liste" + listeID,
        antallKort: kortID,
    });

    var wrapper = document.getElementById("lister");

    var nyListe = document.createElement("div");
    nyListe.setAttribute("ondrop", "drop(event)");
    nyListe.setAttribute("ondragover", "allowDrop(event)");
    var nyListeLagKortForm = document.createElement("form");
    var nyListeTittel = document.createElement("input");
    

    nyListe.className = "liste";
    nyListe.id = "liste" + listeID;
    nyListeTittel.value = liste[listeID].navn;

    wrapper.appendChild(nyListe);
    nyListe.appendChild(nyListeLagKortForm);

    // denne loopen lager alle fire inputene (man burde kanskje fjerne denne, og implementere den bedre
    // men den fungerer for now...)
    for (i = 0; i < 6; i++) {
        nyListeLagKortForm.id = "lagKortListe" + listeID;
        var nyListeLagKortInput = document.createElement("input");
        nyListeLagKortInput.className = "nyttKortInput";
        nyListeLagKortInput.id = i;
        nyListeLagKortForm.appendChild(nyListeLagKortInput);

        if (nyListeLagKortInput.id == 5) {
            nyListeLagKortInput.id = "slettListe" + listeID;
            nyListeLagKortInput.value = "slett liste";
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.className = "slettListe";
            nyListeLagKortInput.setAttribute("onclick", " return slettListe(" + listeID + ")");
        }
        else if (nyListeLagKortInput.id == 4){
            nyListeLagKortInput.id = "nyKortKnapp" + listeID;
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.value = "Lag kort";
            nyListeLagKortInput.setAttribute("onclick", " return lagKort(" + listeID + ")");
        }
        else if (nyListeLagKortInput.id == 3) {
            nyListeLagKortInput.id = "nyttKortTidsfrist" + listeID;
            nyListeLagKortInput.type = "date";
        } else if (nyListeLagKortInput.id == 2) {
            nyListeLagKortInput.id = "nyttKortBeskrivelse" + listeID;
            nyListeLagKortInput.placeholder = "Beskrivelse";
            nyListeLagKortInput.type = "text";
        } else if (nyListeLagKortInput.id == 1) {
            nyListeLagKortInput.id = "nyttKortNavn" + listeID;
            nyListeLagKortInput.placeholder = "Tittel";
            nyListeLagKortInput.value = "Gjøremål";
            nyListeLagKortInput.type = "text";
        } else if (nyListeLagKortInput.id == 0) {
            nyListeLagKortInput.id = "nyKortTittel" + listeID;
            nyListeLagKortInput.value = "Ny liste";
            nyListeLagKortInput.type = "text";
            nyListeLagKortInput.setAttribute("onkeypress", " return redigerListeTittel(" + listeID + ")");
        }
    }
    listeID++;
}

// slett lister
function slettListe(listeID) {
    var liste = document.getElementById("liste" + listeID);
    liste.remove("liste" + listeID);
}

// lag et kort. Denne funksjonen tar inn parametere sendt inn gjennom en onclick funksjon i knapper lagd
// i lag liste funksjonen
function lagKort(listeID) {
    var listePosisjon = document.getElementById("liste" + listeID);
    var nyttKort = document.createElement("div");
    var nyttKortHeader = document.createElement("div");
    var nyttKortHeaderTekst = document.createElement("input");
    var nyttKortBeskrivelse = document.createElement("div");
    var nyttKortBeskrivelseTekst = document.createElement("input");
    var nyttKortFooter = document.createElement("div");
    var nyttKortLagd = document.createElement("div");
    var nyttKortLagdTekst = document.createElement("h3");
    var nyttKortBrukere = document.createElement("div");
    var nyttKortTidsfrist = document.createElement("div");
    var nyttKortTidsfristTekst = document.createElement("h3");
    var slettKort = document.createElement("input");
    slettKort.type = "button";

    nyttKort.id = "kort" + kortID;
    nyttKort.setAttribute("draggable", true);
    nyttKort.setAttribute("ondragstart", "drag(event)");
    nyttKort.className = "kort";
    nyttKortHeader.className = "kort_header";
    nyttKortHeader.id = "kort_tittel" + kortID;
    nyttKortHeader.setAttribute("onkeypress", " return redigerTittel(" + kortID + ")");
    nyttKortHeaderTekst.id = "kort_tittel_tekst" + kortID;
    nyttKortBeskrivelse.className = "kort_beskrivelse";
    nyttKortBeskrivelse.id = "kort_beskrivelse" + kortID;
    nyttKortBeskrivelse.setAttribute("onkeypress", " return redigerBeskrivelse(" + kortID + ")");
    nyttKortBeskrivelseTekst.id = "kort_beskrivelse_tekst" + kortID;
    nyttKortFooter.className = "kort_footer";
    nyttKortLagd.className = "footer_lagd";
    nyttKortTidsfrist.className = "footer_tidsfrist";
    slettKort.setAttribute("onclick", " return slettKort(" + kortID + ")");

    listePosisjon.appendChild(nyttKort);
    nyttKort.appendChild(nyttKortHeader);
    nyttKort.appendChild(nyttKortBeskrivelse);
    nyttKort.appendChild(nyttKortFooter);
    nyttKortHeader.appendChild(nyttKortHeaderTekst);
    nyttKortBeskrivelse.appendChild(nyttKortBeskrivelseTekst);
    nyttKortFooter.appendChild(nyttKortLagd);
    nyttKortFooter.appendChild(nyttKortBrukere);
    nyttKortFooter.appendChild(nyttKortTidsfrist);
    nyttKortLagd.appendChild(nyttKortLagdTekst);
    nyttKortTidsfrist.appendChild(nyttKortTidsfristTekst);
    nyttKort.appendChild(slettKort);

    var nyttKortHeaderTekstInput = document.getElementById("nyttKortNavn" + listeID).value;
    var nyttKortBeskrivelseInput = document.getElementById("nyttKortBeskrivelse" + listeID).value;
    var nyttKortTidsfristTekstInput = document.getElementById("nyttKortTidsfrist" + listeID).value;

    kort.push({
        id: kortID,
        navn: nyttKortHeaderTekstInput,
        beskrivelse: nyttKortBeskrivelseInput,
        listePosisjon: liste[listeID].id,
        lagd: getTime("date"),
        tidsfrist: nyttKortTidsfristTekstInput,
        brukere: bruker,
    });

    nyttKortHeaderTekst.value = kort[kortID].navn;
    nyttKortBeskrivelseTekst.value = kort[kortID].beskrivelse;
    nyttKortLagdTekst.innerText = "Lagd: \n" + kort[kortID].lagd;
    nyttKortTidsfristTekst.innerText = "Tidsfrist: \n" + kort[kortID].tidsfrist;
    slettKort.value = "slett kort";
    slettKort.className = "lukkKort";

    kortID++
};

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