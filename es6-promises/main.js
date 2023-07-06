import takeAChance from './take-a-chance.js';
takeAChance('Dave')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
