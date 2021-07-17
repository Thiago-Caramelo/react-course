import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const showSinger = true;
  const isLoading = true;

  if (isLoading) return <h2>...Loading</h2>;

  let elementVariable;
  switch (singer) {
    case "Jimmy Cliff":
      elementVariable = <div>:)</div>;
      break;
    default:
      elementVariable = <div>:(</div>;
      break;
  }

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone♫</h1>
      <h3>
        {showSinger && singer} {elementVariable}
      </h3>
    </>
  );
  return element;

  //return null;
  //return <></>;
}
