/*
Inserting elements
Start with a blank HTML page
Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images
Go through gallery images and set a random size to each gallery image

Bonus:
Set a green border around each image whose width is less than 200px up until the first one that doesn't meet that requirement (i.e. when you get to the first img that is more than 200px wide, stop checking and setting green border).

*/
var imagesArray = ["https://a-z-animals.com/media/2021/01/mammals-400x300.jpg", "https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg", "https://insideclimatenews.org/wp-content/uploads/2021/01/tiger-bronx-zoo_james-devaney-getty-scaled.jpg"];

var galleryDiv = $("<div class='gallery'>");
galleryDiv.appendTo("body");

function addNewImage() {
    for (var i = 0; i < imagesArray.length; i++) {
        var createImage = $("<img>");
        createImage.attr("src", imagesArray[i]);
        createImage.appendTo(".gallery");
    }
}
addNewImage();



/* this code is longer version of the above one
var galleryImg1 = $("<img>");
galleryImg1.attr("src", imagesArray[0]);
galleryImg1.appendTo(".gallery");

var galleryImg2 = $("<img>");
galleryImg2.attr("src", imagesArray[1]);
galleryImg2.appendTo(".gallery");

var galleryImg3 = $("<img>");
galleryImg3.attr("src", imagesArray[2]);
galleryImg3.appendTo(".gallery"); */



var newTitle = $("<h1>");
newTitle.text("Amazing Gallery");
$("body").prepend(newTitle);


$(".gallery img:first-child").css("width", "400px");
$(".gallery img:not(:first-child):not(:last-child)").css("width", "600px"); // :not(:first-child):not(:last-child)  Sets middle child elements size
$(".gallery img:last-child").css("width", "700px");



//function randomizeSize() randomizes width of each image on button click and applies border green to all elements with width less than 200px
//after it reaches first element with size bigger than 200 px border applying stops
var stop = true;
var num = 0;

function randomizeSize() {
    $("img").each(function () {
        var randomWidth = 50 + Math.floor(Math.random() * 350);

        $(this).css("width", randomWidth);
        $(this).removeClass("borderGreen");

        if ($(this).width() <= 200 && stop === true) {
            $(this).addClass("borderGreen");
            num++;
        } else {
            if (num >= 1) {
                stop = false;
            }
        }
    })
    num = 0;
    stop = true;
}









