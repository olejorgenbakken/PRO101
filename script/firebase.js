var firebaseConfig = {
    apiKey: "AIzaSyCREyJtPwHTNRLFUgWyQcApGuZ4nTW3aiY",
    authDomain: "pro101-425fc.firebaseapp.com",
    databaseURL: "https://pro101-425fc.firebaseio.com",
    projectId: "pro101-425fc",
    storageBucket: "pro101-425fc.appspot.com",
    messagingSenderId: "1025947228994",
    appId: "1:1025947228994:web:69460f41a6cc0060"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var db = firebase.firestore();
  var name = document.getElementById("name");

  db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

db.collection("projects").doc("project-1").set({
    name: "Project Name",
    members: ["Filip", "OJ", "Sofie", "Julian"],
    projectID: 0,
}).then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});