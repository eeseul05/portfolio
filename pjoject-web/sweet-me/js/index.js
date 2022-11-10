// 좋아요 버튼 클릭시 동작
const likeButtons = document.querySelectorAll('.study-like');
for (const button of likeButtons) {
  button.addEventListener('click', function(e){
    e.target.classList.toggle('active');
  })
}


// 슬라이더
let slider = document.querySelector(".slider")
let innerSlider = document.querySelector(".slider ul")
let pressed = false
let startx
let x

// 웹 (마우스 드래그)
slider.addEventListener("mousedown", e => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
})

window.addEventListener("mouseup", () => {
  pressed = false;
})

slider.addEventListener("mousemove", e => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`
  checkboundary()
})

// 모바일 (터치)
slider.addEventListener("touchstart", e => {
  pressed = true
  startx = e.offsetX - innerSlider.offsetLeft
})

window.addEventListener("touchend", () => {
  pressed = false
})

slider.addEventListener("touchmove", e => {
  if (!pressed) return
  e.preventDefault()
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`
  checkboundary()
})

function checkboundary() {
  let outer = slider.getBoundingClientRect()
  let inner = innerSlider.getBoundingClientRect()

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px"
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`
  }
}