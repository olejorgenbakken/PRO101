//Firebase Config
var registreredUsers = [
    {
        userName: "Filip",
        email: "filip@filip.com"
    },
    {
        userName: "OJ",
        email: "oj@oj.com"
    },
    {
        userName: "Sofie",
        email: "sofie@sofie.com"
    },
    {
        userName: "Julian",
        email: "julian@julian.com"
    }
];
//Legge til medlem i prosjekt
//Implementer at admin blir automatisk pushet inn i array

var membersInProject = [
    {
        userName: "Admin",
        email: "admin@admin.com"
    },
    {
        userName: "Filip",
        email: "filip@filip.com"
    },
    {
        userName: "OJ",
        email: "oj@oj.com"
    },
    {
        userName: "Sofie",
        email: "sofie@sofie.com"
    },
    {
        userName: "Julian",
        email: "julian@julian.com"
    }
];

var memberButton = document.createElement("BUTTON");

memberButton.addEventListener("click", function(){
    document.getElementById("addMember").style.display = "flex";
});