import React, { useEffect, useRef, useState } from "react";
import classes from "./Register.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const initialInput = {
  enteredFirstName: "",
  enteredLastName: "",
  enteredUserName: "",
  enteredEmail: "",
  enteredPassword: "",
  confrimedPassword: "",
};

const NAME_REGEX = /^[A-Z]{1}[a-z]{2,23}$/;
const USERNAME_REGEX = /^[a-zA-Z0-9._]+$/;
const PWD_REGEX = /^[A-Za-z]*[A-Za-z0-9]*[\w!@#$%^&*()-+=~]{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Register = () => {
  const [userInput, setUserInput] = useState(initialInput);
  const [validInput, setValidInput] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState("");

  const {
    enteredFirstName,
    enteredLastName,
    enteredUserName,
    enteredEmail,
    enteredPassword,
    confrimedPassword,
  } = userInput;

  const {
    isValidFirstName,
    isValidLastName,
    isValidEmail,
    isValidUsername,
    isValidPassword,
    isValidConfrimPassword,
  } = validInput;

  const validityArray = () => {
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidUsername &&
      isValidPassword &&
      isValidConfrimPassword === true
    )
      return true;
    else return false;
  };

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confrimedPasswordInputRef = useRef();

  useEffect(() => {
    firstNameInputRef.current.focus();
  }, []);

  const validateInput = (input, regex, validity) => {
    const result = regex.test(input);
    setValidInput((prevState) => {
      return { ...prevState, [validity]: result };
    });
  };


  const validatePasswords = () => {
    const match = enteredPassword === confrimedPassword;
    setValidInput((prevState) => {
      return { ...prevState, isValidConfrimPassword: match };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(validInput);
    if (validityArray()) console.log("All inputs are correct");
    else {
      console.log("Not all inputs are correct!");
    }
  };

  const getInputValue = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

  return (
    <div className={classes.Register_wrapper__3ssER}>
      <h1 className={classes.Register_title__1dwTC}>Register</h1>
      <form onSubmit={submitHandler}>
        <Input
          ref={firstNameInputRef}
          label="First name"
          input="enteredFirstName"
          type="text"
          isValid={isValidFirstName}
          value={enteredFirstName}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredFirstName, NAME_REGEX, "isValidFirstName")
          }
          onChange={(e) => getInputValue("enteredFirstName", e.target.value)}
        />
        <Input
          ref={lastNameInputRef}
          label="Last name"
          input="enteredLastName"
          type="text"
          isValid={isValidLastName}
          value={enteredLastName}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredLastName, NAME_REGEX, "isValidLastName")
          }
          onChange={(e) => getInputValue("enteredLastName", e.target.value)}
        />
        <Input
          ref={emailInputRef}
          label="E-mail"
          input="enteredEmail"
          type="text"
          isValid={isValidEmail}
          value={enteredEmail}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredEmail, EMAIL_REGEX, "isValidEmail")
          }
          onChange={(e) => getInputValue("enteredEmail", e.target.value)}
        />
        <Input
          ref={userNameInputRef}
          label="Username"
          input="enteredUserName"
          type="text"
          isValid={isValidUsername}
          value={enteredUserName}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredUserName, USERNAME_REGEX, "isValidUsername")
          }
          onChange={(e) => getInputValue("enteredUserName", e.target.value)}
        />
        <Input
          ref={passwordInputRef}
          label="Password"
          input="enteredPassword"
          type="password"
          isValid={isValidPassword}
          value={enteredPassword}
          onBlur={() =>
            validateInput(enteredPassword, PWD_REGEX, "isValidPassword")
          }
          onChange={(e) => getInputValue("enteredPassword", e.target.value)}
        />
        <Input
          ref={confrimedPasswordInputRef}
          label="Confrim Password"
          input="confrimedPassword"
          type="password"
          isValid={isValidConfrimPassword}
          value={confrimedPassword}
          onBlur={validatePasswords}
          onChange={(e) => getInputValue("confrimedPassword", e.target.value)}
        />

        <Button text="Register" icon="arrow" />
      </form>
    </div>
  );
};

export default Register;
