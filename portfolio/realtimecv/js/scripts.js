$(document).ready(function () {
    // Modals


    // ToolTip Active
    $('[data-toggle="tooltip"]').tooltip();

    // Progress circle
    $('input').on('change', function () {
        $('.progress-circle').attr('data-percentage', $(this).val());
    });

    // Slider
    var big_image = $("#big");
    var thumbs = $("#thumbs");

    var syncedSecondary = true;

    big_image
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200

        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
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
                    items: 1,
                    dots: true,
                    margin: 0,
                },
                600: {
                    items: 1,
                    dots: true,
                },

                1024: {
                    items: 3
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
            big_image.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        big_image.data("owl.carousel").to(number, 300, true);
    });



    // testimonial 
    $('#testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(function () {
        $('.selectpicker').selectpicker();
    });


    // range-slider

    $('.range-slider').on('input', function() {
        $(this).siblings('.fill').css('width', this.value + '%');
    });


    // Experience btn select 

    $(".experience_modal_cont_icons .btn").click(function(){
        $(this).toggleClass("active-btn").siblings().removeClass("active-btn");
    })

})