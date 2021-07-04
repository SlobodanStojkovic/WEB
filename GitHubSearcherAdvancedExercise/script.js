var $search = $("#search");
var $gallery = $(".gallery");
var $aLink = $("a");


$search.keypress(function (event) {


    if (event.which == 13) {
        $gallery.empty();   //empty gallery if it has previous searches

        var newXML = new XMLHttpRequest();
        var $person = $search.val();
        var endpoint = "https://api.github.com/search/users?q=" + $person;

        newXML.open("GET", endpoint);

        newXML.onload = function () {
            if (newXML.status >= 200 && newXML.status < 300) {

                var response = JSON.parse(newXML.responseText);

                var searchedUsers = response.items;

                for (var i = 0; i < searchedUsers.length; i++) {

                    var userDiv = document.createElement("div");
                    userDiv.setAttribute("class", "users")
                    $gallery.append(userDiv);

                    var userImg = searchedUsers[i].avatar_url;
                    var username = searchedUsers[i].login;


                    var $img = document.createElement("img");
                    $img.setAttribute("src", userImg);
                    userDiv.append($img);

                    var $a = $("<a>");
                    $a.addClass("userLink");
                    $a[0].setAttribute("href", "./newPage.html");
                    $("a").attr("target", "_blank");
                    userDiv.append($a[0]);

                    var $p = $("<p>");
                    $p.text(username);
                    $p.addClass(username);
                    $p.appendTo($a[0]);

                    $search.val("");    //this will after we click for search clear input field
                }
            }
        }
        newXML.send();

        var $person2 = (function () {
            $("a").click(function () {
                return $("p").val();
            })
        });



        var newXML2 = new XMLHttpRequest();

        var endpoint2 = "https://api.github.com/users/" + $person2 + "/repos";

        newXML2.open("GET", endpoint2);

        newXML2.onload = function () {
            if (newXML2.status >= 200 && newXML2.status < 300) {

                var response2 = JSON.parse(newXML2.responseText);

                console.log(response2[0]);
                var repName = response2[j].name;
                console.log(repName);

                /*                     var $p2 = $("<p>");
                                    $p2.text(repName);
                                    $p2.appendTo($(".repInfo")); */

            }
            newXML2.send();

        }
    }
});






