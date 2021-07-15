import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const isLoading = true;

  if (isLoading) return <h2>...Loading</h2>;

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone by {singer}♫</h1>
    </>
  );
  return element;
}
