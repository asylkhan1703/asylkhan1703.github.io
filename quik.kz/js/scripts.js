
$(document).ready(function () {

    $(".choice__tab-item").not(":first").hide();
    $(".wrapper .choice__tab").click(function () {
        $(".wrapper .choice__tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".choice__tab-item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");


    $('.about__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });


    function backToTop() {
        var back = $('.footer__back');
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >= 1300) {
                back.fadeIn();
            } else{
                back.fadeOut();
            }
        });

        back.on('click', function(e) {
            e.preventDefault();
            $('html').animate({ scrollTop: 0 }, 1000);
        });
    }

    backToTop();
});

