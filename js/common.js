$(document).ready(function() {
    $(".js-enter").click(function(){
        $(".js-popup-enter").fadeIn();
    });
    $(".js-close-popup").click(function(){
        $(".js-popup-enter").fadeOut();
    });
});