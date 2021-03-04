var h = document.getElementsByClassName("hamburger-menu");

$('.header-right > a i').click(

    function() {
        h.style.display = "block";
    }

);

$('.hamburger-menu .close').click(

    function () {
        h.style.display = "none";
    }

);
