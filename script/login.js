//Firebase Config
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

  function logIn(){
    var logUserNameInput = document.getElementById("logUsername").value;
    var logPasswordInput = document.getElementById("logPassword").value;
    db.collection("users").doc(logUserNameInput).set({
        name: logUserNameInput,
        password: logPasswordInput
    }).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error)
    });
  };