/*
window.addEventListener('scroll', function() {
  // スクロール量を取得
  let scrollValue = window.scrollY;
  
  // ぼかし具合を計算（例：100pxスクロールするごとに1pxぼかす）
  let blurAmount = scrollValue / 10;
  
  // 最大値を制限（ぼかしすぎ防止。ここでは最大10px）
  if (blurAmount > 10) blurAmount = 10;
  
  // CSSを書き換える
  document.querySelector('.hero-video').style.filter = `blur(${blurAmount}px)`;
});
*/
const heroVideo = document.querySelector('.hero-video');
const vh = window.innerHeight; // 画面の高さを取得

window.addEventListener('scroll', () => {
  if (!heroVideo) return;

  if (window.scrollY > vh * 0.8) {
    heroVideo.classList.add('is-blurred');
  } else {
    heroVideo.classList.remove('is-blurred');
  }
});