$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});


// Main Home Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay: false,
    navText: ["<img src='../images/left_arrow.png' />", "<img src='../images/right_arrow.png' />"],
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


// Read more Button change
$('.change_text').click(function(){
    var $this = $(this);
    $this.toggleClass('change_text');
    if($this.hasClass('change_text')){
        $this.text('Read More');

    } else {
        $this.text('Less');
    }
});
// Read more Text add and Hide
$(".read_more").click(function(){
    $(".hide_text").toggleClass("show_text");
});

// video responsive
 $(".video_res").fitVids();

// form Box Show
 $(".form_box_show").click(function(){
     $(".contact_box_hide").toggleClass("show_form");
 });

// fixed nav BG
 $(function() {
     var header = $(".top_header");
     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll >= 100) {
             header.removeClass('top_header').addClass("white_header");
         } else {
             header.removeClass("white_header").addClass('top_header');
         }
     });
 });

/*PRELOADER JS*/
$(window).load(function() {
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow');
});
/*END PRELOADER JS*/
$(".nav.navbar-nav li a").click(function(){
    $(".navbar-collapse").removeClass("in");
});
