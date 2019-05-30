
/*
function NodeTree(text){
  
  
  
  this.divElem = document.createElement("div");
  this.divElem.par = document.createElement("p");
  this.divElem.Node = this;
  
  this.divElem.appendChild(this.divElem.par);

  this.divElem.par.innerText = text;

  this.divElem.onclick = function(){

  }


 

}
*/


var list1 = [
  {
    name: "julian",
    age: 23,
    gender: "male",
  },
  {
    listID: 1
  }
];var list2 = [
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

  if(input.value === ""){
    return;
  }
  


    i++;
  console.log(i);

  divNode.setAttribute('class',"card-" + i);
  divNode.appendChild(document.createTextNode(input.value));
  div.appendChild(divNode);
  
}

var dragged;

/*

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {

  dragged = event.target;

  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {

  event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function(event) {

  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {

  if (event.target.className === "dropZone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {

  if (event.target.className === "dropZone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {

  event.preventDefault();

  if (event.target.className == "dropZone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );

   list1.ol
  }
}, false);
*/

el = document.getElementById("simpleList");
sortable = new Sortable(el, {
  group:"test",
  sort:true,



});
