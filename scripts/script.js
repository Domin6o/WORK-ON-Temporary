var myElement = document.getElementById("element");

if (myElement) {
    myElement.innerHTML += "<br>Mój tekst ze skryptu";
    myElement.style = "font-size: 30px; color: red;"
}
else {
    alert("There is no elment!");
}


var leleEle = document.getElementById("elelele");
var number = leleEle.innerHTML;

if (number == 1234) {
    leleEle.innerHTML += "5678";
}


function myFunction() {
    console.group("myFunction");
    console.time("myFunction timer");

    var myDivs = document.getElementsByClassName("myClass");
    const myDivsCount = myDivs.length;
    
    for (i = 0; i < myDivsCount; i++) {
        let myDiv = myDivs[i];
    
        if (myDiv) {
            if (myDiv.innerHTML == "abc") {
                myDiv.innerHTML += "def";
                myDiv.style = "font-size: " + (i + 1) * 10 + "px;"
                console.log("Div " + i + " html was changed...");
            }
        }
        else {
            alert("There are no " + i + " div");
        }
    }
    console.timeEnd("myFunction timer");
}

function myF() {
    let myDivs = document.getElementsByClassName("myClick");
    const myDivsCount = myDivs.length;
    
    for (i = 0; i < myDivsCount; i++) {
        let myDiv = myDivs[i];

        myDiv.oncontextmenu = function() {
            return false;
        };

        myDiv.onmouseup = function(e) {
            let fWeight = window.getComputedStyle(this).fontWeight;

            if (fWeight == 700) {
                this.style.fontWeight = 500;
            }
            else {
                this.style.fontWeight = 700;
            }
        };

        myDiv.onwheel = function(e) {
            e.preventDefault();

            let delta = e.deltaY;
            let fSize = window.getComputedStyle(this).fontSize;

            fSize = fSize.split("px")[0];

            if (delta < 0) {
                this.style.fontSize = "" + (fSize * 2) + "px";
            }
            else {
                this.style.fontSize = "" + (fSize / 2) + "px";
            }
        }
    }
}

window.onload = function() { myFunction(); myF(); };