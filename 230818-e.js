$(document).ready(function(){
    // nav
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    // slider
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
            }, 700);
        }
    }, 3000);
})