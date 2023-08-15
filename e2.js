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
        $(".sliderWrap").animate({marginTop: -700 * currentIndex + "px"}, 600);

        if(currentIndex ==3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0}, 0);
                currentIndex = 0;
            }, 600);
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