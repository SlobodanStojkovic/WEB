/*
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

var liClass = document.querySelectorAll("li")
console.log(liClass);

liClass[4].className = "active"

function selectLi() {
    var activeLi = document.querySelectorAll("li");
    activeLi[4].classList.remove("active");
    var newLi = activeLi[4].parentElement.parentElement.previousElementSibling.firstElementChild.childred[0]; //instead of children[0] we can put another firstElementChild and then we acceset li1
    newLi.className = "active";
    console.log(newLi);

}
selectLi();