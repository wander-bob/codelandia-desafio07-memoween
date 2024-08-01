let cardNumber = 1;
const card = `
<div class="card">
   <h2>Buuh!</h2>
</div>`;
const cardTurned = `<div class="card turned">
   <img src="./assets/card0${cardNumber}.svg"/>
</div>`;

const cards = document.querySelector('.cards-container');

for (let i = 0; i < 18; i++) {
   cardNumber = i;
   cards.innerHTML += card;
}
