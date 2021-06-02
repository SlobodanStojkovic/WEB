

//to access (select) HTML root element - HTML node  - HTML tag in our case (root element) > this is how we select it
var htmlNode = document.documentElement;    //HTML tag is now selected and we can do what we want with it
console.log(htmlNode);

console.log(htmlNode.tagName);  //HTML  >>> tagName property returns name of the selected element
//in our case it will return HTML (for other tags its BODY, DIV...)



document.documentElement.hasChildNodes()    //returns children Nodes as an ARRAY

console.log(htmlNode.hasChildNodes());    //prints HTML and true (true because it has children)
console.log(document.documentElement.hasChildNodes()); //same thing as above just written in another way




console.log(document.documentElement.childNodes)      
console.log(htmlNode.childNodes);    //NodeList(3): head, text written inside tags (==$0 > blank spaces it sees as text), body


var bodyNode = htmlNode.childNodes[0];       //this is how we select body because its on index 2 of list
console.log(bodyNode);

console.log(bodyNode.tagName);  //BODY > because that the tag name




var containerDivNode = bodyNode.childNodes[1];  //this is how we access container div, because on index 0 it sees #text
//this method of accesing is called traversing > When a node is selected, you can select another element in relation to it


var bodyNode = htmlNode.childNodes[2];

console.log(bodyNode);
console.log(bodyNode.tagName);






document.documentElement.childNodes[1].parentNode //this is how we select parent of childNodes[1]

console.log(containerDivNode.parentNode);   //we can access body like this, because its parent of containerDiv

var bodyNode = containerDivNode.parentNode;     //because body is parent of container


//getElementById("id")
//querySelector("css selector")     >>> these two selectors always return single node

//querySelector("p") >>> it will select us first p (paragraph) that it finds



var firstParagraphNode = document.getElementById("firstId");    //this is how we select first paragraph by ID

console.log(firstParagraphNode);



var firstParagraphNode2 = document.querySelector("div");        //it will select container div because its first div
// we can also write ("#first") or ("p") > we use css sintax
// ("header img") will give us img inside header




/*
Methods that return more than one element:
    - getElementsByTagName("tag")
    - getElementsByClassName("class")
    - querySelectorAll("css selector")
*/

var divNodeList = document.getElementsByTagName("div")

console.log(divNodeList);   //returns all divs
 



var alertDivNodeList = document.getElementsByClassName("alert") //returns all elements that have class alert inside them

console.log(alertDivNodeList);  //returns all elements that have class alert inside them



var divNodeList2 = document.querySelectorAll(".container div") //select all divs inside Div with class container

console.log(divNodeList2);  //select all divs inside Div with class container






var alertDivNodeList = document.getElementsByClassName("alert")
var alertDivNodeList1 = document.querySelectorAll(".container div")

var firstDivNode = alertDivNodeList1[0];


console.log(firstDivNode.className) //first and alert


firstDivNode.className = "something";   //to change the div with class "first" class to "something"


//Whitespace Nodes is space betwen elements.
//if we dont want that unwanted text nodes be created by browsers instead of node we will use
// parentElement, previousElementSibling, nextElementSibling, children, firstElementChild, lastElementChild



















