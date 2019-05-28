var table = [{
    id: 0,
    name: "Tavle",
    numberOfLists: 2,
}]

// create list
var list = [{
    id: "list" + 0,
    name: "list",
}];

// create user
var user = [{
    userName: "OJ",
    email: "olejorgenbakken@gmail.com"
}, {
    userName: "Filip",
    email: "filip@online.no",
}];

// create card
var card = [{
    id: "kort" + 0,
    name: document.getElementById("newCardNameInput").value,
    list: list[0].id,
    dateCreated: getTime(),
    timeLimit: document.getElementById("newCardTimeInput").value,
    cardMembers: user,
    description: document.getElementById("newCardDescriptionInput").value,

}];



// Adding eventlisteners
document.getElementById("newListBtn").addEventListener("click", createList);
var newCardSubmit = document.getElementById("newCardSubmit");
newCardSubmit.addEventListener("click");

// get time and date
function getTime() {
    var today = new Date();
    var date = "Date: " + today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
    var time = "Time: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + '\n ' + time;

    return dateTime;
}

// adding card with input values
function createCard(e) {
    if (e.keyCode == 13 || newCardSubmit){

        // count cards
        var countCards = document.getElementsByClassName("card").length;
        
        // push into array
        card.push({
            id:"kort" + countCards,
            name: document.getElementById("newCardNameInput").value,
            list: list[0].id,
            dateCreated: getTime(),
            timeLimit: document.getElementById("newCardTimeInput").value,
            cardMembers: user.name,
            description: document.getElementById("newCardDescriptionInput").value,
        });

        var cardsList = document.getElementById(card[countCards].list);

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
    
    // count lists
    var countLists = document.getElementsByClassName("list").length;

    // push into array
    list.push({
        id: "list" + countLists,
        name: "liste " + countLists,
    });

    console.log(list[countLists].id);

    var newList = document.createElement("div");
    var newListHeader = document.createElement("div");
    var newListHeaderText = document.createElement("h2");
    var newListBtn = document.createElement("button");

    newList.className = "list";
    newListHeader.className = "header";
    newListBtn.className = "newListBtn";

    newListHeaderText.innerText = list[countLists].name;
    console.log(list[countLists].name);

    wrapper.appendChild(newList);
    newList.appendChild(newListHeader);
    newList.appendChild(newListBtn);
    newListHeader.appendChild(newListHeaderText);

    
};