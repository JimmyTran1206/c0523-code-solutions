function handleClick(event) {
  console.log('\n');
  console.log('button clicked');
  console.log('The event is: ', event);
  console.log('The target is: ', event.target);
}
const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('\n');
  console.log('button hovered');
  console.log('The event is: ', event);
  console.log('The target is: ', event.target);
}
const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('\n');
  console.log('button double-clicked');
  console.log('The event is: ', event);
  console.log('The target is: ', event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
