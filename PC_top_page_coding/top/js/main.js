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


$(function () {
  // .js-accordion_titleをクリックすると
  $('.js-accordion_title').click(function () {
    // クリックした次の要素を展開
    $(this).next('.js-accordion_inner').slideToggle();
    // 展開するときjs-accordion_titleクラスにopenクラスを追加してアイコンを回転
    $(this).toggleClass("open");
  });
});


$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

// $('.js-fadein-left').waypoint({
//   handler: function (direction) {
//     // 要素が画面中央に来るとここが実行される
//     if (direction === 'down') {
//       /**
//        * 下方向のスクロール
//        * イベント発生元の要素に
//        * fadeInLeftアニメーションを付けることで
//        * アニメーションを開始
//        */
//       $(this.element)
//         .addClass('animate__fadeInLeft');
//     }
//   },

//   // 要素が画面中央に来たらhandlerを実行
//   offset: '50%',
// });

$(function () {

  $(window).on('load scroll', function () {
    //現時点のスクロールの高さ取得
    var scrollPosition = $(window).scrollTop();
    //ウィンドウの高さ取得
    var windowHeight = $(window).height();

    $('.lental_box').each(function () {
      //要素の位置（高さ）を取得
      var elemPosition = $(this).offset().top;
      //スクロールの高さが要素の位置を超えたら以下のスタイルを適用
      if (elemPosition < scrollPosition + windowHeight) {
        $(this).css({
          opacity: 1,
          transform: 'translateY(0)'
        });
      }
    });
  });

});

// $(function () {
//   $(window).scroll(function () {
//     $('.fadein').each(function () {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > position - windowHeight + 200) {
//         $(function () {
//           $('.fadein').each(function (i) {
//             $(this).delay(i * 200).queue(function () {
//               $(this).addClass('active');
//             });
//           });
//         });
//       }
//     });
//   });
// });

// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $('.js-fade').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight) {
        $(this).addClass('scrolled');
      }
    });
  });
});

$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
    // ウィンドウの高さを取得
    const wHeight = $(window).height();
    // スクロールした量を取得
    const wScroll = $(window).scrollTop();
    // それぞれのblockクラスに対して…
    $(".service-fadeIn").each(function () {
      // それぞれのblockクラスのウィンドウからの高さを取得
      const bPosition = $(this).offset().top;
      // スクロールした量が要素の高さを上回ったら
      // その数値にウィンドウの高さを引き、最後に200pxを足す
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("fadeIn-service-active");
      }
    });
  });
});

$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
    // ウィンドウの高さを取得
    const wHeight = $(window).height();
    // スクロールした量を取得
    const wScroll = $(window).scrollTop();
    // それぞれのblockクラスに対して…
    $(".develope-fadeIn").each(function () {
      // それぞれのblockクラスのウィンドウからの高さを取得
      const bPosition = $(this).offset().top;
      // スクロールした量が要素の高さを上回ったら
      // その数値にウィンドウの高さを引き、最後に200pxを足す
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("fadeIn-develope-active");
      }
    });
  });
});

// $('.cover-slick').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   dots: true,
//   arrows: true,
//   centerPadding: '200px',
//   prevArrow: '<img src="assets/image/arrow_left_circle_sp_01.png" class="slide-arrow prev-arrow">',
//   nextArrow: '<img src="assets/image/arrow_right_circle_sp_01.png" class="slide-arrow next-arrow">',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });


