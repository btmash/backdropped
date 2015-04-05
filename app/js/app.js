$(document).ready(function() {
  function replace_gif() {
    var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=wrestling");
    xhr.done(function(giphy) {
      image_background_css = 'url("' + giphy.data.image_url + '") no-repeat fixed center center / cover rgba(0, 0, 0, 0)';
      $('.content').css('background', image_background_css);
    });
//    setTimeout(function() { play_scream(); }, 2000);
    setTimeout(function() { transition(); }, 10000);
  }
  function transition() {
    image_background_css = 'url("./images/white-noise.gif") no-repeat fixed center center / cover rgba(0, 0, 0, 0)';
    $('.content').css('background', image_background_css);
    setTimeout(function() { replace_gif(); }, 250);
  }
  function play_scream() {
    $('#jerry-scream').get(0).play();
  }
  setTimeout(function() { transition(); }, 2000);
});
