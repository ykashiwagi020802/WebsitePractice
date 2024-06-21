// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

$('.gallary__photo__slick').slick({ 
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});
