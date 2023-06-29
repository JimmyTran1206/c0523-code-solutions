import React, { useState } from 'react';

export default function Counter({ initialNum }) {
  const [count, setCount] = useState(Number(initialNum));
  const handleCount = (event) => {
    event.target.name === 'btn-down'
      ? setCount(count - 1)
      : setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount} name="btn-down">
        Down
      </button>
      <span>{count}</span>
      <button onClick={handleCount} name="btn-up">
        Up
      </button>
    </div>
  );
}
