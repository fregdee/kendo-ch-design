// // SMOOTH SCROLL

// $(function(){
//    // #で始まるアンカーをクリックした場合に処理
//    $('a[href^=#play-video__content], a[href^=#tournament-table__content]').click(function() {
//       // スクロールの速度
//       var speed = 400; // ミリ秒
//       // アンカーの値取得
//       var href= $(this).attr("href");
//       // 移動先を取得
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       // 移動先を数値で取得
//       var position = target.offset().top - 82;
//       // スムーススクロール
//       $('body,html').animate({scrollTop:position}, speed, 'swing');
//       return false;
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

var wH = $(window).height();
$(function(){
    $('.top-keyvisual, .mod-main__content, .mod-main__info, .about-channel, .about-project').css('height',wH-130+'px');
});
