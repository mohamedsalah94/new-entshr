$("#toTop").click(function() {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 1500);
});

let aboutheight = $("#about").offset().top;

$("#scroll-down").click(() => {
    $("html, body").animate({ scrollTop: aboutheight + 250 }, 1500);
});


$('#carouselExample').on('slide.bs.carousel', function(e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

$('#carouselExample').carousel({

    interval: 5000


});




// Start Custome Image Hover

$(".hover-img").hover(function() {
    $(".customer-paragraph").toggle();
});

// Start Our Process

$('.ourprocess .Container-progessbar li:nth-child(1)').on('mouseover', function() {

    $(".ourprocess .Container-progessbar li:nth-child(1)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(2)").removeClass("disabled");

    $(".Container-progessbar li:nth-child(1) span").removeClass("blue-txt");
    $(".Container-progessbar li:nth-child(1) span").addClass("white-txt");

});

$('.ourprocess .Container-progessbar li:nth-child(2)').on('mouseover', function() {

    $(".ourprocess .Container-progessbar li:nth-child(2)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(3)").removeClass("disabled");

    $(".Container-progessbar li:nth-child(2) span").removeClass("blue-txt");
    $(".Container-progessbar li:nth-child(2) span").addClass("white-txt");
});
$('.ourprocess .Container-progessbar li:nth-child(3)').on('mouseover', function() {

    $(".ourprocess .Container-progessbar li:nth-child(3)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(4)").removeClass("disabled");

    $(".Container-progessbar li:nth-child(3) span").removeClass("blue-txt");
    $(".Container-progessbar li:nth-child(3) span").addClass("white-txt");
});
$('.ourprocess .Container-progessbar li:nth-child(4)').on('mouseover', function() {

    $(".ourprocess .Container-progessbar li:nth-child(4)").addClass("active");

    $(".Container-progessbar li:nth-child(4) span").removeClass("blue-txt");
    $(".Container-progessbar li:nth-child(4) span").addClass("white-txt");
});



$(document).ready(function() {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".nav-tabs").hover(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});