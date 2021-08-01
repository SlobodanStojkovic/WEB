var showName = localStorage.getItem("1");
$("#newShowTitle").text(showName);
localStorage.removeItem("1");

var showId = localStorage.getItem("2");
localStorage.removeItem("2");

var $getCrew = $("#getCrew");
var $getAkas = $("#getAkas");
var $getEpisodes = $("#getEpisodes");

function getShowDetails() {
    var $main = $("main");
    var $showDetails = $("#showDetails");

    var imageDescrRequest = new XMLHttpRequest();
    var seasonsRequest = new XMLHttpRequest();
    var castRequest = new XMLHttpRequest();

    var imageDescrEndpoint = "http://api.tvmaze.com/shows/" + showId;
    var seasonsEndpoint = "http://api.tvmaze.com/shows/" + showId + "/seasons";
    var castEndpoint = "http://api.tvmaze.com/shows/" + showId + "/cast";

    imageDescrRequest.open("GET", imageDescrEndpoint);
    seasonsRequest.open("GET", seasonsEndpoint);
    castRequest.open("GET", castEndpoint);

    imageDescrRequest.onload = function () {
        if (imageDescrRequest.status >= 200 && imageDescrRequest.status < 300) {

            var imageDescrResponse = JSON.parse(imageDescrRequest.responseText);

            if (imageDescrResponse.image == null) {
                var image = $("<img>");

                image.attr("src", "./assets/imagePlaceholder.png");
                image.attr("alt", "imagePlaceholder");
                $main.prepend(image);
            } else {
                var image = imageDescrResponse.image.original;

                var $img = $("<img>");
                $img.attr("src", image);
                $img.attr("alt", showName);
                $main.prepend($img);
            }

            var description = imageDescrResponse.summary;
            $(description).insertAfter($showDetails);
        }
    };

    seasonsRequest.onload = function () {
        if (seasonsRequest.status >= 200 && seasonsRequest.status < 300) {

            var seasonsResponse = JSON.parse(seasonsRequest.responseText);
            var numberOfSeasons = seasonsResponse.length;
            $("#h3Seasons").html(`Seasons (${numberOfSeasons})`);

            var $ul = $("<ul class='seasons col12'>");

            $("#h3Seasons").after($ul);

            for (var i = numberOfSeasons - 1; i >= 0; i--) {
                var seasonStart = seasonsResponse[i].premiereDate;
                var seasonEnd = seasonsResponse[i].endDate;

                if (seasonStart === null) {
                    seasonStart = "No information about season start";
                }

                if (seasonEnd === null) {
                    seasonEnd = "No information about season end";
                }

                var $li = $("<li>");
                $li.text(seasonStart + " - " + seasonEnd);
                $(".seasons").append($li);
            }
        } else {
            $("#h3Seasons").text("There is no available data. Please try again.");
        }
    };

    castRequest.onload = function () {
        if (castRequest.status >= 200 && castRequest.status < 300) {

            var castResponse = JSON.parse(castRequest.responseText);

            var $ul = $("<ul class='cast col12'>");
            $("#h3Cast").after($ul);

            for (var j = 0; j < castResponse.length; j++) {
                var actorName = castResponse[j].person.name;

                var $li = $("<li>");
                $li.text(actorName);
                $(".cast").append($li);
            }
        }

        if ($(".cast").children().length === 0) {
            var $p = $("<p>");
            $p.text("Cast is not available.");

            $("#h3Cast").after($p);
        }
    };

    imageDescrRequest.send();
    seasonsRequest.send();
    castRequest.send();
}
setTimeout(getShowDetails, 500);



function getCrew() {
    var crewRequest = new XMLHttpRequest();

    var crewEndpoint = "http://api.tvmaze.com/shows/" + showId + "/crew";

    crewRequest.open("GET", crewEndpoint);

    crewRequest.onload = function () {
        if (crewRequest.status >= 200 && crewRequest.status < 300) {

            var crewResponse = JSON.parse(crewRequest.responseText);

            var olDivCrew = $("<ol class='olCrew'>");

            $(".crew").append(olDivCrew);

            for (var k = 0; k < crewResponse.length; k++) {
                var crewName = crewResponse[k].person.name;

                var liCrew = $("<li>");
                liCrew.text(crewName);
                $(".olCrew").append(liCrew);
            }

            if ($(".olCrew").children().length < 1) {
                var liCrew = $("<li>");
                liCrew.text("There is no available information.");
                $(".olCrew").append(liCrew);
            }
        }
    };
    crewRequest.send();

    $("#getCrew").html("Hide Crew");
    $getCrew.off("click");
    $getCrew.one("click", hideCrew);
}
$getCrew.one("click", getCrew);



function getAkas() {

    var akasRequest = new XMLHttpRequest();

    var akasEndpoint = "http://api.tvmaze.com/shows/" + showId + "/akas";

    akasRequest.open("GET", akasEndpoint);

    akasRequest.onload = function () {
        if (akasRequest.status >= 200 && akasRequest.status < 300) {

            var akasResponse = JSON.parse(akasRequest.responseText);

            var olDivAkas = $("<ol class='olAkas'>");

            $(".akas").append(olDivAkas);

            for (var l = 0; l < akasResponse.length; l++) {
                var akasName = akasResponse[l].name;

                var liAkas = $("<li>");
                liAkas.text(akasName);
                $(".olAkas").append(liAkas);
            }

            if ($(".olAkas").children().length < 1) {
                var liAkas = $("<li>");
                liAkas.text("There is no available information.");
                $(".olAkas").append(liAkas);
            }
        }
    };
    akasRequest.send();

    $("#getAkas").html("Hide Akas");
    $getAkas.off("click");
    $getAkas.one("click", hideAkas);
}
$getAkas.one("click", getAkas);



function getEpisodes() {

    var episodesRequest = new XMLHttpRequest();

    var episodesEndpoint = "http://api.tvmaze.com/shows/" + showId + "/episodes";

    episodesRequest.open("GET", episodesEndpoint);

    episodesRequest.onload = function () {
        if (episodesRequest.status >= 200 && episodesRequest.status < 300) {

            var episodesResponse = JSON.parse(episodesRequest.responseText);

            var olDivEpisodes = $("<ol class='olEpisodes'>");

            $(".episodes").append(olDivEpisodes);

            for (var m = 0; m < episodesResponse.length; m++) {
                var episodeName = episodesResponse[m].name;

                var liEpisode = $("<li>");
                liEpisode.text(episodeName);
                $(".olEpisodes").append(liEpisode);
            }

            if ($(".olEpisodes").children().length < 1) {
                var liEpisode = $("<li>");
                liEpisode.text("There is no available information.");
                $(".olEpisodes").append(liEpisode);
            }
        }
    };
    episodesRequest.send();

    $("#getEpisodes").html("Hide Episodes");
    $getEpisodes.off("click");
    $getEpisodes.one("click", hideEpisodes);
}
$getEpisodes.one("click", getEpisodes);



function hideCrew() {
    $(".olCrew").remove();
    $("#getCrew").html("Show Crew");
    $getCrew.off("click");
    $getCrew.one("click", getCrew);
}


function hideAkas() {
    $(".olAkas").remove();
    $("#getAkas").html("Show Akas");
    $getAkas.off("click");
    $getAkas.one("click", getAkas);
}


function hideEpisodes() {
    $(".olEpisodes").remove();
    $("#getEpisodes").html("Show Episodes");
    $getEpisodes.off("click");
    $getEpisodes.one("click", getEpisodes);
}


