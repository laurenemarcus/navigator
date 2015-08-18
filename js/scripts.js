$(document).ready(function() {
  $('#check1').css('visibility','hidden');
  $('#check2').css('visibility','hidden');
  $('#check3').css('visibility','hidden');

  $('#sub-menu-link1').hover(function() {
    $('#check1').css('visibility','visible');
  }).mouseleave(function(){
      $('#check1').css('visibility','hidden');
  });

  $('#sub-menu-link2').mouseenter(function() {
    $('#check2').css('visibility','visible');
  }).mouseleave(function(){
      $('#check2').css('visibility','hidden');
  });

  $('#sub-menu-link3').mouseenter(function() {
    $('#check3').css('visibility','visible');
  }).mouseleave(function(){
      $('#check3').css('visibility','hidden');
  });
});
