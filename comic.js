$(document).ready(function () {

    const comicList = ["<div class=\"comic-title\" id=\"comic-title\">\
                        <h2>#1 <span class=\"bolder\">Giant Coat Sale</span></h2>\
                        </div>\
                        <div class=\"comic-img\" id=\"comic-img\">\
                        <a href=\"01-giant-coat-sale.html\"><img src=\"images/comics/01.png\" alt=\"Greetings From Space #1: Giant Coat Sale\"></a>\
                        </div>"
                    ];

    function loadComic (n) {
        $(".comic-body").prepend(comicList[n]);
    };

loadComic(0);


});