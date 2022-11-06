function menuOn() {
  const nowTop = $(window).scrollTop();

  const sec2_offset = $('#crisis').offset().top - 52;
  const sec3_offset = $('#action').offset().top - 52;
  const sec4_offset = $('#activity').offset().top - 52;
  const sec5_offset = $('#support').offset().top - 52;
  const sec6_offset = $('#subscription').offset().top - 52;

  $('nav a').removeClass('active');

  if (nowTop >= 0 && nowTop < sec2_offset) {
    $('nav a').eq(0).addClass('active');
  } else if( nowTop >=  sec2_offset && nowTop < sec3_offset ) {
    $('nav a').eq(1).addClass('active');
  } else if( nowTop >=  sec3_offset && nowTop < sec4_offset ) {
    $('nav a').eq(2).addClass('active');
  } else if( nowTop >=  sec4_offset && nowTop < sec5_offset ) {
    $('nav a').eq(3).addClass('active');
  } else if( nowTop >=  sec5_offset && nowTop < sec6_offset ) {
    $('nav a').eq(4).addClass('active');
  } else if( nowTop >=  sec6_offset  ) {
    $('nav a').eq(5).addClass('active');
  }
};

$(window).scroll(function() {
  setTimeout(function() {
    menuOn();
  }, 500);
});