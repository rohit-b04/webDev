import React from "react";
import ReactDOM from "react-dom";

const headerStyle = {
  color: "red",
};

const customStyle = {
  border: "2px black solid",
  width: "200px",
  padding: "10px",
  textAlign: "center",
};

headerStyle.color = "maroon";

ReactDOM.render(
  <div style={customStyle}>
    <h1 style={headerStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
