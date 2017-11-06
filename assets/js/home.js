$(document).ready(function() {
    open();
    // up();
    // cardUp(3);
});

var curr = 1;
var prev;
scrolled();

function scrolled() {
    scrolling();
    setTimeout(scrolled, 5000); // Change image every 5 seconds
}

function scrolling() {
    var i;
    var gal = document.getElementsByClassName("gallery");
    prev = gal[curr-1];
    curr++;
    if (curr > gal.length) {curr = 1}    
    $(prev).css("opacity", "0");
    $(gal[curr-1]).css("opacity", "1");
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


var opened = false;
function subOpen(div) {
    var card = $(div).parent().parent();
    if (!opened) {
        // var title = $(div).children(".sub-title").html();
        card.children(".title").css({"height": "0", "padding":"0"});
        card.children(".content").css({"height": "100%"});
        var content = $(div).children(".sub-content");

        $(div).parent().children().css({"height": "0", "margin-bottom": "0", "display": "inherit"});
        $(div).parent().children().children(".sub-title").css("display", "inherit");
        $(div).parent().children().children(".sub-content").css("display", "none");
        $(div).css({"height": "100%"});
        // $(div).css("line-height", "12vh");
        $(content).css({"height": "98%", "display": "inherit"});
    } else{
        reset(card);
    }
    opened = !opened;
}

function reset(card) {
    card.children(".title").css({"height": "initial", "padding":"15px 0"});
    var content = card.children(".content");
    var sub_content = $(content).children().children(".sub-content");
    $(content).css({"height": "85%"})
    $(content).children().css({"height": "30%", "margin-bottom": "2%", "display": "table"});
    $(content).children().children(".sub-title").css("display", "table-cell");
    $(content).children().children(".sub-content").css("display", "none");
    // "line-height":"25vh",
    $(sub_content).css("height", "0");
}

function fileUp(name) {
    var $this = $(document.getElementById("cover"));
    var $children = $this.children("#cover-container");
    var $grandchildren = $children.children();
    $($grandchildren).css("display", "none");
    $($children.children("#cover-" + name)).css("display", "initial");
    $this.css({"z-index" : "1000000000", "opacity" : "1"});
    $this.css("opacity", "1");

}

function fileOut() {
    $this = $(document.getElementById("cover"))
    $this.css("opacity", "0");
    setTimeout(function(){ $this.css("z-index", "0"); }, 400);
    
    // $this.children().html("<div class=\"cover-container\" ></div>");
}

