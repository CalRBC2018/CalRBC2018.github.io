$(document).ready(function() {
    // var $this = $(document.getElementById("TLDR-title"));
    // setTimeout(function(){ 
    //     $this.css("transform", "translateX(0%)");
    //     setTimeout(function(){ 
    //         $this.children().css("opacity", "1");
    //     }, 200);
    // }, 400);
    // scrolled();
    open();


});

// function scrolled() {
//     var img = document.getElementsByClassName("gallery");
//     var prev = img[0];
//     for(var x = 0; x < 10; x++) {
//         console.log(1);
//         for (var i = img.length - 1; i >= 0; i--) {
//             setTimeout(function(){
//                 $(prev).css("opacity: 0;");
//                 $(img[i]).css("opacity: 1;");
//                 prev = img[i]
//             }, 2000);
//         }
//     }
// }

var curr = 1;
var prev = 1;
carousel();

function carousel() {
    var i;
    var gal = document.getElementsByClassName("gallery");
    prev = gal[curr-1];
    curr++;
    if (curr > gal.length) {curr = 1}    
    $(prev).css("opacity", "0");
    $(gal[curr-1]).css("opacity", "1");
    setTimeout(carousel, 3000); // Change image every 2 seconds
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
        }, 500);
    }, 1500);
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

// function collapse(){
//     var $this = $(document.getElementById("front-background"));
//     var $first = $(document.getElementById("first-select"));
//     var $second = $(document.getElementById("second-select"));
//     $this.css("width", "0");
//     $this.css("min-width", "0");
//     $this.css("padding", "0");
//     $this.css("height", "90%");

//     setTimeout(function(){
//         // var width = ( 100 * parseFloat($this.css('height')) / parseFloat($this.parent().css('width')) ) + '%';
//         // $this.css("width", $this.css('height'));
//         // $this.css("min-width", "");
//         $this.css("text-align", "center");
//         // $first.css("display", "none");
//         // $second.css("display", "initial");
//     }, 1400);

// }



// function down(){
//     var $this = $(document.getElementById("page-wrapper"));
//     $this.css("top", "0%");

//     var $card = $(document.getElementById("card"));
//     $card.css("display", "inherit");
// }