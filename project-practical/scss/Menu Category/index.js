$(document).ready(function () {
  $('.menu-category li').click(function(){
    $(this).children('.sub-menu').slideToggle();
    $(this).children('p').children('i').toggleClass('rotate');

    // 형제요소들
    $(this).siblings().children('.sub-menu').slideUp();
    $(this).siblings().children('p').children('i').removeClass('rotate');
  });
});