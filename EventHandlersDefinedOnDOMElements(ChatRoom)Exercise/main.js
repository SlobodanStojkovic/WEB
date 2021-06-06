var buttonHandler = document.querySelector(".send");
var chat = document.querySelector(".chat");
var input = document.querySelector(".chatInput");

buttonHandler.addEventListener("click", function () {
    var paragraph = document.createElement("P");
    paragraph.innerHTML = "" + input.value;
    document.getElementById("chat").appendChild(paragraph);
    input.value = "";
});
