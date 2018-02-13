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
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear'
    });

    $('.gallery').each(function() {
        var curGallery = $(this);
        curGallery.find('.gallery-hint-all').html(curGallery.find('.gallery-item').length);
        curGallery.find('.gallery-hint-current').html('1');
    });

    $('.gallery-list').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var curGallery = $(this).parents().filter('.gallery');
        curGallery.find('.gallery-hint-current').html(nextSlide + 1);
    });

});