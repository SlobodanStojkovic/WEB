$("li").click(function () {    //$("li")   gives out list of all li items on page >>> jQuery always return object thats why we can use .click
    $(this.remove())           //THIS in handler functions is reference on element where the handler function is registered. Here also it relates to selected element
});

//jQuery carries with itslef implicit LOOP that will always go through whole list and apply method to whole list



//  $("body").append($("<h1>").text("Some appended text"));      //this will create one element that is ready to be inserted into DOM

//$ sign is a indication that here we work with NODE


// $(document).ready(function () { })    //older method before jQuery 3.x version
$(function () {     //newer method in jQuery 3.x >>> this means in jQuery that it starts executing when document is READY, when whole DOM is loaded. We wrap code in function with $ sign.

    var $selectedBody = $("body");
    var $created = $("<h1>");
    $created.text("Some created text");

    var $someNode = document.getElementById("first");
    var $jQueryNode = $($someNode);


    $jQueryNode.click(function () {
        $(this).remove();
    });

    $selectedBody.prepend($created);    //puts h1 on top of the page

    console.log($("[href]"))    //selects everything that has in itself href EVERYTHING THAT CAN BE SELECTED IN CSS IS SAME SELECTED IN jQuery
});

//Going through DOME is A VERY EXPENSIVE OPERATION! >>> This can be a question on interview


console.log($("ul").text());    //  1   2   3
console.log($("ul").html());    /*      <li id="first">1</li>
                                        <li>2</li>
                                        <li>3</li>
*/      

//  $("ul").html("<li>From method</li>")  //makes UL text "From method" > replaces LI-elements
// $("ul").replaceWith("<a href="https://google.com">Click me</a>") //this replaces list with a Click me link that leads to google.com

// $("h1").remove();     //deletes everything with h1 tag

//$("li").addClass("favorite");     >>> each LI element will recieve class favorite

$("ul").hide().delay(500).fadeIn(1500);     // hides and fadeIn UL elements

$("ul").before($("<p>").text("where am I?"));    //inserts text Where am I? before UL element


//$("li.active").css("color", "red");     //this changes color of li element with class active to red
$("li.active").css({
    "color":"green",
    "background":"blue"
});                 // or like this, we give out object that gives out green color and blue background to css


/*  //this deletes Li element whose index is odd vvv

$("li").each(function (index, element) {
    if(index % 2 !== 0) {
        element.remove();
    }
});     

*/      
