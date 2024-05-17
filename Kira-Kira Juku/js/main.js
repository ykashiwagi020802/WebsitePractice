// ハンバーガーメニュー
var hamburger = $('.hamburger--menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger--button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger--menu--active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger--menu--active');
});


$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false
});

$(function() {
  $('.js--scroll').on('click',(e) => {
    e.preventDefault();
    let $target = $($(e.currentTarget).attr('href'));
    if ($target.length > 0) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 500, 'swing');
    }
  })
})