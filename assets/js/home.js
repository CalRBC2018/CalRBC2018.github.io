

var curr = 1;
var prev;
scrolled();

function scrolled() {
    scrolling();
    setTimeout(scrolled, 5000); // Change image every 3 seconds
}

function scrolling() {
    var i;
    var gal = document.getElementsByClassName("gallery");
    prev = gal[curr-1];
    curr++;
    if (curr > gal.length) {curr = 1}    
    $(prev).css({"opacity": "0", "z-index": "0"});
    $(gal[curr-1]).css({"opacity": "1", "z-index": "10"});
}
