// 추천 스터디 슬라이드
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider ul");
let pressed = false;
let startx;
let x;

// 웹 (마우스 드래그)
slider.addEventListener("mousedown", e => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing"
})

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
})

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
})

window.addEventListener("mouseup", () => {
  pressed = false;
})

slider.addEventListener("mousemove", e => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`;
  checkboundary();
})

// 모바일 (터치)
slider.addEventListener("touchstart", e => {
  pressed = true;
  e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
  startx = e.offsetX - innerSlider.offsetLeft;
})

window.addEventListener("touchend", () => {
  pressed = false;
})

slider.addEventListener("touchmove", e => {
  if (!pressed) return;
  e.preventDefault();
  e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft; 
  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;
  checkboundary();
})

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width + 20}px`;
  }
}

// 좋아요 버튼 클릭시 동작
const likeButtons = document.querySelectorAll('.study-like');
for (const button of likeButtons) {
    button.addEventListener('click', function(e){
    e.target.classList.toggle('active');
  })
}