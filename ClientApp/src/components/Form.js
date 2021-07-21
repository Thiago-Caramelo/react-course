import React, { useState } from "react";

export default function Form() {
  const [attributes, setAttributes] = useState({ name: "", age: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(attributes);
  }

  function handleChange(event) {
    debugger;
    const name = event.target.name;
    const value = event.target.value;
    setAttributes((previousState) => {
      return { ...previousState, [name]: value };
    });
  }

  function handleReset() {
    setAttributes({ name: "", age: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={attributes.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={attributes.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </>
  );
}
