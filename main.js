$(document).ready(function () {

    /* UFO */

    function ufoAddClass () {
        $(".ufo").addClass("ufo-ani")
    };

    function ufoTakeoff () {
        $(".ufo-ani").fadeOut(800, "linear");
    };

    setTimeout(ufoAddClass, 2500);
    setTimeout(ufoTakeoff, 8700);

    /* LOGO FADE */

    $(".logo").mouseenter(function () {
        $("#logo-fade").animate({ opacity: 1 }, 400);
    });


    $(".logo").mouseout(function () {
        $("#logo-fade").animate({ opacity: 0 }, 400);
    });

    /* MENU NAVIGATION */

    $(".nav-btn").mouseenter(function () {
        $(event.currentTarget).toggleClass("nav-btn-a");
    });

    $(".nav-btn").mouseout(function () {
        $(event.currentTarget).toggleClass("nav-btn-a");
    });

    $(".nav-btn").mousedown(function () {
        $(event.currentTarget).toggleClass("nav-btn-click");
    });

    $(".nav-btn").mouseup(function () {
        $(event.currentTarget).toggleClass("nav-btn-click");
    });

    /* COMIC NAVIGATION */

    $(".nav-text").mouseenter(function () {
    $(event.currentTarget).toggleClass("nav-text-active");
    });

    $(".nav-text").mouseout(function () {
    $(event.currentTarget).toggleClass("nav-text-active")
    });

    $("#nav-arrow-1").mouseenter(function () {
        $("#first").toggleClass("nav-text-active");
    });

    $("#nav-arrow-1").mouseout(function () {
        $("#first").toggleClass("nav-text-active");
    });

    $("#nav-arrow-2").mouseenter(function () {
        $("#prev").toggleClass("nav-text-active");
    });

    $("#nav-arrow-2").mouseout(function () {
        $("#prev").toggleClass("nav-text-active");
    });

    $("#nav-arrow-3").mouseenter(function () {
        $("#next").toggleClass("nav-text-active");
    });

    $("#nav-arrow-3").mouseout(function () {
        $("#next").toggleClass("nav-text-active");
    });

    $("#nav-arrow-4").mouseenter(function () {
        $("#latest").toggleClass("nav-text-active");
    });

    $("#nav-arrow-4").mouseout(function () {
        $("#latest").toggleClass("nav-text-active");
    });


    /* RANDOM BUTTON */

    $(".random-btn").mouseenter(function () {
        $(event.currentTarget).toggleClass("random-btn-a");
    });

    $(".random-btn").mouseout(function () {
        $(event.currentTarget).toggleClass("random-btn-a");
    });

    $(".random-btn").mousedown(function () {
        $(event.currentTarget).toggleClass("random-btn-click");
    });

    $(".random-btn").mouseup(function () {
        $(event.currentTarget).toggleClass("random-btn-click");
    });

    /* SOCIAL BUTTONS */

    $("#fb-button").mouseenter(function () {
        $("#fb-button").attr("src", "images/facebook-2-48-a.png");
    });

    $("#fb-button").mouseout(function () {
        $("#fb-button").attr("src", "images/facebook-2-48.png");
    });

    $("#tw-button").mouseenter(function () {
        $("#tw-button").attr("src", "images/twitter-4-48-a.png");
    });

    $("#tw-button").mouseout(function () {
        $("#tw-button").attr("src", "images/twitter-4-48.png");
    });

















});