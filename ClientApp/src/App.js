import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const albums = ["Hard Road", "Another Cycle", "Goodbye Yesterday"];

  function formatName(singer = "") {
    return singer.toUpperCase();
  }

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone by {formatName(singer)}♫</h1>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li>
            <h2>{album}</h2>
          </li>
        ))}
      </ul>
    </>
  );
  return element;
}
