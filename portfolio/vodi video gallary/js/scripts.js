$(document).ready(function(){
    // search Dropdown
   
    $('.search-box-head').on('blur', function(){
        $(".search-dropdown").removeClass('show');
     }).on('focus', function(){
       $('.search-dropdown').addClass('show');
     });


    //  Btn Select
    $('.btn-pic-fav').click(function(){
        $(this).addClass('selected')
    });
    $(".pick-card-item").click(function(){
        $(this).addClass('selected');

        return false;
    });
    // Menu Carousel Full
    $('#menu-carousel-full').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
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
    // Menu Carousel Full
    $('#menu-carousel-grid').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:5
            }
        }
    });
    // Romantic Card Slider
    $('.card-movie-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
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
    // Home Right Slider
    $('#home-right-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
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
    // Home Right Slider
    $('#tv-show__slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:["<i class='fal fa-angle-left'></i> <span>Previous <span class='break'></span> Episode</span> ","<span>Next <span class='break'></span> Episode</span> <i class='fal fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Hero Slider
    $('.hero-slide-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.sldier-nav-wrap'
        
    });
    $('.sldier-nav-wrap').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.hero-slide-main',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // Rating Range Slider
    $("#rating_range").ionRangeSlider({
        type: "double",
        min: 0,
        max: 5.5,
        from: 2,
        to: 4.4,
        step: 0.1
    });
});