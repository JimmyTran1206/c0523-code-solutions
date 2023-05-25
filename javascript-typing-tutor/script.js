// Input string:
const string = 'grumpy wizards make toxic brew';

// Append input string into html
const $text = document.querySelector('.text');
const characters = []; // store the <span>'s
function textAppend(str) {
  str.split('').forEach((char) => {
    const $span = document.createElement('span');
    $span.innerText = char;
    $text.appendChild($span);
    characters.push($span);
  });
}

textAppend(string);

let i = 0;
characters[0].className = 'default-border';
document.addEventListener('keydown', (event) => {
  const inputChar = event.key;

  if (inputChar === characters[i].outerText) {
    characters[i].classList.remove('default-border');
    characters[i].classList.remove('wrong-word');
    characters[i].classList.add('right-word');
    if (i < characters.length - 1) {
      characters[i + 1].classList.add('default-border');
      i++;
    } else {
      alert('Good Job!');
    }
  } else {
    characters[i].classList.remove('default-border');
    characters[i].classList.add('wrong-word');
  }
});
