import React from "react";

export default function Photo(props) {
  return <img src={props.src} width={props.photo_width} />;
}
