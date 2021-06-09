var randomStuff = ["Stay Home  |  Stay Safe", "Do not go outside Unnecessarily", "Wear Mask", "Get Vaccinated, Do not Spread Flase claims on Vaccination"];
var target;
var loadContentIndex = 0;

$(function() {
    target = $('.effect'); //Set the target div...
    loadContent(); //Initiate it once on page load...
    window.setInterval(loadContent, 2000); //And set it to work every 2000ms (or 2s).
});

function loadContent() {
        target.fadeOut(function() { //Once fade out is complete...
            target.text(randomStuff[loadContentIndex]); //Change the text
            target.fadeIn(); //Fade back in.
    });

    loadContentIndex++; //Increase the array counter.
    if (randomStuff.length == loadContentIndex) { //If reached the end of the array...
        loadContentIndex = 0; //Reset the counter :)
    }
}