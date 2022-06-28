$(function () {
  //메뉴버튼 클릭시
  $(".btn_show_all_menu").click(function () {
    $(".all_menu").fadeIn();
  });
  //닫기버튼 클릭시
  $(".btn_close_all_menu").click(function () {
    $(".all_menu").fadeOut();
  });
});
