$(document).ready(function () {
  $("div.bhoechie-tab-menu>ul.list-group>a").click(function (e) {
    e.preventDefault();
    $(this).siblings("a.active").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  });
});
$(function () {
  // Sidebar toggle behavior
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
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
