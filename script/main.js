var memberButton = document.createElement("BUTTON");
document.getElementById("container").appendChild(memberButton);
memberButton.innerHTML = "Add member";

memberButton.addEventListener("click", function(){
    document.getElementById("addMember").style.display = "block";
});

submitMember.addEventListener("click",function(){
    var memberInput = document.getElementsByTagName("INPUT").memberName; 
    if(memberInput.value == "Filip") {
        var memberInputSave = memberInput.value;
        alert("Member added");
        var createMemberText = document.createElement("P");
        addMember.appendChild(createMemberText).innerHTML = memberInputSave;
    }else{
        alert("Wrong name");
    }
});