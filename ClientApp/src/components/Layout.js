import React from "react";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="container">{props.children}</div>
      {props.footer}
    </>
  );
}
