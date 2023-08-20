$(function(){

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
        $(".sliderWrap").animate({marginTop: -currentIndex * 400 + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // tab
    const tabBtn = $(".tab-btn > a");
    const tabCont = $(".tab-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});