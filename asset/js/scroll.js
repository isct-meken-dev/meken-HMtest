// ページロード時かつトップにいる間だけスクロールを禁止する
function noscroll(e) {
  if (window.scrollY === 0) {
    e.preventDefault();
  }
}

document.addEventListener('touchmove', noscroll, { passive: false });
document.addEventListener('wheel', noscroll, { passive: false });

// スクロールシンボルをクリックしたときの処理
const symbol = document.querySelector('.scroll-symbol');
if (symbol) {
  symbol.addEventListener('click', (e) => {
    e.preventDefault();
    const scrollamount = window.innerHeight; // 画面の高さ分スクロール
    window.scrollBy({
      top: scrollamount,
      behavior: 'smooth'
    });
  });
}