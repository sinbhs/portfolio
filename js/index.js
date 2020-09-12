// mobile, tablet menu ovelay
$(document).ready(function(){
    $('.overlay').hide();
    $('.menu_icon').click(function(){
        $(this).toggleClass('active')
        const menu = $('.menu_icon').hasClass('active');
        if(menu) {
            $('nav h2').css('opacity','0');
            $('.overlay').slideDown();
        } else {
            $('nav h2').css('opacity','1');
            $('.overlay').slideUp();
        }
    });
});