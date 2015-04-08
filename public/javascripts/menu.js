;(function($){
  $(function(){
    var $wn = $(window);
    var $menu = $('.menu');
    var menuOffsetTop = $menu.offset().top;
    $menu.on('click','.menu-item',function(){
      var translate = $(this).offset().top-$('.menu').offset().top;
      $wn.animate({
        scrollTop:0
      },100);
      $('.slide-bar').css('transform','translateY('+translate+'px)');

      var type = $(this).children('a').html();
      $('.list-title').html(type);
    })
    $wn.on('scroll',function(){
      if ($wn.scrollTop() > menuOffsetTop) {
        $menu.addClass('fix');
      }else{
        $menu.removeClass('fix');
      }
    });
  })
})(Zepto)