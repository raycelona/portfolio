
/**** jQuery ****/

$(document).ready(function () {

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

  });


/**** JS Utilities ****/

function router(loc) {
    window.location.href = 'file:///C:/Users/rcelo/Desktop/projects/general-dev/vanilla/html/' + loc + '.html';
};

(function dayDate() {
    // var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var d = new Date();
    // var day = days[d.getDay()];
    // var hr = d.getHours();
    // var min = d.getMinutes();
    // if (min < 10) {
    //     min = "0" + min;
    // }
    // var ampm = "am";
    // if (hr > 12) {
    //     hr -= 12;
    //     ampm = "pm";
    // }
    // var date = d.getDate();
    // var month = months[d.getMonth()];
    // var year = d.getFullYear();
    // var clock = document.getElementById("clock");
    // clock.innerHTML = day + " " + hr + ":" + min + ampm + " " + month + " " + date + ", " + year;
    let clock = document.getElementById("clock");
    clock.innerHTML = 'hello?'
})();
