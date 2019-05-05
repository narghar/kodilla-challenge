var elem = document.querySelector('.quotes-wrapper');
var flkty = new Flickity( elem, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 7000,
  arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
});

//Smooth scrolling

(function(){
  'use strict';
  
  var navSelector = '.navigation';
  var linksSelector = '.navigation a';
  var scrollSpeed = 50;
  
  var timer, targetPosition;

  function scroll() {
    var delta = targetPosition - document.documentElement.scrollTop;
    if (delta > 0) {
      document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
    }
    else if (delta < 0) {
      document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
    }
    else {
      clearInterval(timer);
    }
    
    if(window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
      clearInterval(timer);
    }
  };
  
  var onLinkClick = function(event){
    event.preventDefault();
    clearInterval(timer)
    
    var navHeight = document.querySelector(navSelector).offsetHeight;
    var target = document.querySelector(this.getAttribute('href'));
    if(target){
      targetPosition = Math.max(0, target.offsetTop - navHeight);
      scroll();
      timer = setInterval(scroll, 1000/30);
    }
  };
  
  var links = document.querySelectorAll(linksSelector);
  
  for(var i=0; i<links.length; i++){
    links[i].addEventListener('click', onLinkClick);
  }
  
})();