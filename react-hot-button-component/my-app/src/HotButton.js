import React, { useState } from 'react';

export default function HotButton() {
  const [clickCount, setClickCount] = useState(0);
  const [color, setColor] = useState('#351C75');
  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount < 3) {
      setColor('#351C75');
    } else if (clickCount < 6) {
      setColor('#674EA7');
    } else if (clickCount < 9) {
      setColor('#E06666');
    } else if (clickCount < 12) {
      setColor('#F6B26A');
    } else if (clickCount < 15) {
      setColor('#FFFF00');
    } else if (clickCount >= 17) {
      setColor('#FFF');
    }
  };
  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      Hot Button {clickCount} clicks
    </button>
  );
}
