$(document).ready(function() {
  $(".button").each(function() {
    var size = Math.floor(Math.random() * 100);
    $(this).css('width', size + 'px');
    $(this).css('height', size + 'px');
    $(this).css('border-radius', Math.floor(Math.random() * 100)) + '%');
    $(this).css('top',Math.floor(Math.random() * $(window).height()));
    $(this).css('left',Math.floor(Math.random() * $(window).width()));
  });
  
  $('.button').mouseover(function() {
    var size = Math.floor(Math.random() * 100);
    $(this).css('width', size + 'px');
    $(this).css('height', size + 'px');
    $(this).css('border-radius', Math.floor(Math.random() * 100)) + '%');
    $(this).css('top',Math.floor(Math.random() * $(window).height()));
    $(this).css('left',Math.floor(Math.random() * $(window).width()));
  });
  
  $('.button').click(function() {
    $(this).css('background-color', "#00AAFF");
  });
});
