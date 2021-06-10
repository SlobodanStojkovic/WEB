/* 
var bodyNode = document.querySelector("body");
var gallery = document.querySelector(".gallery");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");
var img5 = document.querySelector("#img5");
var img6 = document.querySelector("#img6");


function handlerAddBorder() {
    if (img1.width == 300) {
        img1.classList.toggle("redborder");
    }
}
img1.addEventListener("click", handlerAddBorder);


function handlerAddBorder2() {
    if (img1.width == 300) {
        img1.classList.toggle("redborder");
    }
}
img2.addEventListener("click", handlerAddBorder2);
... and so on for every img
 */


var imgNodeList = document.querySelectorAll('img');

function handlerAddBorder(event) {
    if (event.target.width === 300) {
        event.target.classList.toggle("redborder");
    }
}

/* for (var i = 0; i < imgNodeList.length; i++) {
    imgNodeList[i].addEventListener('click', handlerAddBorder)
} 
This can be written like this vvv
*/

var galeryNode = document.querySelector(".gallery");

galeryNode.addEventListener("click", handlerAddBorder)

var bodyNode = document.querySelector("body");

function stopProp(event) {
    console.log(event.target);
    event.stopPropagation();
}
bodyNode.addEventListener("click", stopProp)





/*
var imgNode = document.querySelectorAll('img');

function handlerAddBorder(img) {
    img.classList.toggle("redborder");
}

for (var i = 0; i < imgNode.length; i++) {
    imgNode[i].addEventListener('click', function () {
        handlerAddBorder(this);
    });
}


function preventBorder(img) {
    if (img.width !== 300) {
        img.stopPropagination();
    }
}

for (var j = 0; j < imgNode.length; j++) {
    imgNode[j].addEventListener('click', function () {
        preventBorder();
    });
}
 */







/*

var imgNode = document.getElementsByTagName('img');

function handlerAddBorder(img) {
    if (img.width == 300) {
        img.classList.toggle("redborder");
    }
}

for (var i = 0, len = imgNode.length; i < len; i++) {
    // iterates through all the images and assigns an 'onclick' event-handler
    imgNode[i].onclick = function () {
        handlerAddBorder(this); // passes the current image into the handlerAddBorder() function when clicked
    };
}
 */




/*
Events propagation, stopping and preventing default

Create page containing gallery

Gallery contains six pictures
At least one of the pictures should have width of 300px
Add event listeners to all images on page
User can click on image and in that moment image will get 1px red border
If Image width is not 300px event propagation should be stopped!
Register event listener on document object, which listen for clicks
When click occurs it should print in console on which element user clicked
*/