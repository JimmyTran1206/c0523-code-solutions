import takeAChance from './take-a-chance.js';
console.log(takeAChance('Dave'));
takeAChance('Dave')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
