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


function slideAnime() {
  //====左に動くアニメーションここから===
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

    }
  });
}

$(function () {
  $(window).scroll(function () {
    $('.text-appear').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false
});

$(function () {
  $('.js--scroll').on('click', (e) => {
    e.preventDefault();
    let $target = $($(e.currentTarget).attr('href'));
    if ($target.length > 0) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 500, 'swing');
    }
  })
})

$('.gallary__photo__slick').slick({
  vertical: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 2000,
  autoplaySpeed: 3000,
});

$('.summary__photo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  dots: false,
  arrows: false,
  centerPadding: "8.5%",
  responsive: [
    {
      breakpoint: 767.5,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "8.5%",
      }
    }
  ]
});


// function fixedHeader() {
//   let fixedElm = document.querySelector(".news-guide__container");
//   let scrollPoint = 0;
//   let lastPoint = 0;
//   window.addEventListener("scroll", function () {
//     scrollPoint = this.window.scrollY;
//     if (scrollPoint > lastPoint) {
//       fixedElm.classList.add("fixed-hide");
//     }
//     else {
//       fixedElm.classList.remove("fixed-hide");
//     }
//     lastPoint = scrollPoint;
//   });
// }
// fixedHeader()