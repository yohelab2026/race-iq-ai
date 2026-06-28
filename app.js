const detailText = {
  A: "AI Aは条件一致の人気寄りを上げすぎました。⑤イガッチ6着、⑭フィーリウス13着で、条件適合だけでは期待値にならないと記録します。",
  B: "AI Bは②ファウストラーゼンと⑧ディールメーカーを△では拾えていました。次回は二桁オッズの△を買い候補上位へ再昇格するルールを試します。"
};

function updateCountdown() {
  const target = new Date("2026-06-28T15:20:00+09:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const label = days > 0
    ? `${days}日 ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const countdown = document.querySelector("#countdown");
  if (countdown) countdown.textContent = label;
}

document.querySelectorAll("[data-detail]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector("#ai-detail");
    const key = button.dataset.detail;
    if (!target || !detailText[key]) return;
    target.textContent = detailText[key];
  });
});

updateCountdown();
setInterval(updateCountdown, 1000);

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
