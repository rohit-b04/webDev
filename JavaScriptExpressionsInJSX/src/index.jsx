import React from "react";
import reactdom from "react-dom";

const yourname = "Rohit";
let lname = "Bargal";
const d = new Date();

reactdom.render(
  <div>
    <p> Created by {`${yourname} ${lname}`} </p>
    <p> Copyright {d.getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
