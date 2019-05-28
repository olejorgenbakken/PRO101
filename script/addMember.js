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