import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleReset() {
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </>
  );
}
