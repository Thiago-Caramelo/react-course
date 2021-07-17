import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const albums = ["Hard Road", "Another Cycle", "Goodbye Yesterday"];

  function formatName(singer = "") {
    return singer.toUpperCase();
  }

  const albumItems = albums.map((album) => (
    <li>
      <h2>{album}</h2>
    </li>
  ));

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone♫</h1>
      <h3>{formatName(singer)}</h3>
      <h2>Albums</h2>
      <ul>{albumItems}</ul>
    </>
  );
  return element;
}
