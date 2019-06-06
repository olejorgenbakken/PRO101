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

var membersInProject = [
    {
        userName: "filip",
        email: "filip@filip.com",
        profilePic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "oj",
        email: "oj@oj.com",
        profilePic: "https://images.unsplash.com/photo-1511200016789-e7b694d91f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
    },{
        userName: "sofie",
        email: "sofie@sofie.com",
        profilePic: "https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
    },
    {
        userName: "julian",
        email: "julian@julian.com",
        profilePic: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "fereba",
        email: "fereba@fereba.com",
        profilePic: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    },
    {
        userName: "micheal",
        email: "micheal@micheal.com",
        profilePic: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80"
    }
];

//lag tavle
var tavle = [];

// lag liste
var liste = [];

// lag card
var card = [];

// Lager en wrapper med listene, og en knapp, knappen og headeren er tenkt at skal bort fra funksjonen
// og inn i HTMLen.
function lagListeKnapp() {
    var nyListeKnapp = document.createElement("div");
    var nyListeKnappTekst = document.createElement("p");
    nyListeKnapp.id = "nyListeKnapp";
    nyListeKnappTekst.id = "nyListeKnappX";
    nyListeKnapp.setAttribute("type", "button");
    nyListeKnapp.setAttribute("onclick", " return lagListe()");
    var wrapper = document.getElementById("lag-liste");
    wrapper.appendChild(nyListeKnapp);
    nyListeKnapp.appendChild(nyListeKnappTekst);
    nyListeKnappTekst.innerText = "+ Add list";
}

lagListeKnapp();

// variabler for å telle antall lister og sette cardenes ID
var listeID = 0;
var cardID = 0;

