import styles from "./DisplayUsers.module.css";

const DisplayUsers = (props) => {
  //console.log(props.username);
  return (
    <div className={styles.userCard}>
      <label>Username: </label>
      <span>{props.username}</span>
      <label> Age: </label>
      <span>{props.age}</span>
    </div>
  );
};

export default DisplayUsers;
