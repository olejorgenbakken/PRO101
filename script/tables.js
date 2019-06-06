var project = [{
    name: "Trip to somewhere"
}];

//lag board
var board = [];

var boardID = 0;

var newBoardKnapp = document.getElementById("newBoardBtn");    
newBoardKnapp.setAttribute("onclick", " return lagBoard()");

var projectTitleWrp = document.getElementById("project-header");
var projectTitle = document.createElement("input");
projectTitle.className = "project-title";
projectTitle.id = "project-title";
projectTitle.type ="textarea";
projectTitle.value = project[0].name;

projectTitleWrp.appendChild(projectTitle);

// lager en new liste med mulighet for å lage flere kort
function lagBoard() {

    board.push({
        id: boardID,
        navn: "board" + boardID,
        antallBoardr: boardID,
    });

    var wrapper = document.getElementById("boards-wrapper");

    var newBoard = document.createElement("div");
    var newBoardTitle = document.createElement("input");
    var deleteBoard = document.createElement("button");
    var boardLink = document.createElement("a");

    deleteBoard.innerText = "Delete board";

    newBoard.className = "board";
    newBoard.id = "board" + boardID;
    newBoardTitle.className = "board-title";
    newBoardTitle.value = "New Board";
    boardLink.className = "board-link";
    boardLink.setAttribute("href", "lister.html");
    boardLink.innerText = "Go to Table";
    deleteBoard.setAttribute("onclick", " return deleteBoard(" + boardID + ")");

    wrapper.appendChild(newBoard);
    newBoard.appendChild(newBoardTitle);
    newBoard.appendChild(deleteBoard);
    newBoard.appendChild(boardLink);

    boardID++;
}

// delete board
function deleteBoard(boardID) {
    var board = document.getElementById("board" + boardID);
    board.remove("board" + boardID);
}