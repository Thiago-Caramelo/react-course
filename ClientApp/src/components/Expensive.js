import React from "react";

export default function Expensive(props) {
  return (
    <ul>
      {props.list.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}
