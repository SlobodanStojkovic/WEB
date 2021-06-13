var marioImg = document.querySelector("img");
var bodyNode = document.querySelector("body");

var marioRun = document.createElement("img");
marioRun.src = "./assets/mario_running.gif";
marioRun.className = "run";

var marioStand = document.createElement("img");
marioStand.src = "./assets/mario.png";
marioStand.className = "run";

var marioRunLeft = document.createElement("img");
marioRunLeft.src = "./assets/mario_running_left.gif";
marioRunLeft.className = "run";

var img = document.querySelector("img");
var num = 1;



function getMarioToRun(event) {
    if (event.key == "ArrowRight") {
        img.src = marioRun.src;
        num = 0;
        setInterval(function () {
            bodyNode.style.backgroundPositionX = (40 - num) + "vh";
            num += 2;
        }, 100)
    }
}
bodyNode.addEventListener("keydown", getMarioToRun);



function stopMario(event) {
    if (event.key == "ArrowDown") {
        img.src = marioStand.src;
        num = "string";
    }
}
bodyNode.addEventListener("keydown", stopMario);



function stopMarioLeft(event) {
    if (event.key == "ArrowDown") {
        img.src = marioStand.src;
        num = "string";
    }
}
bodyNode.addEventListener("keydown", stopMarioLeft);



function getMarioToRunLeft(event) {
    if (event.key == "ArrowLeft") {
        img.src = marioRunLeft.src;
        num = 0;
        setInterval(function () {
            bodyNode.style.backgroundPositionX = (40 + num) + "vh";
            num += 2;
        }, 100)
    }
}
bodyNode.addEventListener("keydown", getMarioToRunLeft);



function getMarioToJump(event) {
    if (event.key == "ArrowUp") {
        if (img.src == marioRun.src) {
            img.src = marioRun.src;
        } else img.src = marioRunLeft.src;
        img.style.bottom = 20 + "%";
        setTimeout(function () {
            if (img.style.bottom == "20%") {
                img.style.bottom = 9 + "%";
            }
        }
            , 1000)
    }
}
bodyNode.addEventListener("keydown", getMarioToJump);