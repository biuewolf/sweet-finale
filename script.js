document.addEventListener('DOMContentLoaded', () => {
  const terms = document.querySelectorAll('.special-term');
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');

  const termData = {
    '海龜湯題目1': '這是一個海龜湯題目的詳細內容。',
    // 添加更多詞彙和對應的內容
  };

  terms.forEach(term => {
    term.addEventListener('click', () => {
      const termKey = term.getAttribute('data-term');
      popupContent.textContent = termData[termKey] || '未找到相關內容。';
      popup.classList.remove('hidden');
    });
  });

  popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
});
