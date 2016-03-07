// SMOOTH SCROLL

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#play-video__content], a[href^=#tournament-table__content]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 82;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

// // FIXED NAV

// $(function() {
//    var nav = $('.scrollNav');
//    var header = $('.mod-header');
//    //表示位置
//    var navTop = nav.offset().top-62;
//    var navHeight = nav.height();
//    var showFlag = false;
//    nav.css('top', -navHeight+'px');
//    //ナビゲーションの位置まできたら表示
//    $(window).scroll(function () {
//        var winTop = $(this).scrollTop();
//        if (winTop >= navTop) {
//            if (showFlag == false) {
//                showFlag = true;
//                header
//                   .addClass('mod-header--fixed');
//                nav
//                   .addClass('scrollNav--fixed')
//                   .stop().animate({'top' : '40px'}, 200);
//            }
//        } else if (winTop <= navTop) {
//            if (showFlag) {
//                showFlag = false;
//                header
//                   .removeClass('mod-header--fixed');
//                nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
//                    nav.removeClass('scrollNav--fixed');
//                });
//            }
//        }
//    });
// });

// TOGGLE

$(function(){
    $(".tournament-table__button__content").click(function(){
        $(".tournament-tableContent").toggle();
    });
});


// RESIZE

var wH = $(window).height();
$(function(){
  $('.resize-height').css('height',wH+'px');
});
