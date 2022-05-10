$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $('#last__news').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
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
    $('#success__story').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
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
    $('#interested__course').owlCarousel({
        loop:true,
        stagePadding:50,
        margin:30,
        dots:false,
        nav:true,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Toogle Bookmark
    $('.course__card--bookmark a').click(function() {
        $("i", this).toggleClass("fal fa-bookmark fas fa-bookmark");
        return false;
    });
    // Toogle Bookmark
    $('a.course__bookmark').click(function() {
        $("i", this).toggleClass("fal fa-bookmark fas fa-bookmark");
        return false;
    });

    $(".logo a.menu").click(function(){
        $(".left__sidebar__bg").toggleClass('show');
        return false;
    });

    // Active Skill

    $('.table__nest .btn').click(function(){
        $(this).toggleClass('active');
    });


    $(".TRANSVERSAL__skill").knob({
        'width': 180,
        'height':180,
        'min':0,
        'max':5,
        'step': 0.1,
        'readOnly': true,
        'thickness': .12,
        'lineCap': 'round',
        'fgColor': '#4491CC',
        'inputColor': '#4491CC',
        'bgColor': '#ECF4FA',
        'fontWeight':'700',
        'font': 'Open Sans'
    });
    $(".TECHNICAL__skill").knob({
        'width': 180,
        'height':180,
        'min':0,
        'max':5,
        'step': 0.1,
        'readOnly': true,
        'thickness': .12,
        'lineCap': 'round',
        'fgColor': '#5BB56A',
        'inputColor': '#3CBCA3',
        'bgColor': '#EEF8F0',
        'fontWeight':'700',
        'font': 'Open Sans'
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop a").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
       return false;
    });

    $(".badge__pop-btn").click(function(){
        $(this).children('.badge__popup').toggleClass('show');

        return false;
    });

    
    $("#Orizzontale").on("click",function() {
        $(".show__on__Orizzontale").toggle(this.checked);
    });
    $("#Caporeparto").on("click",function() {
        $(".show__on__Caporeparto").toggle(this.checked);
    });
});
