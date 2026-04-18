// 要リファクタリング
const leftin = document.querySelectorAll('.slidein-left');
const rightin = document.querySelectorAll('.slidein-right');
const bottomin = document.querySelectorAll('.slidein-bottom');
const topin = document.querySelectorAll('.slidein-top');

const handleSlideIn = () => {
    leftin.forEach(el => {
        // 発火条件
        const slideInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 2;
        const elBottom = el.offsetTop + el.offsetHeight;
        const isHalfShown = slideInAt > el.offsetTop;
        const isNotScrolledPast = window.scrollY < elBottom;
        
        // 付与
        if (isHalfShown && isNotScrolledPast) {
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
        }
    });
    rightin.forEach(el => {
        const slideInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 2;
        const elBottom = el.offsetTop + el.offsetHeight;
        const isHalfShown = slideInAt > el.offsetTop;
        const isNotScrolledPast = window.scrollY < elBottom;

        if (isHalfShown && isNotScrolledPast) {
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
        }
    }); 
    bottomin.forEach(el => {
        const slideInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 2;
        const elBottom = el.offsetTop + el.offsetHeight;
        const isHalfShown = slideInAt > el.offsetTop;
        const isNotScrolledPast = window.scrollY < elBottom;

        if (isHalfShown && isNotScrolledPast) {
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
        }
    });
    topin.forEach(el => {
        const slideInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 2;
        const elBottom = el.offsetTop + el.offsetHeight;
        const isHalfShown = slideInAt > el.offsetTop;
        const isNotScrolledPast = window.scrollY < elBottom;

        if (isHalfShown && isNotScrolledPast) {
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
        }
    });
};

window.addEventListener('scroll', handleSlideIn);
window.addEventListener('load', handleSlideIn);
