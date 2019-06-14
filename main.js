const suits = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function() {
  textArea.innerText = 'Started...';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

function createDeck() {
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = {
        suit: suits[i],
        value: values[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function getNextCards() {
  return deck.shift();
}

const deck = createDeck();

for (let k = 0; k < deck.length; k++) {
  console.log(deck[k]);
}

const playerCards = [getNextCards(), getNextCards()];

console.log(getCardString(playerCards[0]));
console.log(getCardString(playerCards[1]));
