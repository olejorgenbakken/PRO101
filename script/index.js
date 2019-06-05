function animate() {
    var element = document.getElementById("slogan");
    element.style.opacity = "1";
    element.style.top = "0px";
}

animate();

var login = document.getElementById("login");
var register = document.getElementById("register");

function showLogin() {
    register.style.display = "none";
    login.style.display = "block";
}

function showRegister() {
    login.style.display = "none";
    register.style.display = "block";
}

var featureContainer = document.getElementById("feature");
var featureInfoContainer = document.getElementById("feature-info");

var feature = ["Time limits", "Be responsible", "idk...", ""];

var featureInfo = ["Set time limits for when a task should be completed", 
                    "Add people to a task to let them know they're the person for the job", 
                    "Flere features på kort?"];
var i = 0;

function showFeatures() {
    featureContainer.innerText = feature[i];
    featureInfoContainer.innerText = featureInfo[i];

    if (++i < feature.length) {
        setTimeout(showFeatures, 5000);
    }else if(i == 4) {
        i = 0;
        if(i == 0) {
            showFeatures();
        }
    }
};

showFeatures();