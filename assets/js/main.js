
//Scroll top open header --------------
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('headerShow');
        } else if ($(this).scrollTop() < 200) {
            $('header').removeClass('headerShow');
        }
    });
});

$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});
$(".works").click(function() {
    $('html, body').animate({
        scrollTop: $("#allWorks").offset().top -170
    }, 800);
});
$(".logo").click(function() {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top
    }, 800);
});

//choose
$('.itemNav li a').click(function () {
    var class_btn = $(this).attr('class');
    $(this).parent('li').addClass('active').siblings('li').removeClass('active');
    
    $('.itemList li').fadeOut(300);
    if (class_btn == 'webBTN') {
        // $('.itemList li:not(.itemWeb)').hide(300);
        $('.itemWeb').fadeIn(300);
    }
    else if(class_btn == 'eventBTN') {
        $('.itemEvent').fadeIn(300);
    }else if(class_btn == 'wallBTN') {
        $('.itemWall').fadeIn(300);
    }else if(class_btn == 'packageBTN') {
        $('.itemPackage').fadeIn(300);
    }else if(class_btn == 'graphicBTN') {
        $('.itemGraphic').fadeIn(300);
    }
    return false;
});
