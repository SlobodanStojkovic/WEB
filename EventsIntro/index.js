
function sayHello() {
    console.log("Hello World")
}

setTimeout(sayHello, 5000);   //5000 ms = 5 seconds



var elem = document.querySelector("#id-1");

function handler1() {
    alert('Thanks!')
};

function handler2() {
    alert('Thanks again!')
};

elem.addEventListener('click', handler1);   // Thanks!   //NOTE: we dont call the function with () addeventListener calls it on click
elem.addEventListener('click', handler2);   // Thanks again!


setTimeout(function () {
    elem.removeEventListener('click', handler2)
}, 5000);


var textInputNode = document.querySelector("#text-input");

//when we press enter it will console log this vvv
textInputNode.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        console.log("You have pressed ENTER");
    }
})


// or can be written like this vvv
var keyDownHandler = function (e) {
    if (e.keyCode === 13) {
        console.log("You have pressed ENTER");
    }
}
textInputNode.addEventListener("keydown", keyDownHandler);  







var bodyNode = document.querySelector("body");
var ulNode = document.querySelector("ul");
var secondLiNode = document.querySelector("#second");

var bodyClickHandler = function () {
    console.log("Body element");
}

var ulClickHandler = function (event) {
    event.stopPropagation();    //this stops executing both this console.log and the one of Body element when clicking on UL
    console.log("Unordered list element");
}

var secondLiClickHandler = function (event) {
    event.stopPropagation();   //stops executing this console.log and the one of Ul element and body element when clicking on second Li          
    console.log("Second List element");
}

bodyNode.addEventListener("click", bodyClickHandler)
ulNode.addEventListener("click", ulClickHandler)
secondLiNode.addEventListener("click", secondLiClickHandler)