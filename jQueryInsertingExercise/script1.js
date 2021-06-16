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

var galleryImg1 = $("<img>");
galleryImg1.attr("src", imagesArray[0]);
galleryImg1.appendTo(".gallery");

var galleryImg2 = $("<img>");
galleryImg2.attr("src", imagesArray[1]);
galleryImg2.appendTo(".gallery");

var galleryImg3 = $("<img>");
galleryImg3.attr("src", imagesArray[2]);
galleryImg3.appendTo(".gallery");

var newTitle = $("<h1>");
newTitle.text("Amazing Gallery");
$("body").prepend(newTitle);


$(".gallery img:first-child").css("width", "400px");
$(".gallery img:not(:first-child):not(:last-child)").css("width", "600px"); // :not(:first-child):not(:last-child)  Sets middle child elements size
$(".gallery img:last-child").css("width", "700px");



var stop = true;    //this is needed because after it sets border on first image it needs to stop

$("img").each(function () {
    if ($("img").width() >= 200 && stop == true) {
        $(this).css("border", "3px solid green")
        stop = false;
    }
});





