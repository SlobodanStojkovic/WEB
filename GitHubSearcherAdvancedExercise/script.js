var $search = $("#search");
var $gallery = $(".gallery");
var $logo = $(".logo");

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
                console.log(response);
                var searchedUsers = response.items;

                for (var i = 0; i < searchedUsers.length; i++) {

                    var userDiv = document.createElement("div");
                    userDiv.setAttribute("class", "users");
                    $gallery.append(userDiv);

                    var userImg = searchedUsers[i].avatar_url;
                    var username = searchedUsers[i].login;

                    var $a = $("<a>");
                    $a.addClass("userLink");
                    $a.attr("href", "./newPage.html");
                    $("a").attr("target", "_blank");
                    $a.text(username);

                    var $img = document.createElement("img");
                    $img.setAttribute("src", userImg);
                    $a.prepend($img);

                    userDiv.append($a[0]);

                    $search.val("");    //this will after we click for search clear input field
                }
            }
        };
        newXML.send();

        function getUserDetails() {

            function getUserOnClick() {
                var $person = $(this).text();
                localStorage.setItem("1", $person);
                console.log($person)
            }

            $("a").click(getUserOnClick);

            $("img").click(getUserOnClick);
        }
        setTimeout(getUserDetails, 1000);
    }
});

function backToHomePage() {
    window.location.href = "index.html"
}

$logo.click(backToHomePage);

