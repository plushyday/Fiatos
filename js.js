$(document).ready(function($) {

//SEARCH ACTIVATION START
$("#magnifier").on('focus', function () {
	$("#search").addClass('activate-search');
});

$(".et-search-field").on('blur', function () {
	if($(this).val().length == 0)
		$("#search").removeClass('activate-search');
});
//SEARCH ACTIVATION END

// SLIDER START
$('.slider').each(function() {
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
var obj={
	"0":"rgb(221,9,8)",
	"1":"rgb(255,158,41)",
	"2":"rgb(63,183,210)",
	"3":"rgb(21,192,28)",
	"4":"rgb(126,59,7)",
	"5":"rgb(25,99,206)",
	"6":"rgb(193,25,206)",
	"7":"rgb(127,186,216)",
	"8":"rgb(121,117,150)",
	"9":"rgb(255,204,255)",
	"10":"rgb(7,12,31)",
	"11":"rgb(0,82,94)",
	"12":"rgb(84,35,68)",
	"13":"rgb(113,180,141)",
	"14":"rgb(94,84,142)",
	"15":"rgb(56,97,80)",
	"16":"rgb(92,109,112)",
	"17":"rgb(112,101,99)"
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

var svgcolor = $(".svg-background")

//замыкания

function createColor(){

}

svgcolor.each(function callbackcolor(index, element){

	var rand=randomInteger(0,17);
	var randcolor = obj[rand];
again: 
for (var i=0; i<svgcolor.length; i++)
		{
		if(svgcolor.eq(i).css("fill")==randcolor)
				{
			rand=randomInteger(0,17);
			randcolor = obj[rand];
			break again;
			}
		};
	$(this).css("fill",randcolor);
	
});

// $.each(svgcolor, function())
// $(".svg-background").css("fill", randcolor);
//RANDOM COLOR END
})

