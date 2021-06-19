import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    inputValue: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.trim().split("@").length === 2 &&
      value.trim().split("@")[1].split(".").length === 2
  );

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    resetNameInput();

    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={enteredName}
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must be valid & non-empty!</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid & non-empty!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
