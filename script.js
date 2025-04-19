// 詞彙資料
const termData = {
  4: "【毒蘋果奶昔】忘記為何討厭自己，也忘記為什麼要變好。",
  // ...請把 1~39 全部加進來...
};

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
