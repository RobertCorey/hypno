
function animate(cont) {
  if (cont) {
    $('.circle').animate({
      height: "0%",
      width: "0%",
      "margin": "50%"
    }, 5000);
    $('.message').html("Breathe Out");
  } else {
    $('.circle').animate({
      height: "100%",
      width: "100%",
      "margin": "0%"
    }, 5000);
    $('.message').html("Breathe In");
  }
}
$('.real').hide();
animate(true);
var cont = false;
var counter = 0;
setInterval(function () {
  animate(cont);
  cont = (cont) ? false : true;
  counter += 1;
  if (counter > 4) {
    $('.circle').css('background-image', 'url("hypno.jpg")');
    $('.message').remove();
    $('.killme').remove();
    $('.real').show();
  }
}, 5000);
