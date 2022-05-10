$(document).ready(function(){
    $(function() {
      $('[data-toggle="tooltip"]').tooltip()
    });
    $(".product_info_head").clone().appendTo(".small_view_product_info");
    // Dropdown Animation
    $('.dropdown.dropdown-hover').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
  });
  // Mobile Toggle
  $(".mobile_bar").click(function(){
    $(".main_nav").addClass('show');
    $(".close_icon").click(function(){
      $(".main_nav").removeClass("show");
      return false;
    });
    return false;
  });

  $(".search_item").click(function(){
    $(".search_bar").addClass('show');
    $(".search_close").click(function(){
      $(".search_bar").removeClass('show');
      return false;
    })
    return false;
  });

  // Product Filter
  $(".open_right_side_popup").click(function(){
    window.setTimeout(function(){
      $(".pop_wrap").addClass('show');
    },100)
    $(".close_popup").click(function(){
      window.setTimeout(function(){
        $(".pop_wrap").removeClass('show');
      },300)
      return false;
    })
    return false;
  });

  // Right Sidebar Animation
  $('.open_right_side_popup').on('click',function(){
    window.setTimeout(function(){
        $(".pop_up_box").addClass('show_inner')
    }, 200); 
    $(".close_popup").click(function(){
      window.setTimeout(function(){
        $(".pop_up_box").removeClass('show_inner')
    }, 100);
      return false;
    })
  });

  // Button Focus
  $(".product_color-item .btn").click(function(){
    $(this).addClass('border').siblings().removeClass('border');
  })

});

$(document).ready(function() {
  if ( $(window).width() < 854 ) {
    startCarousel();
  } else {
    $('.owl-carousel').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() < 854 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
  $("#owl_about_main_slider").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 500,
     margin:10,
     paginationSpeed : 400,
     autoplay:true,
     items : 1,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: true,
     itemsMobile : true,
     loop:true,
     nav:false,
     responsive : {
      // breakpoint from 0 up
      0 : {
        items : 1,
        stagePadding: 50,
      },
      // breakpoint from 480 up
      480 : {
        items : 2,
        stagePadding: 30,
      },
      // breakpoint from 768 up
      1000 : {
        items : 1,
      }
  }
     
  });
  $("#owl_you_may_slider").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 500,
    margin:10,
    paginationSpeed : 400,
    autoplay:true,
    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: true,
    itemsMobile : true,
    loop:true,
    nav:false,
    responsive : {
     // breakpoint from 0 up
     0 : {
       items : 1,
       stagePadding: 50,
     },
     // breakpoint from 480 up
     480 : {
       items : 3,
     },
     // breakpoint from 768 up
     1000 : {
       items : 1,
     }
 }
    
 });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}


var bigimage = $("#big");
var thumbs = $("#thumbs");
//var totalslides = 10;
var syncedSecondary = true;

bigimage
    .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
            '<i class="fal fa-angle-left" />',
            '<i class="fal fa-angle-right" />'
        ]
    })
    .on("changed.owl.carousel", syncPosition);

thumbs
    .on("initialized.owl.carousel", function() {
        thumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");
    })
    .owlCarousel({

        dots: false,
        margin: 15,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        autoplay: false,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 5,
                margin:5
            },
            600: {
                items: 7
            },
            1000: {
                items: 9
            }
        }
    })
    .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    //to this
    thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
    var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

    if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
    }
}

thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
});




function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}