/* exported titleCase */
const titleCase = (title) => {
  const titleArr = title.toLowerCase().split(' ');
  let phraseArr = titleArr.map((word, index) => {
    if (index === 0) {
      if (isJsApi(word)) {
        word = ConvertJsAPi(word);
      } else {
        word = firstLetterUpperCase(word);
      }
    } else {
      if (isJsApi(word)) {
        word = ConvertJsAPi(word);
      } else if (!isMinorWord(word)) {
        word = wordConvert(word);
      }
    }
    return word;
  });
  let phrase = phraseArr.join(' ');
  // check for ':'
  if (phrase.includes(':')) {
    const indexColon = phrase.indexOf(':');
    phraseArr = phrase.split('');
    phraseArr[indexColon + 2] = phraseArr[indexColon + 2].toUpperCase();
    phrase = phraseArr.join('');
  }
  return phrase;
};

function firstLetterUpperCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function isJsApi(word) {
  return (
    word.toLowerCase() === 'api' ||
    word.toLowerCase() === 'javascript' ||
    word.toLowerCase() === 'api:' ||
    word.toLowerCase() === 'javascript:'
  );
}

function ConvertJsAPi(word) {
  switch (word.toLowerCase()) {
    case 'javascript':
      return 'JavaScript';
    case 'javascript:':
      return 'JavaScript:';
    case 'api':
      return 'API';
    case 'api:':
      return 'API:';
    default:
      return word;
  }
}

function isMinorWord(word) {
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  for (const x of minorWords) {
    if (word === x) {
      return true;
    }
  }
  return false;
}

function wordConvert(word) {
  return word
    .split('-')
    .map((x) => firstLetterUpperCase(x))
    .join('-');
}
