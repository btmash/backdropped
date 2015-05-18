$(document).ready(function() {
  var position = 0;
  function replace_gif() {
    position = (position + 1) % 2;
    var tags = ['ric+flair+woo+excited+vintage', 'wrestling+backdrop'];
    var xhr = $.get("http://tv.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tags[position]);
    xhr.done(function(giphy) {
      image_background_css = 'url("' + giphy.data.image_url + '") no-repeat fixed center center / cover rgba(0, 0, 0, 0)';
      $('.content').css('background', image_background_css);
    });
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
