$(function () {
  $(".all>li>a").click(function () {
    $(this).toggleClass("active");
    $(this).next(".qna").slideToggle();
    return false;
  });
  $(".qna>li>a").click(function () {
    $(this).toggleClass("active");
    $(this).next(".answer").slideToggle();
    return false;
  });

  //검색 필터링
  $("#search").keyup(function () {
    let val = $(this).val();
    if (val !== "") {
      $(".qna li a").filter(function () {
        $(".qna").show();
        $(this).toggle($(this).text().indexOf(val) > -1);
      });
    } else {
      $(".qna").hide();
    }
  });
});
