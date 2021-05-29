//2
var secondUlNode = document.querySelector("ul").nextElementSibling;
console.log(secondUlNode);

secondUlNode.className = "colors";


//3
var allLi = document.querySelectorAll("li");
console.log(allLi);

//4
var li0 = allLi[0];
li0.className = "liBackground";

var li1 = allLi[1];
li1.className = "liBackground";

var li2 = allLi[2];
li2.className = "liBackground";

var li3 = allLi[3];
li3.className = "liBackground";

var li4 = allLi[4];
li4.className = "liBackground";

var li5 = allLi[5];
li5.className = "liBackground";

//Easier way with writting less code vvv
//allLi.forEach((li) => li.style.backgroundColor = "red");

/* Or can be written like this
for (var i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = "blue"; 
}
*/


//5
var newUl = document.createElement("ul");
newUl.innerHTML = "New UL text <li>first</li> <li>second</li>";
document.body.appendChild(newUl);



//6
newUl.className = "third";



/*
Selecting One/Multiple Elements

1. Create two unordered lists on the page.
2. Create a function that selects the second list and applies a class that sets some
background color to it.
3. Create a second function that, when triggered, selects all <li> elements on the
page.
4. The function also sets a class that sets some bg color to every <li> element.
5. Create one more unordered list and one more function
6. The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase.

Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its
background color.
Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the
first unordered list using node relations.
Apply class to that newly selected <li> element

Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on
screen using alert.

Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with
text passed as the function argument.
*/