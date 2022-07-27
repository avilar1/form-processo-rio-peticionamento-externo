$(function() {
    $('#spanfile').hover(function() {
      $('#pathfile').css('fill', '#f5f5f5');
    }, function() {
      // on mouseout, reset the background colour
      $('#pathfile').css('fill', '');
    });
  });