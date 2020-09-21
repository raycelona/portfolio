
/**** jQuery ****/

$(document).ready(function () {

    setTimeout(() => {
        $(".advert").slideDown();
    }, 1000)
    $("#hide").click(function () {
        $("p").toggle();
    });

    $(".sliding-link").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    });

    $(".toTop").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'fast');
    });
    $(".historyBtn").click(function () {
        // $(".workhistory").slideToggle("fast");
        $("#history").css("height", "600px");
    });
    $(".techBtn").click(function () {
        $(".moretech").slideToggle("fast");
    });

});


/**** JS Utilities ****/

function changeDesc(company) {
    let workItem = document.getElementsByClassName("workItem");
    for (let i = 0; i < workItem.length; i++) {
        workItem[i].style.display = "none";
    }
    document.getElementById(company).style.display = "block";
};

(function stickyNav() {
    window.addEventListener('scroll', () => {
        let aboutPos = document.getElementById("about");
        let stickyStart = aboutPos.offsetTop;
        if(window.pageYOffset >= stickyStart - 1) {
            let header = document.getElementById("header");
            header.classList.add("stickyNav")
        } else {
            header.classList.remove("stickyNav")
        }
    })
})();
