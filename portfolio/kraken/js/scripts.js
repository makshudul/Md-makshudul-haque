$(document).ready(function(){

    // smoothScroll
    $('html').smoothScroll(500);

    // Sign in note Slider
    $('#panel__slider').owlCarousel({
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


    // Hover Line
    $('.nav-link').hover(
        function(){
            $(this).addClass('add_line');
        },
        function(){
            $(this).removeClass('add_line');
        }
    );

    // Navbar BG
    $(".navbar-toggler").click(function(){
        $(".custom__nav").toggleClass('expand');
    });

    // Bars Icon Toggle
    $('.navbar-toggler').click(function() {
        $("span", this).toggleClass("fal fa-bars  fal fa-times");
    });

    // Input Focus
    $('.single__form input').bind('focus', function(){
        $(this).parent('.single__form').toggleClass('label_top');
    });
    $('.single__form input').bind('blur', function(){
        $(this).parent('.single__form').toggleClass('label_top');
    });


    // Active Tooltip(Bootstrap)
    $('[data-toggle="tooltip"]').tooltip();


    // Card Route Accordion 
    $(".route-beginner_item").click(function(){
        $(this).addClass('card__item--active');
        $('.route-intermediate_item').removeClass('card__item--active');
        $('.route-advanced_item').removeClass('card__item--active');
        $('.route-beginner').show();
        $('.route-intermediate').hide();
        $('.route-advanced').hide();
    });
    $(".route-intermediate_item").click(function(){
        $(this).addClass('card__item--active');
        $('.route-beginner_item').removeClass('card__item--active');
        $('.route-advanced_item').removeClass('card__item--active');
        $('.route-beginner').hide();
        $('.route-intermediate').show();
        $('.route-advanced').hide();
    });
    $(".route-advanced_item").click(function(){
        $(this).addClass('card__item--active');
        $('.route-beginner_item').removeClass('card__item--active');
        $('.route-intermediate_item').removeClass('card__item--active');
        $('.route-beginner').hide();
        $('.route-intermediate').hide();
        $('.route-advanced').show();
    });


    // mega_menu_nav
    $('.mega_menu_nav').hover(
        function(){
            $('.mega_menu').addClass('show_megamenu');
            // Add nav line on Hover
            $(".mega_menu").hover(
                function(){
                    $('.mega_menu').addClass('show_megamenu');
                    $('.mega_menu_nav').addClass('add_line')
                },
                function(){
                    $('.mega_menu').removeClass('show_megamenu');
                    $('.mega_menu_nav').removeClass('add_line')
                }
            );
        },
        function(){
            $('.mega_menu').removeClass('show_megamenu');
        }
    );


    // mega_menu_nav For Mobile
    $('.mega_menu_nav').click(function(){
        $(".mega_menu").toggleClass('show_mobile_mega')
    });
   
});