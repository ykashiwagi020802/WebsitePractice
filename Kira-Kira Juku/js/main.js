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
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

// $('.js-fadein-left').waypoint({
//   handler: function(direction) {

//     if (direction === 'down') {
//       $(this.element)
//         .addClass('animate__fadeInLeft');
//     }
//   },
//   offset: '50%',
// });

// $('.js-fadein-right').waypoint({
//   handler: function(direction) {

//     if (direction === 'down') {
//       $(this.element)
//         .addClass('animate__fadeInRight');
//     }
//   },
//   offset: '50%',
// });

$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false
});