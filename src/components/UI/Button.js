import React from "react";
import classes from './Button.module.css';
const Button = (props) => {
    let icon;
    if(props.icon==='arrow')
    icon="➵";
else
icon=props.icon;


  return (
    <button onClick={props.function} className={classes.Button_btn__1N_e1} type="submit" disabled={props.isDisabled}>
      {props.text}<span>{icon}</span>
    </button>
  );
};

export default Button;
