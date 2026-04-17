window.addEventListener('scroll', function() {
  // スクロール量を取得
  let scrollValue = window.scrollY;
  
  // ぼかし具合を計算（例：100pxスクロールするごとに1pxぼかす）
  let blurAmount = scrollValue / 100;
  
  // 最大値を制限（ぼかしすぎ防止。ここでは最大10px）
  if (blurAmount > 10) blurAmount = 10;
  
  // CSSを書き換える
  document.querySelector('.blur-overlay').style.backdropFilter = `blur(${blurAmount}px)`;
});