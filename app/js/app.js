$(document).ready(function() {
  var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=wrestling+backdrop");
  xhr.done(function(giphy) {
    image_tag = '<img src="' + giphy.data.image_url + '" width="100%" alt="You have been backdropped!"/>';
    $('.content').append(image_tag);
    console.log("success got data", giphy.data);
  });
});
