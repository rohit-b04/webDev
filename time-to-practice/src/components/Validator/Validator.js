import styles from "./Validator.module.css";
import React, { useState } from "react";

const Validator = (props) => {
  //console.log(props.validity);
  //const [styling, setStyling] = useState(styles.invalid);
  const buttonClickHandler = (event) => {
    props.triggered(true);
    //console.log(event.target.parentNode)
  };
  const displayCard = (
    <div className={`${styles.invalid}`}>
      <h1>Enter valid inputs</h1>
      <button onClick={buttonClickHandler}>Okay</button>
    </div>
  );
  const ageError = (
    <div className={`${styles.invalid}`}>
      <h1>Invalid age</h1>
      <button onClick={buttonClickHandler}>Okay</button>
    </div>
  );
  //console.log(props.validity);
  return (
    <div>
      {!props.validity ? displayCard : props.ageValid ? ageError : null}
    </div>
  );
};

export default Validator;
