import React, { useEffect, useState } from "react";

export default function Footer() {
  const [dateTime, setDateTime] = useState("Loading...");

  useEffect(() => {
    fetch("/datetime")
      .then((resp) => resp.json())
      .then(setDateTime);
    return () => {
      // clean-up
    };
  }, []);

  return <h6>All rights reserved {dateTime}</h6>;
}
