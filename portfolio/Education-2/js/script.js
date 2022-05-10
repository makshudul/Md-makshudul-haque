$(document).ready(function(){
    
    // recommened__carousel
    $('#recommened__carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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
    // who_slider_1
    $('#who_slider_1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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
    // who_slider_2
    $('#who_slider_2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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
    // who_text_slider_1
    $('#who_text_slider_1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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
    // who_text_slider_1
    $('#who_text_slider_2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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
    // who_text_slider_1
    $('#who_text_slider_3').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: true,
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


    var btn = $('#button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    $(".fixed_sidebar__head a").click(function(){
        $(".fixed_sidebar__content").slideToggle();

        return false;
    });


});

