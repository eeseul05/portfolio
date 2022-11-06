// 스크롤 이벤트 발생
$(window).scroll(function() {
  if ($(this).scrollTop() >= 600) {
    $('header').fadeOut();
    $('.intro-content').fadeOut();
  } else {
    $('header').fadeIn();
    $('.intro-content').fadeIn();
  }
});

// 메뉴 On, Off
$('.menu-open').click(function() {
  $('.menu-open').css('display', 'none');
  $('.menu-close').css('display', 'block');
  $('.menu-section').fadeIn();
  $('body').addClass('on');
});
$('.menu-close').click(closeMenu);
$('.menu-section a').click(closeMenu);
function closeMenu() {
  $('.menu-open').css('display', 'block');
  $('.menu-close').css('display', 'none');
  $('.menu-section').fadeOut();
  $('body').removeClass('on');
}