import React from "react";
import classes from './Input.module.css';
const Input = (props) => {

  const inputClasses = `${classes.control} ${
    props.isValid === false ? classes.invalid : ""
  }`;

  
  return (
    <div className={classes.Input_wrapper}>
   <div className={classes.control}>
        <label htmlFor={props.input} className={classes.control}>
          {props.label}
        </label>
        <input
          className={inputClasses}
          onChange={props.onChange}
          name={props.input}
          id={props.input}
          type={props.type}
          onBlur={props.onBlur}
          value={props.value}
          required
        />
     </div>
    </div>
  );
};

export default Input;
