import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const showSinger = true;
  const isLoading = true;

  if (isLoading) return <h2>...Loading</h2>;

  // const component = "componentName";

  // switch (component) {
  //   case "componentName":
  //     return <div>Test</div>;
  //   default:
  //     return <div>Default</div>;
  // }

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone♫</h1>
      <h3>{showSinger && singer}</h3>
    </>
  );
  return element;
}
