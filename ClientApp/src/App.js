import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const albums = [
    { id: 1, name: "Hard Road" },
    { id: 2, name: "Another Cycle" },
    { id: 3, name: "Goodbye Yesterday" },
  ];

  function formatName(singer = "") {
    return singer.toUpperCase();
  }

  const albumItems = albums.map((album) => (
    <li key={album.id}>
      <h2>{album.name}</h2>
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
