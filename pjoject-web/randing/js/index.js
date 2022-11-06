// section3 slide
const slideWrapper = document.querySelector('.slide-wrapper');
const items = document.querySelectorAll('.item');
const slideLeft = document.querySelector('.slide-left')
const slideRight = document.querySelector('.slide-right')
const slidebar = document.querySelector('.slidebar span')
let slideX = 0;
let slideItemNumber = 1;
let slidePercent = 0;

// 버튼 클릭 공통함수
const onClickButton = () => {
  for (const item of items) {
    item.style.transform = `translateX(${slideX}px)`;
    slidebar.style.left = `${slidePercent}%`;
  }
}

const mediaOver600 = window.matchMedia(`(min-width: 600px)`);
const mediaOver1200 = window.matchMedia(`(min-width: 1200px)`);

// 버튼 클릭시 이벤트
slideLeft.addEventListener('click', function(){
  if (slideItemNumber == 1) return;
  if (mediaOver1200.matches === true) {
    slideX += 268;
    slidePercent -= 33.3;
  } else if (mediaOver600.matches === true) {
    slideX += 272;
    slidePercent -= 20;
  } else {
    slideX += 272;
    slidePercent -= 16.6;
  }

  slideItemNumber -= 1;
  onClickButton();
})
slideRight.addEventListener('click', function(){
  
  if (mediaOver1200.matches === true) {
    if (slideItemNumber === 3) return;
    slideX -= 268;
    slidePercent += 33.3;
  } else if (mediaOver600.matches === true) {
    if (slideItemNumber === 5) return;
    slideX -= 272;
    slidePercent += 20;
  } else {
    if (slideItemNumber === 6) return;
    slideX -= 272;
    slidePercent += 16.6;
  }
  
  slideItemNumber += 1;  
  onClickButton();
})


// 페이지 로드시 비주얼섹션 이미지 효과
const visualImgFirst = document.querySelector('.visual-imgbox img:first-child');
const visualImgSecond = document.querySelector('.visual-imgbox img:last-child');

setTimeout(() => {
  visualImgFirst.style.top = '0px';
}, 0)
setTimeout(() => {
  visualImgSecond.style.bottom = '0px';
}, 200)