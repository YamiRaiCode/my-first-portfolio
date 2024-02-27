const leftButton = $("#left-button button");
const midLeft = $("#mid-bottom-left");
const midRight = $("#mid-bottom-right");
const rightButton = $("#right-button");

const hideButton = $("#hide-button");
const midBottom = $("#mid-bottom");
const mid = $("#mid");
const main = $("#main");

leftButton.on("click",function (){
    midLeft.animate({width: "toggle"}, 300, function(){rightButton.css("visibility", "visible")});
    midRight.css("display", "flex");
});
rightButton.on("click",function (){
    midLeft.animate({width: "toggle"}, 300, function(){rightButton.css("visibility", "hidden")});
    midRight.css("display", "none");
});
hideButton.on("click", function(){
    midBottom.slideToggle();
    mid.css("grid-template-rows", "1fr");
    main.css("grid-template-rows", "1.5fr min-content 0.3fr");
});

$(window).resize(function() {
    if ($(window).width() > 900) {
       midRight.css("display", "flex");
    }
});