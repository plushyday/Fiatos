$(document).ready(function($) {

//
// $(".bars").click(function() {
//   $('.bars').toggleClass("pushed");
// });
// $('.bars').click(function(){
//   $('#menu-toggle').toggleClass('open');
// })
$(".menu-mobile").click(function(){$(".smart-menu").attr("id", $(".smart-menu").attr("id") === "smart-menu-active"? '' : "smart-menu-active")});
$(".menu-mobile").click(function(){$(".cat").toggleClass('catalogue');});
$(".menu-mobile").click(function(){$(".bars").parent().toggleClass('menu-toggle');});

//

//SEARCH ACTIVATION START
$("#magnifier").on('click', function () {
	$("#search").addClass('activate-search');
});

$(".et-search-field").on('blur', function () {
	if($(this).val().length == 0)
		$("#search").removeClass('activate-search');
});
//SEARCH ACTIVATION END

// SLIDER START
$('.slider').each(function(){
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
   clearTimeout(timeout);
   timeout = setTimeout(function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  }, 5000);
 }

 $('.next_btn').on('click', function() {
  if (currentIndex < ($slides.length - 1)) {
    move(currentIndex + 1);
  } else {
    move(0);
  }
});

 $('.previous_btn').on('click', function() {
  if (currentIndex !== 0) {
    move(currentIndex - 1);
  } else {
    move(3);
  }
});

 $.each($slides, function(index) {
  var $button = $('<a class="slide_btn">&bull;</a>');

  if (index === currentIndex) {
    $button.addClass('active');
  }
  $button.on('click', function() {
    move(index);
  }).appendTo('.slide_buttons');
  bulletArray.push($button);
});

 advance();
});

//SLIDER END

//RANDOM COLOR

// var obj=[
// "rgb(156,156,156)",
// "rgb(147,161,153)",
// "rgb(180,170,140)",
// "rgb(131,177,190)",//
// "rgb(155,173,140)",
// "rgb(163,170,148)",
// "rgb(125,178,172)",
// "rgb(127,186,216)",
// "rgb(125,158,178)",
// "rgb(125,178,146)",
// "rgb(148,163,170)",
// "rgb(167,171,184)",
// "rgb(172,167,184)",
// "rgb(184,167,171)",
// "rgb(195,169,149)"];

var obj =[
"rgb(48,152,144)",
"rgb(71,159,222)",
"rgb(183,69,69)",
"rgb(88,107,88)",
"rgb(113,146,68)",
"rgb(222,71,83)",
"rgb(222,135,71)",
"rgb(135,71,222)",
"rgb(152,52,160)",
"rgb(140,99,164)",
"rgb(99,164,140)",
"rgb(164,99,107)",
"rgb(99,107,164)",
"rgb(212,192,52)",
"rgb(52,72,212)"];

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var svgcolor = $(".svg-background");

console.dir(svgcolor);
svgcolor.each(function(){
	var rand=randomInteger(0, obj.length-1);
	var randcolor = obj[rand];
  $(this).css({"fill":randcolor});
  obj.splice(rand, 1);
});
//RANDOM COLOR END 
});



