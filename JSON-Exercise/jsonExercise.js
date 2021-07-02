var newDog = new XMLHttpRequest();

var button = document.querySelector("#addPictureButton");

newDog.open( "GET", "https://dog.ceo/api/breeds/image/random");

newDog.onload = function (event) {
    if(newDog.status === 200) {
        console.log(newDog.responseText);
    }
}

newDog.send();

function getDogImage (response) {
    var response = newDog.responseXML;
    var dogImg = response.querySelector("message");
    console.log(dogImg)
}

button.addEventListener("click", getDogImage);