$(document).ready(function() {
  var xhr = $.get("http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=backdrop");
  xhr.done(function(data) { console.log("success got data", data); });
}
