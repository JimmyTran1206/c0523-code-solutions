import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(isClicked ? false : true);
  };
  return (
    <div className="container">
      <div onClick={handleClick}>
        {isClicked ? (
          <FaToggleOn size="3rem" style={{ color: '#6AA84F' }} />
        ) : (
          <FaToggleOff size="3rem" style={{ color: '#E2E2E2' }} />
        )}{' '}
      </div>
      <div>{isClicked ? <span>ON</span> : <span>OFF</span>}</div>
    </div>
  );
}
