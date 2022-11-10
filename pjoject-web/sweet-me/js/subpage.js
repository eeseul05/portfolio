console.log('0');

let scrollNow;

document.addEventListener('scroll', function(){
  scrollNow = document.documentElement.scrollTop;

  console.log(scrollNow)
  if(scrollNow > 50) {
    this.documentElement.querySelector('.detail-top-wt').style.opacity = '0';
    this.documentElement.querySelector('.detail-top-bk').style.opacity = '1';
    document.querySelector('.detail-imgbox div').style.background = 'rgba(0, 0, 0, 0)'
  } else {
    this.documentElement.querySelector('.detail-top-wt').style.opacity = '1';
    this.documentElement.querySelector('.detail-top-bk').style.opacity = '0';
    document.querySelector('.detail-imgbox div').style.background = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))'
  }
})