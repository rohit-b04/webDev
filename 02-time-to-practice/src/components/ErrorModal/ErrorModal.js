import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Error = (props) => {
  return (
    <Card className={`${styles.invalid}`}>
      <header>{props.errorData.title}</header>
      <footer>
        <h2>{props.errorData.message}</h2>
      </footer>
      <Button type="button" onClick={() => props.triggered(true)} > Okay </Button>
    </Card>
  );
};

const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <Error errorData={props.errorData} triggered={props.triggered} />,
    document.getElementById("error-model")
  );
};

export default ErrorModal;
