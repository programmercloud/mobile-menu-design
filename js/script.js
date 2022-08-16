$(function () {
  $(".menuitem").click(function () {
    $(".menuitem").removeClass("active");
    $(this).addClass("active");
  });
});
