import React from "react";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("You clicked submit.");
  }
  function handleSubmitValue(e, value) {
    e.preventDefault();
    alert("You clicked submit. ".concat(value));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <br />
      <form onSubmit={(e) => handleSubmitValue(e, "123456789")}>
        <button type="submit">Submit</button>
      </form>

      {/* Don't do this */}
      {/* <form onSubmit={handleSubmitValue(e, "123456789")}> */}
    </>
  );
}
