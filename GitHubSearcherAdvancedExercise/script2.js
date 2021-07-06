var index = localStorage.getItem("1", index);
localStorage.removeItem("1");

var $person2 = localStorage.getItem("2", $person2);
$("#userName").text($person2);
localStorage.removeItem("2");



var newXML2 = new XMLHttpRequest();

var endpoint2 = "https://api.github.com/users/" + $person2 + "/repos?page=2&per_page=100";

newXML2.open("GET", endpoint2);

newXML2.onload = function () {
    if (newXML2.status >= 200 && newXML2.status < 300) {

        var response2 = JSON.parse(newXML2.responseText);

        for (var i = 0; i < response2.length; i++) {

            var repName = response2[i].name;
            var description = response2[i].description;
            var language = response2[i].language;
            
            var $tr = $("<tr>");
            var $td1 = $("<td>");
            var $td2 = $("<td>");
            var $td3 = $("<td>");
            $td1.text(repName);
            $td1.appendTo($tr);
            $td2.text(description);
            $td2.appendTo($tr);
            $td3.text(language);
            $td3.appendTo($tr);
            $tr.appendTo($(".dataTable"));
        }
    }
};
newXML2.send();
