

var listeDiv = document.getElementsByClassName("liste");
var listeID = document.getElementById("liste");
var dragged;


document.addEventListener("drag", function (event) {

}, false);


document.addEventListener("dragstart", function (event) {
    dragged = event.target;

console.log("hello");

},false);

document.addEventListener("dragend",function (event) {
    console.log("bye");
    event.target.remove(event.target);
    
}, false);

document.addEventListener("dragenter", function (event) {


    if( event.target.className === "hallo" ) {
        console.log(event.target);

    }


});

document.addEventListener("dragover", function (event) {
    
    event.dataTransfer.dropEffect == "move";
    if(event.target.className === "kort"){
        console.log(event.target);

    }
});

document.addEventListener("drop", function (event){
    console.log(1);
    event.preventDefault();


       


},false);








