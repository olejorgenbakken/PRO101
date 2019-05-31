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
/*function getKort(){
    var listeRef = db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister").doc("liste0");
    listeRef.get().then(function(doc){
        if(doc.exists){
            console.log(doc.data().navn);
            var kortRef = db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister").doc("liste0").collection("kort").doc("Gjøremål");
            kortRef.get().then(function(doc){
            if (doc.exists) {
                var nyttKortHeaderTekstInput = document.getElementById("nyttKortNavn" + listeCounter);
                nyttKortHeaderTekstInput.innerText = doc.data().navn;
                var nyttKortHeaderBeskrivelseInput = document.getElementById("nyttKortBeskrivelse" + listeCounter);
                nyttKortHeaderBeskrivelseInput.innerText = doc.data().beskrivelse;
                nyttKortBeskrivelse.appendChild(nyttKortHeaderBeskrivelseInput);
                nyttKortHeaderTekst.appendChild(nyttKortHeaderTekstInput);
                nyttKort.appendChild(nyttKortHeaderTekst);
                nyttKort.appendChild(nyttKortBeskrivelse);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        })
        }else{
            console.log("No such document");
        }
    }).catch(function(error){
        console.log("Error getting document:", error);
    });
}*/
var prosjekter = [];

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
    var nyTavleKnapp = document.createElement("div");
    var nyTavleKnappTekst = document.createElement("p");

    header.id = "tavleHeader";
    header.className = "header";
    nav.id = "navigasjon";
    wrapper.id = "lister";
    footer.id = "tavleFooter";
    nyTavleKnapp.id = "nyTavleKnapp";
    nyTavleKnappTekst.id = "nyTavleKnappX";
    nyTavleKnapp.setAttribute("onclick", " return lagTavle()");

    body.appendChild(header);
    body.appendChild(wrapper);
    body.appendChild(footer);
    header.appendChild(headerTekst);
    header.appendChild(nav);
    nav.appendChild(navTekst);
    wrapper.appendChild(nyListeKnapp);
    nyTavleKnapp.appendChild(nyTavleKnappTekst);

    headerTekst.innerText = tavle[0].navn;
    nyTavleKnappTekst.innerText = "+";
    navTekst.innerText = "navigasjon";
}

lagSide();

// variabler for å telle antall lister og sette kortenes ID
var prosjektID = 0;

// lager en ny liste med mulighet for å lage flere kort
function lagTavle() {
    var tavleID = tavleCounter;
    tavle[0].antallTavler = tavleCounter;

    tavle.push({
        id: tavleID,
        navn: "tavle" + tavleID,
        antallTavler: tavleID,
    });

    var wrapper = document.getElementById("tavler");

    var nyTavle = document.createElement("div");
    var nyTavleLagKortForm = document.createElement("form");
    var nyTavleTittel = document.createElement("input");
    

    nyTavle.className = "tavle";
    nyTavle.id = "tavle" + tavleID;
    nyTavleTittel.value = tavle[tavleID].navn;

    wrapper.appendChild(nyTavle);
    nyListe.appendChild(nyTavleLagKortForm);

    // denne loopen lager alle fire inputene (man burde kanskje fjerne denne, og implementere den bedre
    // men den fungerer for now...)
    for (i = 0; i < 6; i++) {
        nyTavleLagKortForm.id = "lagTavleListe" + tavleID;
        var nyTavleInput = document.createElement("input");
        nyTavleInput.className = "nyttTavleInput";
        nyTavleInput.id = i;
        nyTavleInput.appendChild(nyTavleInput);

        if (nyTavleInput.id == 5) {
            nyTavleInput.id = "slettTavle" + tavleID;
            nyTavleInput.value = "slett liste";
            nyTavleInput.type = "button";
            nyTavleInput.className = "slettListe";
            nyTavleInput.setAttribute("onclick", " return slettTavle(" + tavleID + ")");
        }
        else if (nyTavleInput.id == 4){
            nyTavleInput.id = "nyKortKnapp" + tavleID;
            nyTavleInput.type = "button";
            nyTavleInput.value = "Lag kort";
            nyTavleInput.setAttribute("onclick", " return lagTavle(" + tavleID + ")");
        }
        else if (nyTavleInput.id == 3) {
            nyTavleInput.id = "nyttKortTidsfrist" + tavleID;
            nyTavleInput.type = "date";
        } else if (nyTavleInput.id == 2) {
            nyTavleInput.id = "nyttKortBeskrivelse" + tavleID;
            nyTavleInput.placeholder = "Beskrivelse";
            nyTavleInput.type = "text";
        } else if (nyListeLagKortInput.id == 1) {
            nyTavleInput.id = "nyttKortNavn" + tavleID;
            nyTavleInput.placeholder = "Tittel";
            nyTavleInput.value = "Gjøremål";
            nyTavleInput.type = "text";
        } else if (nyListeLagKortInput.id == 0) {
            nyTavleInput.id = "nyKortTittel" + tavleID;
            nyTavleInput.value = "Ny liste";
            nyTavleInput.type = "text";
            nyTavleInput.setAttribute("onkeypress", " return redigerTavleTittel(" + tavleID + ")");
        }
    }
    /*
        for(i = 0; i < liste.length; i++){
            db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister")
                .doc(liste[i].navn).set({
                    id: listeID,
                    navn: "liste" + listeID,
                }).then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
            });
        }*/
}

// slett lister
function slettListe(tavleID) {
    var tavle = document.getElementById("tavle" + tavleID);
    tavle.remove("tavle" + tavleID);
}

// lag et kort. Denne funksjonen tar inn parametere sendt inn gjennom en onclick funksjon i knapper lagd
// i lag liste funksjonen
function lagTavle(projectID) {
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
    /*
    for(i = 0; i < kort.length; i++){
        db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister")
            .doc(liste[i].navn).collection("kort").doc(kort[i].navn).set({
                id: kortID,
                navn: nyttKortHeaderTekstInput,
                beskrivelse: nyttKortBeskrivelseInput,
                listePosisjon: liste[listeID],
                lagd: getTime("date"),
                tidsfrist: nyttKortTidsfristTekstInput,
                brukere: bruker,
            }).then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
        });
    }*/

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