$(function () {
  //스크롤이벤트
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".con4").offset().top - 200 && $(window).scrollTop() < $(".con4").offset().top + 400) {
      $(".con4").addClass("bgdark");
    } else {
      $(".con4").removeClass("bgdark");
    }
  });
});
