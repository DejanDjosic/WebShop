import React from "react";
import classes from './Button.module.css';
const Button = (props) => {
    let icon;
    if(props.icon==='arrow')
    icon="➵";
else
icon=props.icon;
  return (
    <button className={classes.Button_btn__1N_e1} type="submit">
      {props.text}<span>{icon}</span>
    </button>
  );
};

export default Button;
