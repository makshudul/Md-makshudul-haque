$(document).ready(function(){
    // vehicle_type
    $("#vehicle_type").select2({
        placeholder: "All Types"
    });
    $('#vehicle_type').one('select2:open', function(e) {
        $('input.select2-search__field').prop('placeholder', 'Search Here');
    });
    // select_model
    $("#select_model").select2({
        placeholder: "All Types"
    });
    $('#select_model').one('select2:open', function(e) {
        $('input.select2-search__field').prop('placeholder', 'Search Here');
    });
    // Min
    $("#power_range_min").select2({
        minimumResultsForSearch: -1,
    });
    // max
    $("#power_range_max").select2({
        minimumResultsForSearch: -1,
    });

    // Validation
    $("#vehicle_typev").select2({
        placeholder: "Select Type",
        minimumResultsForSearch: -1,
    });
    
    $("#years_purchase").select2({
        placeholder: "Select Type",
        minimumResultsForSearch: -1,
    });
    $('#similar_ad').owlCarousel({
        loop:true,
        margin:10,
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
    })
});