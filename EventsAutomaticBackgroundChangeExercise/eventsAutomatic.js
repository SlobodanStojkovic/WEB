var bodyNode = document.querySelector("body");
var changeTime;


function automaticChange() {
    var colorNumber;
    colorNumber = Math.round(Math.random() * 9);

    if (colorNumber == 1) {
        document.body.style.background = "skyblue";
    }
    if (colorNumber == 2) {
        document.body.style.background = "black";
    }
    if (colorNumber == 3) {
        document.body.style.background = "red";
    }
    if (colorNumber == 4) {
        document.body.style.background = "green";
    }
    if (colorNumber == 5) {
        document.body.style.background = "pink";
    }
    if (colorNumber == 6) {
        document.body.style.background = "yellow";
    }
    if (colorNumber == 7) {
        document.body.style.background = "darkorange";
    }
    if (colorNumber == 8) {
        document.body.style.background = "gray";
    }
    if (colorNumber == 9) {
        document.body.style.background = "brown";
    }
}

function startAutomatic() {
    changeTime = setInterval("automaticChange()", 2000);
}

function stopAutomatic() {
    clearInterval(changeTime);
    document.body.style.background = "white"
}



//EXTRA vvv setting up with random hex colors number

function automaticFullSpectre() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);  //this generates random number in between 0 to 16777215 and converting it to string makes it random hex color
    document.body.style.backgroundColor = "#" + randomColor;
}

function startAutomaticFullSpectre() {
    var changeTimeFull = setInterval("automaticFullSpectre()", 2000);
}

function stopAutomaticFullSpectre() {
    clearInterval(changeTimeFull);
    document.body.style.background = "white"
}