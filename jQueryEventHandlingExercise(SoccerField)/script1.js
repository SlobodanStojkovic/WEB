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

function startMovingPlayer() {
    $("body").on("click", movePlayer);  //this moves player
    enabled = true;
}
startMovingPlayer();


$("button").click(function toggleOnAndOff() {
    if (!enabled === true) {
        setTimeout(function () { $("body").on("click", movePlayer) }, 10);
        $(".stop").html("Stop");
        $(".stop").css("backgroundColor", "red");
        enabled = true;
    } else {
        $("body").off("click", movePlayer);
        $(".stop").html("Start");
        $(".stop").css("backgroundColor", "skyblue");
        enabled = false;
    }
});




