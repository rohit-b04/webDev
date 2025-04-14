import styles from "./UserForm.module.css";
import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userChangeHandler = (event) => {
    //event.preventDefault();
    //console.log(event.target.value === "Enter");
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    props.user.username = enteredUsername;
    props.user.age = enteredAge;
    //console.log(enteredUsername, enteredAge);
    const isEnteredUsernameValid = enteredUsername.trim().length > 0;
    const isEnteredAgeValid = enteredAge.trim().length > 0;
    const isAgeLegal = enteredAge > 0;
    
    //console.log(isEnteredUsernameValid, isEnteredAgeValid);

    const isFormValid = isEnteredUsernameValid && isEnteredAgeValid;
    //setIsValid(isFormValid);
    //console.log(isValid)
    props.validation(isFormValid);
    props.ageError(isAgeLegal);
    if(!isAgeLegal) {
      return;
    }
    if (!isFormValid) return;
    props.addUser(props.user);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <div className={styles.userForm}>
      <form>
        <label>Add User: </label>
        <input
          type="text"
          value={enteredUsername}
          onChange={userChangeHandler}
        
        />
        <label>Age: </label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        <button type="button" onClick={clickHandler}>
          Add
        </button>
      </form>
    </div>
  );
};
export default UserForm;
