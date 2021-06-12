var marioImg = document.querySelector("img");
var bodyNode = document.querySelector("body");

var marioRun = document.createElement("img");
marioRun.src = "./assets/mario_running.gif";
marioRun.className = "run";

var num = 1;
//document.querySelector("html").oncontextmenu =    or the method bellow vvv 

function getMarioToRun(event) {
    if (event.key == "ArrowRight") {
        bodyNode.removeChild(marioImg);
        bodyNode.appendChild(marioRun);
        setInterval(function () {
            //if (marioRun.style.left != "100%") {
            /* marioRun.style.left = (40 + num) + "%"; */  //this code sets mario run right out of screen
            bodyNode.style.backgroundPositionX = (40 - num) + "vh";
            //}
            num += 2;
        }, 100)
    }
}

bodyNode.addEventListener("keydown", getMarioToRun);     // if we comment this we need to uncomment code UP 



