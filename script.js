const termData = {
  1: "【奶昔】這是白雪公主的毒蘋果奶昔：忘記為何討厭自己，也忘記為什麼要變好。",
  4: "【擦掉錯誤】這是選擇性遺忘素製成的夢中清潔劑：你洗不掉痛，只能洗掉反抗痛的記憶。",
  // 👉 將 2～39 的資料照格式補齊 👈
};

const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-close');

document.querySelectorAll('.term').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.id;
    popupContent.innerText = termData[id] || "這道甜點還沒端上桌。";
    popup.classList.remove('hidden');
  });
});

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});
// 詞彙資料
const termData = {

document.querySelectorAll('.term').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.id;
    const popup = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    content.innerText = termData[id] || "這道甜點還沒端上桌。";
    popup.classList.remove('hidden');
  });
});

document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup').classList.add('hidden');
});

// 滑入淡入效果
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));
