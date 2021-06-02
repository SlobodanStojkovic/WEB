/*
InnerHTML

Do the following exercise in two ways: using DOM manipulation methods and
using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second
is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the
select element.
Add the whole dropdown list to DOM .
Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/

//If we want to create DIV from DOM this is how we do it

/*
var divElem = document.createElement("div");
var text = document.createTextNode("Div element adding text");
divElem.appendChild(text);
var bodyNode = document.querySelector("body");
bodyNode.appendChild(divElem);  
*/

//now we made a div element and added it to the page



function createDropdown(array, node) {

    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {

        var item = document.createElement('li');                 // Create the list item:

        item.appendChild(document.createTextNode(array[i]));     // Set its contents:

        list.appendChild(item);                                  // Add it to the list:
    }
    var insertNode = document.querySelector(node);               //Inserting our dropdown list to NODE
    insertNode.appendChild(list);

    
    var select1 = "";
    var select2 = "";

    for (var i = 0; i < array.length; i++) {
        select1 += array[i];
    }

    div[0].innerHTML = select1;
    div[div.length - 1].innerHTML = select2;
    return div;
}
createDropdown(["first", "second", "third"], "div");
