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
        case "date":
            return date;
        case "time":
            return time;
        case "dateTime":
            return dateTime;
    }
}

//lag tavle
var tavle = [];

// lag liste
var liste = [];

// lag kort
var kort = [];

// Lager en wrapper med listene, og en knapp, knappen og headeren er tenkt at skal bort fra funksjonen
// og inn i HTMLen.
function lagListeKnapp() {
    var nyListeKnapp = document.createElement("div");
    var nyListeKnappTekst = document.createElement("p");
    nyListeKnapp.id = "nyListeKnapp";
    nyListeKnappTekst.id = "nyListeKnappX";
    nyListeKnapp.setAttribute("type", "button");
    nyListeKnapp.setAttribute("onclick", " return lagListe()");
    var wrapper = document.getElementById("lag_liste");
    wrapper.appendChild(nyListeKnapp);
    nyListeKnapp.appendChild(nyListeKnappTekst);
    nyListeKnappTekst.innerText = "Add list";
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
    var nyListeLagKortForm = document.createElement("form");
    var nyListeTittel = document.createElement("input");

    nyListe.className = "liste";
    nyListe.id = "liste" + listeID;
    nyListeTittel.value = liste[listeID].navn;

    wrapper.appendChild(nyListe);
    nyListe.appendChild(nyListeLagKortForm);

    // denne loopen lager alle fire inputene (man burde kanskje fjerne denne, og implementere den bedre
    // men den fungerer for now...)
    var radioButtonContainer = document.createElement("form");

    for (i = 0; i < 10; i++) {
        nyListeLagKortForm.id = "lagKortListe" + listeID;
        radioButtonContainer.id = "radioButtonContainer" + listeID;
        radioButtonContainer.className = "make-card-container";
        var nyListeLagKortInput = document.createElement("input");
        nyListeLagKortInput.className = "nyttKortInput";
        nyListeLagKortInput.id = i;
        nyListeLagKortForm.appendChild(radioButtonContainer);

        if (nyListeLagKortInput.id == 9) {
            nyListeLagKortInput.id = "leggTilKort" + listeID;
            nyListeLagKortInput.value = "Legg til kort";
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.className = "leggTilKort";
            nyListeLagKortInput.setAttribute("onclick", "openDialog(event)");
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        }

        if (nyListeLagKortInput.id == 8) {
            nyListeLagKortInput.id = "cardPriorityUrgent" + listeID;
            nyListeLagKortInput.value = "Urgent";
            nyListeLagKortInput.type = "radio";
            nyListeLagKortInput.className = "cardPriority";
            radioButtonContainer.appendChild(nyListeLagKortInput);
        }

        if (nyListeLagKortInput.id == 7) {
            nyListeLagKortInput.id = "cardPriorityMiddle" + listeID;
            nyListeLagKortInput.value = "Medium Urgent";
            nyListeLagKortInput.type = "radio";
            nyListeLagKortInput.className = "cardPriority";
            radioButtonContainer.appendChild(nyListeLagKortInput);
        }

        if (nyListeLagKortInput.id == 6) {
            nyListeLagKortInput.id = "cardPriorityCommon" + listeID;
            nyListeLagKortInput.value = "Not Urgent";
            nyListeLagKortInput.type = "radio";
            nyListeLagKortInput.className = "cardPriority";
            radioButtonContainer.appendChild(nyListeLagKortInput);
        }

        if (nyListeLagKortInput.id == 5) {
            nyListeLagKortInput.id = "slettListe" + listeID;
            nyListeLagKortInput.value = "slett liste";
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.className = "slettListe";
            nyListeLagKortInput.setAttribute("onclick", " return slettListe(" + listeID + ")");
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 4) {
            nyListeLagKortInput.id = "nyKortKnapp" + listeID;
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.value = "Lag kort";
            nyListeLagKortInput.setAttribute("onmouseup", " closeDialog(event)");
            nyListeLagKortInput.setAttribute("onclick", " return lagKort(" + listeID + ")");
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 3) {
            nyListeLagKortInput.id = "nyttKortTidsfrist" + listeID;
            nyListeLagKortInput.type = "date";
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 2) {
            nyListeLagKortInput.id = "nyttKortBeskrivelse" + listeID;
            nyListeLagKortInput.placeholder = "Beskrivelse";
            nyListeLagKortInput.type = "text";
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 1) {
            nyListeLagKortInput.id = "nyttKortNavn" + listeID;
            nyListeLagKortInput.placeholder = "Tittel";
            nyListeLagKortInput.value = "Gjøremål";
            nyListeLagKortInput.type = "text";
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 0) {
            nyListeLagKortInput.id = "nyKortTittel" + listeID;
            nyListeLagKortInput.value = "Ny liste";
            nyListeLagKortInput.type = "text";
            nyListeLagKortInput.setAttribute("onkeypress", " return redigerListeTittel(" + listeID + ")");
            nyListe.appendChild(nyListeLagKortInput);
        }
    }
    listeID++;
}

