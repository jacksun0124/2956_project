
// author: Shijie Sun
// course: COSC2956

$(document).ready(function () {
    console.log("ready!");
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //check URL and load page 
    checkURL();
});

//check if url changes
$(window).on('hashchange', function () {
    console.log("hashchange: " + window.location.hash);
    checkURL();
});

//function to change page
function change_context(page) {
    console.log("change_context: " + page);
    window.location.hash = page;
}

//function to check URL and load page
function checkURL() {
    //check route
    var url = window.location.href;
    //check if url contains a xxx
    if (url.indexOf("home") > -1) {
        $("#main").load("home.html");
    } else if (url.indexOf("projects") > -1) {
        $("#main").load("projects.html");
    } else if (url.indexOf("skills") > -1) {
        $("#main").load("skills.html");
    } else if (url.indexOf("interests") > -1) {
        $("#main").load("interests.html");
    } else if (url.indexOf("about") > -1) {
        $("#main").load("about.html");
    } else {
        $("#main").load("home.html");
        window.location.hash = "#home";
    }
}

