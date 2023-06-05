const $h1 = document.querySelector('h1.countdown-display');

const countdown = () => {
  let num = parseInt($h1.innerText);
  if (num > 1) {
    num--;
    $h1.innerText = num;
  } else {
    $h1.innerText = '~Earth Beeeelooowww Us~';
    window.clearInterval(intervalId);
  }
};

const intervalId = window.setInterval(countdown, 1000);
