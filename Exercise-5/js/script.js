window.addEventListener("load", init);

function init() {
    //making some buttons
    var goBtn = document.getElementById("go");
    var clrBtn = document.getElementById("clear");
    goBtn.addEventListener("click", checker);
    clrBtn.addEventListener("click", reset);
}

function checker() {
    var color = new Array(0, 0, 0);
    color[0] = parseInt(document.getElementById("red").value);
    color[1] = parseInt(document.getElementById("blue").value);
    color[2] = parseInt(document.getElementById("yellow").value);
    
    var error = false;
    
    for (i = 0; i < color.length; i++) {
        if (isNaN(color[i]) || color[i] < 0 || color[i] > 255) {            
            error = true;
        }
    }

    if (error == false) {
        wallPaper(color);
    }
    else {
        document.getElementById("out").innerHTML = "You must enter numbers between 0 and 255!";
        reset();
    }
}

function wallPaper(color) {
//kept getting an error that I did not have "use strict"
//but frankly I don't know what that means
    "use strict";
    document.body.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
    invertColor(color);
    hex(color);
}

function reset() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("out").innerHTML = "";
}

function hex(color) {
    for (i = 0; i < color.length; i++) {
        var hex = color[i].toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }        
        color[i] = hex;
    }
    
    document.getElementById("out").innerHTML = "Hex value: #" + color[0] + color[1] + color[2];
}

	
function invertColor(color) {
    document.getElementById("main").style.color = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
    
    for (i = 0; i < color.length; i++) {
        color[i] = 255 - color[i];
    }    
    document.getElementById("main").style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
}