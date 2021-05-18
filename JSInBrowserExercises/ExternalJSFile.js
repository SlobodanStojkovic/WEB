function onInit() {
    var external = "External JS File";
    console.log(external);
}
onInit();



function getPlatform() {
    console.log("platform: " + window.navigator.platform);
}
getPlatform();



function getBrowserVersion() {
    console.log("browser: " + window.navigator.appName)
}
getBrowserVersion();



function getCompany() {
    console.log("company: " + window.navigator.vendor)
}
getCompany();



function isOnline() {
    if (navigator.onLine) {
        console.log("browser is: Online");
    } else {
        console.log("browser is: Offline")
    }
}
isOnline();




function windowHeightAndWidth() {
    console.log("window.screen.availHeight:" + window.screen.availHeight);
    console.log("window.screen.height:" + window.screen.height);
    console.log("window.screen.availWidth:" + window.screen.availWidth);
    console.log("window.screen.width:" + window.screen.width);
}
windowHeightAndWidth();

/*
Using JS on web page
External JS Files
● Include an external JS script on the page.
● The script should contain a function that uses console.log to print something.
● Trigger that function.

BOM (Window object)
window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser

Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.

window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height
*/
