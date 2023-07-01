import React from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import Indicators from './Indicators';
import PrevButton from './PrevButton';
export default function RoratingBanner({ itemList }) {
  return (
    <div>
      <Banner item={itemList[0]} />
      <PrevButton />
      <Indicators length={itemList.length} />
      <NextButton />
    </div>
  );
}
