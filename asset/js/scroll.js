const symbol = document.querySelector('.scroll-symbol');

symbol.addEventListener('click', (e) => {
  e.preventDefault();
  const scrollamount = window.innerHeight; // 画面の高さ分スクロール
  window.scrollBy({
    top: scrollamount,
    behavior: 'smooth'
  });
});