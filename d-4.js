$(document).ready(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn();
        $(".main").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut();
        $(".main").removeClass("on");
    });
});