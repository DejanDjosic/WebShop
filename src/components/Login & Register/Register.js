import React, {useState } from "react";
import classes from "./Register.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}


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
const PWD_REGEX = /^[A-Za-z]*[A-Za-z0-9]*[\w!@#$%^&*()-+=~]{8,54}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Register = () => {
  const [userInput, setUserInput] = useState(initialInput);
  const [validInput, setValidInput] = useState(false);

  const [modalMsg, setModalMsg] = useState("");

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
    for (const key in validInput) {
      if (validInput.hasOwnProperty(key)) {
        if (validInput[key] === false) {
          return false;
        }
      }
    }
    return true;
  };


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
  const resetInputs = () => {
    for (const key in validInput) {
      if (validInput.hasOwnProperty(key)) {
        validInput[key] = false;
      }
    }
    setValidInput(false);
    setUserInput(initialInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validityArray()) {
      setModalMsg("Registration successful!");
      resetInputs();
    } else {
      const falseFields = [];
      for (const key in validInput) {
        if (!validInput[key]) {
          const modifiedKey = key.replace("isValid", "").trim();
          falseFields.push(modifiedKey);
        }
      }
        if (falseFields.length > 1)
          setModalMsg("Wrong entered fields: " + falseFields.join(", "));
        else setModalMsg("Wrong entered field: " + falseFields);
      }
    
   
  };

  const getInputValue = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

  const exitError = () => setModalMsg("");

  return (
    <div className={classes.Register_wrapper__3ssER}>
      <h1 className={classes.Register_title__1dwTC}>Register</h1>
      <form onSubmit={submitHandler}>
        <Input
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
          label="Confrim Password"
          input="confrimedPassword"
          type="password"
          isValid={isValidConfrimPassword}
          value={confrimedPassword}
          onBlur={validatePasswords}
          onChange={(e) => getInputValue("confrimedPassword", e.target.value)}
        />

       {modalMsg?  <CustomLink to="/Login"><Button text="Register" icon="arrow" /></CustomLink> :<div><Button text="Register" icon="arrow" /></div> }  
        
      </form>
      {modalMsg && <Modal message={modalMsg} closeError={exitError} />}
    </div>
  );
};

export default Register;
