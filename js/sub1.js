$(function () {
  //슬라이드
  let currntSlide = 0;
  $(".btn_prev").click(function () {
    currntSlide <= 0 ? (currntSlide = 0) : currntSlide--;

    $(".slide ul").animate({ left: -(currntSlide * 100) + "%" });
  });
  $(".btn_next").click(function () {
    currntSlide >= 3 ? (currntSlide = 3) : currntSlide++;
    $(".slide ul").animate({ left: -(currntSlide * 100) + "%" });
  });
});
