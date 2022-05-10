$(document).ready(function(){
    $('.mobile_menu-bar').click(function(){
        $(".main_menu").slideToggle();
        $('i', this).toggleClass('fal fa-bars fal fa-times');

        return false;

    })
    // News item
    $('#gallery-section').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // News item
    $('#news__item').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
    
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
    
        } else {
          $(scrollTop).css("opacity", "0");
        }
    
      }); // scroll END
    $(scrollTop).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
    
      }); 
})