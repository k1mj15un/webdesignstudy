$(document).ready(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn();
        $("#main").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut();
        $("#main").removeClass("on");
    });

    // slider
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // tab
    const tabBtn = $(".tab-menu > a");
    const tabCont = $(".tab-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.on("click", function(){
        const index = $(this).index();
        
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

});