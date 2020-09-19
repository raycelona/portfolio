
/**** jQuery ****/

$(document).ready(function () {

    setTimeout(() => {
        $(".advert").slideDown();
    }, 1000)
    $("#hide").click(function () {
      $("p").toggle();
    });

    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

    $(".toTop").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
    });
    $(".historyBtn").click(function() {
        // $(".workhistory").slideToggle("fast");
        $("#history").css("height", "600px");
    });
    $(".techBtn").click(function() {
        $(".moretech").slideToggle("fast");
    });
    // $(document).scroll(function() {
    //     var top = $(window).scrollTop();
    //     setTimeout(() => {
    //         $(".toTop").css("display", "block");
    //     }, 1000);
    // })

  });


/**** JS Utilities ****/

function router(loc) {
    window.location.href = 'file:///C:/Users/rcelo/Desktop/projects/general-dev/vanilla/html/' + loc + '.html';
};