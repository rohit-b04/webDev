import React, { useState } from "react";
import InputData from "./components/Inputs/InputData";
import DisplayUsers from "./components/UI/DisplayUsers";

function App() {
  const [userDetails, setUserDetails] = useState([
    {
      username: "NoName",
      age: "1",
      id: Math.random().toString(),
    },
  ]);

  const displayUserHandler = (userData) => {
    //console.log(userData);
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
    //console.log(userDetails.map((userDetail)=>{return userDetail}));
  };
  //console.log(userDetails);
  //const displayData = userDetails.map();
  //console.log(displayData);

  return (
    <div>
      <InputData displayUser={displayUserHandler} userDetails={userDetails} />
      <div>
        {userDetails.map((userDetail) => (
          //<h1>{userDetail.username}</h1>
          //console.log(userDetail.username);
          <DisplayUsers
            username={userDetail.username}
            age={userDetail.age}
            key={userDetail.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
