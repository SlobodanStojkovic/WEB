
$(document).ready(function () {

    $("button").click(function () {
        console.log("1")
        $(".div1").animate({
            left: "250px",
            top: "250px",
        }, 2000, "swing");


    })


    $("button").click(function () {
        console.log("2")
        $(".div2").animate({
            left: "450px",
            top: "250px",
        }, 2000, "linear");
    })

})
/*
Syntax
(selector).animate({styles},speed,easing,callback)

EASING is optional. Specifies the speed of the element in different points of the animation. Default value is "swing". Possible values:
"swing" - moves slower at the beginning/end, but faster in the middle
"linear" - moves in a constant speed

Callback is optional. A function to be executed after the animation completes.
*/