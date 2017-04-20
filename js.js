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

var obj =[
"rgb(160, 52, 52)",
"rgb(71,159,222)",
"rgb(52, 145, 160)",
"rgb(88,107,88)",
"rgb(113,146,68)",
"rgb(222,71,83)",
"rgb(222,135,71)",
"rgb(135,71,222)",
"rgb(64, 160, 52)",
"rgb(140,99,164)",
"rgb(99,164,140)",
"rgb(164,99,107)",
"rgb(99,107,164)",
"rgb(212,192,52)",
"rgb(52,72,212)"];

// var obj=[
// "#588C7E",
// "#F2E394",
// "#F2AE72",
// "#D96459",
// "#8C4646",
// "#8b468c",
// "#46798c",
// "#0064dc",
// "#dcc100",
// "#8c5858"
// ]

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
// //SLIDES-ITEM
// for(var i=0; i<=$(".slides-item li").length; i++){
// $(".slides-item li").eq(i).on("mouseover", function(){
//   $(this).children().addClass('relative');
// });
// $(".slides-item li").eq(i).on("mouseleave", function(){
//   $(this).children().removeClass('relative');
// });
// }
});



