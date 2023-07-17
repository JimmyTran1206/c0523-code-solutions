const jsonPlaceHolderURL = 'https://jsonplaceholder.typicode.com/users';
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1';
async function fetchAPIData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`fetching error with status ${response.status}`);
    }
    const data = await response.json();
    console.log('data: ', data);
  } catch (err) {
    console.log(err);
  }
}

// Calling fetch in order of execution
async function callingFetchInOrder() {
  await fetchAPIData(jsonPlaceHolderURL);
  await fetchAPIData(pokemonURL);
}

callingFetchInOrder();
