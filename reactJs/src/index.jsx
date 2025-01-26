//Create a react app from scratch.
import React from "react";
import Reactdom from "react-dom";
//It should display a h1 heading.
Reactdom.render(
  <div>
    <h1>My favorite foods</h1>
    <ul>
      <li>Dal baati</li>
      <li>Paav bhaji</li>
      <li>Idli Sambar</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
