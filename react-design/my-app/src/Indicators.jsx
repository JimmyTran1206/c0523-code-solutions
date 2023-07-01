import React from 'react';

export default function Indicators({ length }) {
  const buttonList = [];
  // button initializer
  for (let i = 0; i < length; i++) {
    const element = (
      <button key={i} style={{ backgroundColor: 'white' }}>
        {i}
      </button>
    );
    buttonList.push(element);
  }
  return <div>{buttonList}</div>;
}
