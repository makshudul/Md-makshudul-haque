$(document).ready(function($){
    // ======= Mobile Toggle Menu
    $(".mobile_nav_toggle").click(function(){
        $('.navigation').slideToggle();
        return false
    });
    // ======== Date Picker
    $('[data-toggle="datepicker"]').datepicker({
        autoHide:true
    });
    // ======= Gallery Dining 
    $('a.dining_gallery__card').simpleLightbox({
        // Option Here.. All Default Now :)
    });

}(jQuery));