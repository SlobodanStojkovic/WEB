var containerNode = document.querySelector(".container");
var imgNode = document.querySelector(".player");
var buttonNode = document.querySelector(".stop");

function addPictureHandler(event) {
    var xPosition = event.clientX;
    var yPosition = event.clientY;
    console.log(xPosition);
    console.log(yPosition);

    imgNode.style.left = xPosition - 50 + 'px';//- 50 because its half of the image height and width so the image can place in center of click
    imgNode.style.top = yPosition - 50 + 'px';
}

containerNode.addEventListener("click", addPictureHandler);

function removeHandler() {
    containerNode.removeEventListener("click", addPictureHandler);
}

