$(document).ready(function(){

    $('#testimonial').owlCarousel({
        loop:true,
        rtl: true,
        margin:10,
        nav:true,
        dots:false,
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

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling':true,
        'positionFromTop': 200,
        'showImageNumberLabel':false
    });
    // Desc
    var maxHeight = Math.max.apply(null, $(".expertise__card__desc").map(function (){
        return $(this).height();
    }).get());
   
    $(".expertise__card__desc").css('height', maxHeight);

    // Title
    var maxHeight = Math.max.apply(null, $(".expertise__card__title").map(function (){
        return $(this).height();
    }).get());
   
    $(".expertise__card__title").css('height', maxHeight);
});

