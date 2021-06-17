/*
Event Handling
Redo football example using jQuery 
*/

function movePlayer(e) {            //move player function
    $("img").css({
        "left": e.pageX - 50,       //-50 because width and height of player is 100px so that he locates in middle of click
        "top": e.pageY - 50
    }, 500)
};


$("body").on("click", movePlayer);  //this moves player


$("button").click(function () {     //this stops player from moving after we click stop button
    $("body").off("click", movePlayer)
})






