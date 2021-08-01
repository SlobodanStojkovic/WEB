var input = $("#inputField");
var gallery = $(".gallery");
var h1 = $("h1");

function searchForShow() {

    var searchShowRequest = new XMLHttpRequest;
    var query = input.val();
    var searchShowEndpoint = "http://api.tvmaze.com/search/shows?q=" + query;

    searchShowRequest.open("GET", searchShowEndpoint);

    searchShowRequest.onload = function () {
        if (searchShowRequest.status >= 200 && searchShowRequest.status < 300) {
            var searchShowResponse = JSON.parse(searchShowRequest.responseText);

            $("#searchOptions").empty();    //this empties all the options from search list

            for (var j = 0; j < searchShowResponse.length && j < 10; j++) {
                var searchResult = searchShowResponse[j].show.name;
                var searchedShowId = searchShowResponse[j].show.id;

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

function showSearched() {

    var showSearchedRequest = new XMLHttpRequest;

    var showSearchedEndpoint = "http://api.tvmaze.com/search/shows?q=" + input.val();

    showSearchedRequest.open("GET", showSearchedEndpoint);

    gallery.empty();
    h1.empty();
    $(".buttons").empty();
    $(".crewAkasEpisodes").empty();

    showSearchedRequest.onload = function () {
        if (showSearchedRequest.status >= 200 && showSearchedRequest.status < 300) {
            var showSearchedResponse = JSON.parse(showSearchedRequest.responseText);

            for (let i = 0; i < showSearchedResponse.length; i++) {

                var name = showSearchedResponse[i].show.name;

                if (showSearchedResponse[i].show.image != null) {
                    var image = showSearchedResponse[i].show.image.medium;
                } else {
                    var image = "./assets/imagePlaceholder.png";   //image placeholder
                }

                var showId = showSearchedResponse[i].show.id;

                var $div = $("<div class='show col-4 p-3'>");
                gallery.append($div);

                var $img = $("<img>");
                $img.attr("src", image);
                $img.attr("class", showId);
                $img.attr("alt", name);
                $div.append($img);

                var $a = $("<a>");
                $a.addClass("userLink");
                $a.attr("href", "./tvShow.html");
                $a.attr("target", "_blank");
                $a.attr("id", showId);
                $a.text(name);

                $div.append($a);
            }

            $("a").click(function () {
                var showName = $(this).text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
            })

            $("img").click(function () {
                var showName = $(this).attr("alt");
                var showId = $(this).attr("class");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
                window.location.replace("tvShow.html");
            })
        }
    }
    showSearchedRequest.send();
}


input.keypress(function (e) {
    if (e.which == 13) {

        e.preventDefault();

        showSearched();
    }
});