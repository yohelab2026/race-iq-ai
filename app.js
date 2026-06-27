const detailText = {
  A: "AI Aは堅実データ型。函館記念の⑤イガッチ、ラジオNIKKEI賞の⑤リッツパーティーのように、条件に合う軸候補を拾えるかを観察します。",
  B: "AI Bは妙味・穴拾い型。①ルージュボヤージュ、②クカイリモク、①バルナバのように、オッズ込みで買う意味がある候補を拾えるかを検証します。"
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
