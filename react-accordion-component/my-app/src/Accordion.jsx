import React, { useState } from 'react';

export default function Accordion({ content }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const element = content.map((item) => (
    <Panel
      item={item}
      isActive={activeIndex === item.id}
      onShow={() => setActiveIndex(activeIndex ? null : item.id)}
    />
  ));
  return <div>{element}</div>;
}

function Panel({ item, isActive, onShow }) {
  return (
    <div>
      <h3
        className="title"
        style={{
          width: '40rem',
          padding: '0.5rem',
          border: '2px solid black',
          backgroundColor: 'grey',
        }}
        id={item.id}
        onClick={onShow}>
        {item.title}
      </h3>

      {isActive && (
        <p
          style={{
            width: '40rem',
            padding: '0.5rem',
            border: '2px solid black',
            backgroundColor: 'grey',
          }}>
          {item.text}
        </p>
      )}
    </div>
  );
}
