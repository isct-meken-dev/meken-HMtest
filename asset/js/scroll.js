// スクロールシンボルをクリックしたときの処理
const symbol = document.querySelector('.scroll-symbol');

if (symbol) {
  symbol.addEventListener('click', (e) => {
    e.preventDefault();
    const curY_bottom = window.scrollY + window.innerHeight; // 現在のスクロール位置の下端
    const scrollamount = 2 * window.innerHeight - curY_bottom; // 画面下端が2*window.innerHeightになるように
    window.scrollBy({
      top: scrollamount,
      behavior: 'smooth'
    });
  });
}


// スクロール時に一度だけ条件を満たしたら自動スクロール
(function firstscroll() {
  let alreadyScrolled = false;
  window.addEventListener('scroll', () => {
    if (alreadyScrolled) return;
    const curY_bottom = window.scrollY + window.innerHeight;
    if (curY_bottom >= window.innerHeight && curY_bottom < 2 * window.innerHeight) {
      // 画面下端が2*window.innerHeightになるように絶対位置でスクロール
      window.scrollTo({
        top: 2 * window.innerHeight - window.innerHeight,
        behavior: 'smooth'
      });
      alreadyScrolled = true;
    }
  });
})();
