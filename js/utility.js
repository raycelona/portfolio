
/**** jQuery ****/

$(document).ready(function () {

    $(".sliding-link").click(function(e) {
        e.preventDefault();
        let aid = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    });

    $(window).scroll(function () {
        let aboutPos = $("#about");
        let stickyStart = aboutPos.offset().top;
        if (window.pageYOffset >= stickyStart - 1) {
            $("header").addClass("stickyNav");
        } else {
            $("header").removeClass("stickyNav");
        }
    });

    $(".workItem:first").show();
    $("#history li:first").addClass("active");
    $("#history li").click(function () {
        index = $(this).index();
        $("#history li").removeClass("active");
        $(this).addClass("active");
        $(".workItem").hide();
        $(".workItem").eq(index).show();
    });

});

