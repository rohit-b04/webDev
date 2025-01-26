//Create a react app from scratch.
import React from "react";
import Reactdom from "react-dom";
//It should display a h1 heading.
Reactdom.render(
  <div>
    <h1>Ulist</h1>
    <ul>
      <li>list1</li>
      <li>list2</li>
      <li>list3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
