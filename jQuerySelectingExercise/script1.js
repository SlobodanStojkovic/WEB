/*
Intro
Create a page that is using the jQuery library
Print ‘Hello, world!’ in console when DOM loads
*/

$(function () {
    console.log("Hello, world!")
});



/*
Selecting
Create a page that contains navigation (ul element)
Navigation should contain odd number of elements
Select the first element of the list and give it a bottom border
Select all list elements and transform their text to uppercase
Select active element of the list and change its font color
Find the middle one and change its background color
*/

$("li:first").css("border-bottom", "solid 3px black");

$("li").css("text-transform", "uppercase");

$(".active").css("color", "red");

$("li:nth-child(2)").css("background-color", "aqua");



