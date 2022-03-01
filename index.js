$(function() {

  $('.contactMenu').on('click', function(event) {
      $('#menu-btn-check').prop('checked', false);
  });
  
});

$(function(){
  $('a[href^="#contact"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    console.log(123)
    //リンク元を取得
    var href= $(this).attr("href");
    console.log(4,href)
    //リンク先を取得
    var target = $(href);
    console.log(5)
    //リンク先までの距離を取得
    var position = target.offset().top;
    console.log(6)
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    console.log(7)
    return false;
    console.log(8)
  });
});