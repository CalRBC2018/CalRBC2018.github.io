$(document).ready(function() {
    open();
});

var curr = 1;
var prev;
scrolled();

function scrolled() {
    var i;
    var gal = document.getElementsByClassName("gallery");
    prev = gal[curr-1];
    curr++;
    if (curr > gal.length) {curr = 1}    
    $(prev).css("opacity", "0");
    $(gal[curr-1]).css("opacity", "1");
    setTimeout(scrolled, 3000); // Change image every 2 seconds
}

function up(){
    console.log(1);
    var $this = $(document.getElementById("page-wrapper"));
    // $(document.getElementById("loader-wrapper")).css("visibility", "inherit");
    $(document.getElementById("up-button")).css("opacity", ".5");
    setTimeout(function(){
        $this.css("top", "-120%");
    }, 100);
   
}

function down(){
    console.log(2);
    var $this = $(document.getElementById("page-wrapper"));
    // $(document.getElementById("loader-wrapper")).css("visibility", "inherit");
    $(document.getElementById("up-button")).css("opacity", "1");
    setTimeout(function(){
        $this.css("top", "0%");
    }, 100);
   
}

function open(){
    var $this = $(document.getElementById("front-background"));
    
    $this.css("height", "70%");
    setTimeout(function(){
        
        $this.css("width", "75%");
        $this.css("min-height", "500px");
        // $this.css("min-width", "100px");
        setTimeout(function(){
            $this.css("padding", "40px 25px");
        }, 200);
    }, 500);
}

function cardUp(number) {
    var cards = document.getElementsByClassName("card");
    for (var x = 0; x < cards.length; x++) {
        $(cards[x]).css("transform", "translate(-50%, 100%)");
        $(cards[x]).css("opacity", "0");
    }

    $(cards[number]).css("transform", "translate(-50%, -51%)");
    $(cards[number]).css("opacity", "1");
}

function subOpen(div) {
    var title = $(div).html();
    var siblings = $(div).siblings().css("height", "0");
    var content = $(div).children(".sub-content");
    $(div).css("height", "95%");
    $(div).css("line-height", "12vh");
    $(content).css("height", "500px");
    console.log($(content).html());
    // switch(title) {
    // case "registration forms":
        
    //     break;
    // case n:
    //     code block
    //     break;
    // default:
    //     console.log("Ya screwed up: " + title);
}
