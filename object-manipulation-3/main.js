console.log('Lodash is loaded:', typeof _ !== 'undefined');

const cardDeck = {
  deck: [],
  drawnCards: [],
  suits: ['clubs', 'diamonds', 'hearts', 'spades'],
  ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  initializeDeck() {
    const { suits, ranks, deck } = this;
    for (const rank of ranks) {
      for (const suit of suits) {
        deck.push({ rank, suit });
      }
    }
  },
  drawSingleCard() {
    const card = this.deck.pop(); // deck is also updated
    this.drawnCards.push(card); // drawnCard is also updated
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawSingleCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    // start backward, swap with a random card in front, move up one card
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      // swap trick
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

function person(name, hand) {
  return { name, hand };
}

function rankToPoint(rank) {
  let point = 0;
  switch (rank) {
    case 'A':
      point = 11;
      break;
    case 'J':
    case 'Q':
    case 'K':
      point = 10;
      break;
    default:
      point = parseInt(rank);
  }
  return point;
}
function pointCount(hand) {
  // count the point, hand is the array with 2 objects [{rank, suit},{rank,suit}]
  let point = 0;
  for (const x of hand) {
    point += rankToPoint(x.rank);
  }
  return point;
}

function winner(...point) {
  for (let i = 0; i < point.length; i++) {
    if (point[i] === Math.max(...point)) {
      return `Player${i + 1} is the winner with ${point[i]} points`;
    }
  }
}

// BJ time (it's Black Jack btw):
cardDeck.initializeDeck();
cardDeck.shuffle();
const person1 = person('Player1', cardDeck.drawMultiple(2));
const person2 = person('Player2', cardDeck.drawMultiple(2));
const person3 = person('Player3', cardDeck.drawMultiple(2));
const person4 = person('Player4', cardDeck.drawMultiple(2));
console.log(
  `${person1.name} has ${person1.hand[0].rank}-${person1.hand[0].suit} and ${person1.hand[1].rank}-${person1.hand[1].suit}`
);
console.log(
  `${person2.name} has ${person2.hand[0].rank}-${person2.hand[0].suit} and ${person2.hand[1].rank}-${person2.hand[1].suit}`
);
console.log(
  `${person3.name} has ${person3.hand[0].rank}-${person3.hand[0].suit} and ${person3.hand[1].rank}-${person3.hand[1].suit}`
);
console.log(
  `${person4.name} has ${person4.hand[0].rank}-${person4.hand[0].suit} and ${person4.hand[1].rank}-${person4.hand[1].suit}`
);
console.log(
  winner(
    pointCount(person1.hand),
    pointCount(person2.hand),
    pointCount(person3.hand),
    pointCount(person4.hand)
  )
);
