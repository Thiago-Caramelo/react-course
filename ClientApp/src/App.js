import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const isLoading = true;

  if (isLoading) return <h2>...Loading</h2>;

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone♫</h1>
      <h3>{singer}</h3>
    </>
  );
  return element;
}
