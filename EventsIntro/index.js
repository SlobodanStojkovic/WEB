


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

elem.addEventListener('click', handler1);   // Thanks!
elem.addEventListener('click', handler2);   // Thanks again!


setTimeout(function () {
    elem.removeEventListener('click', handler2)
}, 5000);


var textInputNode = document.querySelector("#text-input");

textInputNode.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        console.log("ENTER");
    }
})