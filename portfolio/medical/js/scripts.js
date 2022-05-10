$(document).ready(function(){
    // Doctor Slider
    $('#doctor_slider').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        autoplay:true,
        autoplayTimeout: 5000,
        nav:true,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:2,
                nav:false,

            },
            1000:{
                items:4
            }
        }
    });

    // Testimonail
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        arrows: false,
        asNavFor: '.slider-nav',
        
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            }
          ]
    });

      // declare variable
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


});