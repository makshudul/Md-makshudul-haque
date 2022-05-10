window.addEventListener("load",function(){
    const effectPages = document.querySelector('.effect_pages');
    const logoText = document.querySelector('.logo_text');
    const textOpacity = document.querySelector('.logo_text--text');
    
    setTimeout(function(){ 
        effectPages.classList.add("effect_pages--active")
    }, 2100);
    setTimeout(function(){ 
        logoText.classList.add("logo_text--active")
        textOpacity.classList.add("logo_text--text_active")
    }, 800);
    
})

$(document).ready(function(){
    // Text animation
    anime.timeline({loop: true})
        .add({
            targets: '.ml5 .line',
            opacity: [0.5,1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
        }).add({
            targets: '.ml5 .line',
            duration: 600,
            easing: "easeOutExpo",
            translateY: (el, i) => (0.625 + 0.625*2*i) + "em"
        }).add({
            targets: '.ml5 .ampersand',
            opacity: [0,1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5 .letters-left',
            opacity: [0,1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=300'
        }).add({
            targets: '.ml5 .letters-right',
            opacity: [0,1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    // Mobile Nav Expand
    $(".mobile__nav").click(function(){
        $(".header__nav").slideToggle();
        return false;
    });

    // Sidebar
    $(".sidebar__sm_bar").click(function(){
        $(".sidebar").toggleClass('show');

    })

    // Header Border Bootom
    $('hr').addClass('grow');
})
