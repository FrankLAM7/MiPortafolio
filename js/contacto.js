$(document).ready(function() {
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");   
    });

    $(function() {
        // Sidebar toggle behavior
        $('#sidebarCollapse').on('click', function() {
          $('#sidebar, #content').toggleClass('active');
        });
      });
});