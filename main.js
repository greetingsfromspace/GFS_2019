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

    /* LOGO */

    const header = `<a href="./index.html" alt="Return Home">
                    <div class="logo" id="logo">
                    <img src="./images/logo_b.png" id="logo-fade" alt="Greetings From Space">
                    <img src="./images/logo_a.png" id="logo-img" alt="Greetings From Space">
                    </div>
                    </a>

                    <div class="nav" id="nav">
                    <a href="./index.html"><div class="nav-btn" id="nav-home">Home</div></a>
                    <a href="./about.html"><div class="nav-btn" id="nav-about">About</div></a>
                    <a href="./news.html"><div class="nav-btn" id="nav-news">News</div></a>
                    <a href="./stuff.html"><div class="nav-btn" id="nav-stuff">Stuff</div></a>                
                    <a href="./archive.html"><div class="nav-btn" id="nav-archive">Archive</div></a>
                    <a href="./contact.html"><div class="nav-btn" id="nav-contact">Contact</div></a>
                    </div>`

    function loadHeader (n) {
        $(".header").append(header);
        };

    loadHeader();

    function logoFadein () {
        $("#logo-fade").animate( { opacity: 1 }, 0);
        $("#logo-fade").animate( {opacity: 0 }, 1200)
    };

    logoFadein();

    $(".logo").mouseenter(function () {
        $("#logo-fade").animate({ opacity: 1 }, 400);
    });


    $(".logo").mouseout(function () {
        $("#logo-fade").animate({ opacity: 0 }, 400);
    });

    /* FOOTER */

    const footer = `<div class="copyright" id="copyright">
                    <p>&COPY; Copyright 2011-2019, All Rights Reserved
                    <br>Version 1.0.1</p>
                    </div>

                    <div class="social-footer" id="social-footer">
                    <a href="http://www.facebook.com/gfscomic" target="_blank"><img src="images/facebook-2-48.png" alt="Follow Greetings From Sprace on Facebook!" id="fb-button"></a>
                    <a href="http://www.twitter.com/gfscomic" target="_blank"><img src="images/twitter-4-48.png" alt="Follow Greetings From Sprace on Twitter!" id="tw-button"></a>
                    </div>`
    
function loadFooter (n) {
    $(".footer").append(footer);
    };
                
    loadFooter();

    /* MENU NAVIGATION */

    $(".nav-btn").mouseenter(function () {
        $(event.currentTarget).removeClass("nav-btn-a").addClass("nav-btn-a");
    });

    $(".nav-btn").mouseout(function () {
        $(event.currentTarget).removeClass("nav-btn-a");
    });

    $(".nav-btn").mousedown(function () {
        $(event.currentTarget).toggleClass("nav-btn-click");
    });

    $(".nav-btn").mouseup(function () {
        $(event.currentTarget).toggleClass("nav-btn-click");
    });

    /* COMIC NAVIGATION */

    $(".nav-text").mouseenter(function () {
    $(event.currentTarget).removeClass("red");
    $(event.currentTarget).addClass("red");
    });

    $(".nav-text").mouseout(function () {
    $(event.currentTarget).removeClass("red");
    });

    $("#nav-arrow-1").mouseenter(function () {
        $("#first").removeClass("red");
        $("#first").addClass("red");
    });

    $("#nav-arrow-1").mouseout(function () {
        $("#first").removeClass("red");
    });

    $("#nav-arrow-2").mouseenter(function () {
        $("#prev").removeClass("red");
        $("#prev").addClass("red");
    });

    $("#nav-arrow-2").mouseout(function () {
        $("#prev").removeClass("red");
    });

    $("#nav-arrow-3").mouseenter(function () {
        $("#next").removeClass("red");
        $("#next").addClass("red");
    });

    $("#nav-arrow-3").mouseout(function () {
        $("#next").removeClass("red");
    });

    $("#nav-arrow-4").mouseenter(function () {
        $("#latest").removeClass("red");
        $("#latest").addClass("red");
    });

    $("#nav-arrow-4").mouseout(function () {
        $("#latest").removeClass("red");
    });


    /* RANDOM BUTTON */

    $(".random-btn").mouseenter(function () {
        $(event.currentTarget).removeClass("random-btn-a");
        $(event.currentTarget).addClass("random-btn-a");
    });

    $(".random-btn").mouseout(function () {
        $(event.currentTarget).removeClass("random-btn-a");
    });

    $(".random-btn").mousedown(function () {
        $(event.currentTarget).addClass("random-btn-click");
        $(event.currentTarget).removeClass("random-btn-a");
    });

    $(".random-btn").mouseup(function () {
        $(event.currentTarget).removeClass("random-btn-click");
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

/* ARCHIVE */

$(".return-arrow").mouseenter(function () {
    $("#return").addClass("return-active");
});

$(".return-arrow").mouseout(function () {
    $("#return").removeClass("return-active");
});

$(document).on("mouseenter",".archive-list li a", function () {
    $(".archive-list li a").removeClass("archive-item-active");
    $(this).parent().addClass("archive-item-active");
});

$(document).on("mouseout",".archive-list li a", function () {
    $(".archive-list li a").removeClass("archive-item-active");
    $(this).parent().removeClass("archive-item-active");
});

/* ABOUT */

$("#abt-char-img").mouseenter(function() {
    this.src = "images/abt_char_active.jpg"
});

$("#abt-char-img").mouseout(function() {
    this.src = "images/abt_char.jpg"
});

/* CONTACT */

$("#soc-twit-text").mouseenter(function () {
    $("#tw-blue").attr("src", "images/twitter-4-48-a.png");

});

$("#soc-twit-text").mouseout(function () {
    $("#tw-blue").attr("src", "images/twitter-blue.png");
});

$("#soc-fb-text").mouseenter(function () {
    $("#fb-blue").attr("src", "images/facebook-2-48-a.png");

});

$("#soc-fb-text").mouseout(function () {
    $("#fb-blue").attr("src", "images/facebook-blue.png");
});

$("#soc-yt-text").mouseenter(function () {
    $("#yt-blue").attr("src", "images/yt-red.png");

});

$("#soc-yt-text").mouseout(function () {
    $("#yt-blue").attr("src", "images/yt-blue.png");
});

$("#soc-twitch-text").mouseenter(function () {
    $("#twitch-blue").attr("src", "images/twitch-red.png");

});

$("#soc-twitch-text").mouseout(function () {
    $("#twitch-blue").attr("src", "images/twitch-blue.png");
});


});