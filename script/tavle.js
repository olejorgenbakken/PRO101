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

// variabler for å telle antall lister og sette kortenes ID
var prosjektID = 0;

// lager en ny liste med mulighet for å lage flere kort
function lagTavle() {
    tavleID++;

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