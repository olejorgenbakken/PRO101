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
];
var wrapper = document.getElementById("addMember");
var memberButton = document.createElement("BUTTON");
memberButton.innerHTML = "Add member";

function getMembersInProject(){
    for(i = 0; i < membersInProject.length; i++){
        var createElement = document.createElement("P");
        wrapper.appendChild(createElement).innerHTML = membersInProject[i].userName;
    }
}

getMembersInProject();

memberButton.addEventListener("click", function(){
    document.getElementById("addMember").style.display = "flex";
});

document.getElementById("submitMember").addEventListener("click", function(){
    var memberInput = document.getElementsByTagName("INPUT").memberName;
    var newValue = memberInput.value;
    for(var i = 0; i < membersInProject.length; i++) {
        if(newValue == membersInProject[i].userName || newValue == membersInProject[i].email) {
            alert("User already added");
            memberInput.value = "";
            return;
        }
    }
    for(var i = 0; i < registreredUsers.length; i++){
        if(newValue === registreredUsers[i].userName || newValue === registreredUsers[i].email) {
            membersInProject.push(registreredUsers[i]);
            console.log(membersInProject);
            var createElement = document.createElement("P");
            memberInput.value = "";
            addMember.appendChild(createElement).innerHTML = newValue;
            alert("Member added");
            return;
        }
    }
    alert("Invalid username or email");
});