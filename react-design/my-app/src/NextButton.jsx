import React from 'react';

export default function NextButton({ onNext }) {
  return (
    <div>
      <button name="Next" style={{ backgroundColor: 'white' }} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
