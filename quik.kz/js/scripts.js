$(function () {
    $(".choice__tab-item").not(":first").hide();
    $(".wrapper .choice__tab").click(function () {
        $(".wrapper .choice__tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".choice__tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

});