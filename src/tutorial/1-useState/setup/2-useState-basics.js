import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("راندوم");
  const handleClick = (name) => {
    if (text === "راندوم") {
      setText("hello");
    } else {
      setText("راندوم");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={() => handleClick("name")}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
