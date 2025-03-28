document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".button-container a img[data-hover]").forEach(img => {
        let originalSrc = img.src; // 取得原始圖片
        let hoverSrc = img.getAttribute("data-hover"); // 取得 hover 時要顯示的圖片

        img.addEventListener("mouseover", function () {
            img.src = hoverSrc;
        });

        img.addEventListener("mouseout", function () {
            img.src = originalSrc;
        });
    });
});
