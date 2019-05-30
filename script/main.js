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

// tid og dat
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
};

lagSide();

var listerCounter = 0;

function lagListe() {

    var listeID = listerCounter;
    listerCounter++;
    tavle[0].antallLister = listerCounter;

    tavle[0].antallLister = listerCounter;

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

function slettListe(listeID) {
    var liste = document.getElementById("liste" + listeID);
    liste.remove("liste" + listeID);
}

var kortID = 0;

function lagKort(listeID) {
    var kortetsListe = "liste" + listeID;

    kortCounter = kortID;
    kortID++

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
    nyttKort.setAttribute("onclick", " return redigerKort(" + kortID + ")");
    nyttKortHeader.className = "kort_header";
    nyttKortBeskrivelse.className = "kort_beskrivelse";
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
    var nyttKortHeaderBeskrivelseInput = document.getElementById("nyttKortBeskrivelse" + listeID).value;
    var nyttKortTidsfristTekstInput = document.getElementById("nyttKortTidsfrist" + listeID).value;

    kort.push({
        id: kortID,
        navn: nyttKortHeaderTekstInput,
        beskrivelse: nyttKortHeaderBeskrivelseInput,
        listePosisjon: liste[listeID],
        lagd: getTime("date"),
        tidsfrist: nyttKortTidsfristTekstInput,
        brukere: bruker,
    });
    for(i = 0; i < kort.length; i++){
        db.collection("projects").doc("project-1").collection("tavler").doc("tavle-1").collection("lister")
            .doc(liste[i].navn).collection("kort").doc(kort[i].navn + "-" + kort[i].id).set({
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

    nyttKortHeaderTekst.innerText = kort[kortCounter].navn;
    nyttKortBeskrivelseTekst.innerText = kort[kortCounter].beskrivelse;
    nyttKortLagdTekst.innerText = "Lagd: \n" + kort[kortCounter].lagd;
    nyttKortTidsfristTekst.innerText = "Tidsfrist: \n" + kort[kortCounter].tidsfrist;

    var slettKort = document.createElement("div");
    slettKort.innerText = "slett kort";
    slettKort.className = "lukkKort";
    slettKort.setAttribute("onclick", " return slettKort(" + kortID + ")");
    nyttKort.appendChild(slettKort);
};

function slettKort(kortID) {
    var kort = document.getElementById("kort" + kortID);

    kort.parentNode.removeChild(kort);
}

function redigerKort(kortID) {
    var kort = document.getElementById("kort" + kortID);
    console.log(i);
}