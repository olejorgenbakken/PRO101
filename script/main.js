list = [{
    id: 0,
    name: "tittel"
}];

document.getElementById("newListBtn").addEventListener("click", createList);
var classname = document.getElementsByClassName("newCardBtn");

function createCard() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    var countClasses = document.getElementsByClassName("card").length;
    newCard.id = "card" + countClasses;

    var newCardHeader = document.createElement("div");
    newCardHeader.className = "header";

    var newCardHeaderText = document.createElement("h3");
    newCardHeaderText.textContent = "Nytt kort";

    var newCardFooter = document.createElement("footer");

    var newCardDescription = document.createElement("div");
    newCardDescription.className = "description";

    var newCardDescriptionText = document.createElement("p");
    newCardDescriptionText.textContent = "Nytt kort info jkbfkwjebfjkwengebg ikjlnd wejkbf wefnkjwe bkjwegb kewgb kjewbrg kje rgwkegbnilserg rgbe rgelrg erjig b";

    newCardDescription.appendChild(newCardDescriptionText);
    newCardHeader.appendChild(newCardHeaderText);
    newCard.appendChild(newCardDescription);
    newCard.appendChild(newCardFooter);
    newCard.appendChild(newCardHeader);
    document.getElementById("liste0").appendChild(newCard);

    console.log(newCard.id);
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', createCard, false);
}

function createList() {
    var newList = document.createElement("div");
    newList.className = "liste";
    var countClasses = document.getElementsByClassName("liste").length;
    newList.id = "liste" + countClasses;

    var newListHeader = document.createElement("div");
    newListHeader.className = "header";

    var newListHeaderText = document.createElement("h2");
    newListHeaderText.textContent = "Ny liste";

    newListHeader.appendChild(newListHeaderText);
    newList.appendChild(newListHeader);
    document.getElementById("wrapper").appendChild(newList);
};