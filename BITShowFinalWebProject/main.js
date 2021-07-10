var input = $("#inputField");
var gallery = $(".gallery");

function showTop50() {

    var request = new XMLHttpRequest;

    var endpoint = "http://api.tvmaze.com/shows";

    request.open("GET", endpoint);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.responseText);

            response.sort(function (a, b) {                     //this sorts response by rating descending 
                return b.rating.average - a.rating.average;
            });         


            for (let i = 0; i < 50; i++) {
                var name = response[i].name;
                var image = response[i].image.medium;
                var showId = response[i].id;

                var $div = $("<div class='show'>");
                gallery.append($div);

                var $img = $("<img>");
                $img.attr("src", image);
                $div.append($img);

                var $a = $("<a>");
                $a.addClass("userLink");
                $a[0].setAttribute("href", "./tvShow.html");
                $a[0].setAttribute("target", "_blank");
                $a[0].setAttribute("id", showId);
                $div.append($a[0]);

                var $p = $("<p>");
                $p.text(name);
                $p.appendTo($a[0]);
            }

            $("a").click(function () {
                var showName = $(this).find("p").text();
                var showId = $(this).attr("id");

                localStorage.setItem("1", showName);
                localStorage.setItem("2", showId);
            })
        }
    }
    request.send();
}
showTop50();

