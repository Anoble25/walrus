$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#f1").fadeToggle();
    $("#s1").slideToggle();

  });
});
