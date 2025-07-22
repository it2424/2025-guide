// メニュー開閉
document.addEventListener('DOMContentLoaded', function() {
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const overlayMenu = document.getElementById('overlayMenu');

    if (menuOpenBtn && menuCloseBtn && overlayMenu) {
        menuOpenBtn.addEventListener('click', function(e) {
            e.preventDefault();
            overlayMenu.classList.add('open');
        });
        menuCloseBtn.addEventListener('click', function() {
            overlayMenu.classList.remove('open');
        });
        // 背景クリックで閉じる
        overlayMenu.addEventListener('click', function(e) {
            if (e.target === overlayMenu) {
                overlayMenu.classList.remove('open');
            }
        });
    }
});
