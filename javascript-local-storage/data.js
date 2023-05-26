/* exported todos */

let todos = [];

window.addEventListener('beforeunload', (event) => {
  const todosJSON = JSON.stringify(todos);
  window.localStorage.setItem('javascript-local-storage', todosJSON);
});

const previousTodosJSON = window.localStorage.getItem(
  'javascript-local-storage'
);
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
