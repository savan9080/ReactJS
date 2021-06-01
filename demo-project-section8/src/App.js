import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UsersList";

function App() {
  const [listOfUser, addToListOfUser] = useState([]);
  const addNewUser = (props) => {
    addToListOfUser((prev) => {
      return [...prev, props];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addNewUser}></AddUser>
      <UserList users={listOfUser}></UserList>
    </div>
  );
}

export default App;
