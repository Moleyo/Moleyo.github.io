$(document).ready(function(){
    $('.box').hover(function(){
        $(this).children().animate({bottom: 0}, 500);
    }, function() {
        $(this).children().animate({bottom: '-50px'}, 500);
  });
});