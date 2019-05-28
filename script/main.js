var list = [{
    id: 0,
    name: "list",
}];

var users = [{
    userName: "OJ",
    email: "olejorgenbakken@gmail.com"
}, {
    userName: "Filip",
    email: "filip@online.no",
}];

// create array
var card = [{
    id: "kort" + 0,
    name: document.getElementById("newCardNameInput").value,
    list: list[0].id,
    dateCreated: getTime(),
    timeLimit: document.getElementById("newCardTimeInput").value,
    cardMembers: users,
    description: document.getElementById("newCardDescriptionInput").value,

}];

// Adding eventlistener to newList
document.getElementById("newListBtn").addEventListener("click", createList);
var newCardSubmit = document.getElementById("newCardSubmit").addEventListener("click", createCard);

// get time and date
function getTime() {
    var today = new Date();
    var date = "År: " + today.getFullYear() + " Måned: " + (today.getMonth() + 1) + " Dag: " + today.getDate();
    var time = "Time: " + today.getHours() + " Minutt: " + today.getMinutes() + " Sekunder: " + today.getSeconds();
    var dateTime = date + ' ' + time;

    return dateTime;
}

// adding card with input values
function createCard(e) {
    if (e.keyCode == 13){

        // count cards
        var countCards = document.getElementsByClassName("card").length;

        // push into array
        card.push({
            id:"kort" + countCards,
            name: document.getElementById("newCardNameInput").value,
            list: list[0].id,
            dateCreated: getTime(),
            timeLimit: document.getElementById("newCardTimeInput").value,
            cardMembers: users.name,
            description: document.getElementById("newCardDescriptionInput").value,
        });

        console.log(card[countCards].id);

        var cardsList = document.getElementById("liste" + card[countCards].list);

        var newCard = document.createElement("div");
        var newCardHeader = document.createElement("div");
        var newCardHeaderText = document.createElement("h2");
        var newCardDescription = document.createElement("div");
        var newCardDescriptionText = document.createElement("p");
        var newCardFooter = document.createElement("footer");
        var newCardDateCreated = document.createElement("div");
        var newCardDateCreatedText = document.createElement("h3");
        var newCardTimeLimit = document.createElement("div");
        var newCardTimeLimitText = document.createElement("h2");

        newCard.className = "card";
        newCardHeader.className = "header";
        newCardDescription.className = "description";
        newCardDateCreated.className = "dateCreated";
        newCardTimeLimit.className = "tidsfrist";

        newCardHeaderText.innerText = card[countCards].name;
        newCardDescriptionText.innerText = card[countCards].description;
        newCardDateCreatedText.innerText = card[countCards].dateCreated;
        newCardTimeLimitText.innerText = card[countCards].timeLimit;
        
        cardsList.appendChild(newCard);
        newCard.appendChild(newCardHeader);
        newCard.appendChild(newCardDescription);
        newCard.appendChild(newCardFooter);
        newCard.appendChild(newCardDateCreated);
        newCardHeader.appendChild(newCardHeaderText);
        newCardDescription.appendChild(newCardDescriptionText);
        newCardFooter.appendChild(newCardDateCreated);
        newCardDateCreated.appendChild(newCardDateCreatedText);
        newCardFooter.appendChild(newCardTimeLimit);
        newCardTimeLimit.appendChild(newCardTimeLimitText);
    }
};

function createList() {
    var newList = document.createElement("div");
    newList.className = "liste";
    var countCards = document.getElementsByClassName("liste").length;
    newList.id = "liste" + countCards;

    var newListHeader = document.createElement("div");
    newListHeader.className = "header";

    var newListHeaderText = document.createElement("h2");
    newListHeaderText.textContent = "Ny liste";

    newListHeader.appendChild(newListHeaderText);
    newList.appendChild(newListHeader);
    document.getElementById("wrapper").appendChild(newList);
};