function openDialog(event) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    var thisDialog = document.getElementById(event.target.id);
    thisDialog.parentNode.classList.add("openDialog");
    thisDialog.parentNode.parentNode.appendChild(overlay);
    var childNodes = thisDialog.parentNode.childNodes;
    childNodes.forEach(el => {
        el.style.display = "block";
    });
}

function closeDialog(event) {
    var dialog = document.getElementById(event.target.parentNode.id);
    var overlay = document.getElementById("overlay");
    overlay.remove();
    var childNodes = dialog.childNodes;
    childNodes[0].style.display = "none";
    childNodes[1].style.display = "none";
    childNodes[2].style.display = "none";
    childNodes[3].style.display = "none";
    childNodes[4].style.display = "none";

    dialog.classList.remove("openDialog");
}

// slett lister
function slettListe(listeID) {
    var liste = document.getElementById("liste" + listeID);
    liste.remove("liste" + listeID);
    closeDialog();
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
    var nyttKortNesteListe = document.createElement("input");
    var nyttKortForrigeListe = document.createElement("input");
    var nyttKortFooter = document.createElement("div");
    var nyttKortLagd = document.createElement("div");
    var nyttKortLagdTekst = document.createElement("h3");
    var nyttKortBrukere = document.createElement("div");

    var nyttKortMedlemmerDiv = document.createElement("div");
    var nyttKortMedlemmerIKortDiv = document.createElement("div");
    var nyttKortMedlemmer = document.createElement("select");
    var nyttKortMedlemmerOption = document.createElement("option");
    var nyttKortMedlemmerbutton = document.createElement("input");
    
    var nyttKortTidsfrist = document.createElement("div");
    var nyttKortTidsfristTekst = document.createElement("h3");
    var slettKort = document.createElement("input");
    slettKort.type = "button";

    nyttKort.id = "kort" + kortID;
    //nyttKort.setAttribute("onclick", "getSelectedCard()");
    nyttKort.className = "kort";
    nyttKortHeader.className = "kort_header";
    nyttKortHeader.id = "kort_tittel" + kortID;
    nyttKortHeader.setAttribute("onkeypress", " return redigerTittel(" + kortID + ")");
    nyttKortHeaderTekst.id = "kort_tittel_tekst" + kortID;
    nyttKortBeskrivelse.className = "kort_beskrivelse";
    nyttKortBeskrivelse.id = "kort_beskrivelse" + kortID;
    nyttKortBeskrivelse.setAttribute("onkeypress", " return redigerBeskrivelse(" + kortID + ")");
    nyttKortBeskrivelseTekst.id = "kort_beskrivelse_tekst" + kortID;

    nyttKortNesteListe.type = "button";
    nyttKortForrigeListe.type = "button";

    nyttKortNesteListe.value = "Neste Liste";
    nyttKortForrigeListe.value = "Forrige Liste";

    nyttKortNesteListe.setAttribute("onclick", "nextListe(event)");
    nyttKortForrigeListe.setAttribute("onclick", "prevListe(event)");

    nyttKortNesteListe.className = "neste_liste";
    nyttKortForrigeListe.className = "forrige_liste";

    nyttKortNesteListe.id = "kort_neste_list" + kortID;
    nyttKortForrigeListe.id = "kort_forrige_liste" + kortID;

    nyttKortMedlemmerDiv.className = "nyttKortMedlemmerownDiv";
    nyttKortMedlemmerIKortDiv.className = "Medlemer";

    nyttKortMedlemmerDiv.id = "nyttKortMedlemmer" + kortID;
    nyttKortMedlemmerIKortDiv.id = "nyttKortMedlemmerIKort" + kortID;

    nyttKortMedlemmer.setAttribute("size", membersInProject.length);
    nyttKortMedlemmerbutton.setAttribute("type", "button");
    nyttKortMedlemmerbutton.value = "add medlem";



    nyttKortMedlemmerOption.id = "option";

    nyttKortMedlemmer.setAttribute("id", "selectingMemebers");
    nyttKortMedlemmerbutton.setAttribute("onclick", "getSelectedValue("+ kortID +")");

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

    nyttKortFooter.appendChild(nyttKortForrigeListe);
    nyttKortFooter.appendChild(nyttKortNesteListe);
    nyttKort.appendChild(nyttKortMedlemmerDiv);
    nyttKortMedlemmerDiv.appendChild(nyttKortMedlemmer);
    nyttKortMedlemmerDiv.appendChild(nyttKortMedlemmerbutton);
    nyttKortMedlemmerDiv.appendChild(nyttKortMedlemmerIKortDiv);





    for (var j = 0; j < membersInProject.length; j++) {

        var nyttKortMedlemmerOption = document.createElement("option");
        nyttKortMedlemmerOption.id = "medlem:" + j;
        nyttKortMedlemmerOption.setAttribute("value", membersInProject[j].userName);
        nyttKortMedlemmerOption.innerText = membersInProject[j].userName;
        nyttKortMedlemmer.appendChild(nyttKortMedlemmerOption);
    }

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
        brukere: [],
    });



    nyttKortHeaderTekst.value = kort[kortID].navn;
    nyttKortBeskrivelseTekst.value = kort[kortID].beskrivelse;
    nyttKortLagdTekst.innerText = "Lagd: \n" + kort[kortID].lagd;
    nyttKortTidsfristTekst.innerText = "Tidsfrist: \n" + kort[kortID].tidsfrist;
    slettKort.value = "slett kort";
    slettKort.className = "lukkKort";
    kortID++;

}

