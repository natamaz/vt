$(document).ready(function() {
    $('.h-testimonials-slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true
    });

    $('[data-go-to-slide]').click(function() {
        let targetSlider = $(this).attr('data-target-stider');
        let targetSlideIndex = $(this).attr('data-go-to-slide');
        
        $('[data-go-to-slide]').removeClass('active');
        $(this).addClass('active');

        $(targetSlider).slick('slickGoTo', targetSlideIndex);
    });

    $('.h-testimonials-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        sliderNav = $(this).attr('data-slider-nav');
        $(sliderNav + ' [data-go-to-slide]').removeClass('active');
        $(sliderNav + ' [data-go-to-slide="' + nextSlide + '"]').addClass('active');
    });

    // Menu
    $('.header-nav-btn').click(function() {
        $(this).toggleClass('opened');
        $('.header-nav').toggleClass('opened');
    });

    //Popup
    $('.sign-form').on("click", function () {
        $('.signPopup').addClass('active fadeInDown');
        $('.signPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.signPopup .close,.close-popup').on("click", function () {
        $('.signPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.signPopup').removeClass('active');
        }, 500);
    });
    $('.signPopup .closeBtn').on("click", function () {
        $('.signPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });
    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }


});