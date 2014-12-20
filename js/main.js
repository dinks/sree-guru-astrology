$(function () {
  // Start the video once loaded
  var v = $('.video-playing')[0];
  v.play();

  // Toggle focus class for input groups for proper highlighting
  $('.input-group').on('focus', '.form-control', function () {
    $(this).closest('.input-group, .form-group').addClass('focus');
  }).on('blur', '.form-control', function () {
    $(this).closest('.input-group, .form-group').removeClass('focus');
  });
});
