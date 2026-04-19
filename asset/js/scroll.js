// ページロード時にスクロール禁止
function noscroll(e){
    e.preventDefault();
}
document.addEventListener('touchmove', noscroll, {passive: false});
document.addEventListener('wheel', noscroll, {passive: false});

// スクロールシンボルをクリックしたときの処理
const symbol = document.querySelector('.scroll-symbol');
symbol.addEventListener('click', (e) => {
  e.preventDefault();
  // スクロール禁止を解除
  document.removeEventListener('touchmove', noscroll, {passive: false});
  document.removeEventListener('wheel', noscroll, {passive: false});
  
  const scrollamount = window.innerHeight; // 画面の高さ分スクロール
  window.scrollBy({
    top: scrollamount,
    behavior: 'smooth'
  });
});