$('.accordion-title').on('click', function (e) {
  var mark = $(this).find("i");
  mark.toggleClass("change-parts-rotate");
  var content = $(this).next();
  content.slideToggle();
});

$(function () {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.faq__above').click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});