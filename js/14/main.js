$(document).ready(function () {
  let visible = false;

  $("#registerBtn").click(function () {
    visible = !visible;
    if (visible) {
      $(".card").fadeIn(500);
    } else {
      $(".card").fadeOut(500);
    }
  });
});
