import styles from "./UserForm.module.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userChangeHandler = (event) => setEnteredUsername(event.target.value);

  const ageChangeHandler = (event) => setEnteredAge(event.target.value);

  const clickHandler = (event) => {
    event.preventDefault();
    props.user.username = enteredUsername;
    props.user.age = enteredAge;

    const isEnteredUsernameValid = enteredUsername.trim().length > 0;
    const isEnteredAgeValid = enteredAge.trim().length > 0;
    const isAgeLegal = enteredAge > 0 && enteredAge < 120;
    const isFormValid = isEnteredUsernameValid && isEnteredAgeValid;

    props.error(isFormValid, isAgeLegal);

    if (!isFormValid || !isAgeLegal) return;

    props.addUser(props.user);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <Card className={styles.userForm}>
      <form>
        <label>Add User: </label>
        <input
          type="text"
          value={enteredUsername}
          onChange={userChangeHandler}
        />
        <label>Age: </label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type = "submit" className={styles.button} onClick={clickHandler} name = "Add"/>
      </form>
    </Card>
  );
};
export default UserForm;
