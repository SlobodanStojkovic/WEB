var bodyNode = document.querySelector("body");
var marioImg = document.createElement("img");
marioImg.src = "./assets/mario.png";
bodyNode.appendChild(marioImg);

var marioRun = document.createElement("img");
marioRun.src = "./assets/mario_running.gif";
marioRun.className = "run";



document.querySelector("html").oncontextmenu =

function getMarioToRun() {
    bodyNode.removeChild(marioImg);
    bodyNode.appendChild(marioRun);
    setInterval(function () {
        if (marioRun.style.left != "100%") {
            marioRun.style.left = (40 + setInterval(function () { var num = 1; num++; return num }, 100)) + "%";
        }
    }, 100)
}

//bodyNode.addEventListener("oncontextmenu", getMarioToRun());      This executes code immediatly 