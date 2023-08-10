$(document).ready(function(){
    // nav
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp();
    });

    // slider
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone());

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft : -currentIndex * 100 + "%"}, 300);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // tab
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });


    // popup
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});