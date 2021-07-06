var $search = $("#search");
var $gallery = $(".gallery");


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
                    userDiv.setAttribute("class", "users");
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
                    $p.appendTo($a[0]);

                    $search.val("");    //this will after we click for search clear input field
                }
            }
        };
        newXML.send();

        function getUserDetails() {

            $("a").click(function () {
                index = $(this).index("a");
                localStorage.setItem("1", index);

                var $person2 = $("a")[index].firstChild.innerHTML;
                localStorage.setItem("2", $person2);
            });
        }
        setTimeout(getUserDetails, 1000);
    }
});

