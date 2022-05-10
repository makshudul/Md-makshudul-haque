$(document).ready(function(){
    // course__fav
    $(".course__fav a").click(function(){
        $("i", this).toggleClass("far fa-heart fas fa-heart");

        return false;
    });

    $(".favCourse__heat a").click(function(){
        $(this).toggleClass('selected');
        $("i", this).toggleClass("far fa-heart fas fa-heart");

        return false;
    });
   
    $(".mobile_nav_expand a").click(function(){
        $(".navbar-area").slideToggle(400);
        return false;
    });
    // category_items
    $('#category_items').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                stagePadding:40,
                nav:false,
            },
            600:{
                items:2,
                stagePadding:40,
                nav:false,
            },
            1000:{
                items:4
            }
        }
    });

    // category_items
    $('#course_items').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                stagePadding:40,
                nav:false,
            },
            600:{
                items:2,
                stagePadding:40,
                nav:false,
            },
            1000:{
                items:4
            }
        }
    });
    // document_items
    $('#document_items').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                stagePadding:40,
                nav:false,
            },
            600:{
                items:2,
                stagePadding:40,
                nav:false,
            },
            1000:{
                items:4
            }
        }
    });

    // Input Focus
    $('.single__input input').bind('focus', function(){
        $(this).parent('.single__input').toggleClass('label_top');
    });
    $('.single__input input').bind('blur', function(){
        $(this).parent('.single__input').toggleClass('label_top');
    });

    // ======= Step Form ========
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function() {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 0
        });
    });

    $(".previous").click(function() {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration:0
        });
    });

    $('.radio-group .radio').click(function() {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function() {
        return false;
    })
    
});


