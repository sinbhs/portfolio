// mobile, tablet menu ovelay
$(function(){
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
    //타이핑 이펙트
    var typewriter = new Typewriter('#typewriter',{
        loop:true
    })
    typewriter.typeString('I code and design websites.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('And I love it !')
    .pauseFor(2500)
    .deleteAll()
    .start();
});