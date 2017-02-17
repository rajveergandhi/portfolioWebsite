//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#animation').animate({
marginTop: '20%',
opacity:"show"
}, 1500, function() {
// Animation complete.
$('.frecciaDown').animate({

    opacity:"show"
  }, 800);
});

$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() == $(document).height()) {
   $('#animation-footer').animate({
       marginTop: '-5px',
       opacity:"show"
     }, 800);
}
});

$(window).scroll(function() {
 if ($(this).scrollTop()>0)
  {
     $(".fade2").animate({opacity:"show"}, 2000);
  }
 else
  {
   $('.fade2').fadeOut();
  }
});

$(document).ready(function(){
   $('.parallax').scrolly({bgParallax: true});
});


$(function(){
     $(".element").typed({
       strings: ["^2000 <span class='typedText'>Hello! my name is Rajveer.</span> ^1000", "<span class='typedText'>I like to make websites ^1000 and stuff.</span>"],
       typeSpeed: 50,
     });
 });
