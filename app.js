const detailText = {
  A: "AI Aは単勝1頭の最高確率をフリッカージャブ27%と見ます。市場評価と前走1200m勝ちを重視しますが、1頭で60%や80%は出せません。",
  B: "AI Bは勝ち馬を拾う候補群で確率を上げます。フリッカージャブ、デアヴェローチェ、アンクルクロス、サウンドモリアーナ、ヤマニンアルリフラの5頭で81%を目標にします。"
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
