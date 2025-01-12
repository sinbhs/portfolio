$(function(){
    // mobile, tablet Menu Overlay
    $('.menu_icon').click(function(){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        const menu = $('.menu_icon').hasClass('active');
        if(menu) {
            $('nav h2').css('opacity','0');
            $('header').css({'background':'none','border-bottom':'#004be2'})
        } else {
            $('nav h2').css('opacity','1');
            $('header').css({'background':'#f9f8fa94','border-bottom':'1px solid #ddd'})
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
});