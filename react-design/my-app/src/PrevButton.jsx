import React from 'react';

export default function PrevButon({ onPrev }) {
  return (
    <div>
      <button name="Prev" style={{ backgroundColor: 'white' }} onClick={onPrev}>
        Previous
      </button>
    </div>
  );
}
