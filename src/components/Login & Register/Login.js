import React, { useState, useEffect, useRef, useContext } from "react";
import classes from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import LoginContext from "../Store/LoginContext";
import Modal from "../UI/Modal";

const USERNAME_REGEX = /^[a-zA-Z0-9._]{3,}$/;
const PWD_REGEX = /^[A-Za-z]*[A-Za-z0-9]*[\w!@#$%^&*()-+=~]{8,}$/;

const Login = () => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);
 
  const [formIsValid, setFormIsValid] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const Lctx = useContext(LoginContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const usernameChangeHandler = (event) => {
    const enteredUsername = event.target.value;
    setEnteredUserName(enteredUsername);
    setUsernameIsValid(USERNAME_REGEX.test(enteredUsername));
  };

  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setEnteredPassword(enteredPassword);
    setPasswordIsValid(PWD_REGEX.test(enteredPassword));
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(USERNAME_REGEX.test(enteredUsername));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(PWD_REGEX.test(enteredPassword));
  };

  const setErrorMsg = (message, focusRef) => {
    setModalMsg(message);
    focusRef.current.focus();
  };
  

  const submitHandler = (event) => {
    event.preventDefault();
      if (formIsValid) {
      setModalMsg("Login successful!");
      Lctx.onLogin(enteredUsername, enteredPassword);
    } else if (!usernameIsValid && !passwordIsValid) {
      setErrorMsg("Wrong entered fields: Username & Password", usernameInputRef);
    } else if (!usernameIsValid) {
      setErrorMsg("Wrong entered field: Username (must be longer than 3 characters)", usernameInputRef);
    } else {
      setErrorMsg("Wrong entered field: Password (must be longer than 8 characters)", passwordInputRef);
    }
  };

  const exitError = () => setModalMsg("");

  return (
    <div className={classes.Login_wrapper__288IT}>
      <h1 className={classes.Login_title__1jen8}>Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          ref={usernameInputRef}
          label="Username"
          input="username"
          type="username"
          isValid={usernameIsValid}
          value={enteredUsername}
          onChange={usernameChangeHandler}
          onBlur={validateUsernameHandler}
        />

        <Input
          ref={passwordInputRef}
          label="Password"
          input="password"
          type="password"
          isValid={passwordIsValid}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button text="Login" icon="arrow" />
        </div>
      </form>
      {modalMsg && <Modal message={modalMsg} closeError={exitError} />}
    </div>
  );
};

export default Login;
