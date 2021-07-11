var input = $("#inputField");
var gallery = $(".gallery");

function searchForShow() {

    var searchShowRequest = new XMLHttpRequest;
    var query = input.val();
    var searchShowEndpoint = "http://api.tvmaze.com/search/shows?q=" + query;

    searchShowRequest.open("GET", searchShowEndpoint);

    searchShowRequest.onload = function () {
        if (searchShowRequest.status >= 200 && searchShowRequest.status < 300) {
            var response2 = JSON.parse(searchShowRequest.responseText);

            $("#searchOptions").empty();    //this empties all the options from search list

            for (var j = 0; j < response2.length && j < 10; j++) {
                var searchResult = response2[j].show.name;
                var searchedShowId = response2[j].show.id;

                var liOption = $("<li>");
                liOption.text(searchResult);
                liOption.attr("class", "searchedOption dropdown-item");
                liOption.attr("id", searchedShowId);

                $("#searchOptions").append(liOption);
            }

            $(".searchedOption").click(function () {
                var showName = $(this).text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
                window.location.replace("tvShow.html");
            });
        }
    }
    searchShowRequest.send();
}
input.keyup(searchForShow);


/* If we want that in search menu after we type something and hit enter it displays us TV shows that correspond search query, we will insert this piece of code

input.keypress(function (e) {
    if (e.which == 13) {

        e.preventDefault();

        function showSearched() {

            var request3 = new XMLHttpRequest;

            var endpoint3 = "http://api.tvmaze.com/search/shows?q=" + input.val();

            request3.open("GET", endpoint3);

            gallery.empty();

            request3.onload = function () {
                if (request3.status >= 200 && request3.status < 300) {
                    var response3 = JSON.parse(request3.responseText);

                    for (let k = 0; k < response3.length; k++) {

                        var name3 = response3[k].show.name;
                        var image3 = response3[k].show.image.medium;
                        var showId3 = response3[k].show.id;

                        var $div3 = $("<div class='show'>");
                        gallery.append($div3);

                        var $img3 = $("<img>");
                        $img3.attr("src", image3);
                        $div3.append($img3);

                        var $a3 = $("<a>");
                        $a3.addClass("userLink");
                        $a3[0].setAttribute("href", "./tvShow.html");
                        $a3[0].setAttribute("target", "_blank");
                        $a3[0].setAttribute("id", showId3);
                        $div3.append($a3[0]);

                        var $p3 = $("<p>");
                        $p3.text(name3);
                        $p3.appendTo($a3[0]);
                    }

                    $("a").click(function () {
                        var showName = $(this).find("p").text();
                        var showId = $(this).attr("id");

                        localStorage.setItem("1", showName);
                        localStorage.setItem("2", showId);
                    })
                }
            }
            request3.send();
        }
        showSearched();
    }
}); */