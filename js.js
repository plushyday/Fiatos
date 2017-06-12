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
  $("input[type=search]").focus();
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
  $slides.eq(0).css({
    display: 'block'
  })
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
    move($slides.length - 1);
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

//SLIDE TO ANCHOR


function anchor(){
    var Params = location.search.substring(1); 
    if(Params.split("=")[1]=="about_us"){
    $('html,body').animate({scrollTop:$('#about_us').offset().top},600);
    }
}
setTimeout(anchor,100);

//SLIDE TO ANCHOR END

// PURE JAVASCRIPT "Scroller" CLASS (OOP)

function Scroller(options) {
  this.options = options;
  this.button = null;
  this.stop = false;
}

Scroller.prototype.constructor = Scroller;

Scroller.prototype.createButton = function() {
  this.span = document.createElement("span");
  this.span.classList.add("glyphicon");
  this.span.classList.add("glyphicon-triangle-top");
  this.span.style.fontSize = 'large';
  this.button = document.createElement('button');
  this.button.classList.add('scroll-button');
  this.button.classList.add('scroll-button--hidden');
  document.body.appendChild(this.button);
  document.getElementsByClassName("scroll-button")[0].appendChild(this.span);
}
  
Scroller.prototype.init = function() {
  this.createButton();
  this.checkPosition();
  this.click();
  this.stopListener();
}

Scroller.prototype.scroll = function() {
  if (this.options.animate == false || this.options.animate == "false") {
    this.scrollNoAnimate();
    return;
  }
  if (this.options.animate == "normal") {
    this.scrollAnimate();
    return;
  }
  if (this.options.animate == "linear") {
    this.scrollAnimateLinear();
    return;
  }
}
Scroller.prototype.scrollNoAnimate = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
Scroller.prototype.scrollAnimate = function() {
  if (this.scrollTop() > 0 && this.stop == false) {
    setTimeout(function() {
      this.scrollAnimate();
      window.scrollBy(0, (-(Math.abs((this.scrollTop()-document.getElementsByClassName("page-header")[0].offsetTop)/this.options.normal['steps']))));
    }.bind(this), (this.options.normal['ms']));
  }
}
Scroller.prototype.scrollAnimateLinear = function() {
  if (this.scrollTop() > 0 && this.stop == false) {
    setTimeout(function() {
      this.scrollAnimateLinear();
      window.scrollBy(0, -(Math.abs(this.options.linear['px'])-document.getElementsByClassName("page-header")[0].offsetTop));

    }.bind(this), this.options.linear['ms']);
  }
}

Scroller.prototype.click = function() {
  
  this.button.addEventListener("click", function(e) {
    e.stopPropagation();
      this.scroll();
  }.bind(this), false);
  
  this.button.addEventListener("dblclick", function(e) {
    e.stopPropagation();
      this.scrollNoAnimate();
  }.bind(this), false);
  
}

Scroller.prototype.hide = function() {
  this.button.classList.add("scroll-button--hidden");
}

Scroller.prototype.show = function() {
  this.button.classList.remove("scroll-button--hidden");
}

Scroller.prototype.checkPosition = function() {
  window.addEventListener("scroll", function(e) {
    if (this.scrollTop() > (this.options.showButtonAfter+document.getElementsByClassName("page-header")[0].offsetTop)) {
      this.show();
    } else {
      this.hide();
    }
  }.bind(this), false);
}

Scroller.prototype.stopListener = function() {
  
  // stop animation on slider drag
  var position = this.scrollTop();
  window.addEventListener("scroll", function(e) {
    if (this.scrollTop() > position) {
      this.stopTimeout(200);
    } else {
      //...
    }
    position = this.scrollTop();
  }.bind(this, position), false);

  // stop animation on wheel scroll down
  window.addEventListener("wheel", function(e) {
    if(e.deltaY > 0) this.stopTimeout(200);
  }.bind(this), false);
}

Scroller.prototype.stopTimeout = function(ms){
   this.stop = true;
   setTimeout(function() {
     this.stop = false;
   }.bind(this), ms);
}

Scroller.prototype.scrollTop = function(){
   var curentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   // var curentScrollTop = document.getElementsByClassName("page-header")[0].scrollIntoView();
  return curentScrollTop;
}



// ------------------- USE EXAMPLE ---------------------
// *Set options
var options = {
  'showButtonAfter': 200, // show button after scroling down this amount of px
  'animate': "normal", // [false|normal|linear] - for false no aditional settings are needed
  // easy out effect
  'normal': { // applys only if [animate: normal] - set scroll loop "distanceLeft"/"steps"|"ms"
    'steps': 15, // more "steps" per loop => slower animation
    'ms': 1000/60 // less "ms" => quicker animation, more "ms" => snapy
  },
  // linear effect
  'linear': { // applys only if [animate: linear] - set scroll "px"|"ms"
    'px': 80, // more "px" => quicker your animation gets
    'ms': 1000/60 // Less "ms" => quicker your animation gets, More "ms" =>
  }, 
};
// *Create new Scroller and run it.
var scroll = new Scroller(options);
scroll.init();
// END PURE JAVASCRIPT "Scroller" CLASS (OOP)


});



