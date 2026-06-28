const detailText = {
  A: "AI Aはデアヴェローチェとフリッカージャブの能力を素直に評価します。ただし前回の反省から、低オッズなら買い候補としては期待値を下げます。",
  B: "AI Bはサウンドモリアーナ、ランフォーヴァウ、アブキールベイのような二桁オッズ候補を上位へ再昇格します。前回拾えた穴を買い候補にできなかった反省を反映します。"
};

function updateCountdown() {
  const target = new Date("2026-07-05T15:45:00+09:00").getTime();
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
