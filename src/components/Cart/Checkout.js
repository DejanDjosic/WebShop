import React,{useState,useContext} from "react";
import classes from "./Checkout.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import  Context from "../Store/context";


const initialInput = {
  enteredFullName:"",
  enteredEmail:"",
 enteredAddress:"",
 enteredPostcode:"",
 enteredCountry:"" 
};
const FULLNAME_REGEX=/^([A-Za-z]{3,16})([ ]{1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ADDRESS_REGEX=/^([A-Za-z0-9]{3,16})([ ]{0,1})([A-Za-z0-9]{3,16})([ ]{1})([0-9]{1,})$/;
const POSTCODE_REGEX=/^[0-9]{1,5}$/;
const COUNTRY_REGEX = /^[A-Z]{1}[a-z]{3,16}$/;


const Checkout = () => {

  const [userInput, setUserInput] = useState(initialInput);
  const [validInput, setValidInput] = useState(false);

  const [modalMsg, setModalMsg] = useState("");

  const ctx=useContext(Context);

  const {
    enteredFullName,
    enteredEmail,
   enteredAddress,
   enteredPostcode,
   enteredCountry 
  } = userInput;

  const {
    isValidFullName,
    isValidEmail,
    isValidAddress,
    isValidPostcode,
    isValidCountry,
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

  const resetInputs = () => {
    for (const key in validInput) {
      if (validInput.hasOwnProperty(key)) {
        validInput[key] = false;
      }
    }
    setValidInput(false);
    setUserInput(initialInput);
  };

  const getInputValue = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

const submitHandler=(e)=>
{
  e.preventDefault();
  if (validityArray()) {
    setModalMsg("Purchase successful!");
    resetInputs();
ctx.emptyCart();
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

  const exitError = () => setModalMsg("");
  return (
    <div className={classes.Checkout_wrapper__1i2Bl}>
      <h1 className={classes.Checkout_title__3Dod9}>Checkout</h1>
      <form onSubmit={submitHandler}>
          <Input
          label="Full name"
          input="enteredFullname"
          type="text"
          isValid={isValidFullName}
          value={enteredFullName}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredFullName, FULLNAME_REGEX, "isValidFullName")
          }
          onChange={(e) => getInputValue("enteredFullName", e.target.value)}
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
          label="Address"
          input="enteredAddress"
          type="text"
          isValid={isValidAddress}
          value={enteredAddress}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredAddress, ADDRESS_REGEX, "isValidAddress")
          }
          onChange={(e) => getInputValue("enteredAddress", e.target.value)}
          />
        <Input
          label="Postcode"
          input="enteredPostcode"
          type="text"
          isValid={isValidPostcode}
          value={enteredPostcode}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredPostcode, POSTCODE_REGEX, "isValidPostcode")
          }
          onChange={(e) => getInputValue("enteredPostcode", e.target.value)}
        />
           <Input
          label="Country"
          input="enteredCountry"
          type="text"
          isValid={isValidCountry}
          value={enteredCountry}
          autocomplete="off"
          onBlur={() =>
            validateInput(enteredCountry, COUNTRY_REGEX, "isValidCountry")
          }
          onChange={(e) => getInputValue("enteredCountry", e.target.value)}
        />
        <Button text="Checkout" icon="➵" />
      </form>
      {modalMsg && <Modal message={modalMsg} closeError={exitError} />}
    </div>
  );
};

export default Checkout;
