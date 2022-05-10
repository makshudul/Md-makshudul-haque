$(document).ready(function(){
    // Mobile Nav Expand
    $(".mobile__nav").click(function(){
        $(".header__nav").slideToggle();
        return false;
    });

    // Faq Buttons
    $(".btn-faq").click(function(){
        $(this).parent('.faq__item').toggleClass('show').siblings().removeClass('show');
    })
    // Sidebar
    $(".sidebar__sm_bar").click(function(){
        $(".sidebar").toggleClass('show');

    })
})