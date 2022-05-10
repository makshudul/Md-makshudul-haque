jQuery(document).ready(function() {
    // Home Slider
    jQuery('#home-slider').slippry({
        pager: false,
        captions: false,
        auto: false
    });
    // portfolio Slider
    jQuery('#portfolio-slider').slippry({
        pager: false,
        captions: false,
        auto: false,
        transition: 'horizontal',

    });
    // Text Down up
    $('.marquee').marquee({
        allowCss3Support: true,
        direction: 'down',
        duplicated: true,
        gap: 0,
    });
    // Related Slider
    $('#related-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // Animation
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 20, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();


    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header-section').addClass('fixed');
        } else {
            $('.header-section').removeClass('fixed');
        }
    });
});

// portfolio Filter
var containerEl = document.querySelector('.portfolio-showcase');
var mixer = mixitup(containerEl);
