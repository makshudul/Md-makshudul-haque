$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".menu__popup").toggleClass('show');
        $('i', this).toggleClass('fal fa-times fal fa-bar');
        $(this).parents(".header__top").toggleClass('white__text')
        return false;
    });

    $(window).scroll(function(){
        var sticky = $('.header__top'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    
})