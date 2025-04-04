window.Telegram.WebApp.ready();
Telegram.WebApp.expand();

const cards = document.querySelectorAll('.card');
const resultBox = document.getElementById('result');

// Полная колода Таро
const cardImages = [
  'images/card1.jpg', 'images/card2.jpg', 'images/card3.jpg',
  'images/card4.jpg', 'images/card5.jpg', 'images/card6.jpg',
  'images/card7.jpg', 'images/card8.jpg', 'images/card9.jpg',
  'images/card10.jpg', 'images/card11.jpg', 'images/card12.jpg',
  'images/card13.jpg', 'images/card14.jpg', 'images/card15.jpg',
  'images/card16.jpg', 'images/card17.jpg', 'images/card18.jpg',
  'images/card19.jpg', 'images/card20.jpg', 'images/card21.jpg',
  'images/card22.jpg', 'images/card23.jpg', 'images/card24.jpg',
  'images/card25.jpg', 'images/card26.jpg', 'images/card27.jpg',
  'images/card28.jpg', 'images/card29.jpg', 'images/card30.jpg',
  'images/card31.jpg', 'images/card32.jpg', 'images/card33.jpg',
  'images/card34.jpg', 'images/card35.jpg', 'images/card36.jpg',
  'images/card37.jpg', 'images/card38.jpg', 'images/card39.jpg',
  'images/card40.jpg', 'images/card41.jpg', 'images/card42.jpg',
  'images/card43.jpg', 'images/card44.jpg', 'images/card45.jpg',
  'images/card46.jpg', 'images/card47.jpg', 'images/card48.jpg',
  'images/card49.jpg', 'images/card50.jpg', 'images/card51.jpg',
  'images/card52.jpg', 'images/card53.jpg', 'images/card54.jpg',
  'images/card55.jpg', 'images/card56.jpg', 'images/card57.jpg',
  'images/card58.jpg', 'images/card59.jpg', 'images/card60.jpg',
  'images/card61.jpg', 'images/card62.jpg', 'images/card63.jpg',
  'images/card64.jpg', 'images/card65.jpg', 'images/card66.jpg',
  'images/card67.jpg', 'images/card68.jpg', 'images/card69.jpg',
  'images/card70.jpg', 'images/card71.jpg', 'images/card72.jpg',
  'images/card73.jpg', 'images/card74.jpg', 'images/card75.jpg',
  'images/card76.jpg', 'images/card77.jpg', 'images/card78.jpg'
];

