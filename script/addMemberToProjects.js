for(var i = 0; i < membersInProject.length; i++) {
    var option = document.createElement("P");
    var selection = document.getElementById("memberSelection");
    var selectMember = document.createElement("INPUT");
    var membersInCard = [];
    selectMember.setAttribute("value", membersInProject[i].userName);
    selectMember.setAttribute("type", "checkbox");
    selectMember.className = "select-member";

    option.id = "member-" + i;
    option.className = "member";
    option.innerHTML = membersInProject[i].userName;
    option.appendChild(selectMember);
    selection.appendChild(option);

    selectMember.addEventListener("change", function(e){
        membersInCard.push(e.target.value);
        e.target.parentNode.remove(i);
    })
};