import React from 'react';

export default function RegistrationFormUncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };
  return (
    <div>
      <h2>Uncontrolled form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input type="text" name="userName" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
