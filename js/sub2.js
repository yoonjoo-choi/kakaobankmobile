$(function () {
  $(".tits h3").click(function () {
    $(".tits h3").removeClass();
    $(this).addClass("active");
    $(".contents>div").hide();

    $(".contents>div").eq($(this).index()).show();
    return false;
  });
});
