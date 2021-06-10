var bodyNode = document.querySelector("body");
var marioImg = document.createElement("img");
marioImg.src = "./assets/mario.png";
bodyNode.appendChild(marioImg);

var marioRun = document.createElement("img");
marioRun.src = "./assets/mario_running.gif";
marioRun.className = "run";

var backgroundImage = document.querySelector("container");

//document.querySelector("html").oncontextmenu =    or the method bellow vvv 

function getMarioToRun() {
    bodyNode.removeChild(marioImg);
    bodyNode.appendChild(marioRun);
    setInterval(function () {
        if (marioRun.style.left != "100%") {
            marioRun.style.left = (40 + setInterval(function () { var num = 1; num++; return num }, 100)) + "%";
            bodyNode.style.backgroundPositionX = (40 - setInterval(function () { var num = 1; num++; return num }, 1)) + "vh";
        }
    }, 100)
}

document.addEventListener("contextmenu", getMarioToRun);     // if we comment this we need to uncomment code UP 