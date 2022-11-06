const scrollUps = document.querySelectorAll('.scroll-up');
scrollUps.forEach(function (scrollUp) {
  new ScrollMagic.Scene({
    triggerElement: scrollUp,
    triggerHook: 0.8,
  })
    .setClassToggle(scrollUp, "on")
    .addTo(new ScrollMagic.Controller());
});