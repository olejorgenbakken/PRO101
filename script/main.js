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

function lagSide() {
    tavle.push({
        id: 0,
        navn: "Tavle",
        antallLister: 0,
    })

    var body = document.getElementsByTagName("body")[0];
    var header = document.createElement("header");
    var wrapper = document.createElement("wrapper");
    var footer = document.createElement("footer");
    var nav = document.createElement("nav");
    var navTekst = document.createElement("h2");
    var headerTekst = document.createElement("h1");
    var nyListeKnapp = document.createElement("div");
    var nyListeKnappTekst = document.createElement("p");

    header.id = "tavleHeader";
    header.className = "header";
    nav.id = "navigasjon";
    wrapper.id = "wrapper";
    footer.id = "tavleFooter";
    nyListeKnapp.id = "nyListeKnapp";
    nyListeKnappTekst.id = "nyListeKnappX";
    nyListeKnapp.setAttribute("onclick", " return lagListe()");

    body.appendChild(header);
    body.appendChild(wrapper);
    body.appendChild(footer);
    header.appendChild(headerTekst);
    header.appendChild(nav);
    nav.appendChild(navTekst);
    wrapper.appendChild(nyListeKnapp);
    nyListeKnapp.appendChild(nyListeKnappTekst);

    headerTekst.innerText = tavle[0].navn;
    nyListeKnappTekst.innerText = "+";
    navTekst.innerText = "navigasjon";
}

lagSide();

var listeCounter = 0;

function lagListe() {

    var listeID = listeCounter;
    listeCounter++;
    tavle[0].antallLister = listeCounter;

    var listeNavn = "liste" + listeID;

    liste.push({
        id: listeID,
        navn: "liste" + listeID,
    });

    var wrapper = document.getElementById("wrapper");

    var nyListe = document.createElement("div");
    var nyListeLagKortForm = document.createElement("form");

    nyListe.className = "liste";
    nyListe.id = listeNavn;

    wrapper.appendChild(nyListe);
    nyListe.appendChild(nyListeLagKortForm);
    
    var slettListe = document.createElement("button");
    slettListe.innerText = "slett liste";
    slettListe.className = "lukkKort";
    slettListe.setAttribute("onclick", " return slettListe(" + listeID + ")");
    nyListe.appendChild(slettListe);

    for (i = 0; i < 4; i++) {
        nyListeLagKortForm.id = "lagKortListe" + liste[listeID].id;
        var nyListeLagKortInput = document.createElement("input");
        nyListeLagKortInput.className = "nyttKortInput";
        nyListeLagKortInput.id = i;
        nyListeLagKortForm.appendChild(nyListeLagKortInput);

        if (nyListeLagKortInput.id == 3) {
            nyListeLagKortInput.id = "nyKortKnapp" + liste[listeID].id;
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.value = "Lag kort";
            nyListeLagKortInput.setAttribute("onclick", " return lagKort(" + listeID + ")");

            return nyListeLagKortInput;
        } else if (nyListeLagKortInput.id == 2) {
            nyListeLagKortInput.id = "nyttKortTidsfrist" + liste[listeID].id;
            nyListeLagKortInput.type = "date";
        } else if (nyListeLagKortInput.id == 1) {
            nyListeLagKortInput.id = "nyttKortBeskrivelse" + liste[listeID].id;
            nyListeLagKortInput.placeholder = "Beskrivelse";
        } else if (nyListeLagKortInput.id == 0) {
            nyListeLagKortInput.id = "nyttKortNavn" + liste[listeID].id;
            nyListeLagKortInput.placeholder = "Tittel";
            nyListeLagKortInput.value = "Gjøremål"
        }
    }
}

function slettListe(listeID) {
    var liste = document.getElementById("liste" + listeID);
    liste.remove("liste" + listeID);
}

var kortID = 0;

function lagKort(listeID) {
    var kortetsListe = "liste" + listeID;

    var kortCounter = kortID;

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

    nyttKort.id = "kort" + kortID;
    nyttKort.className = "kort";
    nyttKortHeader.className = "kort_header";
    nyttKortHeader.id = "kort_tittel" + kortID;
    nyttKortHeader.setAttribute("onclick", " return redigerHeader(" + kortID + ")");
    nyttKortHeaderTekst.id = "kort_tittel_tekst" + kortID;
    nyttKortBeskrivelse.className = "kort_beskrivelse";
    nyttKortBeskrivelse.id = "kort_beskrivelse_tekst" + kortID;
    nyttKortBeskrivelse.setAttribute("onclick", " return redigerBeskrivelse(" + kortID + ")");
    nyttKortFooter.className = "kort_footer";
    nyttKortLagd.className = "footer_lagd";
    nyttKortTidsfrist.className = "footer_tidsfrist";

    var listePosisjon = document.getElementById(kortetsListe);
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

    nyttKortHeaderTekst.innerText = kort[kortCounter].navn;
    nyttKortBeskrivelseTekst.innerText = kort[kortCounter].beskrivelse;
    nyttKortLagdTekst.innerText = "Lagd: \n" + kort[kortCounter].lagd;
    nyttKortTidsfristTekst.innerText = "Tidsfrist: \n" + kort[kortCounter].tidsfrist;

    var slettKort = document.createElement("div");
    slettKort.innerText = "slett kort";
    slettKort.className = "lukkKort";
    slettKort.setAttribute("onclick", " return slettKort(" + kortID + ")");
    nyttKort.appendChild(slettKort);

    kortID++
};

function slettKort(kortID) {
    var kort = document.getElementById("kort" + kortID);

    kort.parentNode.removeChild(kort);
}

function redigerHeader(kortID) {
    kortTittelContainer = document.getElementById("kort_tittel_tekst" + kortID);

    var nyTittel = prompt("Ny tittel");
    kort[kortID].navn = nyTittel;

    
    kortTittelContainer.innerText = kort[kortID].navn;
}

function redigerBeskrivelse(kortID) {
    kortBeskrivelseContainer = document.getElementById("kort_beskrivelse_tekst" + kortID);

    var nyBeskrivelse = prompt("Ny beskrivelse");
    kort[kortID].beskrivelse = nyBeskrivelse;


    kortBeskrivelseContainer.innerText = kort[kortID].beskrivelse;
}