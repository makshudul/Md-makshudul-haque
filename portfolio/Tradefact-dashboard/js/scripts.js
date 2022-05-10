$(document).ready(function(){
    // Left Sidebar Toggle
    $(".hamburger-menu").click(function(){
        $(".left__sidebar").toggleClass('small_sidebar');
        $('.main__content__inner').toggleClass('full_width')
        $(".has_dropdown a").click(function(){
            $(window).bind("resize", function () {
                console.log($(this).width())
                if ($(this).width() <= 768) {
                    $(".left__sidebar").addClass('small_sidebar')
                } else {
                    $(".left__sidebar").removeClass('small_sidebar')
                }
            }).trigger('resize');
        });

        $('.navigation__dropdown').hide();
        return false;
    });
    // Left Sidebar Navigation Toggle
    $('.has_dropdown a').click(function(){
        $(this).siblings('.navigation__dropdown').slideToggle();
        $('i', this).toggleClass('fal fa-angle-down fal fa-angle-up');
        return false;
    });

    // Folder Toggle
    $('li.folder_item a').click(function(){
        $(this).siblings('ul.sub_item').slideToggle();
        return false;
    });

    // Mobile Toggle
    $(".btn-mobile_expand").click(function(){
        $(".item_detail_card--content").slideToggle()
    });

    $(".ref_product_btn .btn").click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn')
    });


    // Ref Button Component Hide Show
    $(".ref_L_B_btn").click(function(){
        $(".Lithium_Batteries_components").addClass('show');
        $(".Magnetic_Properties_components").removeClass('show');
        $(".Hazerdous_Materials_components").removeClass('show');
    });
    $(".ref_M_P_btn").click(function(){
        $(".Lithium_Batteries_components").removeClass('show');
        $(".Magnetic_Properties_components").addClass('show');
        $(".Hazerdous_Materials_components").removeClass('show');
    });
    $(".ref_H_M_btn").click(function(){
        $(".Lithium_Batteries_components").removeClass('show');
        $(".Magnetic_Properties_components").removeClass('show');
        $(".Hazerdous_Materials_components").addClass('show');
    });
    $(".ref_none_btn").click(function(){
        $(".Lithium_Batteries_components").removeClass('show');
        $(".Magnetic_Properties_components").removeClass('show');
        $(".Hazerdous_Materials_components").removeClass('show');
    });


    $("#search_p_catalogue").on('show.bs.modal', function (e) {
        $("#add_s_p").modal("hide");
    });
    $("#create_new_product").on('show.bs.modal', function (e) {
        $("#add_s_p").modal("hide");
    });

    // Table Row Expand
    $(".expand_row").click(function(){
        $(this).parents('tr').next("tr.full_row").toggleClass("show")
        $(".close_full_row").click(function(){
            $(this).parents('tr.full_row').removeClass('show')
        });
        $(this).parents('.dropdown').dropdown('toggle')
        return false;
        
    })
   $(".range_slider").on('input',function(){
    $(this).siblings(".fill").css("width", this.value + "%");
   });

//    Circle Progress
   $(function(){
    var $ppc = $('.progress-pie-chart'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    
  });

//   shipment_tag_list_ul

});

  