function removeMember(event) {
    event.target.remove();
    
}

/*function getSelectedCard(event){
    console.log(event.target);
    console.log(event.target.parentNode.id);
}*/

function getSelectedValue(kortID) {

    for (var z = 0; z < kort.length; z++) {
        var selValue = document.getElementById("nyttKortMedlemmer" + z);
        if (!kort[z].brukere.includes(selValue.firstChild.value) && selValue.firstChild.value !== "") {
            kort[z].brukere.push(selValue.firstChild.value);

            var membersContainer = document.getElementById("nyttKortMedlemmerIKort" + kortID);

            var nyttkortMedlemmerTekst = document.createElement("p");
            //membersContainer.id = "members-in-card" + kortID;
            membersContainer.className = "members-in-card";
            for (var k = 0; k < kort[z].brukere.length; k++) {
                nyttkortMedlemmerTekst.innerText = kort[z].brukere[k];
                nyttkortMedlemmerTekst.setAttribute("onclick", "removeMember(event)");
                membersContainer.appendChild(nyttkortMedlemmerTekst);
                console.log(kort[z].brukere[k]);
                //membersContainer.id.appendChild(nyttkortMedlemmerTekst);
            }
            console.log(kort);
            //console.log(nyttKortMedlemmerIKortDiv);
            //nyttKortMedlemmerIKortDiv.appendChild(membersContainer);
        }
    }
}



function nextListe(event) {
    var thisList = event.target.parentNode.parentNode.parentNode.id;
    var string = thisList.replace("liste", "");
    var parse = parseInt(string);
    parse++;
    var nextList = thisList.id = "liste" + parse;

    var thisCard = event.target.parentNode.parentNode;
    document.getElementById(nextList).appendChild(thisCard);

}

function prevListe(event) {
    var thisList = event.target.parentNode.parentNode.parentNode.id;
    var string = thisList.replace("liste", "");
    var parse = parseInt(string);
    parse--;
    var nestList = thisList.id = "liste" + parse;

    var thisCard = event.target.parentNode.parentNode;
    document.getElementById(nestList).appendChild(thisCard);
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
}

function redigerTittel(kortID) {
    kortTittelContainer = document.getElementById("kort_tittel_tekst" + kortID);
    kort[kortID].navn = kortTittelContainer.value;
}

function redigerBeskrivelse(kortID) {
    kortBeskrivelseContiner = document.getElementById("kort_beskrivelse_tekst" + kortID);
    kort[kortID].beskrivelse = kortBeskrivelseContiner.value;
}