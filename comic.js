$(document).ready(function () {

    const comicList = ["<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#1 <span class=\"bolder\">Giant Coat Sale</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"01-giant-coat-sale.html\"><img src=\"images/comics/01.png\" alt=\"Greetings From Space #1: Giant Coat Sale\"></a>\
                        </div>",
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#2 <span class=\"bolder\">Leo The Lion</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"02-leo-the-lion.html\"><img src=\"images/comics/02.png\" alt=\"Greetings From Space #2: Leo The Lion\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#3 <span class=\"bolder\">Citation Needed</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"03-citation-needed.html\"><img src=\"images/comics/03.png\" alt=\"Greetings From Space #3: Citation Needed\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#4 <span class=\"bolder\">Personal Finance</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"04-personal-finance.html\"><img src=\"images/comics/04.png\" alt=\"Greetings From Space #4: Personal Finance\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#5 <span class=\"bolder\">Post Credits</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"05-post-credits.html\"><img src=\"images/comics/05.png\" alt=\"Greetings From Space #5: Post Credits\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#6 <span class=\"bolder\">My Only Weakness</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"06-my-only-weakness.html\"><img src=\"images/comics/06.png\" alt=\"Greetings From Space #6: My Only Weakness\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#7 <span class=\"bolder\">Valentine's Day Massacre</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"07-valentines-day-massacre.html\"><img src=\"images/comics/07.png\" alt=\"Greetings From Space #7: Valentine's Day Massacre\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#8 <span class=\"bolder\">I am Watson</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"08-i-am-watson.html\"><img src=\"images/comics/08.png\" alt=\"Greetings From Space #8: I am Watson\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#9 <span class=\"bolder\">Express Lane</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"09-express-lane.html\"><img src=\"images/comics/09.png\" alt=\"Greetings From Space #9: Express Lane\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#10 <span class=\"bolder\">Business Plan</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"10-business-plan.html\"><img src=\"images/comics/10.png\" alt=\"Greetings From Space #10: Business Plan\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#11 <span class=\"bolder\">Point and Shoot</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"11-point-and-shoot.html\"><img src=\"images/comics/11.png\" alt=\"Greetings From Space #11: Point and Shoot\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#12 <span class=\"bolder\">Tsunami Warning</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"12-tsunami-warning.html\"><img src=\"images/comics/12.png\" alt=\"Greetings From Space #12: Tsunami Warning\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#13 <span class=\"bolder\">Anger Management</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"13-anger-management.html\"><img src=\"images/comics/13.png\" alt=\"Greetings From Space #13: Anger Management\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#14 <span class=\"bolder\">Danny Glover</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"14-danny-glover.html\"><img src=\"images/comics/14.png\" alt=\"Greetings From Space #14: Danny Glover\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#15 <span class=\"bolder\">Infinite Loop</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"15-infinite-loop.html\"><img src=\"images/comics/15.png\" alt=\"Greetings From Space #15: Infinite Loop\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#16 <span class=\"bolder\">Grow I Guess</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"16-grow-i-guess.html\"><img src=\"images/comics/16.png\" alt=\"Greetings From Space #16: Grow I Guess\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#17 <span class=\"bolder\">Urban Myth</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"17-urban-myth.html\"><img src=\"images/comics/17.png\" alt=\"Greetings From Space #17: Urban Myth\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#18 <span class=\"bolder\">The Adventures of Joe Pesci, Vol. I</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"18-joe-pesci.html\"><img src=\"images/comics/18.png\" alt=\"Greetings From Space #18: The Adventures of Joe Pesci, Vol. I\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#19 <span class=\"bolder\">Deboarding</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"19-deboarding.html\"><img src=\"images/comics/19.png\" alt=\"Greetings From Space #19: Deboarding\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#20 <span class=\"bolder\">Animal Farm</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"20-animal-farm.html\"><img src=\"images/comics/20.png\" alt=\"Greetings From Space #20: Animal Farm\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#21 <span class=\"bolder\">Ancient Artisan</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"21-ancient-artisan.html\"><img src=\"images/comics/21.png\" alt=\"Greetings From Space #21: Ancient Artisan\"></a>\
                        </div>", 
                        "<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#22 <span class=\"bolder\">Teenagers With Attitude</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"22-teenagers-with-attitude.html\"><img src=\"images/comics/22.png\" alt=\"Greetings From Space #22: Teenagers With Attitude\"></a>\
                        </div>"
                    ];

    function loadComic (n) {
        $(".comic-insert").html(comicList[n]);
    };

const firstComic = comicList[0];
const newest = comicList.length - 1;
const latestComic = comicList[newest];
let counter = comicList.length - 1;

loadComic(newest);

    $("#nav-btn-first").click(function () {
        $(".comic-insert").html(firstComic);
        counter = 0;
    });

    $("#nav-btn-latest").click(function () {
        $(".comic-insert").html(latestComic);
        counter = newest;
    });

    $("#nav-btn-prev").click(function () {
        $(".comic-insert").html(comicList[counter - 1]);
        counter = counter - 1;
        if (counter < 0) {
            counter = 0;
        }
    });

    $("#nav-btn-next").click(function () {
        $(".comic-insert").html(comicList[counter + 1]);
        counter = counter + 1;
        if (counter > newest) {
            counter = newest;
        }
    });













});