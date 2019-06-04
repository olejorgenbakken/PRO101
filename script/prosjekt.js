var prosjekt = [];

var prosjektID = 0;

function makeProject() {
    prosjekt.push({
        id: prosjektID,
        navn: "prosjekt" + prosjektID,
    })
    prosjektID++;

    var wrapper = document.getElementById("prosjekter")
    var newProject = document.createElement("div");
    newProject.id = "project" + prosjektID;
    newProject.className = "project col-large-6 col-small-12";
    wrapper.appendChild(newProject);
    var prosjektName = document.createElement("input");
    prosjektName.placeholder = "Project title"

    var slettProsjekt = document.createElement("input");
    slettProsjekt.type = "button";
    slettProsjekt.setAttribute("onclick", "slettProsjekt(" + prosjektID + ")");
    slettProsjekt.value = 'Delete project 🗑️';
    newProject.appendChild(prosjektName);
    newProject.appendChild(slettProsjekt);
}

function slettProsjekt(prosjektID) {
    var project = document.getElementById("project" + prosjektID);
    project.parentNode.removeChild(project);
}