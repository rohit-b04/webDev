import styles from "./InputData.module.css";
import UserForm from "./UserForm";
import ErrorModal from "../ErrorModal/ErrorModal";
import React, { useState } from "react";
import Card from "../UI/Card";


const InputData = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({});

  const errorHandler = (validForm, validAge) => {
    setIsValid(validForm && validAge);
    if (!validForm) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (!validAge) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (0-120)",
      });
    }
  };
  const addUserHandler = inputUser => props.addUser(inputUser);

  const triggerHandler = clicked => setIsValid(clicked);

  return (
    <Card className={styles.inputs}>
      <UserForm
        user={props.userDetails}
        error={errorHandler}
        addUser={addUserHandler}
      />
      {!isValid && <ErrorModal triggered={triggerHandler} errorData={error} />}
    </Card>
  );
};

export default InputData;
