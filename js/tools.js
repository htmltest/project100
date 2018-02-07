$(document).ready(function() {

    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1
    });

    $('.main-partners-list').slick({
        dots: false,
        infinite: true,
        variableWidth: true,
        arrows: false,
        slidesToShow: 5,
        centerMode: true
    });

});