$(document).ready(function(){
    $(".mobile_bar a").click(function(){
        $(".header-main-menu").slideToggle();
        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        dotsData:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    $(".has_dropdown a").click(function(){
        $('.has_dropdown a.show').not(this).removeClass('show');
        $(this).toggleClass('show');
     })
    
})