$('.header-right > a').click(

    function() {
        $('.hamburger-menu').css("display", 'block');
    }

);

$('.hamburger-menu .close').click(

    function () {
        $(".hamburger-menu").attr('style','display: none');
    }

);