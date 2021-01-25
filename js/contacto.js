$(document).ready(function () {
  $(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below
    $(this).removeClass("btn-default").addClass("btn-primary");
  });

  $(function () {
    // Sidebar toggle behavior
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar, #content").toggleClass("active");
    });
  });
});
$(window).resize(function () {
  if ($(window).width() <= 1000) {
    console.log($(window).width());
    $("#sidebar, #content").removeClass("active");
  } else if ($(window).width() > 1000) {
    $("#sidebar, #content").addClass("active");
  }
});
