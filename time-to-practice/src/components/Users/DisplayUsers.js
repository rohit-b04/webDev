import styles from "./DisplayUsers.module.css";

const DisplayUsers = (props) => {
  return props.userData.map((user) => (
    <ul className={styles.userCard} key={user.id}>
      <label>Username: </label>
      <span>{user.username}</span>
      <label> Age: </label>
      <span>{user.age}</span>
    </ul>
  ));
};

export default DisplayUsers;
