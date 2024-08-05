let cardNumber = 0;
let cardsList = [];
let turnedCards = [];
let successCount = 0;

const cards_container = document.querySelector('.cards-container');

while (cardsList.length <= 17) {
  cardNumber = Number(Math.random() * (9 - 1) + 1).toFixed();
  const isCardInList =
    cardsList.filter((card) => card === cardNumber).length < 2;
  if (isCardInList) {
    cardsList.push(cardNumber);
  }
}

for (let i = 0; i < cardsList.length; i++) {
  let card = `
   <div class="card">
      <h2>Buuh!</h2>
      <img class="hidden" src="./assets/card0${cardsList[i]}.svg"/>
   </div>`;
  cards_container.innerHTML += card;
}

const cards = document.querySelectorAll('.card');

function cardTurnHandler(card) {
  const cardTitle = card.querySelector('h2');
  const cardImg = card.querySelector('img');

  card.classList.toggle('turned');
  cardTitle.classList.toggle('hidden');
  cardImg.classList.toggle('hidden');
  turnedCards.push(card);
}

function handleInteractionCount() {
  if (turnedCards.length === 2) {
    const [card1, card2] = turnedCards;
    if (card1.querySelector('img').src === card2.querySelector('img').src) {
      console.log('done!');
      successCount++;
      turnedCards = [];
      return;
    }
    setTimeout(() => {
      console.log('wrong');
      turnedCards.forEach((card) => {
        cardTurnHandler(card);
      });
      turnedCards = [];
      return;
    }, 500);
  }
  if (successCount === 9) {
    console.log('You win!!!');
  }
}

cards.forEach((cardItem) => {
  cardItem.addEventListener('click', () => {
    cardTurnHandler(cardItem);
    handleInteractionCount();
  });
});
