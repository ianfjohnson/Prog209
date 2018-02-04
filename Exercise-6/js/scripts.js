//global
//output
var main = document.getElementById("main");
var outMsg = "";
//planet arrays
var planetNames = ["Jupiter", "Venus", "Saturn", "Mars", "Earth"];
var distancesFromEarth = [5.2, 0.72, 9.5, 1.5, 0];
var sunnyInAugust = [false, true, false, true, true];

//planet tiles loop
for (var i = 0; i < planetNames.length; i++) {
    //It felt weird having the output just say "false"/"true"
    var yesno = "Yes";
    if (sunnyInAugust[i] == false)
        { yesno = "No"; };
    
    //class='tile' used for uniformity
    //id='planetName[i]' used for unique stylings
    var nxtPlanet = "<div id='" + planetNames[i] + "' class='tile'>";
    nxtPlanet += "<h1>" + planetNames[i] + "</h1>";
    nxtPlanet += "<p>Distance from Earth: " + distancesFromEarth[i] + "</p>";
    nxtPlanet += "<p>Sunny In August: " + yesno + "</p>";
    nxtPlanet += "<p>----------</p></div>";
    
    outMsg += nxtPlanet;    
}

//sunny planets tile loop
outMsg += "<div id='sunnyPlanets' class='tile'><h1>The following planets are sunny in August:</h1><ul>"
for (var i = 0; i < planetNames.length; i++) {
    if (sunnyInAugust[i] == true)
        { outMsg += "<li>" + planetNames[i] + "</li>"}
}

//finalize output
outMsg += "</ul></div>"
main.innerHTML = outMsg;
