let clickCount = 0;
const $button = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
$button.addEventListener('click', clickEventHandler);

function clickEventHandler(event) {
  $clickCount.textContent = `Clicks: ${++clickCount}`;
  if (clickCount < 4 && clickCount >= 0) {
    $button.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $button.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $button.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $button.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}
