$(document).ready(function(){
  $('.hero-icons ul li')
      .mouseenter(function() {
        $(this).addClass("add-arrow");
      })
      .mouseleave(function() {
          $(this).removeClass("add-arrow");
  });
  $('#home-slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,

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

$('#details-slider').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  nav:false,

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

$('#home-icons-slider').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
});