// Толкования для каждой карты
const meanings = {
  'images/card1.jpg': 'Шут',
  'images/card2.jpg': 'Маг',
  'images/card3.jpg': 'Жрица',
  'images/card4.jpg': 'Императрица',
  'images/card5.jpg': 'Император',
  'images/card6.jpg': 'Иерофант',
  'images/card7.jpg': 'Влюбленные',
  'images/card8.jpg': 'Колесница',
  'images/card9.jpg': 'Сила',
  'images/card10.jpg': 'Отшельник',
  'images/card11.jpg': 'Колесо-Фортуны',
  'images/card12.jpg': 'Справедливость',
  'images/card13.jpg': 'Повешенный',
  'images/card14.jpg': 'Смерть',
  'images/card15.jpg': 'Умеренность',
  'images/card16.jpg': 'Дьявол',
  'images/card17.jpg': 'Башня-',
  'images/card18.jpg': 'Звезда',
  'images/card19.jpg': 'Луна',
  'images/card20.jpg': 'Солнце',
  'images/card21.jpg': 'Суд',
  'images/card22.jpg': 'Мир',
  'images/card23.jpg': 'Туз-Мечей',
  'images/card24.jpg': 'Двойка-Мечей',
  'images/card25.jpg': 'Тройка-Мечей',
  'images/card26.jpg': 'Четверка-Мечей',
  'images/card27.jpg': 'Пятерка-Мечей',
  'images/card28.jpg': 'Шестерка-Мечей',
  'images/card29.jpg': 'Семерка-Мечей',
  'images/card30.jpg': 'Восьмерка-Мечей',
  'images/card31.jpg': 'Девятка-Мечей',
  'images/card32.jpg': 'Десятка-Мечей-',
  'images/card33.jpg': 'Паж-Мечей',
  'images/card34.jpg': 'Рыцарь-Мечей',
  'images/card35.jpg': 'Королева-Мечей',
  'images/card36.jpg': 'Король-Мечей',
  'images/card37.jpg': 'Туз-Жезлов-Универсальное',
  'images/card38.jpg': 'Двойка-Жезлов-Универсальное',
  'images/card39.jpg': 'Тройка-Жезлов-Универсальное',
  'images/card40.jpg': 'Четверка-Жезлов-Универсальное',
  'images/card41.jpg': 'Пятерка-Жезлов-Универсальное',
  'images/card42.jpg': 'Шестерка-Жезлов-Универсальное',
  'images/card43.jpg': 'Семерка-Жезлов-Универсальное',
  'images/card44.jpg': 'Восьмерка-Жезлов-Универсальное',
  'images/card45.jpg': 'Девятка-Жезлов-Универсальное',
  'images/card46.jpg': 'Десятка-Жезлов-Универсальное',
  'images/card47.jpg': 'Паж-Жезлов-Универсальное',
  'images/card48.jpg': 'Рыцарь-Жезлов-Универсальное',
  'images/card49.jpg': 'Королева-Дама-Жезлов-Универсальное',
  'images/card50.jpg': 'Король-Жезлов-Универсальное',
  'images/card51.jpg': 'Туз-Пентаклей-Универсальное',
  'images/card52.jpg': 'Двойка-Пентаклей-Денариев-Универсальное',
  'images/card53.jpg': 'Тройка-Пентаклей-Денариев-Универсальное',
  'images/card54.jpg': 'Четверка-Пентаклей-Денариев-Универсальное',
  'images/card55.jpg': 'Пятерка-Пентаклей-Денариев-Универсальное',
  'images/card56.jpg': 'Шестерка-Пентаклей-Денариев-Универсальное',
  'images/card57.jpg': 'Семерка-Пентаклей-Денариев-Универсальное',
  'images/card58.jpg': 'Восьмерка-Пентаклей-Денариев-Универсальное',
  'images/card59.jpg': 'Девятка-Пентаклей-Денариев-Универсальное-',
  'images/card60.jpg': 'Десятка-Пентаклей-Денариев-Универсальное',
  'images/card61.jpg': 'Паж-Валет-Пентаклей-Денариев-Универсальное',
  'images/card62.jpg': 'Рыцарь-Пентаклей-Денариев-Универсальное',
  'images/card63.jpg': 'Королева-Дама-Пентаклей-Денариев-Универсальное',
  'images/card64.jpg': 'Король-Пентаклей-Денариев-Универсальное',
  'images/card65.jpg': 'Туз-Кубков-Универсальное',
  'images/card66.jpg': 'Двойка-Кубков-Универсальное',
  'images/card67.jpg': 'Тройка-Кубков-Универсальное',
  'images/card68.jpg': 'Четверка-Кубков-Универсальное',
  'images/card69.jpg': 'Пятерка-Кубков-Универсальное',
  'images/card70.jpg': 'Шестерка-Кубков-Универсальное',
  'images/card71.jpg': 'Семерка-Кубков-Универсальное',
  'images/card72.jpg': 'Восьмерка-Кубков-Универсальное',
  'images/card73.jpg': 'Девятка-Кубков-Универсальное',
  'images/card74.jpg': 'Десятка-Кубков-Универсальное',
  'images/card75.jpg': 'Паж-Валет-Кубков-Универсальное',
  'images/card76.jpg': 'Рыцарь-Кубков-Универсальное',
  'images/card77.jpg': 'Королева-Дама-Кубков-Универсальное',
  'images/card78.jpg': 'Король-Кубков-Универсальное'
};

// Выбираем случайные 5 уникальных карт
const shuffledDeck = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 5);

let selected = [];

cards.forEach((card, i) => {
  card.addEventListener('click', () => {
    const index = card.dataset.index;

    if (selected.find(sel => sel.index === index) || selected.length >= 3) return;

    const randomCard = shuffledDeck[i];
    const front = card.querySelector('.front');
    front.style.backgroundImage = `url('${randomCard}')`;

    selected.push({ index, image: randomCard });
    card.classList.add('flipped');

    if (selected.length === 3) {
      setTimeout(sendResults, 1200);
    }
  });
});

function sendResults() {
  const messages = selected.map(sel => meanings[sel.image] || 'Неизвестная карта');
  resultBox.innerHTML = `
    <strong>Ваши карты:</strong><br>
    ${messages.map((msg, i) => `<p>Карта ${i + 1}: ${msg}</p>`).join('')}
  `;

  const payload = {
    cards: selected.map(s => s.image),
    meanings: messages
  };

  Telegram.WebApp.sendData(JSON.stringify(payload));
  Telegram.WebApp.close(); // Закрыть мини-приложение
}
