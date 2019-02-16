// Spowart logo
$("h1").fitText(1.1, { minFontSize: 30, maxFontSize: '80px' });

// Navbar
$(document).ready(function(){
	$("nav > button").click(function () {
	$("nav > ul").slideToggle();
	$("nav > button,nav > ul").toggleClass("open");
	});			
});		

// Sprite hovering
$(document).ready(function() {
	$('#page .sprite figure a:not(.active)').removeClass("dim"); //fix device focus on click/return..
    $('#page .sprite figure a').hover(function () {
        $(this).addClass('active');
        $('#page .sprite figure a:not(.active)').addClass('dim');
    }, function () {
        $(this).removeClass('active');
        $('#page .sprite figure a').removeClass('dim');
    });
});

// Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});