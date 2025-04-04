window.Telegram.WebApp.ready();
Telegram.WebApp.expand();

const cards = document.querySelectorAll('.card');
const resultBox = document.getElementById('result');
const cardImages = [
  'images/card1.jpg', 'images/card2.jpg', 'images/card3.jpg',
  'images/card4.jpg', 'images/card5.jpg', 'images/card6.jpg'
];
const meanings = {
  'images/card1.jpg': 'Толкование карты 1',
  'images/card2.jpg': 'Толкование карты 2',
  'images/card3.jpg': 'Толкование карты 3',
  'images/card4.jpg': 'Толкование карты 4',
  'images/card5.jpg': 'Толкование карты 5',
  'images/card6.jpg': 'Толкование карты 6',
};

let selected = [];

cards.forEach(card => {
  card.addEventListener('click', () => {
    const index = card.dataset.index;

    if (selected.find(sel => sel.index === index) || selected.length >= 3) return;

    const randomImage = cardImages[Math.floor(Math.random() * cardImages.length)];
    const front = card.querySelector('.front');
    front.style.backgroundImage = `url('${randomImage}')`;

    selected.push({ index, image: randomImage });
    card.classList.add('flipped');

    if (selected.length === 3) {
      setTimeout(sendResults, 1200);
    }
  });
});

function sendResults() {
  const messages = selected.map(sel => meanings[sel.image]);
  resultBox.innerHTML = `
    <strong>Ваши карты:</strong><br>
    ${messages.map((msg, i) => `<p>Карта ${i + 1}: ${msg}</p>`).join('')}
  `;

  const payload = {
    cards: selected.map(s => s.image),
    meanings: messages
  };

  Telegram.WebApp.sendData(JSON.stringify(payload));
  Telegram.WebApp.close(); // Закрываем Mini App
}
