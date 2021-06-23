var background = 1;
var goRight;
var goLeft;
var intervals = [];     //we will create empty array in which we will push all intervals so that we can later clear them all at once

$("body").keydown(function (event) {
    switch (event.which) {
        case 37:    //left arrow key

            intervals.forEach(clearInterval);

            $(".superMarioImg").attr("src", "./assets/mario_running_left.gif");
            function superMarioGoRight() {
                $("body").css("backgroundPositionX", function () {
                    var result;
                    result = background + "px";
                    background += 15;
                    return result;
                })
            }

            goRight = setInterval(superMarioGoRight, 100);
            intervals.push(goRight);
            break;

        case 39:    //right arrow key

            intervals.forEach(clearInterval);

            $(".superMarioImg").attr("src", "./assets/mario_running.gif");
            function superMarioGoLeft() {
                $("body").css("backgroundPositionX", function () {
                    var result;
                    result = background + "px";
                    background -= 15;
                    return result;
                })
            }

            goLeft = setInterval(superMarioGoLeft, 100);
            intervals.push(goLeft);
            break;

        case 38: //up arrow key
            function marioJump() {
                $(".superMarioImg").css("bottom", "32%");
            }
            function marioGetDown() {
                $(".superMarioImg").css("bottom", "9%");
            }
            setTimeout(marioJump, 1)
            setTimeout(marioGetDown, 500)
            break;

        case 40: //down arrow key

            intervals.forEach(clearInterval);
            if ($(".superMarioImg").attr("src") !== "./assets/mario_running.gif") { //if Mario is running left after stop he is facing left
                $(".superMarioImg").attr("src", "./assets/marioFlip.png");
            } else {
                $(".superMarioImg").attr("src", "./assets/mario.png");  //if Mario is running right after stop he is facing right
            }
            $("body").css("backgroundPositionX", "0px");
            break;
    }
});