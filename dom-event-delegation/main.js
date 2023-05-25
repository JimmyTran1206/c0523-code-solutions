const $taskList = document.querySelector('.task-list');

// event handler function
function clickHandler(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log(
      'closest .task-list-item: ',
      event.target.closest('.task-list-item')
    );
    event.target.closest('.task-list-item').remove();
  }
}

$taskList.addEventListener('click', clickHandler);
