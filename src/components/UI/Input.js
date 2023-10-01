import React, { useRef, useImperativeHandle } from "react";
import classes from './Input.module.css';
const Input = React.forwardRef((props, ref) => {

  const inputClasses = `${classes.control} ${
    props.isValid === false ? classes.invalid : ""
  }`;
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div className={classes.Input_wrapper}>
   <div className={classes.control}>
        <label htmlFor={props.input} className={classes.control}>
          {props.label}
        </label>
        <input
          className={inputClasses}
          onChange={props.onChange}
          ref={inputRef}
          name={props.input}
          id={props.input}
          type={props.type}
          onBlur={props.onBlur}
          required
        />
     </div>
    </div>
  );
});

export default Input;
