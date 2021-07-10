var showName = localStorage.getItem("1");
$("#newShowTitle").text(showName);
localStorage.removeItem("1");

var showId = localStorage.getItem("2");
localStorage.removeItem("2");

function getShowDetails() {
    var $main = $("main");
    var $showDetails = $("#showDetails");

    var request4 = new XMLHttpRequest();
    var request5 = new XMLHttpRequest();
    var request6 = new XMLHttpRequest();

    var endpoint4 = "http://api.tvmaze.com/shows/" + showId;
    var endpoint5 = "http://api.tvmaze.com/shows/" + showId + "/seasons";
    var endpoint6 = "http://api.tvmaze.com/shows/" + showId + "/cast";

    request4.open("GET", endpoint4);
    request5.open("GET", endpoint5);
    request6.open("GET", endpoint6);

    request4.onload = function () {
        if (request4.status >= 200 && request4.status < 300) {

            var response4 = JSON.parse(request4.responseText);

            var image = response4.image.original;
            var description = response4.summary;

            var $img = $("<img>");
            $img.attr("src", image);
            $main.prepend($img);

            $(description).insertAfter($showDetails);
        }
    };

    request5.onload = function () {
        if (request5.status >= 200 && request5.status < 300) {

            var response5 = JSON.parse(request5.responseText);
            var numberOfSeasons = response5.length;
            $("#h3Seasons").html(`Seasons (${numberOfSeasons})`);

            var $ul = $("<ul class='seasons col12'>");

            $("#h3Seasons").after($ul);

            for (var i = numberOfSeasons - 1; i >= 0; i--) {
                var seasonStart = response5[i].premiereDate;
                var seasonEnd = response5[i].endDate;

                var $li = $("<li>");
                $li.text(seasonStart + " - " + seasonEnd);
                $(".seasons").append($li);
            }
        }
    };

    request6.onload = function () {
        if (request6.status >= 200 && request6.status < 300) {

            var response6 = JSON.parse(request6.responseText);

            var $ul = $("<ul class='cast col12'>");
            $("#h3Cast").after($ul);

            for (var j = 0; j < response6.length; j++) {
                var actorName = response6[j].person.name;

                var $li = $("<li>");
                $li.text(actorName);
                $(".cast").append($li);
            }
        }
    };

    request4.send();
    request5.send();
    request6.send();
}
setTimeout(getShowDetails, 500);


function getCrew() {
    var request7 = new XMLHttpRequest();

    var endpoint7 = "http://api.tvmaze.com/shows/" + showId + "/crew";

    request7.open("GET", endpoint7);

    request7.onload = function () {
        if (request7.status >= 200 && request7.status < 300) {

            var response7 = JSON.parse(request7.responseText);

            var olDivCrew = $("<ol class='olCrew'>");

            $(".crew").append(olDivCrew);

            for (var k = 0; k < response7.length; k++) {
                var crewName = response7[k].person.name;

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
    request7.send();

    $("#getCrew").html("Hide Crew");
    $("#getCrew").attr("onclick", "");
    $("#getCrew").attr("onclick", "hideCrew()");
}


function getAkas() {

    var request8 = new XMLHttpRequest();

    var endpoint8 = "http://api.tvmaze.com/shows/" + showId + "/akas";

    request8.open("GET", endpoint8);

    request8.onload = function () {
        if (request8.status >= 200 && request8.status < 300) {

            var response8 = JSON.parse(request8.responseText);

            var olDivAkas = $("<ol class='olAkas'>");

            $(".akas").append(olDivAkas);

            for (var l = 0; l < response8.length; l++) {
                var akasName = response8[l].name;

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
    request8.send();

    $("#getAkas").html("Hide Akas");
    $("#getAkas").attr("onclick", "");
    $("#getAkas").attr("onclick", "hideAkas()");
}


function getEpisodes() {

    var request9 = new XMLHttpRequest();

    var endpoint9 = "http://api.tvmaze.com/shows/" + showId + "/episodes";

    request9.open("GET", endpoint9);

    request9.onload = function () {
        if (request9.status >= 200 && request9.status < 300) {

            var response9 = JSON.parse(request9.responseText);

            var olDivEpisodes = $("<ol class='olEpisodes'>");

            $(".episodes").append(olDivEpisodes);

            for (var m = 0; m < response9.length; m++) {
                var episodeName = response9[m].name;

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
    request9.send();

    $("#getEpisodes").html("Hide Episodes");
    $("#getEpisodes").attr("onclick", "");
    $("#getEpisodes").attr("onclick", "hideEpisodes()");
}

function hideCrew() {

    $(".olCrew").remove();
    $("#getCrew").html("Show Crew");
    $("#getCrew").attr("onclick", "");
    $("#getCrew").attr("onclick", "getCrew()");
}

function hideAkas() {

    $(".olAkas").remove();
    $("#getAkas").html("Show Akas");
    $("#getAkas").attr("onclick", "");
    $("#getAkas").attr("onclick", "getAkas()");
}

function hideEpisodes() {

    $(".olEpisodes").remove();
    $("#getEpisodes").html("Show Episodes");
    $("#getEpisodes").attr("onclick", "");
    $("#getEpisodes").attr("onclick", "getEpisodes()");
}