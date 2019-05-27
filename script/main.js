document.getElementById("newListBtn").addEventListener("click", createList);

list = [{
    id: 0,
    name: "tittel"
}];

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