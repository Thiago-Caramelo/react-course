import React from "react";

export default function Expensive(props) {
  props.onSubmit({ date: new Date() });
  return (
    <ul>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
