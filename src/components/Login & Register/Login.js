import React, { useState, useEffect, useRef, useContext } from "react";
import classes from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import LoginContext from "../Store/LoginContext";

const Login = () => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);

  const [formIsValid, setFormIsValid] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const Lctx = useContext(LoginContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(enteredUsername && enteredPassword);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredUsername, enteredPassword]);

  const usernameChangeHandler = (event) => {
    const enteredUsername = event.target.value;
    setEnteredUserName(enteredUsername);
    setUsernameIsValid(enteredUsername.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setEnteredPassword(enteredPassword);
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      Lctx.onLogin(enteredUsername, enteredPassword);
    } else if (!usernameIsValid) {
      usernameInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

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
          <Button text="Login" icon="arrow" disabled={!formIsValid} />
        </div>
      </form>
    </div>
  );
};

export default Login;
