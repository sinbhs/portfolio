$(function(){
    // mobile, tablet Menu Overlay
    $('.menu_icon').click(function(){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        const menu = $('.menu_icon').hasClass('active');
        if(menu) {
            $('nav h2').css('opacity','0');
            $('header').css({'background':'none','border-bottom':'#004be2'});
        } else {
            $('nav h2').css('opacity','1');
            $('header').css({'background':'#f9f8fa94','border-bottom':'1px solid #ddd'});
        }
    });
    // back to top Btn
    $(".return_top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    //scroll nav event
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 150) {
            $('header').addClass('scroll-down');
            $('.menu_icon').on('click',function(){
                $('header').removeClass('scroll-down');
            });
        } else {
            $('header').removeClass('scroll-down');
        }
    });

    //a 태그의 디폴트 이벤트 제거
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    });
    
    //브라우저의 높이값을 article의 높이값으로 갱신
    let ht = $(window).height();
    $('article').height(ht);

    //브라우저의 사이즈가 변할 때마다 article의 높이값 갱신
    $(window).on('resize',function(){
        let ht = $(window).height();
        $('article').height(ht);
    });

    // 스크롤 될 때마다 해당 페이지의 내비게이션 메뉴 인식
    $(window).on('scroll',function(){// 스크롤이 될 때
        let ht = $(window).height();
        let scrollT = $(window).scrollTop();//스크롤 한 만큼의 값

        for(let i = 0; i<5; i++) {
            if(scrollT >= ht * i && scrollT < ht * (i+1)) {
                $('#gnb li a').removeClass('active');
                $('#gnb li').eq(i).find('a').addClass('active');
            }
        }
    });
    
    //부드러운 마우스 휠 이벤트
    $('article').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();//마우스 휠 디폴트 이벤트 제거

            var delta =0;

            if(!event) event = window.event;//IE

            if(event.wheelDelta) {//webkit 기반 브라우저
                delta = event.wheelDelta / 120;
            } else if(event.detail) delta =  -event.detail / 3;//파이어폭스

            //마우스 휠 스크롤시 다른 박스로 이동
            var moveTop = null;
            
            if(delta < 0) {//마우스 휠을 내렸을 때
                if($(this).next() != undefined){
                    moveTop =$(this).next().offset().top;//다음 박스, offset().top; = 상단에서의 article까지의 거리
                }
            } else {//마우스 휠을 올렸을 때
                if($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;//이전 박스로 가라
                }
            }

            $('html,body').stop().animate({scrollTop:moveTop},700);
        });
    });
    
    //메뉴 버튼 클릭시 해당 페이지로 부드럽게 이동
    $('#gnb li').on('click',function(){
        var ht = $(window).height();
        var idx = $(this).index();
        var nowTop = ht * idx;

        $('html, body').stop().animate({scrollTop:nowTop},700);
    });
});