$(document).ready(function(){
    // nav
    $(".nav > ul > li").mouseover(function(){
        $(".submenu").stop().slideDown();
        $("#header").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp();
        $("#header").removeClass("on");
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
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // popup
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});