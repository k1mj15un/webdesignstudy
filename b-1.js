$(document).ready(function(){
    // nav
    $(".nav > ul > li").mouseover(function(){
        $(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(".submenu").stop().slideUp();
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

    // tab
    const tabBtn = $(".tab > h3 > a"); //탭 버튼 설정
    const tabCont = $(".tab-cont > ul"); //탭 콘텐츠 설정
    tabCont.hide().eq(0).show(); //탭 콘텐츠 숨기고 첫번째 콘텐츠만 보여줌

    tabBtn.on("click", function(){ //버튼 클릭하면
        const index = $(this).index(); //클릭한 버튼의 번호 저장

        $(this).addClass("active").siblings().removeClass("active"); //클릭한 버튼에 클래스 추가, 나머지 제거
        tabCont.eq(index).show(0).siblings().hide(); //클릭한 버튼 순서에 맞는 콘텐츠에 클래스 추가, 나머지 숨김
    });
});