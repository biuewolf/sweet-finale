// 🐢 黑童話海龜湯副線資料
const dreamData = {
  1: {
    title: "白雪公主的毒蘋果奶昔",
    content: "這不是療癒，是內心審判的冷凍處理。你會忘記為什麼討厭自己，也會忘記為什麼要變好。"
  },
  4: {
    title: "長髮公主的蜂蜜茶",
    content: "情感中毒引爆劑。喝了你會失去主動離開關係的能力，以為被囚禁就是被愛。"
  },
  6: {
    title: "灰姑娘的水晶糖鞋",
    content: "社交變身劑。你會變得優雅，但空洞。你不再知道沒穿水晶鞋的你是誰。"
  },
  20: {
    title: "睡前故事慕斯塔",
    content: "這不是入夢甜點，是人格篡改用的蛋糕武器。每吃一口，你就少記得現實一點。"
  },
  // ⚠️ 可繼續新增至 39 題
};

// 開啟夢境卡片
function openCard(id) {
  const data = dreamData[id];
  if (!data) return;

  const overlay = document.getElementById("overlay");
  const dreamContent = document.getElementById("dream-content");
  dreamContent.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.content}</p>
  `;
  overlay.classList.remove("hidden");
}

// 關閉夢境卡片
document.getElementById("close-card").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("hidden");
});

// 監聽 trigger word 點擊
document.querySelectorAll(".trigger-word").forEach(el => {
  el.addEventListener("click", () => {
    const id = el.dataset.id;
    openCard(id);
  });
});

// 自動產生副線圖鑑卡片
const dreamList = document.getElementById("dream-list");
Object.entries(dreamData).forEach(([id, { title, content }]) => {
  const card = document.createElement("div");
  card.className = "dream-card";
  card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  dreamList.appendChild(card);
});
