// 클릭시 배경음악 재생
const handleBgm = document.querySelector('.bgmBtn');
const audio = new Audio('./bgmusic/HOW ARE YOU.mp3');
let audioOnOff = false;
const playAudio = () => {
  audio.play();
  audio.volume = 0.2
}
const pauseAudio = () => {
  audio.pause();
  audio.currentTime = 0;
}
handleBgm.addEventListener('click', function(){
  if(audioOnOff === true) {
    audioOnOff = false;
    pauseAudio();
    handleBgm.classList.add('off');
    handleBgm.classList.remove('on');
    return;
  }
  if(audioOnOff === false) {
    audioOnOff = true;
    playAudio();
    handleBgm.classList.remove('off');
    handleBgm.classList.add('on');
    return;
  } 
})

// 스크롤 애니메이션
const scrollEffects = document.querySelectorAll('.scroll-effect');
scrollEffects.forEach(function (scrollEffect) {
  new ScrollMagic.Scene({
    triggerElement: scrollEffect,
    triggerHook: 0.8,
    reverse: false,
  })
    .setClassToggle(scrollEffect, "on")
    .addTo(new ScrollMagic.Controller());
});

// Section : Intro. 눈내리기 애니메이션
const randomPosition = () => {
  return Math.floor(Math.random() * window.innerWidth);
}
const createSnow = () => {
  const snows = document.querySelector('.snows');
  const snow = document.createElement('span');
  snow.classList.add('snow');
  snow.style.marginLeft = randomPosition() + 'px';
  snows.appendChild(snow);
}
for(let i=0; i<100; i++) {
  createSnow();
}

// Section : 혼주에게 연락하기
const body = document.body;
const modalBtn = document.querySelector('#click-contact');
const contactModal = document.querySelector('.contact-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const modalBg = document.querySelector('.modal-bg');

// 모달 Open
const onOpenModal = () => {
  contactModal.style.display = 'block';
  body.classList.add('modal-active');
}
// 모달 Close
const onCloseModal = () => {
  contactModal.style.display = 'none';
  body.classList.remove('modal-active');
}
// 모달 함수 실행
modalBtn.addEventListener('click', onOpenModal)
modalCloseBtn.addEventListener('click', onCloseModal)
modalBg.addEventListener('click', onCloseModal)

// Section : Wedding Day. D-day 계산
const dDayIs = document.querySelector('#d-day');
const dDayText = document.querySelector('#d-day-text');
const dDayFunc = () => {
  const weddingDay = new Date('2022-12-03');
  const todayTime = new Date();
  const dDay = weddingDay - todayTime;
  let dDayNumber = Math.floor(dDay / (1000*60*60*24)) + 1;

  if (dDayNumber >= 0) {
    dDayIs.textContent = `${dDayNumber}일`;
    dDayText.textContent = '남았습니다.';
    return;
  }
  if (dDayNumber <= -1) {
    dDayNumber = Math.abs(dDayNumber)
    dDayIs.textContent = `${dDayNumber}일`;
    dDayText.textContent = '지났습니다.';
    return;
  }
}
dDayFunc();

// Section : Galary. 이미지 슬라이드
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Section : Map. 카카오 지도 스크립트
new daum.roughmap.Lander({
  "timestamp" : "1666539144348",
  "key" : "2c62f",
  // "mapWidth" : "640",
  "mapHeight" : "300"
}).render();

// Section : Account Information. 계좌번호 클릭시 슬라이드
const accountBtns = document.querySelectorAll('.account-slide-btn');
accountBtns.forEach((accountBtn) => {
  accountBtn.addEventListener('click', function(e){
    const accountContainer = e.target.parentElement.children[1];
    accountContainer.classList.toggle('on');
    e.target.classList.toggle('on');
  })
})

// Section : Account Information & Footer 버튼 클릭시 복사
const copyButtons = document.querySelectorAll('.btn-copy');
    for (btn of copyButtons) { 
      btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
        const textarea = document.createElement('textarea');
        textarea.textContent = e.currentTarget.value;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();

        // url 복사일 경우 안내창
        if(this.classList[1] == 'link-copy') {
          alert(
            `주소가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`
          );
          return;
        }
        // 계좌번호 복사일 경우 안내창
        alert(
          `계좌번호(${e.target.value})가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`
        )
      })
    }

// Section : Footer. 카카오로 공유하기
Kakao.init('85f8ba08776c0e060f2e1bb0fe7fdb8e');
function sendLinkKakao(){
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '정정우♥한유리 모바일청첩장',
      description: '2022년 12월 03일 오후5시',
      imageUrl: 'https://eeseul05.github.io/test02/images/wedding01.jpg',
      link: {
        mobileWebUrl: 'https://eeseul05.github.io/test02/',
        webUrl: 'https://eeseul05.github.io/test02/'
      }
    },
    buttons: [       
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: 'https://eeseul05.github.io/test02/',
          webUrl: 'https://eeseul05.github.io/test02/'
        }
      }
    ]
  }); 
}