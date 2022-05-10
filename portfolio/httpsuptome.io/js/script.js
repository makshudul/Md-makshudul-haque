$(document).ready(function(){
    $(".category__item a").click(function(){
        $(this).parent().addClass("category__item--selected").siblings().removeClass('category__item--selected');
    });

    // Active Address Card
    $(".address__card").click(function(){
        $(this).toggleClass("address__card--selected");
    })
    
});