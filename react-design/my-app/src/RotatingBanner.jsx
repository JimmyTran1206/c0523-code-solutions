import React, { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import Indicators from './Indicators';
import PrevButton from './PrevButton';
export default function RoratingBanner({ itemList }) {
  const [index, setIndex] = useState(0);
  const handleClick = (event) => {
    if (event.target.name === 'Prev') {
      setIndex((index - 1 + itemList.length) % itemList.length);
      console.log('Prev-current-index:', index);
    } else if (event.target.name === 'Next') {
      setIndex((index + 1) % itemList.length);
      console.log(index);
    } else if (event.target.name === 'indicator') {
      setIndex(event.target.value);
      console.log(index);
    }
  };

  return (
    <div>
      <Banner item={itemList[index]} />
      <PrevButton onPrev={handleClick} />
      <Indicators
        length={itemList.length}
        currentIndex={index}
        onIndicator={handleClick}
      />
      <NextButton onNext={handleClick} />
    </div>
  );
}
