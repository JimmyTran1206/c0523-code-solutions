const $container = document.querySelector('.container');
const $bulb = document.querySelector('.bulb');
$bulb.addEventListener('click', (event) => {
  $container.classList.toggle('dark');
  $bulb.classList.toggle('off');
});
