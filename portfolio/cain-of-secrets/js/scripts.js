$('#team-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


AOS.init();