// lager en ny liste med mulighet for å lage flere card
function lagListe() {
    liste.push({
        id: listeID,
        navn: "liste" + listeID,
        antallKort: cardID,
    });

    var wrapper = document.getElementById("lister");

    var nyListe = document.createElement("div");
    var nyListeLagKortForm = document.createElement("form");
    var nyListeTittel = document.createElement("input");

    nyListe.className = "liste";
    nyListe.id = "liste" + listeID;
    nyListeTittel.value = liste[listeID].navn;

    wrapper.appendChild(nyListe);

    // denne loopen lager alle fire inputene (man burde kanskje fjerne denne, og implementere den bedre
    // men den fungerer for now...)
    var radioButtonContainer = document.createElement("form");

    for (i = 0; i < 10; i++) {
        nyListeLagKortForm.id = "lagKortListe" + listeID;
        nyListeLagKortForm.className = "create-list";
        radioButtonContainer.id = "radioButtonContainer" + listeID;
        radioButtonContainer.className = "make-card-container";
        var nyListeLagKortInput = document.createElement("input");
        nyListeLagKortInput.className = "nyttKortInput";
        nyListeLagKortInput.id = i;
        nyListeLagKortForm.appendChild(radioButtonContainer);

        if (nyListeLagKortInput.id == 9) {
            nyListeLagKortInput.id = "leggTilKort" + listeID;
            nyListeLagKortInput.value = "Add card";
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
            nyListeLagKortInput.value = "x";
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.className = "slettListe";
            nyListeLagKortInput.setAttribute("onclick", " return slettListe(" + listeID + ")");
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 4) {
            nyListeLagKortInput.id = "nyKortKnapp" + listeID;
            nyListeLagKortInput.type = "button";
            nyListeLagKortInput.value = "Lag card";
            nyListeLagKortInput.setAttribute("onmouseup", " closeDialog(event)");
            nyListeLagKortInput.setAttribute("onclick", " return lagKort(" + listeID + ")");
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 3) {
            nyListeLagKortInput.id = "nyttKortTidsfrist" + listeID;
            nyListeLagKortInput.type = "date";
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 2) {
            var newCardDescription = document.createElement("textarea");
            newCardDescription.id = "nyttKortBeskrivelse" + listeID;
            newCardDescription.placeholder = "Beskrivelse";
            newCardDescription.type = "text";
            newCardDescription.className = "card-desc";
            nyListeLagKortForm.appendChild(newCardDescription);
        } else if (nyListeLagKortInput.id == 1) {
            nyListeLagKortInput.id = "nyttKortNavn" + listeID;
            nyListeLagKortInput.placeholder = "Tittel";
            nyListeLagKortInput.value = "Gjøremål";
            nyListeLagKortInput.type = "text";
            nyListeLagKortForm.appendChild(nyListeLagKortInput);
        } else if (nyListeLagKortInput.id == 0) {
            nyListeLagKortInput.id = "nyKortTittel" + listeID;
            nyListeLagKortInput.className = "list-title";
            nyListeLagKortInput.value = "Ny liste";
            nyListeLagKortInput.type = "text";
            nyListeLagKortInput.setAttribute("onkeypress", " return redigerListeTittel(" + listeID + ")");
            nyListe.appendChild(nyListeLagKortInput);
        }
        nyListe.appendChild(nyListeLagKortForm);
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
    childNodes[0].style.display = "block";
    childNodes[1].style.display = "block";
    childNodes[2].style.display = "block";
    childNodes[3].style.display = "block";
    childNodes[4].style.display = "none";
    childNodes[5].style.display = "block";
    childNodes[6].style.display = "none";

    console.log(childNodes);
}

function closeDialog(event) {
    var dialog = document.getElementById(event.target.parentNode.id);
    var overlay = document.getElementById("overlay");
    overlay.remove();
    var childNodes = dialog.childNodes;
    childNodes[0].style.display = "none";
    childNodes[1].style.display = "block";
    childNodes[2].style.display = "none";
    childNodes[3].style.display = "none";
    childNodes[4].style.display = "block";
    childNodes[5].style.display = "none";
    childNodes[6].style.display = "block";

    dialog.classList.remove("openDialog");
}

// slett lister
function slettListe(listeID) {
    var liste = document.getElementById("liste" + listeID);
    liste.remove("liste" + listeID);
    closeDialog();
}

// lag et card. Denne funksjonen tar inn parametere sendt inn gjennom en onclick funksjon i knapper lagd
// i lag liste funksjonen
function lagKort(listeID) {
    var listePosisjon = document.getElementById("liste" + listeID);
    var nyttKort = document.createElement("div");
    var nyttKortHeader = document.createElement("div");
    var nyttKortHeaderTekst = document.createElement("input");
    var nyttKortBeskrivelse = document.createElement("div");
    var nyttKortBeskrivelseTekst = document.createElement("textarea");
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

    nyttKort.id = "card" + cardID;
    //nyttKort.setAttribute("onclick", "getSelectedCard()");
    nyttKort.className = "card";
    nyttKortHeader.className = "card-title";
    nyttKortHeader.id = "card-tittel" + cardID;
    nyttKortHeader.setAttribute("onkeypress", " return redigerTittel(" + cardID + ")");
    nyttKortHeaderTekst.id = "card-tittel-tekst" + cardID;
    nyttKortBeskrivelse.className = "card-desc";
    nyttKortBeskrivelse.id = "card-description" + cardID;
    nyttKortBeskrivelse.setAttribute("onkeypress", " return redigerBeskrivelse(" + cardID + ")");
    nyttKortBeskrivelseTekst.id = "card-description-tekst" + cardID;
    nyttKortBeskrivelseTekst.placeholder = "Beskrivelse";

    nyttKortNesteListe.type = "button";
    nyttKortForrigeListe.type = "button";

    nyttKortNesteListe.value = "Neste Liste";
    nyttKortForrigeListe.value = "Forrige Liste";

    nyttKortNesteListe.setAttribute("onclick", "nextListe(event)");
    nyttKortForrigeListe.setAttribute("onclick", "prevListe(event)");

    nyttKortNesteListe.className = "neste-liste";
    nyttKortForrigeListe.className = "forrige-liste";

    nyttKortNesteListe.id = "card-neste-list" + cardID;
    nyttKortForrigeListe.id = "card-forrige-liste" + cardID;

    nyttKortMedlemmerDiv.className = "card-member-select";
    nyttKortMedlemmerIKortDiv.className = "members";

    nyttKortMedlemmerDiv.id = "nyttKortMedlemmer" + cardID;
    nyttKortMedlemmerIKortDiv.id = "nyttKortMedlemmerIKort" + cardID;

    nyttKortMedlemmer.setAttribute("size", membersInProject.length);
    nyttKortMedlemmerbutton.setAttribute("type", "button");
    nyttKortMedlemmerbutton.value = "add member";
    nyttKortMedlemmerbutton.className = "add-member"



    nyttKortMedlemmerOption.id = "option";

    nyttKortMedlemmer.id = "selectingMembers" + cardID;
    nyttKortMedlemmer.className = "member-select";
    nyttKortMedlemmerbutton.setAttribute("onclick", "getSelectedValue("+ cardID +")");

    nyttKortFooter.className = "card-footer";
    nyttKortLagd.className = "card-created";
    nyttKortTidsfrist.className = "card-deadline";
    slettKort.setAttribute("onclick", " return slettKort(" + cardID + ")");


    listePosisjon.appendChild(nyttKort);
    nyttKort.appendChild(nyttKortHeader);
    nyttKort.appendChild(nyttKortBeskrivelse);
    nyttKort.appendChild(nyttKortFooter);
    nyttKortHeader.appendChild(nyttKortHeaderTekst);
    nyttKortBeskrivelse.appendChild(nyttKortBeskrivelseTekst);

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

    nyttKort.appendChild(nyttKortLagd);
    nyttKort.appendChild(nyttKortBrukere);
    nyttKort.appendChild(nyttKortTidsfrist);
    nyttKortLagd.appendChild(nyttKortLagdTekst);
    nyttKortTidsfrist.appendChild(nyttKortTidsfristTekst);
    nyttKortFooter.appendChild(nyttKortForrigeListe);
    nyttKortFooter.appendChild(nyttKortNesteListe);
    nyttKortFooter.appendChild(slettKort);


    var nyttKortHeaderTekstInput = document.getElementById("nyttKortNavn" + listeID).value;
    var nyttKortBeskrivelseInput = document.getElementById("nyttKortBeskrivelse" + listeID).value;
    var nyttKortTidsfristTekstInput = document.getElementById("nyttKortTidsfrist" + listeID).value;

    card.push({
        id: cardID,
        navn: nyttKortHeaderTekstInput,
        description: nyttKortBeskrivelseInput,
        listePosisjon: liste[listeID].id,
        lagd: getTime("date"),
        tidsfrist: nyttKortTidsfristTekstInput,
        brukere: [],
    });



    nyttKortHeaderTekst.value = card[cardID].navn;
    nyttKortBeskrivelseTekst.value = card[cardID].description;
    nyttKortLagdTekst.innerText = "Lagd: \n" + card[cardID].lagd;
    nyttKortTidsfristTekst.innerText = "Tidsfrist: \n" + card[cardID].tidsfrist;
    slettKort.value = "slett card";
    slettKort.className = "lukkKort";
    cardID++;

}

function removeMember(event) {
    event.target.remove();
    
}

function getSelectedValue(cardID) {

    for (var z = 0; z < card.length; z++) {
        var selValue = document.getElementById("nyttKortMedlemmer" + z);
        if (!card[z].brukere.includes(selValue.firstChild.value) && selValue.firstChild.value !== "") {
            card[z].brukere.push(selValue.firstChild.value);

            var membersContainer = document.getElementById("nyttKortMedlemmerIKort" + cardID);

            var nyttcardMedlemmerBilde = document.createElement("img");
            var memeberName = document.createElement("p");
            membersContainer.className = "card-members";
            for (var k = 0; k < card[z].brukere.length; k++) {
                for(var l = 0; l < membersInProject.length; l++){
                    if(card[z].brukere[k] == membersInProject[l].userName){
                        memeberName.innerText = card[z].brukere[k];
                        nyttcardMedlemmerBilde.setAttribute("src", membersInProject[l].profilePic);
                        nyttcardMedlemmerBilde.setAttribute("onclick", "removeMember(event)");
                    }
                }
                membersContainer.appendChild(memeberName);
                membersContainer.appendChild(nyttcardMedlemmerBilde);
            }
        }
    }
};


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
    var prevList = thisList.id = "liste" + parse;

    var thisCard = event.target.parentNode.parentNode;
    document.getElementById(prevList).appendChild(thisCard);
}


// slett card
function slettKort(cardID) {
    var card = document.getElementById("card" + cardID);
    card.parentNode.removeChild(card);
}

// redigerer cardenes tittel og description
function redigerListeTittel(listeID) {
    listeTittelContainer = document.getElementById("nyKortTittel" + listeID);
    liste[listeID].navn = listeTittelContainer.value;
}

function redigerTittel(cardID) {
    cardTittelContainer = document.getElementById("card-tittel-tekst" + cardID);
    card[cardID].navn = cardTittelContainer.value;
}

function redigerBeskrivelse(cardID) {
    cardBeskrivelseContiner = document.getElementById("card-description-tekst" + cardID);
    card[cardID].description = cardBeskrivelseContiner.value;
}