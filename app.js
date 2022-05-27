$("html,body").addClass("hidden");
$(window).on('load', function () {
    $('.loader-bg').addClass('open');
    $('.loader').removeClass('timetaking');
    $('.loader').addClass('fade-out');

    setTimeout(function () {
        $("html,body").removeClass("hidden");
    }, 3550);
});
$(document).ready(function () {
    $('h1').addClass('name-animation');
    
    $("nav a").click(function () {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
});

