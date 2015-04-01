$(document).ready(function() {
  var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=wrestling");
  xhr.done(function(giphy) {
    image_background_css = 'url("' + giphy.data.image_url + '") no-repeat fixed center center / cover rgba(0, 0, 0, 0)';
    $('.content').css('background', image_background_css);
  });
});
