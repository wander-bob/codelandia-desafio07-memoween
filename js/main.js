let cardNumber;
let cardsList = [];
const cards_container = document.querySelector('.cards-container');

while (cardsList.length <= 17) {
   cardNumber = Number(Math.random() * (9 - 1) + 1).toFixed();
   const isCardInList =
      cardsList.filter((card) => card === cardNumber).length < 2;
   if (isCardInList) {
      console.log(cardsList.filter((card) => card === cardNumber).length);
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

function cardHandler(card) {
   const cardTitle = card.querySelector('h2');
   const cardImg = card.querySelector('img');

   card.classList.toggle('turned');
   cardTitle.classList.toggle('hidden');
   cardImg.classList.toggle('hidden');
}

cards.forEach((cardItem) => {
   cardItem.addEventListener('click', () => cardHandler(cardItem));
});
