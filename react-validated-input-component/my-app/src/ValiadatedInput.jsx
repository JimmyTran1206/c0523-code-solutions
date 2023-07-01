import React, { useState } from 'react';
export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const minLength = 8;
  let text;
  let insertSign;

  if (password.length === 0) {
    text = 'Password is required';
    insertSign = '❌';
  } else if (password.length < minLength) {
    text = 'Password must be 8 characters long';
    insertSign = '❌';
  } else {
    text = '';
    insertSign = '✔️';
  }
  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          name="password-box"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span>{insertSign}</span>
      </label>
      <div style={{ color: 'red' }}>{text}</div>
    </div>
  );
}
