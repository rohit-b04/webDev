import styles from "./InputData.module.css";
import UserForm from "./UserForm";
import Validator from "../Validator/Validator";
import React, { useState } from "react";

const InputData = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [ageLegal, setAgeLegal] = useState(true);

  const validationHandler = (valid) => {
    setIsValid(valid);
    //console.log(isValid);
    //console.log(valid)
  };
  const addUserHandler = (inputUser) => {
    //console.log(inputUser);
    props.displayUser(inputUser);
  };
  const triggerHandler = (clicked) => {
    setIsValid(clicked);
    setAgeLegal(clicked);
  };

  const ageErrorHandler = (ageNotLegal) => {
    setAgeLegal(ageNotLegal);
    //console.log(ageNotLegal)
  };

  return (
    <div className={styles.inputs}>
      <UserForm
        user={props.userDetails}
        validation={validationHandler}
        addUser={addUserHandler}
        ageError={ageErrorHandler}
      />
      <Validator
        validity={isValid}
        triggered={triggerHandler}
        ageValid={!ageLegal}
      />
    </div>
  );
};

export default InputData;
