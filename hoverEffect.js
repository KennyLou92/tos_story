document.addEventListener("DOMContentLoaded", function () {
    let currentHour = new Date().getHours(); // 取得當前小時（24 小時制）

    document.querySelectorAll(".button-container a img[data-hover]").forEach(img => {
        let originalSrc = img.src; // 原始圖片
        let hoverImages = img.getAttribute("data-hover").split(","); // 取得 hover 時的所有圖片（用逗號分隔）
        let currentIndex = 0;
        let intervalId = null;

        // 🔹 只對 alt="艾斯卡諾" 的圖片生效，且時間必須在 07:00~17:59
        if (img.alt === "艾斯卡諾" && currentHour >= 7 && currentHour < 18) {
            img.addEventListener("mouseover", function () {
                intervalId = setInterval(() => {
                    currentIndex = (currentIndex + 1) % hoverImages.length;
                    img.src = hoverImages[currentIndex];
                }, 500); // 每 500 毫秒換一張
            });

            img.addEventListener("mouseout", function () {
                clearInterval(intervalId); // 停止輪播
                img.src = originalSrc; // 恢復原圖
            });
        }
    });
});
