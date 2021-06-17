/*
Traverse (Redo Gallery)
Create a page with two “galleries”
Each gallery should contain 3 photos and it should be wrapped in a div
Width of the pictures should be 33%

One picture in the first gallery should have a red border around it
Red border should be a result of a class named “selected”

Create a function that selects the image with red borders and removes them, then uses traversing technique to navigate to the second gallery and applies the red borders to the middle picture
*/


function changeSelectedClass() {
    $(".selected").toggleClass("selected");
    $(".gallery2 img:nth-child(2)").toggleClass("selected");
}
changeSelectedClass();


/* or like this by traversing through files vvv

function changeSelectedClass() {
    $(".selected").toggleClass("selected");
    $(".gallery1").siblings().children("img:nth-child(2)").toggleClass("selected");
}
changeSelectedClass();
*/