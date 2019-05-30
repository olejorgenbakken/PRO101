//Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyCREyJtPwHTNRLFUgWyQcApGuZ4nTW3aiY",
    authDomain: "pro101-425fc.firebaseapp.com",
    databaseURL: "https://pro101-425fc.firebaseio.com",
    projectId: "pro101-425fc",
    storageBucket: "pro101-425fc.appspot.com",
    messagingSenderId: "1025947228994",
    appId: "1:1025947228994:web:69460f41a6cc0060"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var db = firebase.firestore();

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
function getKort(){
    var listeRef = db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister").doc("liste0");
    listeRef.get().then(function(doc){
        if(doc.exists){
            
        }
    });
    var kortRef = db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister").doc("liste0").collection("kort").doc("Gjøremål");
    kortRef.get().then(function(doc){
        if (doc.exists) {
            var nyttKortHeaderTekstInput = document.getElementById("nyttKortNavn" + listeID);
            nyttKortHeaderTekstInput.innerText = doc.data().navn;
            var nyttKortHeaderBeskrivelseInput = document.getElementById("nyttKortBeskrivelse" + listeID);
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
    });
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
    wrapper.id = "lister";
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

// variabler for å telle antall lister og sette kortenes ID
var listeCounter = 0;
var kortID = 0;

// lager en ny liste med mulighet for å lage flere kort
function lagListe() {

    var listeID = listeCounter;
    listeCounter++;
    tavle[0].antallLister = listeCounter;

    liste.push({
        id: listeID,
        navn: "liste" + listeID,
        antallKort: kortID,
    });

    var wrapper = document.getElementById("lister");

    var nyListe = document.createElement("div");
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
    }
}
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
    for(i = 0; i < kort.length; i++){
        db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister")
            .doc(liste[i].navn).collection("kort").doc(kort[i].navn).set({
                id: kortID,
                navn: nyttKortHeaderTekstInput,
                beskrivelse: nyttKortHeaderBeskrivelseInput,
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
    }

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