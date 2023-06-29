import React from 'react';
export default function CustomButton(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={() => props.onCustomClick(`${props.color} ${props.text}`)}>
      {props.text}
    </button>
  );
}
