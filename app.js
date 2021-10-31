$("html,body").addClass("hidden");
$(window).on('load', function () {
    $('.loader-bg').addClass('open');
    $('.loader').removeClass('timetaking');
    $('.loader').addClass('fade-out');
    $('h1').addClass('name-animation');

    setTimeout(function () {
        $("html,body").removeClass("hidden");
    }, 3550);
});
$(document).ready(function () {
    $("nav a").click(function () {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
});

