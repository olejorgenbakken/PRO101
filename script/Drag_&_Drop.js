
var list = [
  {
    
  },
  {
    listID: 1
  }
];



var i = 0;

 function addItem(){


var div = document.querySelector(".card-");
  var input = document.getElementById("cardInput");
  var divNode = document.createElement("div");

  if(input.value == ""){
    return;
  }
  
    i++;
  console.log(i);

  divNode.setAttribute('class',"card-" + i);
  divNode.appendChild(document.createTextNode(input.value));
  div.appendChild(divNode);
  
}


var el = document.querySelector(".card-");
var sortable = Sortable.create(el, {
    group: "doing",
    sort: true,
});




var el1 = document.getElementById("items_two");
var sortable = Sortable.create(el1, {
    group: "doing",
    sort: true,

});