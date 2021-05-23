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

/*
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org:8080
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // 8080
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org:8080
*/

//!!! window.location.href = "https://google.com"       //once we open ExternalPageJS.html it redirects us to this address

console.log(window.location.pathname);


//HREF in location - SETS or RETURNS the entire URL and is used when we want to REDIRECT user to certain web address



window.localStorage.setItem("age", "31");
window.localStorage.setItem("name", "Dario");
window.localStorage.setItem("city", "Belgrade");
window.localStorage.setItem("zip", "11000");        //this is how we remmember these values PERMANENTLY in OUR browser until we delete them
//to access them we open html, then inspect page, find Application and then Local Storage.
/*

console.log(windown.localStorage.getItem("name"));

removeItem(keyname) //removes item previously stored


back() // - loads the previous URL in the history list
forward() // - loads the next URL in the history list


open(url)   //opens a window
close() //closes window(only a window opened with JS can be closed this way)



var win = window.open("www.youtube.com")
var blic = window.open("www.blic.rs")           //we can open multiple tabs like this

win.close();    //to close tabs open


//  window.alert("Catastrophic Error");




var answer = window.confirm("Do you have more than 18 years?")

console.log(answer);        //records what you have clicked






var answer = window.prompt("Do you have more than 18 years?")

console.log(answer);  //records what you have clicked

*/


/*

if (window.localStorage.getItem("name")) {
    var name = window.prompt("Please input your name")
    window.localStorage.setItem("name", name);
}


if (window.localStorage.getItem("age")) {
    var age = window.prompt("Please input your age")
    window.localStorage.setItem("age", age);
}

*/
/*

function sayHello() {     //setTimeout demands function that it will do after some time in miliseconds has passed
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

setTimeout(sayHello, 3000);     //after 3 seconds from running html in console it will display hello x 4 times



var intervalId = setInterval(sayHello, 500)
*/


/*
window.location
Write a function that prints out website’s url information in the console:

● full url address
● domain name
● used protocol
● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
*/


function getUrl() {
    console.log("Url is " + window.location.href);
    console.log("Domain is " + window.location.host);
    console.log("Protocol is " + window.location.protocol);
    console.log("parameters which are part of URL are port " + window.location.port);
    console.log("parameters which are part of URL are search " + window.location.search);
}
getUrl();


/*
function reloadPage() {
    window.location.reload();
}
reloadPage();
*/

/*
function redirectUrl() {
    window.location.assign("https://www.google.rs/");
}
redirectUrl();
*/






/*
window.localStorage

Create a function that stores passed data in the browser local storage.

Create a function that reads the stored data, and print it out in console.

If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.
*/


function storePassedData(key, value) {
    window.localStorage.setItem(key, value);
}
storePassedData("Name", "Borislav");
storePassedData("zip", 11000);


function readStoredData(key) {
    console.log(window.localStorage.getItem(key));
}
readStoredData("zip");

function removeItem(key) {
    window.localStorage.removeItem(key);
}
removeItem("zip");

/*
function removeAll () {
    window.localStorage.clear();
}
removeAll();
*/

function checkForData() {
    if (window.localStorage.length === 0) {
        console.log("There is no data");
    } else {
        console.log("There IS DATA!")
    }
}
checkForData();


function storeSessionPassedData(key, value) {
    window.sessionStorage.setItem(key, value)
}
storeSessionPassedData("Name", "Borislav");





/*
window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
*/
/*
function redirectUrl() {
    window.location.assign("https://www.google.rs/");
    window.location.assign("https://www.blic.rs/");
    window.location.assign("https://www.winwin.rs/");
}
redirectUrl();
*/



function onePageBack() {
    window.history.back();
}
twoPagesBack();



function twoPagesBack() {
    window.history.go(-2);
}
twoPagesBack();





/*
Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: "We will submit this
answer now! " + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don't show anything

*/
/*
function greetingMessage() {
    window.alert("Welcome to our Page");
}
greetingMessage();
*/


var askUserQuestion = function () {
    var age = window.prompt("How old are you?");
    window.sessionStorage.setItem("age", age);
}
askUserQuestion();

function confirmDialogue() {
    if (window.sessionStorage.getItem("age") === true) {
        return window.alert("You can enter our site");
    } else {
        return window.alert("You MUST insert your age");
    }
}
confirmDialogue();





/*
Global JavaScript Objects (homework)
Math

● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.

*/

function randomTen() {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = 50 * Math.random();
    }
    return result;
}
console.log(randomTen());


/*
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function roundTwoDecimals(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = parseFloat(50 * Math.random()).toFixed(2);
    }
    return result;
}
console.log(roundTwoDecimals(randomTen()));




/*
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function floorArray(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = Math.floor(50 * Math.random());
    }
    return result;
}
console.log(floorArray(randomTen));



/*
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
*/


function findMax(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = 50 * Math.random();
    }
    console.log(result);
    return Math.max.apply(Math, result);
}
console.log(findMax());


/*
Date
● Print out the whole date object in the console.
● Print out the current time in the console.
● Print out the current date in the console.
*/


