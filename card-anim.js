$(document).ready(function(){
  $('#clickable-card').click(function(){
      var duration = 500;
      $('#Original').fadeToggle(duration);
      $('#Translation').fadeToggle(duration);
  });
});