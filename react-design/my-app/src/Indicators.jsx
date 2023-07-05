import React from 'react';

export default function Indicators({ length, currentIndex, onIndicator }) {
  const buttonList = [];
  // button initializer
  for (let i = 0; i < length; i++) {
    if (i === Number(currentIndex)) {
      const element = (
        <button
          key={i}
          name="indicator"
          onClick={onIndicator}
          value={i}
          style={{ backgroundColor: 'lightblue' }}>
          {i}
        </button>
      );
      buttonList.push(element);
    } else {
      const element = (
        <button
          key={i}
          name="indicator"
          onClick={onIndicator}
          value={i}
          style={{ backgroundColor: 'white' }}>
          {i}
        </button>
      );
      buttonList.push(element);
    }
  }
  return <div>{buttonList}</div>;
}
