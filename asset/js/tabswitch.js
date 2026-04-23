let tavsV = document.getElementById('tab-v').getElementsByClassName('tab-elem');
let pagesV = document.getElementById('tabbody-v').getElementsByClassName('tabbody-elem');

// タブを表示する共通関数
function displayTabV(targetIdV) {
    // クリックされたタブページを表示
    for (let i = 0; i < pagesV.length; i++) {
        if (pagesV[i].id != targetIdV) {
            pagesV[i].style.display = "none";
        } else {
            pagesV[i].style.display = "flex";
        }
    }

    // クリックされたタブを前面に表示する
    for (let i = 0; i < tavsV.length; i++) {
        tavsV[i].classList.remove('active');
        if (tavsV[i].dataset.tabid === targetIdV) {
            tavsV[i].classList.add('active');
        }
    }
}

// タブクリック時にURLハッシュを更新
function changeTabV() {
    let targetIdV = this.dataset.tabid;
    window.location.hash = targetIdV;
}

for (let i = 0; i < tavsV.length; i++) {
    tavsV[i].onclick = changeTabV;
}

// ハッシュ変更時にタブを切り替え
window.addEventListener('hashchange', () => {
    let hash = window.location.hash.slice(1); // #を削除
    if (hash) {
        displayTabV(hash);
    }
});

// ページロード時にハッシュから初期タブを決定
window.addEventListener('load', () => {
    let hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
        displayTabV(hash);
    } else {
        // ハッシュがなければ先頭のタブを表示
        displayTabV(tavsV[0].dataset.tabid);
    }
});