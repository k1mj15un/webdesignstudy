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

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // popup
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});