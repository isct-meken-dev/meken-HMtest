import { Splide } from "https://esm.sh/@splidejs/splide";
import { AutoScroll } from "https://esm.sh/@splidejs/splide-extension-auto-scroll";

const splideTarget = document.querySelector('.splide');
const splideOptions = {
  type: 'loop',
  autoWidth: true,
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 1,
    pauseOnHover: true, // スライダーの上にマウスカーソルが乗ったとき、スクロールを停止するかどうか
    pauseOnFocus: true, // スライダー内にフォーカスされた要素がある場合、スクロールを停止するかどうか
  },
};

if (splideTarget) {
  const splide = new Splide(splideTarget, splideOptions);
  splide.mount({ AutoScroll });
}
