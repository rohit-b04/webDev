import styles from "./UserForm.module.css";
import React, { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  const nameChangeRef = useRef();
  const ageChangeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameChangeRef.current.value;
    const enteredAge = ageChangeRef.current.value;

    const isEnteredUsernameValid = enteredUsername.trim().length > 0;
    const isEnteredAgeValid = enteredAge.trim().length > 0;
    const isAgeLegal = enteredAge > 0 && enteredAge < 120;
    const isFormValid = isEnteredUsernameValid && isEnteredAgeValid;

    props.error(isFormValid, isAgeLegal);

    if (!isFormValid || !isAgeLegal) return;

    props.addUser({ username: enteredUsername, age: +enteredAge });
    nameChangeRef.current.value = "";
    ageChangeRef.current.value = "";
  };
  return (
    <Card className={styles.userForm}>
      <form onSubmit={submitHandler}>
        <label>Add User: </label>
        <input type="text" ref={nameChangeRef} />
        <label>Age: </label>
        <input type="number" ref={ageChangeRef} />
        <Button type="" className={styles.button}>
          {" "}
          Add{" "}
        </Button>
      </form>
    </Card>
  );
};
export default UserForm;
