import React, { useState, Fragment } from "react";
import InputData from "./components/Users/InputData";
import DisplayUsers from "./components/Users/DisplayUsers";
import Wrapper from "./components/Helpers/Wrapper";


function App() {
  const [userDetails, setUserDetails] = useState([]);

  const addUserHandler = (userData) => {
    setUserDetails((prevState) => {
      return [
        ...prevState,
        {
          username: userData.username,
          age: userData.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <InputData addUser={addUserHandler} userDetails={userDetails} />
        {userDetails.map((userDetail) => (
          <DisplayUsers
            username={userDetail.username}
            age={userDetail.age}
            key={userDetail.id}
          />
        ))}
    </Fragment>
  );
}

export default App;
