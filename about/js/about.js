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

    
    //해당 영역시 애니메이트
    $(window).scroll(function(){
        let w_scroll = $(window).scrollTop();
        let skill1 = $('.skill_list1').offset().top;
        let skill2 = $('.skill_list2').offset().top;
        // skill_list 1 해당 영역 시 게이지 차오름
        if(w_scroll >= skill1 - $(window).height()) {
            $('.skill_list1 .progress_bar').eq(0).animate({width:'90%'}, 2500);
            $('.skill_list1 .progress_bar').eq(1).animate({width:'90%'}, 2500);
            $('.skill_list1 .progress_bar').eq(2).animate({width:'60%'}, 2500);
            $('.skill_list1 .progress_bar').eq(3).animate({width:'75%'}, 2500);
        } else {
            $('.skill_list1 .progress_bar').stop(1,1).animate({width:0}, 300);
        }
        // skill_list 2 해당 영역 시 게이지 차오름
        if(w_scroll >= skill2 - $(window).height()) {
            $('.skill_list2 .progress_bar').eq(0).animate({width:'85%'}, 2500);
            $('.skill_list2 .progress_bar').eq(1).animate({width:'75%'}, 2500);
            $('.skill_list2 .progress_bar').eq(2).animate({width:'75%'}, 2500);
        } else {
            $('.skill_list2 .progress_bar').stop(1,1).animate({width:0}, 300);
        }
    });
});