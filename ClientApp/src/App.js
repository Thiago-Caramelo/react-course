import React from "react";

export default function App() {
  const singer = "Jimmy Cliff";
  const photo_width = 100;

  const photo = (
    <img
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRONhv9WOZOXCOKHhgoObhmN6Ieh0hshF586ierCLwjZQhezDuB"
      width={photo_width}
    />
  );

  const element = (
    <>
      <h1>♫ I can see clearly now the rain is gone♫</h1>
      <h3>{singer}</h3>
      {photo}
    </>
  );
  return element;
}
