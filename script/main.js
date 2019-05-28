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


//Implementer at admin blir automatisk pushet inn i array
/*
var membersInProject = [];

for (var i = 0; i < registreredUsers.length; i++) {
    var createOption = document.createElement("OPTION");
    var addMember = document.getElementById("addMember");
    addMember.appendChild(createOption).innerText = registreredUsers[i].userName;
}
*/

var membersInProject = ["Admin"];

var memberButton = document.createElement("BUTTON");
document.getElementById("container").appendChild(memberButton);
memberButton.innerHTML = "Add member";

memberButton.addEventListener("click", function(){
    document.getElementById("addMember").style.display = "block";
});


document.getElementById("submitMember").addEventListener("click", function(){
    var memberInput = document.getElementsByTagName("INPUT").memberName;
    if(membersInProject.includes(memberInput.value)) {
        alert("Member exists");
    }else{
        var newValue = memberInput.value;
        memberInput.value = "";
        for(var i = 0; i < registreredUsers.length; i++){
            if(newValue === registreredUsers[i].userName || newValue === registreredUsers[i].email) {
                membersInProject.push(newValue);
                console.log(membersInProject);
                var createElement = document.createElement("P");
                memberInput.value = "";
                addMember.appendChild(createElement).innerHTML = newValue;
                alert("Member added");
                return;
            }
        }
        alert("Wrong name");
    }
});