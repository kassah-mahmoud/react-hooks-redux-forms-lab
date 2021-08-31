import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleOnChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        name
        <input
          name="name"
          id="name"
          value={name}
          type="text"
          onChange={handleOnChange}
        />
      </label>

      <button type="submit">add band</button>
    </form>
  );
}

export default BandInput;
