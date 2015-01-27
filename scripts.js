$(document).ready(function() {
  $(".button").each(function() {
    var size = Math.floor(Math.random() * 100);
    $(this).css('width', size + 'px');
    $(this).css('height', size + 'px');
    $(this).css('border-radius', Math.floor(Math.random() * 100)) + '%');
    $(this).css('background-color', 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255  + ')');
  });
  
  $('.button').mouseover(function() {
    $(this).css('top',Math.floor(Math.random() * $(window).height()));
    $(this).css('left',Math.floor(Math.random() * $(window).width()));
  });
});
