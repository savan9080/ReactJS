import { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const removeError = () => {
    setError(null);
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
    // console.log(enteredUserName);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please eneter non-empty Values",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please eneter valid age (age>0)",
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    setError(null);
    props.onAddUser({
      name: enteredUserName,
      age: enteredAge,
      key: Math.random().toString(),
    });

    setEnteredUserName("");
    setEnteredAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          removeError={removeError}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form method="POST" action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={userNameHandler}
            value={enteredUserName}
          ></input>

          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="userAge"
            name="userAge"
            onChange={ageHandler}
            value={enteredAge}
          ></input>

          <Button type="submit" onClick={addUserHandler}>
            Add Me!
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
