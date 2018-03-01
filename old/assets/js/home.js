$(document).ready(function() {
    open();
    elem = document.getElementById("cover-bios");
    elem.addEventListener("click", stopEvent, false);
    fileOut();
    // up();
    // cardUp(3);
});

function noticeDisappear() {
    $(document.getElementById("notice")).css("display", "none");
}

function stopEvent(ev) {
  ev.stopPropagation();
}

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

function up(){
    // console.log(1);
    var $this = $(document.getElementById("page-wrapper"));
    // $(document.getElementById("loader-wrapper")).css("visibility", "inherit");
    $(document.getElementById("up-button")).css("opacity", ".5");
    setTimeout(function(){
        $this.css("top", "-120%");
    }, 100);
   
}

function down(){
    // console.log(2);
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

function backSub(div) {
    console.log("Q");
    subOpen($(div).siblings(".sub-title"));
}

var opened = false;
function subOpen(div) {
    div = $(div).parent();
    // console.log(div);
    var card = $(div).parent().parent();
    if (!opened) {
        // var title = $(div).children(".sub-title").html();
        card.children(".title").css({"height": "0", "padding":"0"});
        card.children(".content").css({"height": "100%"});
        var content = $(div).children(".sub-content");
        var $everythingElse = $(div).parent().children()
        $everythingElse.css({"height": "0", "margin-bottom": "0", "display": "inherit"});
        $everythingElse.children(".sub-title").css("display", "inherit");
        $everythingElse.children(".sub-content").css("display", "none");
        $(div).children(".back").css("display", "inherit");

        $(div).css({"height": "100%"});
        // $(div).css("line-height", "12vh");
        $(content).css({"height": "95%", "display": "inherit"});
    } else{   
        $(div).children(".back").css("display", "none");
        card.children(".back").css({"display": "none"});
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
    $(sub_content).css("display", "none");
    
    // "line-height":"25vh",
    $(sub_content).css("height", "0");
}

function fileUp(name) {
    var $this = $(document.getElementById("cover"));
    var $children = $this.children("#cover-container");
    var $grandchildren = $children.children();
    $($children).css("display", "initial");
    $($grandchildren).css("display", "none");
    $($children.children("#cover-" + name)).css("display", "initial");
    $this.css({"z-index" : "1000000000", "opacity" : "1"});

}

// var map = {};
// map["Schedule"] = "https://docs.google.com/document/d/e/2PACX-1vSMacULzJYSLMDfahwREuNmeAaR0OvWdM_uRp3bm-0_JDOF8NCqISKkfhKWXQlqBfiX9eBxeXMNptDs/pub?embedded=true";
// map["Facilities"] = "https://docs.google.com/document/d/e/2PACX-1vTTs-bgmTuRv4H5wRHMs9PwfrejdE5vWjIoze6khQS8_9LyklnoTBfvmQczuU2EGOpxbchSTqVartva/pub?embedded=true";
// map["Philanthropy"] = "https://docs.google.com/document/d/e/2PACX-1vShWX57ZOexEgTiD9x5EBEfz-5UGHoRq4tjNPMN0aP-avwXyD8g-t5YUnow2QDuvvxntoDesjxnkl9y/pub?embedded=true";
// map["Boardroom"] = "https://docs.google.com/document/d/e/2PACX-1vRNpflVgT7hRisHWzy3xjH-_QPZfJxgWUvwJ2RPPj9xoupFU9eglI5AaSdOIAxvU71GHhQ2PwxQmbC9/pub?embedded=true";
// map["Dining"] = "https://docs.google.com/document/d/e/2PACX-1vQ3wpvf5CA1RFcTwgLR6kV_dpAYIvOB7zcffBp_ZI3Jy1-7ESFKWVpiiyaVnPHqsasPYmVmmPzXEVNA/pub?embedded=true";
// map["Safety"] = "https://docs.google.com/document/d/e/2PACX-1vSeQNxVIhKRXkkq_laERnknpzzYmWFVCHaItcblNq2FaRng0i58fsBnya3-ByDKwyPgcWvApYgQrJ1m/pub?embedded=true";
// map["Transportation"] = "https://docs.google.com/document/d/e/2PACX-1vSp5R_JrV3CO1bLzzhDuFOmWo39ZVJdqaNupRMb9wWT4-gn0tQQC5y33AJevqqwpUlkM_jPolHkQPNS/pub?embedded=true";
// map["Housing"] = "https://docs.google.com/document/d/e/2PACX-1vTNjokR3y8SRMnol2DCQ_gLLuodWRSM3hlm1BqhgLPfuWVRo0wqWo0C-dDAID_6RIWcDf4KZJtPt-pc/pub?embedded=true";


// function fileUp(name) {
//     var form = document.createElement("form");
//     form.method = "GET";
//     form.action = map[name];
//     form.target = "_blank";
//     document.body.appendChild(form);
//     form.submit();

// }

function bioUp(name) {
    var $this = $(document.getElementById("cover"));
    var $children = $this.children("#cover-bios");
    // $children.html() = "<img src=\"assets/img/team/Amberlyn.jpg\"><div id=\"info\"><div id=\"name\"><b>Name: </b> Amberlyn Saw</div><br><div id=\"pronouns\"><b>Pronouns: </b> She/Her</div><br><div id=\"position\"><b>Position: </b> Sponsorship</div></div><div id=\"bio\"></div>"
    $($children).css("display", "initial");
    $($children).children().css("display", "none");
    $($children).children("#exit").css("display", "initial");
    $($children).children("#" + name).css("display", "initial");
    $this.css({"z-index" : "1000000000", "opacity" : "1"});

}

function fileOut() {
    $this = $(document.getElementById("cover"))
    $this.css("opacity", "0");
    $this.children("#cover-container").css("display", "none");
    $this.children("#cover-bios").css("display", "none");
    // $this.children("#exit")
    // $this.children().children("#exit").css("display", "inherit");
    setTimeout(function(){ $this.css("z-index", "0"); }, 100);
    
    // $this.children().html("<div class=\"cover-container\" ></div>");
}

