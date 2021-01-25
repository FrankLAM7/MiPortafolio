$(window).resize(function () {
  if ($(window).width() <= 1000) {
    console.log($(window).width());
    $("#sidebar, #content").removeClass("active");
  } else if ($(window).width() > 1000) {
    $("#sidebar, #content").addClass("active");
  }
});
