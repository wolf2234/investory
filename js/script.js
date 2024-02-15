$(document).ready(function() {
    var menuBtn = $('.top-nav-btn');
    var sidebarBtn = $('.left-sidebar-btn')
    var menu = $('.top-nav-menu');
    var sidebarMenu = $('.left-sidebar-menu')
    menuBtn.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('top-nav-menu__active');
    });
    sidebarMenu.on('click', function(event){
        event.preventDefault();
        sidebarBtn.toggleClass('left-sidebar-menu__active');
    });
});

$('.direction-blocks').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});



