import { useState } from "react";

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(inputValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    hasError,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
