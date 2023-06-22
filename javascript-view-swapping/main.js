const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

function clickHandler(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (const tab of $tab) {
    if (tab.innerText === event.target.innerText) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  }

  const $dataView = event.target.getAttribute('data-view');
  for (const view of $view) {
    if (view.getAttribute('data-view') === $dataView) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  }
}

$tabContainer.addEventListener('click', clickHandler);
