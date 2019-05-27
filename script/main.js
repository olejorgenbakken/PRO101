document.getElementById("newList").addEventListener("click", createList);

function createList() {
    var newList = document.createElement("div");
    newList.className = "liste";

    var newListHeader = document.createElement("div");
    newListHeader.className = "header";

    var newListHeaderText = document.createElement("h2");
    newListHeaderText.textContent = "Ny liste";

    newListHeader.appendChild(newListHeaderText);
    newList.appendChild(newListHeader);
    document.getElementById("wrapper").appendChild(newList);

    var btnList = document.getElementById("btnList");
    
    function newPosition() {

        var countClasses = document.getElementsByClassName("liste").length;
        var newListbtn = document.getElementById("newListbtn");
        btnList.removeChild(newListbtn);
        newList.appendChild(newListbtn);

        console.log(countClasses);
        
    };

    newPosition();
};