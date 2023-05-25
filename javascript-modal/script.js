const $btnModal = document.querySelector('#btn-modal');
const $btnNo = document.querySelector('#btn-no');
const $survey = document.querySelector('.survey');
const $container = document.querySelector('.container');
$btnModal.addEventListener('click', (event) => {
  $survey.classList.remove('none');
  $container.classList.add('page-shadow');
});

$btnNo.addEventListener('click', (event) => {
  $survey.classList.add('none');
  $container.classList.remove('page-shadow');
});
