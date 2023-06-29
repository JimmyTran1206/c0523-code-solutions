import React, { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(isClicked ? false : true);
  };

  return (
    <button
      style={{ backgroundColor: isClicked ? 'white' : color }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
